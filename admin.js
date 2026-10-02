// ------------------------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Admin Dashboard Controller
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 1. Enforce Authentication
  const user = Auth.requireAuth('admin');
  if (!user) return;

  const adminDisplayName = document.getElementById('adminDisplayName');
  if (adminDisplayName && user.name) {
    adminDisplayName.textContent = user.name;
  }

  // Logout Handler
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to log out of Admin Dashboard?')) {
        Auth.logout();
      }
    });
  }

  // Sidebar Mobile Toggle
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const adminSidebar = document.getElementById('adminSidebar');
  if (sidebarToggleBtn && adminSidebar) {
    sidebarToggleBtn.addEventListener('click', () => {
      adminSidebar.classList.toggle('open');
    });
  }

  // 2. Sidebar Tab Navigation
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const tabContents = document.querySelectorAll('.admin-tab-content');

  window.switchAdminTab = function(targetTabId) {
    navItems.forEach(btn => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === targetTabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    if (adminSidebar) adminSidebar.classList.remove('open');
    refreshActiveTabData(targetTabId);
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      window.switchAdminTab(tabId);
    });
  });

  // Quick Action Buttons on Overview Tab
  document.getElementById('quickAddStudentBtn')?.addEventListener('click', () => {
    window.switchAdminTab('tab-students');
    openAddStudentModal();
  });
  document.getElementById('quickAddNoteBtn')?.addEventListener('click', () => {
    window.switchAdminTab('tab-notes');
    openAddNoteModal();
  });
  document.getElementById('quickAddNoticeBtn')?.addEventListener('click', () => {
    window.switchAdminTab('tab-notices');
  });

  // Initial Load of all Data
  loadAllAdminData();
});

// Refresh functions
function refreshActiveTabData(tabId) {
  if (tabId === 'tab-overview') renderOverviewStats();
  if (tabId === 'tab-students') renderStudentsTable();
  if (tabId === 'tab-notes') renderNotesTable();
  if (tabId === 'tab-notices') renderNoticesManager();
  if (tabId === 'tab-inquiries') renderInquiriesTable();
}

function loadAllAdminData() {
  renderOverviewStats();
  renderStudentsTable();
  renderNotesTable();
  renderNoticesManager();
  renderInquiriesTable();
  setupEventListeners();
}

// -------------------------------------------------------------
// 1. OVERVIEW STATS & PREVIEWS
// -------------------------------------------------------------
function renderOverviewStats() {
  const students = AcademyDB.getStudents();
  const notes = AcademyDB.getNotes();
  const notices = AcademyDB.getNotices();
  const inquiries = AcademyDB.getInquiries();

  document.getElementById('statTotalStudents').textContent = students.length;
  document.getElementById('statTotalNotes').textContent = notes.length;
  document.getElementById('statTotalNotices').textContent = notices.length;
  document.getElementById('statTotalInquiries').textContent = inquiries.filter(i => i.status !== 'Admitted').length;

  // Overview Inquiries Table (Latest 4)
  const tbody = document.getElementById('overviewInquiriesTable');
  if (tbody) {
    const recentInquiries = [...inquiries].reverse().slice(0, 4);
    tbody.innerHTML = recentInquiries.map(inq => `
      <tr>
        <td><strong>${inq.name}</strong><br><small>${inq.phone}</small></td>
        <td><span class="badge ${inq.type.includes('Demo') ? 'badge-demo' : 'badge-regular'}">${inq.type}</span></td>
        <td>${inq.standard}</td>
        <td><span class="badge badge-status-${inq.status.toLowerCase()}">${inq.status}</span></td>
      </tr>
    `).join('');
  }

  // Overview Notices List (Latest 3)
  const noticesContainer = document.getElementById('overviewNoticesList');
  if (noticesContainer) {
    const recentNotices = [...notices].reverse().slice(0, 3);
    noticesContainer.innerHTML = recentNotices.map(n => `
      <div class="overview-notice-item">
        <div class="notice-meta-row">
          <span class="badge badge-category">${n.category}</span>
          <small>📅 ${n.date}</small>
        </div>
        <h4>${n.title}</h4>
        <p>${n.content.substring(0, 120)}...</p>
      </div>
    `).join('');
  }
}

// -------------------------------------------------------------
// 2. STUDENTS MANAGEMENT
// -------------------------------------------------------------
function renderStudentsTable() {
  const students = AcademyDB.getStudents();
  const search = (document.getElementById('studentSearchInput')?.value || '').toLowerCase().trim();
  const standardFilter = document.getElementById('studentStandardFilter')?.value || 'all';
  const feeFilter = document.getElementById('studentFeeFilter')?.value || 'all';

  const tbody = document.getElementById('studentsTableBody');
  if (!tbody) return;

  const filtered = students.filter(s => {
    const matchSearch = !search ||
      s.name.toLowerCase().includes(search) ||
      s.id.toLowerCase().includes(search) ||
      s.phone.includes(search) ||
      (s.parentName && s.parentName.toLowerCase().includes(search));

    const matchStandard = standardFilter === 'all' || s.standard.includes(standardFilter) || s.standard === standardFilter;
    const matchFee = feeFilter === 'all' || s.feeStatus === feeFilter;

    return matchSearch && matchStandard && matchFee;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">No students found matching your filter criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td><code>${s.id}</code></td>
      <td><strong>${s.name}</strong><br><small>PIN: ${s.pin}</small></td>
      <td><span class="badge badge-standard">${s.standard}</span></td>
      <td><a href="tel:${s.phone}">📞 ${s.phone}</a></td>
      <td>${s.parentName || '—'}<br><small>${s.parentPhone ? '📞 ' + s.parentPhone : ''}</small></td>
      <td>
        <button class="btn-toggle-fee ${s.feeStatus === 'Paid' ? 'fee-paid' : 'fee-pending'}" onclick="toggleStudentFee('${s.id}')">
          ${s.feeStatus === 'Paid' ? '✅ Paid' : '⏳ Pending'}
        </button>
      </td>
      <td>
        <div class="action-buttons">
          <button class="btn-sm btn-edit" onclick="openEditStudentModal('${s.id}')" title="Edit Student">✏️</button>
          <button class="btn-sm btn-delete" onclick="deleteStudent('${s.id}')" title="Delete Student">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Student Modal Functions
window.openAddStudentModal = function() {
  document.getElementById('studentModalTitle').textContent = 'Add New Enrolled Student';
  document.getElementById('modalStudentId').value = '';
  document.getElementById('modalStudentName').value = '';
  document.getElementById('modalStudentStandard').value = 'Standard 10 (SSC)';
  document.getElementById('modalStudentPhone').value = '';
  document.getElementById('modalStudentPin').value = 'student123';
  document.getElementById('modalParentName').value = '';
  document.getElementById('modalParentPhone').value = '';
  document.getElementById('modalFeeStatus').value = 'Paid';

  document.getElementById('studentModal').style.display = 'flex';
};

window.openEditStudentModal = function(studentId) {
  const students = AcademyDB.getStudents();
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('studentModalTitle').textContent = 'Edit Student Details';
  document.getElementById('modalStudentId').value = student.id;
  document.getElementById('modalStudentName').value = student.name;
  document.getElementById('modalStudentStandard').value = student.standard;
  document.getElementById('modalStudentPhone').value = student.phone;
  document.getElementById('modalStudentPin').value = student.pin || 'student123';
  document.getElementById('modalParentName').value = student.parentName || '';
  document.getElementById('modalParentPhone').value = student.parentPhone || '';
  document.getElementById('modalFeeStatus').value = student.feeStatus || 'Paid';

  document.getElementById('studentModal').style.display = 'flex';
};

window.closeStudentModal = function() {
  document.getElementById('studentModal').style.display = 'none';
};

window.toggleStudentFee = function(studentId) {
  const students = AcademyDB.getStudents();
  const student = students.find(s => s.id === studentId);
  if (student) {
    student.feeStatus = student.feeStatus === 'Paid' ? 'Pending' : 'Paid';
    AcademyDB.saveStudents(students);
    renderStudentsTable();
    renderOverviewStats();
  }
};

window.deleteStudent = function(studentId) {
  if (confirm(`Are you sure you want to remove student ID ${studentId}? This action cannot be undone.`)) {
    let students = AcademyDB.getStudents();
    students = students.filter(s => s.id !== studentId);
    AcademyDB.saveStudents(students);
    renderStudentsTable();
    renderOverviewStats();
  }
};

// -------------------------------------------------------------
// 3. NOTES MANAGEMENT
// -------------------------------------------------------------
function renderNotesTable() {
  const notes = AcademyDB.getNotes();
  const search = (document.getElementById('noteSearchInput')?.value || '').toLowerCase().trim();
  const standardFilter = document.getElementById('noteStandardFilter')?.value || 'all';

  const tbody = document.getElementById('notesTableBody');
  if (!tbody) return;

  const filtered = notes.filter(n => {
    const matchSearch = !search ||
      n.title.toLowerCase().includes(search) ||
      n.subject.toLowerCase().includes(search) ||
      n.chapter.toLowerCase().includes(search);

    const matchStandard = standardFilter === 'all' || n.standard === standardFilter;
    return matchSearch && matchStandard;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">No study notes found matching criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(n => `
    <tr>
      <td><strong>${n.title}</strong><br><small>${n.description.substring(0, 75)}...</small></td>
      <td><span class="badge badge-standard">${n.standard}</span></td>
      <td>${n.subject}</td>
      <td>${n.chapter}</td>
      <td><code>${n.size || '2.0 MB'}</code></td>
      <td>${n.date || '—'}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-sm btn-edit" onclick="previewNoteContent('${n.id}')" title="Preview Note">👁️</button>
          <button class="btn-sm btn-delete" onclick="deleteNote('${n.id}')" title="Delete Note">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.openAddNoteModal = function() {
  document.getElementById('noteModalForm').reset();
  document.getElementById('noteModal').style.display = 'flex';
};

window.closeNoteModal = function() {
  document.getElementById('noteModal').style.display = 'none';
};

window.deleteNote = function(noteId) {
  if (confirm('Are you sure you want to remove this study note document?')) {
    let notes = AcademyDB.getNotes();
    notes = notes.filter(n => n.id !== noteId);
    AcademyDB.saveNotes(notes);
    renderNotesTable();
    renderOverviewStats();
  }
};

window.previewNoteContent = function(noteId) {
  const notes = AcademyDB.getNotes();
  const note = notes.find(n => n.id === noteId);
  if (note) {
    alert(`📖 Study Note Details:\n\nTitle: ${note.title}\nStandard: ${note.standard}\nSubject: ${note.subject}\nChapter: ${note.chapter}\nSize: ${note.size}\n\nSummary:\n${note.description}`);
  }
};

// -------------------------------------------------------------
// 4. NOTICE BOARD
// -------------------------------------------------------------
function renderNoticesManager() {
  const notices = AcademyDB.getNotices();
  const container = document.getElementById('activeNoticesManagerList');
  if (!container) return;

  if (notices.length === 0) {
    container.innerHTML = `<p class="text-center">No active announcements. Post a notice to notify students.</p>`;
    return;
  }

  container.innerHTML = [...notices].reverse().map(n => `
    <div class="manager-notice-card">
      <div class="notice-meta-row">
        <span class="badge badge-category">${n.category}</span>
        <small>📅 Published: ${n.date}</small>
        <button class="btn-sm btn-delete" onclick="deleteNotice('${n.id}')" title="Delete Notice">🗑️ Delete</button>
      </div>
      <h4>${n.title}</h4>
      <p>${n.content}</p>
    </div>
  `).join('');
}

window.deleteNotice = function(noticeId) {
  if (confirm('Delete this announcement? It will no longer appear on student dashboards.')) {
    let notices = AcademyDB.getNotices();
    notices = notices.filter(n => n.id !== noticeId);
    AcademyDB.saveNotices(notices);
    renderNoticesManager();
    renderOverviewStats();
  }
};

// -------------------------------------------------------------
// 5. INQUIRIES & DEMO LEADS
// -------------------------------------------------------------
function renderInquiriesTable() {
  const inquiries = AcademyDB.getInquiries();
  const tbody = document.getElementById('inquiriesTableBody');
  if (!tbody) return;

  if (inquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center">No student inquiries received yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = [...inquiries].reverse().map(inq => {
    const waUrl = `https://wa.me/91${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)}%2C%20greetings%20from%20Nikhillesh%20Bhatkar%20Learning%20Academy%20regarding%20your%20inquiry.`;
    return `
      <tr>
        <td><small>${inq.date}</small></td>
        <td><strong>${inq.name}</strong></td>
        <td><a href="tel:${inq.phone}">📞 ${inq.phone}</a></td>
        <td><small>${inq.email || '—'}</small></td>
        <td><span class="badge badge-standard">${inq.standard}</span></td>
        <td><span class="badge ${inq.type.includes('Demo') ? 'badge-demo' : 'badge-regular'}">${inq.type}</span></td>
        <td>
          <select class="status-select" onchange="updateInquiryStatus('${inq.id}', this.value)">
            <option value="New" ${inq.status === 'New' ? 'selected' : ''}>New</option>
            <option value="Contacted" ${inq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
            <option value="Admitted" ${inq.status === 'Admitted' ? 'selected' : ''}>Admitted</option>
          </select>
        </td>
        <td>
          <div class="action-buttons">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-wa" title="Chat on WhatsApp">💬 WhatsApp</a>
            <button class="btn-sm btn-delete" onclick="deleteInquiry('${inq.id}')" title="Delete Inquiry">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.updateInquiryStatus = function(inquiryId, newStatus) {
  const inquiries = AcademyDB.getInquiries();
  const inq = inquiries.find(i => i.id === inquiryId);
  if (inq) {
    inq.status = newStatus;
    AcademyDB.saveInquiries(inquiries);
    renderOverviewStats();
  }
};

window.deleteInquiry = function(inquiryId) {
  if (confirm('Delete this inquiry record?')) {
    let inquiries = AcademyDB.getInquiries();
    inquiries = inquiries.filter(i => i.id !== inquiryId);
    AcademyDB.saveInquiries(inquiries);
    renderInquiriesTable();
    renderOverviewStats();
  }
};

// -------------------------------------------------------------
// 6. EVENT LISTENERS & FORM HANDLERS
// -------------------------------------------------------------
function setupEventListeners() {
  // Modal Triggers
  document.getElementById('openAddStudentModalBtn')?.addEventListener('click', openAddStudentModal);
  document.getElementById('openAddNoteModalBtn')?.addEventListener('click', openAddNoteModal);

  // Student Search & Filter
  document.getElementById('studentSearchInput')?.addEventListener('input', renderStudentsTable);
  document.getElementById('studentStandardFilter')?.addEventListener('change', renderStudentsTable);
  document.getElementById('studentFeeFilter')?.addEventListener('change', renderStudentsTable);

  // Notes Search & Filter
  document.getElementById('noteSearchInput')?.addEventListener('input', renderNotesTable);
  document.getElementById('noteStandardFilter')?.addEventListener('change', renderNotesTable);

  // Student Form Submission
  const studentForm = document.getElementById('studentModalForm');
  if (studentForm) {
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentId = document.getElementById('modalStudentId').value;
      const students = AcademyDB.getStudents();

      if (studentId) {
        // Edit existing student
        const student = students.find(s => s.id === studentId);
        if (student) {
          student.name = document.getElementById('modalStudentName').value.trim();
          student.standard = document.getElementById('modalStudentStandard').value;
          student.phone = document.getElementById('modalStudentPhone').value.trim();
          student.pin = document.getElementById('modalStudentPin').value.trim();
          student.parentName = document.getElementById('modalParentName').value.trim();
          student.parentPhone = document.getElementById('modalParentPhone').value.trim();
          student.feeStatus = document.getElementById('modalFeeStatus').value;
        }
      } else {
        // Create new student
        const newId = 'STU-' + (1000 + students.length + 1);
        students.push({
          id: newId,
          name: document.getElementById('modalStudentName').value.trim(),
          standard: document.getElementById('modalStudentStandard').value,
          phone: document.getElementById('modalStudentPhone').value.trim(),
          pin: document.getElementById('modalStudentPin').value.trim() || 'student123',
          parentName: document.getElementById('modalParentName').value.trim(),
          parentPhone: document.getElementById('modalParentPhone').value.trim(),
          feeStatus: document.getElementById('modalFeeStatus').value,
          enrolledDate: new Date().toISOString().split('T')[0],
          role: 'student'
        });
      }

      AcademyDB.saveStudents(students);
      closeStudentModal();
      renderStudentsTable();
      renderOverviewStats();
      alert('✅ Student record saved successfully!');
    });
  }

  // Note Form Submission
  const noteForm = document.getElementById('noteModalForm');
  if (noteForm) {
    noteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const notes = AcademyDB.getNotes();
      const newId = 'NOTE-' + (100 + notes.length + 1);

      notes.push({
        id: newId,
        title: document.getElementById('modalNoteTitle').value.trim(),
        standard: document.getElementById('modalNoteStandard').value,
        subject: document.getElementById('modalNoteSubject').value.trim(),
        chapter: document.getElementById('modalNoteChapter').value.trim(),
        fileType: 'PDF',
        size: document.getElementById('modalNoteSize').value.trim() || '2.0 MB',
        date: new Date().toISOString().split('T')[0],
        downloadUrl: '#',
        description: document.getElementById('modalNoteDesc').value.trim()
      });

      AcademyDB.saveNotes(notes);
      closeNoteModal();
      renderNotesTable();
      renderOverviewStats();
      alert('✅ Study note uploaded & published successfully!');
    });
  }

  // Notice Form Submission
  const noticeForm = document.getElementById('createNoticeForm');
  if (noticeForm) {
    noticeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const notices = AcademyDB.getNotices();
      const newId = 'NOT-' + (100 + notices.length + 1);

      notices.push({
        id: newId,
        title: document.getElementById('noticeTitle').value.trim(),
        category: document.getElementById('noticeCategory').value,
        date: new Date().toISOString().split('T')[0],
        content: document.getElementById('noticeContent').value.trim()
      });

      AcademyDB.saveNotices(notices);
      noticeForm.reset();
      renderNoticesManager();
      renderOverviewStats();
      alert('📢 Announcement broadcasted to student portals successfully!');
    });
  }

  // Change Password Form
  const passForm = document.getElementById('changePasswordForm');
  if (passForm) {
    passForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const current = document.getElementById('currentAdminPass').value;
      const newPass = document.getElementById('newAdminPass').value;
      const confirmPass = document.getElementById('confirmAdminPass').value;

      const admin = AcademyDB.getAdmin();
      if (current !== admin.password) {
        alert('❌ Current password does not match.');
        return;
      }
      if (newPass.length < 6) {
        alert('❌ New password must be at least 6 characters long.');
        return;
      }
      if (newPass !== confirmPass) {
        alert('❌ New password and confirmation do not match.');
        return;
      }

      admin.password = newPass;
      AcademyDB.saveAdmin(admin);
      passForm.reset();
      alert('✅ Admin password updated successfully!');
    });
  }

  // Export CSV Buttons
  document.getElementById('exportStudentsCsvBtn')?.addEventListener('click', () => {
    const students = AcademyDB.getStudents();
    let csv = 'Student ID,Name,Standard,Phone,PIN,Parent Name,Parent Phone,Fee Status,Enrolled Date\n';
    students.forEach(s => {
      csv += `"${s.id}","${s.name}","${s.standard}","${s.phone}","${s.pin}","${s.parentName || ''}","${s.parentPhone || ''}","${s.feeStatus}","${s.enrolledDate || ''}"\n`;
    });
    downloadFile(csv, 'academy_students.csv', 'text/csv');
  });

  document.getElementById('exportInquiriesCsvBtn')?.addEventListener('click', () => {
    const inquiries = AcademyDB.getInquiries();
    let csv = 'Date,Name,Phone,Email,Standard,Type,Status\n';
    inquiries.forEach(i => {
      csv += `"${i.date}","${i.name}","${i.phone}","${i.email || ''}","${i.standard}","${i.type}","${i.status}"\n`;
    });
    downloadFile(csv, 'academy_inquiries_leads.csv', 'text/csv');
  });

  // Backup & Restore
  document.getElementById('downloadBackupBtn')?.addEventListener('click', () => {
    const backupData = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      admin: AcademyDB.getAdmin(),
      students: AcademyDB.getStudents(),
      notes: AcademyDB.getNotes(),
      notices: AcademyDB.getNotices(),
      inquiries: AcademyDB.getInquiries()
    };
    downloadFile(JSON.stringify(backupData, null, 2), `academy_backup_${new Date().toISOString().split('T')[0]}.json`, 'application/json');
  });

  document.getElementById('restoreFileInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.students && data.notes) {
          if (confirm('Are you sure you want to restore data from this file? It will replace current records.')) {
            if (data.admin) AcademyDB.saveAdmin(data.admin);
            if (data.students) AcademyDB.saveStudents(data.students);
            if (data.notes) AcademyDB.saveNotes(data.notes);
            if (data.notices) AcademyDB.saveNotices(data.notices);
            if (data.inquiries) AcademyDB.saveInquiries(data.inquiries);
            loadAllAdminData();
            alert('✅ Academy database restored successfully!');
          }
        } else {
          alert('❌ Invalid backup file format.');
        }
      } catch (err) {
        alert('❌ Error reading JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('resetDefaultDataBtn')?.addEventListener('click', () => {
    if (confirm('⚠️ WARNING: This will reset all students, notes, inquiries, and notices to the initial demo state. Continue?')) {
      AcademyDB.resetToDefaults();
      loadAllAdminData();
      alert('✅ Database reset to initial state.');
    }
  });
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
