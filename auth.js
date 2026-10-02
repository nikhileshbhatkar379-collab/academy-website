// ------------------------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Authentication & Database
// ------------------------------------------------------------------

const ACADEMY_DB_VERSION = 'v1.0';

// Default initial data seed
const DEFAULT_ADMIN = {
  username: 'admin',
  email: 'nikhileshbhatkar379@gmail.com',
  password: 'admin123',
  name: 'Nikhillesh Bhatkar',
  role: 'admin'
};

const DEFAULT_STUDENTS = [
  {
    id: 'STU-1001',
    name: 'Rahul Shinde',
    phone: '9822110044',
    pin: 'student123',
    standard: 'Standard 10 (SSC)',
    subjects: 'Mathematics & Science',
    parentName: 'Suresh Shinde',
    parentPhone: '9822110045',
    feeStatus: 'Paid',
    enrolledDate: '2026-06-15',
    role: 'student'
  },
  {
    id: 'STU-1002',
    name: 'Sneha Kulkarni',
    phone: '9890223344',
    pin: 'student123',
    standard: 'Standard 12 (HSC)',
    subjects: 'Physics & Chemistry',
    parentName: 'Milind Kulkarni',
    parentPhone: '9890223345',
    feeStatus: 'Paid',
    enrolledDate: '2026-06-20',
    role: 'student'
  },
  {
    id: 'STU-1003',
    name: 'Pranav Patil',
    phone: '9765432100',
    pin: 'student123',
    standard: 'Standard 9',
    subjects: 'Mathematics & Science',
    parentName: 'Ramesh Patil',
    parentPhone: '9765432101',
    feeStatus: 'Pending',
    enrolledDate: '2026-07-01',
    role: 'student'
  },
  {
    id: 'STU-1004',
    name: 'Ananya Joshi',
    phone: '9423887766',
    pin: 'student123',
    standard: 'Standard 8',
    subjects: 'Mathematics & Science',
    parentName: 'Vikas Joshi',
    parentPhone: '9423887767',
    feeStatus: 'Paid',
    enrolledDate: '2026-07-10',
    role: 'student'
  },
  {
    id: 'STU-1005',
    name: 'Omkar Rane',
    phone: '8380091122',
    pin: 'student123',
    standard: 'Special: AI & Stock Market',
    subjects: 'Stock Market + Generative AI',
    parentName: 'Subhash Rane',
    parentPhone: '8380091123',
    feeStatus: 'Paid',
    enrolledDate: '2026-08-01',
    role: 'student'
  }
];

const DEFAULT_NOTES = [
  {
    id: 'NOTE-101',
    title: 'Class 10 Algebra — Linear Equations & Quadratic Equations Formula Sheet',
    standard: 'Standard 10 (SSC)',
    subject: 'Mathematics Part 1 (Algebra)',
    chapter: 'Chapters 1 & 2',
    fileType: 'PDF',
    size: '1.8 MB',
    date: '2026-09-15',
    downloadUrl: '#',
    description: 'Complete formula sheet, Cramer\'s Rule shortcuts, quadratic roots nature, and solved board question types.'
  },
  {
    id: 'NOTE-102',
    title: 'Class 10 Geometry — Similarity & Pythagoras Theorem Summary Notes',
    standard: 'Standard 10 (SSC)',
    subject: 'Mathematics Part 2 (Geometry)',
    chapter: 'Chapters 1 & 2',
    fileType: 'PDF',
    size: '2.4 MB',
    date: '2026-09-18',
    downloadUrl: '#',
    description: 'Basic Proportionality Theorem (BPT) proof, geometric mean theorem, and step-by-step construction tips.'
  },
  {
    id: 'NOTE-103',
    title: 'Class 10 Science 1 — Gravitation & Periodic Classification Concept Map',
    standard: 'Standard 10 (SSC)',
    subject: 'Science & Technology Part 1',
    chapter: 'Chapters 1 & 2',
    fileType: 'PDF',
    size: '3.1 MB',
    date: '2026-09-20',
    downloadUrl: '#',
    description: 'Kepler\'s Laws diagrams, Newton\'s Universal Law derivations, modern periodic table trends & electron configurations.'
  },
  {
    id: 'NOTE-104',
    title: 'Class 12 HSC Physics — Rotational Dynamics & Wave Optics Key Formulas',
    standard: 'Standard 12 (HSC)',
    subject: 'Physics',
    chapter: 'Chapters 1 & 7',
    fileType: 'PDF',
    size: '2.9 MB',
    date: '2026-09-22',
    downloadUrl: '#',
    description: 'Moment of inertia formulas table, parallel/perpendicular axes theorems, Young\'s double slit experiment equations.'
  },
  {
    id: 'NOTE-105',
    title: 'Class 12 HSC Chemistry — Solid State & Chemical Thermodynamics Rapid Revision',
    standard: 'Standard 12 (HSC)',
    subject: 'Chemistry',
    chapter: 'Chapters 1 & 4',
    fileType: 'PDF',
    size: '2.2 MB',
    date: '2026-09-25',
    downloadUrl: '#',
    description: 'Unit cell packing efficiency calculations, Bragg\'s equation, enthalpy calculations and Hess\'s Law numericals.'
  },
  {
    id: 'NOTE-106',
    title: 'Class 9 Mathematics — Polynomials & Real Numbers Practice Notes',
    standard: 'Standard 9',
    subject: 'Mathematics Part 1',
    chapter: 'Chapters 1 & 3',
    fileType: 'PDF',
    size: '1.5 MB',
    date: '2026-09-10',
    downloadUrl: '#',
    description: 'Surds rationalization methods, synthetic division method, and factor theorem with step-by-step examples.'
  },
  {
    id: 'NOTE-107',
    title: 'Class 8 General Science — Living World & Inside the Atom Revision Notes',
    standard: 'Standard 8',
    subject: 'General Science',
    chapter: 'Chapters 1 & 5',
    fileType: 'PDF',
    size: '1.7 MB',
    date: '2026-09-05',
    downloadUrl: '#',
    description: 'Whittaker five-kingdom classification diagram, atomic structure models (Dalton, Thomson, Rutherford, Bohr).'
  },
  {
    id: 'NOTE-108',
    title: 'Special Course: Stock Market Beginner\'s Handbook & Candlestick Cheatsheet',
    standard: 'Special: Stock Market',
    subject: 'Financial Markets',
    chapter: 'Module 1 & 2',
    fileType: 'PDF',
    size: '4.2 MB',
    date: '2026-09-28',
    downloadUrl: '#',
    description: 'Top 15 Candlestick patterns, Support & Resistance identification, Risk-Reward ratio calculator guide.'
  },
  {
    id: 'NOTE-109',
    title: 'Special Course: Prompt Engineering & Generative AI Tools Guide',
    standard: 'Special: AI & Generative AI',
    subject: 'Artificial Intelligence',
    chapter: 'Module 1',
    fileType: 'PDF',
    size: '3.5 MB',
    date: '2026-09-29',
    downloadUrl: '#',
    description: 'System prompt design, few-shot prompting techniques, ChatGPT/Claude workflow optimization guide.'
  }
];

const DEFAULT_NOTICES = [
  {
    id: 'NOT-101',
    title: '📢 Sunday Special Board Revision Test — Class 10 SSC',
    date: '2026-10-01',
    category: 'Exam Alert',
    content: 'Full syllabus preliminary practice test for Class 10 (Mathematics Part 1 & Part 2) scheduled for this Sunday from 9:00 AM to 12:00 PM. Attendance is mandatory for all enrolled SSC students.'
  },
  {
    id: 'NOT-102',
    title: '🔬 Class 12 HSC Physics & Chemistry Numerical Solving Workshop',
    date: '2026-09-28',
    category: 'Workshop',
    content: 'Amit Pawaskar Sir will conduct a specialized problem-solving workshop on Rotational Dynamics and Thermodynamics on Saturday at 4:30 PM.'
  },
  {
    id: 'NOT-103',
    title: '📈 Free Weekend Seminar on Stock Market & AI Essentials',
    date: '2026-09-24',
    category: 'Announcement',
    content: 'Special introductory session for students and parents on practical financial literacy and generative AI tools this Saturday at 6:00 PM.'
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: 'INQ-101',
    name: 'Mahesh Sawant',
    phone: '9850123456',
    email: 'mahesh.sawant@gmail.com',
    type: 'Free 2-Day Demo Class',
    standard: 'Standard 10 (SSC)',
    date: '2026-10-01',
    status: 'New'
  },
  {
    id: 'INQ-102',
    name: 'Pooja Jadhav',
    phone: '9867451230',
    email: 'pooja.j@yahoo.com',
    type: 'Full Admission',
    standard: 'Standard 12 (HSC Physics)',
    date: '2026-09-30',
    status: 'Contacted'
  },
  {
    id: 'INQ-103',
    name: 'Tanmay Shirke',
    phone: '8800112233',
    email: 'tanmay.shirke@outlook.com',
    type: 'Special Course Inquiry',
    standard: 'Special: Stock Market Course',
    date: '2026-09-28',
    status: 'Admitted'
  }
];

// Initialize Storage if empty
function initAcademyDB() {
  if (!localStorage.getItem('academy_admin')) {
    localStorage.setItem('academy_admin', JSON.stringify(DEFAULT_ADMIN));
  }
  if (!localStorage.getItem('academy_students')) {
    localStorage.setItem('academy_students', JSON.stringify(DEFAULT_STUDENTS));
  }
  if (!localStorage.getItem('academy_notes')) {
    localStorage.setItem('academy_notes', JSON.stringify(DEFAULT_NOTES));
  }
  if (!localStorage.getItem('academy_notices')) {
    localStorage.setItem('academy_notices', JSON.stringify(DEFAULT_NOTICES));
  }
  if (!localStorage.getItem('academy_inquiries')) {
    localStorage.setItem('academy_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
  }
}

// Ensure DB is initialized
initAcademyDB();

// Database Accessors
const AcademyDB = {
  getAdmin: () => JSON.parse(localStorage.getItem('academy_admin') || JSON.stringify(DEFAULT_ADMIN)),
  saveAdmin: (admin) => localStorage.setItem('academy_admin', JSON.stringify(admin)),

  getStudents: () => JSON.parse(localStorage.getItem('academy_students') || '[]'),
  saveStudents: (students) => localStorage.setItem('academy_students', JSON.stringify(students)),

  getNotes: () => JSON.parse(localStorage.getItem('academy_notes') || '[]'),
  saveNotes: (notes) => localStorage.setItem('academy_notes', JSON.stringify(notes)),

  getNotices: () => JSON.parse(localStorage.getItem('academy_notices') || '[]'),
  saveNotices: (notices) => localStorage.setItem('academy_notices', JSON.stringify(notices)),

  getInquiries: () => JSON.parse(localStorage.getItem('academy_inquiries') || '[]'),
  saveInquiries: (inquiries) => localStorage.setItem('academy_inquiries', JSON.stringify(inquiries)),

  resetToDefaults: () => {
    localStorage.setItem('academy_admin', JSON.stringify(DEFAULT_ADMIN));
    localStorage.setItem('academy_students', JSON.stringify(DEFAULT_STUDENTS));
    localStorage.setItem('academy_notes', JSON.stringify(DEFAULT_NOTES));
    localStorage.setItem('academy_notices', JSON.stringify(DEFAULT_NOTICES));
    localStorage.setItem('academy_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
  }
};

// Authentication Controller
const Auth = {
  // Admin Login
  loginAdmin: (usernameOrEmail, password) => {
    const admin = AcademyDB.getAdmin();
    const cleanUser = (usernameOrEmail || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    const isMatch = (cleanUser === admin.username.toLowerCase() || cleanUser === admin.email.toLowerCase()) && cleanPass === admin.password;
    if (isMatch) {
      const session = {
        role: 'admin',
        name: admin.name,
        email: admin.email,
        username: admin.username,
        loginTime: new Date().toISOString()
      };
      sessionStorage.setItem('academy_session', JSON.stringify(session));
      return { success: true, user: session };
    }
    return { success: false, message: 'Invalid Admin username, email, or password.' };
  },

  // Student Login
  loginStudent: (studentIdOrPhone, pin) => {
    const students = AcademyDB.getStudents();
    const cleanId = (studentIdOrPhone || '').trim().toLowerCase();
    const cleanPin = (pin || '').trim();

    const student = students.find(s =>
      (s.id.toLowerCase() === cleanId || s.phone === cleanId) && s.pin === cleanPin
    );

    if (student) {
      const session = {
        role: 'student',
        id: student.id,
        name: student.name,
        phone: student.phone,
        standard: student.standard,
        subjects: student.subjects,
        feeStatus: student.feeStatus,
        loginTime: new Date().toISOString()
      };
      sessionStorage.setItem('academy_session', JSON.stringify(session));
      return { success: true, user: session };
    }
    return { success: false, message: 'Invalid Student ID / Phone or PIN password.' };
  },

  // Get current logged-in session
  getCurrentUser: () => {
    const raw = sessionStorage.getItem('academy_session');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  // Logout current session
  logout: () => {
    sessionStorage.removeItem('academy_session');
    window.location.href = 'login.html';
  },

  // Guard for protected pages (admin.html, student.html)
  requireAuth: (requiredRole) => {
    const user = Auth.getCurrentUser();
    if (!user) {
      window.location.href = `login.html?redirect=${encodeURIComponent(window.location.pathname)}`;
      return null;
    }
    if (requiredRole && user.role !== requiredRole) {
      if (user.role === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'student.html';
      }
      return null;
    }
    return user;
  }
};
