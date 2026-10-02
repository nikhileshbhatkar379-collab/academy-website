// ------------------------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Student Portal Controller
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 1. Enforce Student Authentication
  const user = Auth.requireAuth('student');
  if (!user) return;

  // Set Student Profile Details
  document.getElementById('studentDisplayName').textContent = user.name;
  document.getElementById('studentWelcomeName').textContent = `Welcome, ${user.name}! 🎓`;
  document.getElementById('studentStandardBadge').textContent = user.standard;
  document.getElementById('studentIdBadge').textContent = `ID: ${user.id}`;

  const feeBadge = document.getElementById('studentFeeBadge');
  if (feeBadge) {
    // Check latest fee status from DB
    const allStudents = AcademyDB.getStudents();
    const freshStudent = allStudents.find(s => s.id === user.id);
    const currentFeeStatus = freshStudent ? freshStudent.feeStatus : (user.feeStatus || 'Paid');

    feeBadge.textContent = `Fee: ${currentFeeStatus}`;
    feeBadge.className = `badge ${currentFeeStatus === 'Paid' ? 'fee-paid' : 'fee-pending'}`;
  }

  // Logout Handler
  const logoutBtn = document.getElementById('studentLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to log out of Student Portal?')) {
        Auth.logout();
      }
    });
  }

  // 2. Tab Navigation
  const tabBtns = document.querySelectorAll('.student-tab-btn');
  const tabPanels = document.querySelectorAll('.student-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(p => {
        if (p.id === targetId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    });
  });

  // 3. Render Student Notes
  renderStudentNotes(user.standard);

  // 4. Render Student Notices
  renderStudentNotices();
});

function renderStudentNotes(studentStandard) {
  const allNotes = AcademyDB.getNotes();
  const notesGrid = document.getElementById('studentNotesGrid');
  const countBadge = document.getElementById('studentNotesCount');
  if (!notesGrid) return;

  // Filter notes for student's standard, or show related
  let relevantNotes = allNotes.filter(n => {
    if (studentStandard.includes('Special')) {
      return n.standard.includes('Special');
    }
    return n.standard === studentStandard || studentStandard.includes(n.standard);
  });

  // If no exact match, show all notes
  if (relevantNotes.length === 0) {
    relevantNotes = allNotes;
  }

  if (countBadge) {
    countBadge.textContent = `${relevantNotes.length} Document${relevantNotes.length === 1 ? '' : 's'} Available`;
  }

  notesGrid.innerHTML = relevantNotes.map(note => {
    let tagClass = 'math-tag';
    if (note.subject.toLowerCase().includes('science')) tagClass = 'science-tag';
    if (note.subject.toLowerCase().includes('physics')) tagClass = 'physics-tag';
    if (note.subject.toLowerCase().includes('chemistry')) tagClass = 'chemistry-tag';
    if (note.subject.toLowerCase().includes('stock') || note.subject.toLowerCase().includes('financial')) tagClass = 'stock-tag';
    if (note.subject.toLowerCase().includes('ai') || note.subject.toLowerCase().includes('artificial')) tagClass = 'ai-tag';

    return `
      <article class="note-card">
        <div class="note-card-header">
          <span class="note-standard-tag">${note.standard}</span>
          <span class="note-subject-tag ${tagClass}">${note.subject}</span>
        </div>
        <h3 class="note-title">${note.title}</h3>
        <p class="note-chapter">📖 <strong>${note.chapter}</strong></p>
        <p class="note-desc">${note.description}</p>
        <div class="note-meta">
          <span>📄 Format: <strong>${note.fileType || 'PDF'}</strong></span>
          <span>📦 Size: <strong>${note.size || '2.0 MB'}</strong></span>
          <span>📅 ${note.date || '—'}</span>
        </div>
        <div class="note-actions">
          <button class="btn-download-note" onclick="downloadStudentNote('${note.id}', '${encodeURIComponent(note.title)}')">
            ⬇️ Download Note (PDF)
          </button>
          <button class="btn-preview-note" onclick="previewStudentNote('${note.id}')">
            👁️ Full Chapter View
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function renderStudentNotices() {
  const notices = AcademyDB.getNotices();
  const container = document.getElementById('studentNoticesList');
  if (!container) return;

  if (notices.length === 0) {
    container.innerHTML = `<p class="text-center">No current announcements at this time.</p>`;
    return;
  }

  container.innerHTML = [...notices].reverse().map(n => `
    <div class="student-notice-card">
      <div class="notice-meta-row">
        <span class="badge badge-category">${n.category}</span>
        <small>📅 Date: ${n.date}</small>
      </div>
      <h4>${n.title}</h4>
      <p>${n.content}</p>
    </div>
  `).join('');
}

function downloadStudentNote(noteId, title) {
  const decodedTitle = decodeURIComponent(title);
  alert(`📥 Downloading: "${decodedTitle}"\n\nFull study document is ready for offline study.`);
}

function previewStudentNote(noteId) {
  const allNotes = AcademyDB.getNotes();
  const note = allNotes.find(n => n.id === noteId);
  if (note) {
    alert(`📖 Study Note Chapter View:\n\n${note.title}\nStandard: ${note.standard}\nSubject: ${note.subject}\nChapter: ${note.chapter}\n\nKey Concepts & Formula Summary:\n${note.description}\n\n(Tip: You can also download the complete PDF to your device for offline study!)`);
  }
}
