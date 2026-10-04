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

  // Notice badge in topbar
  const noticeBadge = document.getElementById('studentNoticeBadge');
  const notices = AcademyDB.getNotices() || [];
  if (noticeBadge) {
    noticeBadge.textContent = `📢 ${notices.length} Notice${notices.length === 1 ? '' : 's'}`;
    noticeBadge.addEventListener('click', () => {
      const noticeTabBtn = document.querySelector('[data-tab="tab-student-notices"]');
      if (noticeTabBtn) noticeTabBtn.click();
    });
  }

  // 3. Render Student Notes
  renderStudentNotes(user.standard);

  // 4. Render Student Board Papers & PYQs
  renderStudentPapers(user.standard);

  // 5. Render Student Notices
  renderStudentNotices();

  // 6. Render Scorecard & Reports
  renderStudentScorecard(user);

  // 7. Render Attendance
  renderStudentAttendance(user);

  // 8. Render Doubts & Setup Form
  renderStudentDoubts(user);
  setupDoubtForm(user);

  // 9. Render Receipts
  renderStudentReceipts(user);

  // 10. Render Interactive Quiz
  renderStudentQuiz(user);
});

function renderStudentPapers(studentStandard) {
  const allPapers = AcademyDB.getPapers() || [];
  const papersGrid = document.getElementById('studentPapersGrid');
  const countBadge = document.getElementById('studentPapersCount');
  if (!papersGrid) return;

  // Filter papers for student's standard, or show related
  let relevantPapers = allPapers.filter(p => {
    if (studentStandard.includes('Special')) {
      return p.standard.includes('Special');
    }
    return p.standard === studentStandard || studentStandard.includes(p.standard);
  });

  if (relevantPapers.length === 0) {
    relevantPapers = allPapers;
  }

  if (countBadge) {
    countBadge.textContent = `${relevantPapers.length} Question Paper${relevantPapers.length === 1 ? '' : 's'} & Solutions`;
  }

  papersGrid.innerHTML = relevantPapers.map(paper => {
    let tagClass = 'math-tag';
    const subLower = (paper.subject || '').toLowerCase();
    if (subLower.includes('science')) tagClass = 'science-tag';
    if (subLower.includes('physics')) tagClass = 'physics-tag';
    if (subLower.includes('chemistry')) tagClass = 'chemistry-tag';
    if (subLower.includes('financial') || subLower.includes('stock')) tagClass = 'stock-tag';
    if (subLower.includes('artificial') || subLower.includes('ai')) tagClass = 'ai-tag';

    let paperTypeBadge = 'badge-pyq';
    if (paper.type === 'SCERT Question Bank') paperTypeBadge = 'badge-bank';
    if (paper.type === 'Model Paper') paperTypeBadge = 'badge-model';

    return `
      <article class="note-card paper-card">
        <div class="note-card-header">
          <span class="note-standard-tag">${paper.standard}</span>
          <span class="paper-type-pill ${paperTypeBadge}">📝 ${paper.type}</span>
          <span class="note-subject-tag ${tagClass}">${paper.subject}</span>
        </div>
        <h3 class="note-title">${paper.title}</h3>
        <div class="paper-highlight-row">
          <span class="paper-year-pill">📅 ${paper.year || 'Board Paper'}</span>
          <span class="paper-marks-pill">🎯 ${paper.marks || 'Full Marks'}</span>
          <span>⏱️ ${paper.duration || '2-3 Hours'}</span>
        </div>
        <p class="note-desc">${paper.description}</p>
        <div class="note-meta">
          <span>📄 Format: <strong>${paper.fileType || 'PDF'}</strong></span>
          <span>📦 Size: <strong>${paper.size || '2.5 MB'}</strong></span>
          <span>📅 ${paper.date || 'Board Official'}</span>
        </div>
        <div class="note-actions">
          <button class="btn-download-note" onclick="downloadStudentPaper('${paper.id}', '${encodeURIComponent(paper.title)}')">
            ⬇️ Download Paper
          </button>
          <button class="btn-solution-note" onclick="viewStudentSolution('${paper.id}', '${encodeURIComponent(paper.title)}')">
            💡 Solution Key
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function openStudentPaperModal(paperId, mode) {
  const allPapers = AcademyDB.getPapers() || [];
  const paper = allPapers.find(p => p.id === paperId);
  if (!paper) return;

  const modal = document.getElementById('paperModal');
  const titleEl = document.getElementById('paperModalTitle');
  const contentEl = document.getElementById('paperModalContent');
  const waBtn = document.getElementById('btnStudentModalAskDoubt');

  if (!modal || !contentEl) return;

  titleEl.textContent = mode === 'solution'
    ? `💡 Model Solution & Marking Scheme — ${paper.subject}`
    : `📝 ${paper.title}`;

  const waMsg = encodeURIComponent(`Hello Nikhillesh Sir, I am solving this question paper: ${paper.title} and have a doubt.`);
  if (waBtn) waBtn.href = `https://wa.me/918380096494?text=${waMsg}`;

  const blueprintHtml = paper.blueprint ? `
    <div class="paper-blueprint-card">
      <h5>📐 Official Maharashtra Board Examination Blueprint</h5>
      <p style="margin:0;font-size:0.9rem;color:#334155;">${paper.blueprint}</p>
    </div>
  ` : '';

  contentEl.innerHTML = `
    <div class="paper-view-header">
      <h4>${paper.title}</h4>
      <div class="paper-meta-badge-row">
        <span class="paper-meta-badge">${paper.standard}</span>
        <span class="paper-meta-badge">${paper.subject}</span>
        <span class="paper-meta-badge badge-marks">🎯 Total: ${paper.marks}</span>
        <span class="paper-meta-badge badge-time">⏱️ Time: ${paper.duration || '2-3 Hours'}</span>
        <span class="paper-meta-badge">📅 Session: ${paper.year}</span>
        <span class="paper-meta-badge">📄 Format: ${paper.fileType || 'PDF'}</span>
      </div>
      <p style="margin:0.8rem 0 0 0;font-size:0.9rem;color:#475569;">${paper.description}</p>
    </div>

    ${blueprintHtml}

    <div class="paper-section-block">
      <h5><span>📌 Section A — Objective &amp; Fundamental Concepts</span> <span style="font-size:0.8rem;color:#64748b;">(Compulsory)</span></h5>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.1 (A) Choose the correct alternative for each of the multiple-choice questions.</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Concept definitions, formula identification, SI units, and standard mathematical identities.
          <div class="paper-marking-step">Marking Scheme: 1 Mark for each correct option with question sub-alphabet.</div>
        </div>
      </div>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.1 (B) Solve the 1-mark direct questions / scientific true or false / fill in the blanks.</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Short direct single-step calculations or definitions.
          <div class="paper-marking-step">Marking Scheme: 1 Mark per sub-question. Full marks for exact answer.</div>
        </div>
      </div>
    </div>

    <div class="paper-section-block">
      <h5><span>📌 Section B — 2-Mark Short Answer Questions &amp; Activities</span></h5>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.2 (A) Complete the activity by filling in the empty boxes (Any Two).</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Flowchart filling, substitution into standard formulas, theorem step-completions.
          <div class="paper-marking-step">Marking Scheme: 1/2 mark for each correctly filled box (4 boxes = 2 marks).</div>
        </div>
      </div>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.2 (B) Solve short questions / give scientific reasons (Any Four).</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Two distinct scientific points or two steps of algebraic/geometric problem solving.
          <div class="paper-marking-step">Marking Scheme: 1 mark per point/step. Total 2 marks each.</div>
        </div>
      </div>
    </div>

    <div class="paper-section-block">
      <h5><span>📌 Section C — 3-Mark Explanations, Theorems &amp; Numericals</span></h5>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.3 Detailed answers / theorem proofs / numerical problem-solving.</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Full geometric proofs, balanced chemical equations with state symbols, complete physics derivations.
          <div class="paper-marking-step">Marking Scheme: Formula: 1M • Substitution: 1M • Final Answer with correct units: 1M.</div>
        </div>
      </div>
    </div>

    <div class="paper-section-block">
      <h5><span>📌 Section D — 4-Mark Creative &amp; HOTS (Higher Order Thinking Skills)</span></h5>
      <div class="paper-q-item">
        <div class="paper-q-text">Q.4 Solve non-textual creative problems / analyze case studies.</div>
        <div class="paper-sol-box">
          <strong>Key Focus:</strong> Novel question structures testing deep understanding beyond rote memorization.
          <div class="paper-marking-step">Marking Scheme: Logical sequence: 2M • Calculations: 1.5M • Final conclusion: 0.5M.</div>
        </div>
      </div>
    </div>

    <div style="background:#fff8e7;border:1px solid #fde68a;border-radius:6px;padding:0.9rem;font-size:0.88rem;color:#92400e;margin-top:1rem;">
      💡 <strong>Personalized Correction:</strong> As an enrolled student, solve this paper under 2-3 hours timed conditions and submit your answer sheet to Nikhillesh Sir or Amit Sir during regular lecture hours for one-on-one feedback!
    </div>
  `;

  modal.style.display = 'flex';

  if (mode === 'download') {
    setTimeout(() => {
      if (confirm(`📥 Question Paper Ready!\n\nWould you like to open the print dialog to save "${paper.title}" as a PDF or print it?`)) {
        window.print();
      }
    }, 300);
  }
}

function closeStudentPaperModal() {
  const modal = document.getElementById('paperModal');
  if (modal) modal.style.display = 'none';
}

function downloadStudentPaper(paperId, title) {
  openStudentPaperModal(paperId, 'download');
}

function viewStudentSolution(paperId, title) {
  openStudentPaperModal(paperId, 'solution');
}

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

// =========================================================
// 6. Student Scorecard & Performance Tracker
// =========================================================
function renderStudentScorecard(user) {
  const container = document.getElementById('studentScorecardContainer');
  if (!container) return;

  const allTests = AcademyDB.getTestResults() || [];
  const myTests = allTests.filter(t => t.studentId === user.id || t.studentName === user.name);

  if (myTests.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:2.5rem;background:#f8fafc;border:2px dashed #cbd5e1;border-radius:10px;">
        <span style="font-size:2.5rem;">📊</span>
        <h4 style="margin:0.8rem 0 0.4rem;color:#1e293b;">No Graded Test Results Yet</h4>
        <p style="color:#64748b;margin:0;">Weekly Sunday tests and chapter revision test marks will appear here once entered by Nikhillesh Sir or Amit Sir.</p>
      </div>
    `;
    return;
  }

  const totalPossible = myTests.reduce((sum, t) => sum + (Number(t.totalMarks) || 0), 0);
  const totalObtained = myTests.reduce((sum, t) => sum + (Number(t.marksObtained) || 0), 0);
  const aggregatePct = totalPossible > 0 ? ((totalObtained / totalPossible) * 100).toFixed(1) : 0;

  let overallGrade = 'A+';
  if (aggregatePct < 90) overallGrade = 'A';
  if (aggregatePct < 80) overallGrade = 'B+';
  if (aggregatePct < 70) overallGrade = 'B';
  if (aggregatePct < 60) overallGrade = 'C';

  container.innerHTML = `
    <div class="scorecard-summary-grid">
      <div class="score-stat-card">
        <div class="score-stat-icon">📝</div>
        <div class="score-stat-label">Tests Appeared</div>
        <div class="score-stat-val">${myTests.length}</div>
      </div>
      <div class="score-stat-card">
        <div class="score-stat-icon">🎯</div>
        <div class="score-stat-label">Total Marks</div>
        <div class="score-stat-val">${totalObtained} / ${totalPossible}</div>
      </div>
      <div class="score-stat-card">
        <div class="score-stat-icon">📈</div>
        <div class="score-stat-label">Overall Aggregate</div>
        <div class="score-stat-val" style="color:#15803d;">${aggregatePct}%</div>
      </div>
      <div class="score-stat-card">
        <div class="score-stat-icon">🏆</div>
        <div class="score-stat-label">Overall Grade</div>
        <div class="score-stat-val" style="color:#e67e22;">${overallGrade}</div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>Test Title / Chapter</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Marks Obtained</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Teacher Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${myTests.map(t => {
            const pct = t.totalMarks ? ((t.marksObtained / t.totalMarks) * 100).toFixed(0) : '—';
            return `
              <tr>
                <td><strong>${t.testTitle}</strong></td>
                <td><span class="badge badge-standard">${t.subject}</span></td>
                <td>${t.date}</td>
                <td><strong>${t.marksObtained}</strong> / ${t.totalMarks}</td>
                <td><strong>${pct}%</strong></td>
                <td><span class="badge" style="background:#e0f2fe;color:#0369a1;font-weight:bold;">${t.grade || 'A'}</span></td>
                <td><em>${t.remarks || 'Good attempt.'}</em></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Global print report card handler
function printMyReportCard() {
  const user = Auth.getCurrentUser();
  if (!user) return;

  const allTests = AcademyDB.getTestResults() || [];
  const myTests = allTests.filter(t => t.studentId === user.id || t.studentName === user.name);

  const totalPossible = myTests.reduce((sum, t) => sum + (Number(t.totalMarks) || 0), 0);
  const totalObtained = myTests.reduce((sum, t) => sum + (Number(t.marksObtained) || 0), 0);
  const aggregatePct = totalPossible > 0 ? ((totalObtained / totalPossible) * 100).toFixed(1) : 0;

  const contentArea = document.getElementById('studentPrintContent');
  if (!contentArea) return;

  contentArea.innerHTML = `
    <div style="padding:20px; font-family: Arial, sans-serif; color:#1e293b;">
      <div style="text-align:center; border-bottom:2px solid #1e3a8a; padding-bottom:12px; margin-bottom:16px;">
        <h2 style="color:#1e3a8a; margin:0; font-size:1.5rem;">🏛️ Nikhillesh Bhatkar Learning Academy</h2>
        <p style="margin:4px 0; color:#475569; font-size:0.9rem;">At Post Sangameshwar, Near Ninavi Temple, Dist. Ratnagiri, Maharashtra – 415611</p>
        <p style="margin:2px 0; font-size:0.9rem; color:#e67e22; font-weight:bold;">Student Academic Progress &amp; Evaluation Report Card</p>
      </div>

      <div style="display:flex; justify-content:space-between; margin-bottom:16px; background:#f8fafc; padding:12px; border-radius:6px; font-size:0.9rem; border:1px solid #e2e8f0;">
        <div>
          <p style="margin:3px 0;"><strong>Student Name:</strong> ${user.name}</p>
          <p style="margin:3px 0;"><strong>Student ID:</strong> ${user.id}</p>
        </div>
        <div>
          <p style="margin:3px 0;"><strong>Standard / Batch:</strong> ${user.standard}</p>
          <p style="margin:3px 0;"><strong>Academic Session:</strong> 2026 – 2027</p>
          <p style="margin:3px 0;"><strong>Generated on:</strong> ${new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>

      <table style="width:100%; border-collapse:collapse; margin-bottom:16px; font-size:0.88rem;">
        <thead>
          <tr style="background:#1e3a8a; color:#fff;">
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:left;">Test Name / Chapter</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:left;">Subject</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">Date</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">Max Marks</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">Obtained</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">Grade</th>
            <th style="padding:8px 10px; border:1px solid #cbd5e1; text-align:left;">Faculty Evaluation Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${myTests.length > 0 ? myTests.map(t => `
            <tr>
              <td style="padding:8px 10px; border:1px solid #cbd5e1;"><strong>${t.testTitle}</strong></td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1;">${t.subject}</td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">${t.date}</td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;">${t.totalMarks}</td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;"><strong>${t.marksObtained}</strong></td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1; text-align:center;"><strong>${t.grade || 'A'}</strong></td>
              <td style="padding:8px 10px; border:1px solid #cbd5e1;"><em>${t.remarks || 'Good performance.'}</em></td>
            </tr>
          `).join('') : `
            <tr><td colspan="7" style="text-align:center;padding:12px;">No tests graded yet.</td></tr>
          `}
        </tbody>
      </table>

      <div style="background:#e0e7ff; padding:12px 16px; border-radius:6px; margin-bottom:30px; display:flex; justify-content:space-between; font-weight:bold; font-size:0.95rem;">
        <span>Total Tests: ${myTests.length}</span>
        <span>Grand Total: ${totalObtained} / ${totalPossible}</span>
        <span>Aggregate Score: ${aggregatePct}%</span>
        <span>Status: ${aggregatePct >= 75 ? 'First Class with Distinction 🏆' : 'Passed with Credit ⭐'}</span>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:50px; padding:0 20px;">
        <div style="text-align:center;">
          <div style="border-top:1.5px solid #333; width:180px; padding-top:6px; font-weight:bold; font-size:0.85rem;">
            Nikhillesh Bhatkar<br><span style="font-weight:normal;color:#64748b;">Founder &amp; Lead Educator</span>
          </div>
        </div>
        <div style="text-align:center;">
          <div style="border-top:1.5px solid #333; width:180px; padding-top:6px; font-weight:bold; font-size:0.85rem;">
            Parent / Guardian<br><span style="font-weight:normal;color:#64748b;">Signature &amp; Date</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('studentPrintModal');
  if (modal) modal.style.display = 'flex';
}
window.printMyReportCard = printMyReportCard;

// =========================================================
// 7. Student Attendance Record
// =========================================================
function renderStudentAttendance(user) {
  const container = document.getElementById('studentAttendanceContainer');
  if (!container) return;

  const allAttendance = AcademyDB.getAttendance() || [];
  const myAtt = allAttendance.find(a => a.studentId === user.id || a.studentName === user.name);

  if (!myAtt) {
    container.innerHTML = `
      <div style="text-align:center;padding:2.5rem;background:#f8fafc;border:2px dashed #cbd5e1;border-radius:10px;">
        <span style="font-size:2.5rem;">📋</span>
        <h4 style="margin:0.8rem 0 0.4rem;color:#1e293b;">Daily Attendance Tracking Active</h4>
        <p style="color:#64748b;margin:0;">Attendance registers will update daily as lectures are conducted.</p>
      </div>
    `;
    return;
  }

  const pct = Number(myAtt.percentage) || 0;
  let fillClass = 'fill-high';
  if (pct < 90) fillClass = 'fill-mid';
  if (pct < 75) fillClass = 'fill-low';

  const missedLectures = Math.max(0, (myAtt.totalLectures || 0) - (myAtt.attendedLectures || 0));

  container.innerHTML = `
    <div class="attendance-overview-box">
      <div class="attendance-progress-header">
        <div>
          <h4 style="margin:0 0 4px;font-size:1.1rem;color:#1e293b;">Overall Attendance Progress</h4>
          <span style="font-size:0.85rem;color:#64748b;">Minimum recommended attendance for Board Exams is 75%</span>
        </div>
        <span class="attendance-pct-text">${pct}%</span>
      </div>
      <div class="attendance-progress-track">
        <div class="attendance-progress-fill ${fillClass}" style="width: ${Math.min(100, pct)}%;"></div>
      </div>

      <div class="scorecard-summary-grid" style="margin-bottom:0;">
        <div class="score-stat-card">
          <div class="score-stat-icon">📅</div>
          <div class="score-stat-label">Total Lectures</div>
          <div class="score-stat-val">${myAtt.totalLectures}</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-icon">✅</div>
          <div class="score-stat-label">Attended</div>
          <div class="score-stat-val" style="color:#15803d;">${myAtt.attendedLectures}</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-icon">❌</div>
          <div class="score-stat-label">Missed</div>
          <div class="score-stat-val" style="color:#b91c1c;">${missedLectures}</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-icon">⚡</div>
          <div class="score-stat-label">Latest Status</div>
          <div class="score-stat-val" style="font-size:1.2rem;margin-top:0.4rem;">
            <span class="badge-present">${myAtt.status || 'Present'}</span>
          </div>
        </div>
      </div>
    </div>

    ${myAtt.history && myAtt.history.length > 0 ? `
      <div class="dash-card">
        <div class="dash-card-header">
          <h3>🕒 Recent Lecture Attendance History</h3>
        </div>
        <div class="table-responsive">
          <table class="data-table lecture-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Lecture / Topic Covered</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${myAtt.history.map(h => `
                <tr>
                  <td><strong>${h.date}</strong></td>
                  <td>${h.topic || 'Classroom Lecture & Practice Session'}</td>
                  <td>
                    <span class="${h.status === 'Present' ? 'badge-present' : 'badge-absent'}">
                      ${h.status === 'Present' ? '✅ Present' : '❌ Absent'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}
  `;
}

// =========================================================
// 8. Student Doubts Box & Interactive Q&A
// =========================================================
function renderStudentDoubts(user) {
  const listContainer = document.getElementById('studentDoubtsList');
  if (!listContainer) return;

  const allDoubts = AcademyDB.getDoubts() || [];
  const myDoubts = allDoubts.filter(d => d.studentId === user.id || d.studentName === user.name);

  if (myDoubts.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align:center;padding:2rem;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;">
        <span style="font-size:2rem;">❓</span>
        <p style="margin:0.5rem 0 0;color:#64748b;">You haven't asked any doubts yet. Have a question from your textbook or problem sets? Submit it above!</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = myDoubts.map(d => `
    <div class="student-doubt-card">
      <div class="doubt-card-header">
        <div>
          <span class="doubt-subject-badge">${d.subject}</span>
          <strong style="margin-left:8px;font-size:0.95rem;color:#1e293b;">${d.chapter}</strong>
        </div>
        <div>
          <span class="${d.status === 'Resolved' ? 'doubt-badge-resolved' : 'doubt-badge-pending'}">
            ${d.status === 'Resolved' ? '✅ Resolved' : '⏳ Pending Review'}
          </span>
          <small style="margin-left:8px;color:#94a3b8;">📅 ${d.date}</small>
        </div>
      </div>

      <div class="doubt-question-box">
        <strong>Your Question:</strong><br>
        ${d.question}
      </div>

      ${d.status === 'Resolved' && d.reply ? `
        <div class="doubt-reply-box">
          <span class="doubt-reply-author">👨‍🏫 Answer from ${d.repliedBy || 'Nikhillesh Sir'} (${d.replyDate || 'Recently'}):</span>
          ${d.reply}
        </div>
      ` : `
        <p style="margin:0;font-size:0.85rem;color:#b45309;">
          ⏳ <em>Nikhillesh Sir / Amit Sir will answer this doubt in the upcoming lecture or publish the solution here.</em>
        </p>
      `}
    </div>
  `).join('');
}

function setupDoubtForm(user) {
  const form = document.getElementById('studentDoubtForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const subject = document.getElementById('doubtSubjectInput').value.trim();
    const chapter = document.getElementById('doubtChapterInput').value.trim();
    const question = document.getElementById('doubtQuestionInput').value.trim();

    if (!question) return;

    const newDoubt = {
      id: 'DBT-' + Date.now().toString().slice(-4),
      studentId: user.id,
      studentName: user.name,
      standard: user.standard,
      subject: subject || 'General / Academic',
      chapter: chapter || 'Current Chapter',
      question: question,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      reply: '',
      repliedBy: '',
      replyDate: ''
    };

    const doubts = AcademyDB.getDoubts() || [];
    doubts.unshift(newDoubt);
    AcademyDB.saveDoubts(doubts);

    form.reset();
    renderStudentDoubts(user);
    alert('✅ Your doubt has been submitted to Nikhillesh Sir! You can review the reply right here once answered.');
  });
}

// =========================================================
// 9. Fee Receipts & Payment Confirmation
// =========================================================
function renderStudentReceipts(user) {
  const container = document.getElementById('studentReceiptsList');
  if (!container) return;

  const allReceipts = AcademyDB.getReceipts() || [];
  const myReceipts = allReceipts.filter(r => r.studentId === user.id || r.studentName === user.name);

  if (myReceipts.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:2rem;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;">
        <span style="font-size:2rem;">🧾</span>
        <p style="margin:0.5rem 0 0;color:#64748b;">No payment receipts recorded yet. Receipts will appear here automatically upon fee confirmation.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="receipt-grid">
      ${myReceipts.map(r => `
        <div class="student-receipt-card">
          <div class="receipt-info-left">
            <h4>${r.term || 'Monthly Tuition Fee'}</h4>
            <p><strong>Receipt No:</strong> <code>${r.receiptNo}</code></p>
            <p><strong>Payment Mode:</strong> ${r.paymentMode || 'UPI'} • Txn: <code>${r.transactionId || 'N/A'}</code></p>
            <p><strong>Date of Payment:</strong> ${r.date}</p>
          </div>
          <div class="receipt-info-right" style="text-align:right;">
            <span class="receipt-amount-badge">₹${Number(r.amount).toLocaleString('en-IN')}</span>
            <button class="btn-primary btn-sm" onclick="printStudentReceipt('${r.receiptNo}')">
              🖨️ View / Print Receipt
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function printStudentReceipt(receiptNo) {
  const allReceipts = AcademyDB.getReceipts() || [];
  const r = allReceipts.find(item => item.receiptNo === receiptNo);
  if (!r) return;

  const contentArea = document.getElementById('studentPrintContent');
  if (!contentArea) return;

  contentArea.innerHTML = `
    <div style="padding:24px; font-family: Arial, sans-serif; color:#1e293b; border: 2px solid #1e3a8a; border-radius:8px; margin:10px;">
      <div style="text-align:center; border-bottom:2px solid #1e3a8a; padding-bottom:12px; margin-bottom:16px;">
        <h2 style="color:#1e3a8a; margin:0; font-size:1.5rem;">🏛️ Nikhillesh Bhatkar Learning Academy</h2>
        <p style="margin:4px 0; color:#475569; font-size:0.9rem;">At Post Sangameshwar, Near Ninavi Temple, Dist. Ratnagiri, Maharashtra – 415611</p>
        <p style="margin:2px 0; font-size:0.85rem; color:#2563eb; font-weight:bold;">OFFICIAL TUITION FEE RECEIPT</p>
      </div>

      <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:0.92rem;">
        <div>
          <p style="margin:3px 0;"><strong>Receipt No:</strong> <span style="color:#e67e22;font-weight:bold;">${r.receiptNo}</span></p>
          <p style="margin:3px 0;"><strong>Student Name:</strong> ${r.studentName}</p>
          <p style="margin:3px 0;"><strong>Student ID:</strong> ${r.studentId}</p>
          <p style="margin:3px 0;"><strong>Parent / Guardian:</strong> ${r.parentName || 'N/A'}</p>
        </div>
        <div style="text-align:right;">
          <p style="margin:3px 0;"><strong>Date:</strong> ${r.date}</p>
          <p style="margin:3px 0;"><strong>Standard:</strong> ${r.standard}</p>
          <p style="margin:3px 0;"><strong>Payment Status:</strong> <span style="color:#15803d;font-weight:bold;">PAID &amp; CONFIRMED</span></p>
        </div>
      </div>

      <table style="width:100%; border-collapse:collapse; margin-bottom:20px; font-size:0.92rem;">
        <thead>
          <tr style="background:#f1f5f9; color:#1e293b;">
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:left;">Description / Term</th>
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:left;">Payment Mode &amp; Reference</th>
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:right;">Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:12px 10px; border:1px solid #cbd5e1;"><strong>${r.term}</strong></td>
            <td style="padding:12px 10px; border:1px solid #cbd5e1;">${r.paymentMode} (${r.transactionId || 'Ref Confirmed'})</td>
            <td style="padding:12px 10px; border:1px solid #cbd5e1; text-align:right; font-size:1.15rem; font-weight:bold; color:#15803d;">
              ₹${Number(r.amount).toLocaleString('en-IN')}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="background:#f8fafc; padding:12px 16px; border-radius:6px; margin-bottom:30px; font-size:0.88rem; color:#475569;">
        <p style="margin:0;"><strong>Note:</strong> Computer generated fee receipt. Thank you for your payment!</p>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:40px; padding:0 20px;">
        <div style="font-size:0.85rem; color:#64748b;">
          Authorized Academy Seal
        </div>
        <div style="text-align:center;">
          <div style="border-top:1.5px solid #333; width:200px; padding-top:6px; font-weight:bold; font-size:0.85rem;">
            Nikhillesh Bhatkar<br><span style="font-weight:normal;color:#64748b;">Founder &amp; Principal Educator</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('studentPrintModal');
  if (modal) modal.style.display = 'flex';
}
window.printStudentReceipt = printStudentReceipt;

// =========================================================
// 10. Interactive Maharashtra State Board Practice MCQ Quiz
// =========================================================
function renderStudentQuiz(user) {
  const container = document.getElementById('studentQuizContainer');
  if (!container) return;

  const questions = AcademyDB.getQuizQuestions() || [];
  if (questions.length === 0) return;

  container.innerHTML = `
    <div class="quiz-header-banner">
      <h3>📝 Quick 10-Question Maharashtra Board Mock Quiz</h3>
      <p>Test your knowledge in SSC Maths, Science, HSC Physics &amp; Special Skills. Instant scoring &amp; answers!</p>
    </div>

    <form id="practiceQuizForm">
      ${questions.map((q, idx) => `
        <div class="quiz-question-card" id="quizCard-${q.id}">
          <div class="quiz-q-num">Question ${idx + 1} of ${questions.length}</div>
          <div class="quiz-q-text">${q.question}</div>
          <div class="quiz-options-list">
            ${q.options.map((opt, optIdx) => `
              <label class="quiz-option-label" id="optLabel-${q.id}-${optIdx}">
                <input type="radio" name="question_${q.id}" value="${optIdx}" required>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
          <div class="quiz-explanation-box" id="explanation-${q.id}" style="display:none;"></div>
        </div>
      `).join('')}

      <div style="text-align:center;margin:2rem 0;">
        <button type="submit" class="btn-primary" style="padding:0.9rem 2.5rem;font-size:1.1rem;">
          📊 Submit Quiz &amp; Calculate My Score
        </button>
      </div>
    </form>

    <div id="quizResultBanner" style="display:none;margin-top:2rem;"></div>
  `;

  const quizForm = document.getElementById('practiceQuizForm');
  const resultBanner = document.getElementById('quizResultBanner');
  const restartBtn = document.getElementById('btnRestartQuiz');

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      renderStudentQuiz(user);
    });
  }

  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let score = 0;
      questions.forEach((q) => {
        const selected = quizForm.querySelector(`input[name="question_${q.id}"]:checked`);
        const userChoice = selected ? parseInt(selected.value, 10) : -1;
        const explanationEl = document.getElementById(`explanation-${q.id}`);

        // Highlight correct and wrong options
        q.options.forEach((opt, optIdx) => {
          const label = document.getElementById(`optLabel-${q.id}-${optIdx}`);
          if (label) {
            if (optIdx === q.correctIndex) {
              label.classList.add('opt-correct');
            } else if (optIdx === userChoice) {
              label.classList.add('opt-wrong');
            }
          }
        });

        if (userChoice === q.correctIndex) {
          score++;
          if (explanationEl) {
            explanationEl.style.display = 'block';
            explanationEl.innerHTML = `✅ <strong>Correct!</strong> ${q.explanation}`;
          }
        } else {
          if (explanationEl) {
            explanationEl.style.display = 'block';
            explanationEl.innerHTML = `💡 <strong>Explanation:</strong> ${q.explanation}`;
          }
        }
      });

      // Show Result Banner
      const percentage = ((score / questions.length) * 100).toFixed(0);
      resultBanner.style.display = 'block';
      resultBanner.innerHTML = `
        <div style="background:#fff;border:2px solid #22c55e;border-radius:12px;padding:2rem;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
          <span style="font-size:3rem;">${score >= 8 ? '🎉 🏆' : '📚 👍'}</span>
          <h3 style="margin:0.8rem 0 0.4rem;color:#1e293b;font-size:1.6rem;">Quiz Completed!</h3>
          <p style="font-size:1.25rem;color:#15803d;font-weight:bold;margin-bottom:0.5rem;">
            You Scored: ${score} out of ${questions.length} (${percentage}%)
          </p>
          <p style="color:#64748b;max-width:550px;margin:0 auto 1.5rem;">
            ${score >= 8
              ? 'Outstanding performance! You have strong conceptual clarity in State Board Maths, Science & Formula derivations.'
              : 'Good effort! Review the explanations above for the questions you missed and try retaking the quiz to achieve 100%!'
            }
          </p>
          <button class="btn-primary" onclick="renderStudentQuiz(Auth.getCurrentUser())">🔄 Retake Quiz</button>
        </div>
      `;

      resultBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

