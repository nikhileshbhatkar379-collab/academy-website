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

const DEFAULT_PAPERS = [
  {
    "id": "PAPER-SSC-2024-ALG",
    "title": "Class 10 SSC \u2014 Mathematics Part 1 (Algebra) March 2024 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 1 (Algebra)",
    "year": "March 2024",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.2 MB",
    "date": "2024-03-12",
    "solutionAvailable": true,
    "solutionSize": "3.5 MB",
    "description": "Official Maharashtra SSC Board March 2024 Algebra question paper with complete solutions: Linear Equations, Quadratic Equations, Arithmetic Progression, Financial Planning, Probability & Statistics.",
    "blueprint": "Q1: 4 MCQs (4M) + 4 Sub-questions (4M); Q2: 2 Activity (4M) + 4 Solve (8M); Q3: 1 Activity (3M) + 2 Solve (6M); Q4: 2 HOTS (8M); Q5: 1 Creative problem (3M)."
  },
  {
    "id": "PAPER-SSC-2024-GEO",
    "title": "Class 10 SSC \u2014 Mathematics Part 2 (Geometry) March 2024 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 2 (Geometry)",
    "year": "March 2024",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.6 MB",
    "date": "2024-03-14",
    "solutionAvailable": true,
    "solutionSize": "3.9 MB",
    "description": "Official Maharashtra SSC Board March 2024 Geometry paper with step-by-step proofs of Pythagoras Theorem, Circle Tangents, Geometric Constructions, Coordinate Geometry, and Trigonometry.",
    "blueprint": "Q1: 4 MCQs (4M) + 4 Solve (4M); Q2: 2 Activity (4M) + 4 Solve (8M); Q3: 1 Activity (3M) + 2 Proofs (6M); Q4: 2 HOTS non-textual (8M); Q5: 1 Open-ended (3M)."
  },
  {
    "id": "PAPER-SSC-2024-SCI1",
    "title": "Class 10 SSC \u2014 Science & Technology Part 1 March 2024 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 1",
    "year": "March 2024",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.8 MB",
    "date": "2024-03-18",
    "solutionAvailable": true,
    "solutionSize": "3.4 MB",
    "description": "Official SSC Board March 2024 Science 1 covering Gravitation numericals, Periodic Classification trends, Chemical Reactions, Effects of Electric Current, Refraction, and Space Missions.",
    "blueprint": "Q1(A): 5 MCQs (5M); Q1(B): 5 Objectives (5M); Q2(A): 2 Scientific reasons (4M); Q2(B): 3 Short answers (6M); Q3: 5 Questions (15M); Q4: 1 Long conceptual question (5M)."
  },
  {
    "id": "PAPER-SSC-2024-SCI2",
    "title": "Class 10 SSC \u2014 Science & Technology Part 2 March 2024 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 2",
    "year": "March 2024",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.7 MB",
    "date": "2024-03-20",
    "solutionAvailable": true,
    "solutionSize": "3.3 MB",
    "description": "Official SSC Board March 2024 Science 2 paper with labeled diagrams, cell biology processes, Darwinism vs Lamarckism, environmental management flowcharts, and biotechnology applications.",
    "blueprint": "Q1(A): 5 MCQs (5M); Q1(B): 5 Objectives (5M); Q2(A): 2 Scientific reasons (4M); Q2(B): 3 Short questions (6M); Q3: 5 Paragraph/Diagram questions (15M); Q4: 1 Detailed answer (5M)."
  },
  {
    "id": "PAPER-SSC-2024-ENG",
    "title": "Class 10 SSC \u2014 English Kumarbharati March 2024 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "English Kumarbharati",
    "year": "March 2024",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.1 MB",
    "date": "2024-03-07",
    "solutionAvailable": true,
    "solutionSize": "4.2 MB",
    "description": "Maharashtra SSC Board March 2024 English question paper with textual passages, poetry appreciation, non-textual comprehension, grammar transformations, and writing skills models.",
    "blueprint": "Section I: Language Study (10M); Section II: Textual Passages (20M); Section III: Poetry (10M); Section IV: Non-textual Passage (15M); Section V: Writing Skills (20M); Section VI: Creative Writing (5M)."
  },
  {
    "id": "PAPER-SSC-2023-ALG",
    "title": "Class 10 SSC \u2014 Mathematics Part 1 (Algebra) March 2023 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 1 (Algebra)",
    "year": "March 2023",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "1.9 MB",
    "date": "2023-03-13",
    "solutionAvailable": true,
    "solutionSize": "3.1 MB",
    "description": "Official Maharashtra SSC Board March 2023 Algebra paper with complete model answer key, Cramer's rule matrix calculations, quadratic factorization, and GST invoice solutions.",
    "blueprint": "Full Maharashtra Board 40-mark standard pattern with activity worksheets and step-by-step marking rubric."
  },
  {
    "id": "PAPER-SSC-2023-GEO",
    "title": "Class 10 SSC \u2014 Mathematics Part 2 (Geometry) March 2023 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 2 (Geometry)",
    "year": "March 2023",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.4 MB",
    "date": "2023-03-15",
    "solutionAvailable": true,
    "solutionSize": "3.7 MB",
    "description": "Official SSC Board March 2023 Geometry paper with Basic Proportionality Theorem (BPT) proof, tangent segment theorem, and trigonometry height and distance problems.",
    "blueprint": "Board pattern: Q1 to Q5 covering Similarity, Circle, Coordinate Geometry, Trigonometry, and Mensuration."
  },
  {
    "id": "PAPER-SSC-2023-SCI1",
    "title": "Class 10 SSC \u2014 Science & Technology Part 1 March 2023 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 1",
    "year": "March 2023",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.6 MB",
    "date": "2023-03-17",
    "solutionAvailable": true,
    "solutionSize": "3.3 MB",
    "description": "SSC March 2023 Science 1 paper with solved numericals on electric power, Snell's law refraction, metallurgy reactions, and carbon compounds IUPAC naming.",
    "blueprint": "Section A Objectives (10M), Scientific reasoning (10M), Short explanations (15M), 5M Big conceptual question."
  },
  {
    "id": "PAPER-SSC-2023-SCI2",
    "title": "Class 10 SSC \u2014 Science & Technology Part 2 March 2023 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 2",
    "year": "March 2023",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.5 MB",
    "date": "2023-03-20",
    "solutionAvailable": true,
    "solutionSize": "3.2 MB",
    "description": "SSC March 2023 Science 2 paper with heredity flowcharts, aerobic vs anaerobic cellular respiration diagrams, biodiversity hotspots, and social health case studies.",
    "blueprint": "Official MSBSHSE pattern with diagram evaluation, definitions, and environmental applications."
  },
  {
    "id": "PAPER-SSC-2023-ENG",
    "title": "Class 10 SSC \u2014 English Kumarbharati March 2023 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "English Kumarbharati",
    "year": "March 2023",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.0 MB",
    "date": "2023-03-06",
    "solutionAvailable": true,
    "solutionSize": "4.1 MB",
    "description": "SSC March 2023 English Kumarbharati paper with solved reading comprehension, poetry rhyme scheme & figures of speech analysis, formal letter, speech writing, and expansion of idea.",
    "blueprint": "Full 80-mark Kumarbharati blueprint with marking criteria for content, fluency, and grammar accuracy."
  },
  {
    "id": "PAPER-SSC-2022-ALG",
    "title": "Class 10 SSC \u2014 Mathematics Part 1 (Algebra) March 2022 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 1 (Algebra)",
    "year": "March 2022",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "1.8 MB",
    "date": "2022-03-24",
    "solutionAvailable": true,
    "solutionSize": "2.9 MB",
    "description": "Official Maharashtra SSC Board March 2022 Algebra paper with complete step-by-step solutions for Arithmetic Progression, Quadratic roots, and Probability sample space.",
    "blueprint": "Standard MSBSHSE 40-mark paper pattern with complete answer explanations."
  },
  {
    "id": "PAPER-SSC-2022-GEO",
    "title": "Class 10 SSC \u2014 Mathematics Part 2 (Geometry) March 2022 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 2 (Geometry)",
    "year": "March 2022",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.3 MB",
    "date": "2022-03-26",
    "solutionAvailable": true,
    "solutionSize": "3.4 MB",
    "description": "Official SSC Board March 2022 Geometry question paper with solved angle bisector theorem, circle inscribed angles, tangent line construction, and distance formula applications.",
    "blueprint": "Q1 to Q5 covering Similarity, Pythagoras, Circle, Coordinate Geometry, and Trigonometry."
  },
  {
    "id": "PAPER-SSC-2022-SCI1",
    "title": "Class 10 SSC \u2014 Science & Technology Part 1 March 2022 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 1",
    "year": "March 2022",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.5 MB",
    "date": "2022-03-28",
    "solutionAvailable": true,
    "solutionSize": "3.1 MB",
    "description": "SSC March 2022 Science 1 paper with gravitational potential energy derivations, Newlands law vs Mendeleev periodic law, convex lens ray diagrams, and rusting reactions.",
    "blueprint": "40 Marks standard layout with conceptual derivations and scientific justifications."
  },
  {
    "id": "PAPER-SSC-2022-SCI2",
    "title": "Class 10 SSC \u2014 Science & Technology Part 2 March 2022 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 2",
    "year": "March 2022",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.4 MB",
    "date": "2022-03-30",
    "solutionAvailable": true,
    "solutionSize": "3.0 MB",
    "description": "SSC March 2022 Science 2 paper with embryological evidences of evolution, glycolysis cycle steps, thermal power generation eco-impacts, and solid waste segregation.",
    "blueprint": "40 Marks MSBSHSE standard paper with step-by-step model marking."
  },
  {
    "id": "PAPER-SSC-2020-ALG",
    "title": "Class 10 SSC \u2014 Mathematics Part 1 (Algebra) March 2020 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 1 (Algebra)",
    "year": "March 2020",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "1.7 MB",
    "date": "2020-03-11",
    "solutionAvailable": true,
    "solutionSize": "2.8 MB",
    "description": "Pre-pandemic official SSC Board March 2020 Algebra paper featuring complete syllabus questions: Financial Planning GST/shares, Mean-Median-Mode ogive graphs, and Cramer's rule.",
    "blueprint": "Complete revised syllabus 40-mark paper pattern with model solution key."
  },
  {
    "id": "PAPER-SSC-2020-GEO",
    "title": "Class 10 SSC \u2014 Mathematics Part 2 (Geometry) March 2020 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 2 (Geometry)",
    "year": "March 2020",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.2 MB",
    "date": "2020-03-13",
    "solutionAvailable": true,
    "solutionSize": "3.3 MB",
    "description": "Official SSC Board March 2020 Geometry paper with complete solutions of Appollonius theorem, cyclic quadrilateral theorem, trigonometry identities, and frustum volume calculations.",
    "blueprint": "Standard MSBSHSE 40-mark paper covering Similarity, Circle, Constructions, and Mensuration."
  },
  {
    "id": "PAPER-SSC-2020-SCI1",
    "title": "Class 10 SSC \u2014 Science & Technology Part 1 March 2020 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 1",
    "year": "March 2020",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.4 MB",
    "date": "2020-03-16",
    "solutionAvailable": true,
    "solutionSize": "3.0 MB",
    "description": "Official SSC Board March 2020 Science 1 paper with Fleming's left hand rule, Joule's law heating calculations, dispersion of light, and escape velocity formulas.",
    "blueprint": "Official MSBSHSE blueprint with numerical problem marking breakdowns."
  },
  {
    "id": "PAPER-SSC-2020-SCI2",
    "title": "Class 10 SSC \u2014 Science & Technology Part 2 March 2020 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 2",
    "year": "March 2020",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.3 MB",
    "date": "2020-03-18",
    "solutionAvailable": true,
    "solutionSize": "2.9 MB",
    "description": "Official SSC Board March 2020 Science 2 paper with menstrual cycle hormonal regulation, IVF process, bio-fertilizers, and disaster management mock drill guidelines.",
    "blueprint": "Full 40-mark Biology & EVS board question paper with model answers."
  },
  {
    "id": "PAPER-SSC-2019-ALG",
    "title": "Class 10 SSC \u2014 Mathematics Part 1 (Algebra) March 2019 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 1 (Algebra)",
    "year": "March 2019",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "1.7 MB",
    "date": "2019-03-12",
    "solutionAvailable": true,
    "solutionSize": "2.7 MB",
    "description": "Historic inaugural year paper of the newly revised Maharashtra SSC 100-mark curriculum pattern with full solutions for Algebra.",
    "blueprint": "Inaugural revised pattern: Activity based questions, HOTS, and internal choice questions."
  },
  {
    "id": "PAPER-SSC-2019-GEO",
    "title": "Class 10 SSC \u2014 Mathematics Part 2 (Geometry) March 2019 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics Part 2 (Geometry)",
    "year": "March 2019",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.1 MB",
    "date": "2019-03-14",
    "solutionAvailable": true,
    "solutionSize": "3.2 MB",
    "description": "Inaugural revised curriculum March 2019 Geometry paper with theorems, tangent secant segment theorem, and geometric transformation proofs.",
    "blueprint": "40 Marks official MSBSHSE question paper with model solution guide."
  },
  {
    "id": "PAPER-SSC-2019-SCI1",
    "title": "Class 10 SSC \u2014 Science & Technology Part 1 March 2019 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 1",
    "year": "March 2019",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.3 MB",
    "date": "2019-03-16",
    "solutionAvailable": true,
    "solutionSize": "2.9 MB",
    "description": "March 2019 Science 1 board paper testing modern periodic table trends, reflection/refraction laws, and chemical reaction types with model answer keys.",
    "blueprint": "40 Marks standard layout with diagram explanations and unit conversions."
  },
  {
    "id": "PAPER-SSC-2019-SCI2",
    "title": "Class 10 SSC \u2014 Science & Technology Part 2 March 2019 Board Question Paper",
    "standard": "Standard 10 (SSC)",
    "subject": "Science & Technology Part 2",
    "year": "March 2019",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.2 MB",
    "date": "2019-03-18",
    "solutionAvailable": true,
    "solutionSize": "2.8 MB",
    "description": "March 2019 Science 2 board paper with cellular division, classification of chordates and non-chordates, green energy generation, and environmental acts in India.",
    "blueprint": "40 Marks standard layout with flowchart completions and scientific definitions."
  },
  {
    "id": "PAPER-SSC-SCERT-MTH",
    "title": "Class 10 SSC \u2014 SCERT Maharashtra Official Question Bank (Mathematics 1 & 2)",
    "standard": "Standard 10 (SSC)",
    "subject": "Maths & Science (SCERT Bank)",
    "year": "2024-2025 Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "SCERT Question Bank",
    "fileType": "PDF",
    "size": "6.8 MB",
    "date": "2024-09-10",
    "solutionAvailable": true,
    "solutionSize": "8.5 MB",
    "description": "Official Maharashtra State Council of Educational Research and Training (SCERT) question bank with objective, 2-mark, 3-mark, and 5-mark HOTS questions.",
    "blueprint": "Comprehensive chapter-wise question pool prepared by State Board subject committee."
  },
  {
    "id": "PAPER-SSC-SCERT-SCI",
    "title": "Class 10 SSC \u2014 SCERT Maharashtra Official Question Bank (Science & Technology 1 & 2)",
    "standard": "Standard 10 (SSC)",
    "subject": "Maths & Science (SCERT Bank)",
    "year": "2024-2025 Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "SCERT Question Bank",
    "fileType": "PDF",
    "size": "7.2 MB",
    "date": "2024-09-10",
    "solutionAvailable": true,
    "solutionSize": "9.1 MB",
    "description": "Official SCERT Science question bank with diagram-based questions, scientific reason pools, experimental setups, and application-based questions.",
    "blueprint": "Official SCERT repository covering every chapter of Science 1 and Science 2."
  },
  {
    "id": "PAPER-SSC-PRELIM-MTH",
    "title": "Class 10 SSC \u2014 Academy Prelim Mock Exam Paper (Full 80 Marks Mathematics)",
    "standard": "Standard 10 (SSC)",
    "subject": "Mathematics (Prelim Model)",
    "year": "2026 Mock",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "2.1 MB",
    "date": "2026-09-28",
    "solutionAvailable": true,
    "solutionSize": "3.2 MB",
    "description": "Full-syllabus preliminary mock board examination paper designed strictly on the latest MSBSHSE pattern by Nikhillesh Sir with answer key and evaluation rubric.",
    "blueprint": "Standard MSBSHSE blueprint simulating exact final board exam conditions."
  },
  {
    "id": "PAPER-HSC-2024-PHY",
    "title": "Class 12 HSC \u2014 Physics March 2024 Board Question Paper & Model Solutions",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics",
    "year": "March 2024",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.2 MB",
    "date": "2024-02-27",
    "solutionAvailable": true,
    "solutionSize": "4.8 MB",
    "description": "Official Maharashtra HSC Board March 2024 Physics question paper with detailed step-by-step numerical calculations, circuit diagrams, and derivations prepared by Amit Sir.",
    "blueprint": "Section A: 10 MCQs + 8 VSA (18M); Section B: 8 out of 12 SA-I (16M); Section C: 8 out of 12 SA-II (24M); Section D: 3 out of 5 LA (12M)."
  },
  {
    "id": "PAPER-HSC-2024-CHE",
    "title": "Class 12 HSC \u2014 Chemistry March 2024 Board Question Paper & Model Solutions",
    "standard": "Standard 12 (HSC)",
    "subject": "Chemistry",
    "year": "March 2024",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.0 MB",
    "date": "2024-02-29",
    "solutionAvailable": true,
    "solutionSize": "4.5 MB",
    "description": "Official Maharashtra HSC Board March 2024 Chemistry question paper covering Physical Chemistry numericals, Inorganic coordination compounds, and Organic conversion mechanisms.",
    "blueprint": "Section A (18M), Section B (16M), Section C (24M), Section D (12M). Includes log table calculations."
  },
  {
    "id": "PAPER-HSC-2024-MTH",
    "title": "Class 12 HSC \u2014 Mathematics & Statistics March 2024 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "March 2024",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.8 MB",
    "date": "2024-03-02",
    "solutionAvailable": true,
    "solutionSize": "4.3 MB",
    "description": "Official Maharashtra HSC Board March 2024 Mathematics paper covering Mathematical Logic, Matrices, Trigonometric Functions, Pair of Straight Lines, Calculus, and Probability Distribution.",
    "blueprint": "Section A: 8 MCQs (16M) + 4 VSA (4M); Section B: 8 of 12 (16M); Section C: 8 of 12 (24M); Section D: 5 of 8 (20M)."
  },
  {
    "id": "PAPER-HSC-2024-BIO",
    "title": "Class 12 HSC \u2014 Biology March 2024 Board Question Paper & Model Solutions",
    "standard": "Standard 12 (HSC)",
    "subject": "Biology",
    "year": "March 2024",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.3 MB",
    "date": "2024-03-06",
    "solutionAvailable": true,
    "solutionSize": "4.7 MB",
    "description": "Official Maharashtra HSC Board March 2024 Biology paper with botany and zoology sections: Reproduction in Plants & Animals, Genetics, Human Physiology, and Biotechnology.",
    "blueprint": "Section A (18M), Section B (16M), Section C (24M), Section D (12M) with neat labeled scientific sketches."
  },
  {
    "id": "PAPER-HSC-2023-PHY",
    "title": "Class 12 HSC \u2014 Physics March 2023 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics",
    "year": "March 2023",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.9 MB",
    "date": "2023-02-27",
    "solutionAvailable": true,
    "solutionSize": "4.2 MB",
    "description": "Maharashtra HSC Board March 2023 Physics paper covering Rotational Dynamics, Mechanical Properties of Fluids, Kinetic Theory of Gases, Thermodynamics, and Wave Optics.",
    "blueprint": "Official MSBSHSE 70-mark pattern with complete worked-out numerical solutions."
  },
  {
    "id": "PAPER-HSC-2023-CHE",
    "title": "Class 12 HSC \u2014 Chemistry March 2023 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Chemistry",
    "year": "March 2023",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.7 MB",
    "date": "2023-03-01",
    "solutionAvailable": true,
    "solutionSize": "3.9 MB",
    "description": "Maharashtra HSC Board March 2023 Chemistry paper covering Solid State, Solutions, Chemical Thermodynamics, Electrochemistry, Chemical Kinetics, and Halogen Derivatives.",
    "blueprint": "Official MSBSHSE 70-mark pattern with balanced chemical equations and reaction schemes."
  },
  {
    "id": "PAPER-HSC-2023-MTH",
    "title": "Class 12 HSC \u2014 Mathematics & Statistics March 2023 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "March 2023",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.6 MB",
    "date": "2023-03-03",
    "solutionAvailable": true,
    "solutionSize": "4.0 MB",
    "description": "Maharashtra HSC Board March 2023 Mathematics paper with complete integration by parts derivations, differential equations modeling, vectors dot/cross product, and binomial distribution.",
    "blueprint": "Full 80-mark standard paper covering Part 1 and Part 2 with step marking."
  },
  {
    "id": "PAPER-HSC-2023-BIO",
    "title": "Class 12 HSC \u2014 Biology March 2023 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Biology",
    "year": "March 2023",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.1 MB",
    "date": "2023-03-08",
    "solutionAvailable": true,
    "solutionSize": "4.4 MB",
    "description": "Maharashtra HSC Board March 2023 Biology paper covering double fertilization, DNA replication semi-conservative proof, cardiac cycle, and recombinant DNA technology.",
    "blueprint": "70 Marks HSC layout with diagrams of floral parts, human brain, nephron, and plasmid vectors."
  },
  {
    "id": "PAPER-HSC-2022-PHY",
    "title": "Class 12 HSC \u2014 Physics March 2022 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics",
    "year": "March 2022",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.8 MB",
    "date": "2022-03-10",
    "solutionAvailable": true,
    "solutionSize": "4.1 MB",
    "description": "Maharashtra HSC Board March 2022 Physics paper with solved derivations of conical pendulum, surface tension capillary rise, Carnot engine, and de Broglie wavelength.",
    "blueprint": "Standard MSBSHSE 70-mark pattern with complete answer explanations."
  },
  {
    "id": "PAPER-HSC-2022-CHE",
    "title": "Class 12 HSC \u2014 Chemistry March 2022 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Chemistry",
    "year": "March 2022",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.6 MB",
    "date": "2022-03-12",
    "solutionAvailable": true,
    "solutionSize": "3.8 MB",
    "description": "Maharashtra HSC Board March 2022 Chemistry paper with solved ionic equilibria buffer solutions, Kohlrausch law, d-block magnetic properties, and Aldol condensation.",
    "blueprint": "70 Marks standard layout with step-by-step model marking."
  },
  {
    "id": "PAPER-HSC-2022-MTH",
    "title": "Class 12 HSC \u2014 Mathematics & Statistics March 2022 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "March 2022",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.5 MB",
    "date": "2022-03-14",
    "solutionAvailable": true,
    "solutionSize": "3.9 MB",
    "description": "Maharashtra HSC Board March 2022 Mathematics paper with complete solutions of truth tables, inverse matrix adjoint method, definite integrals properties, and linear programming (LPP).",
    "blueprint": "Full 80-mark standard paper covering Part 1 and Part 2 with step marking."
  },
  {
    "id": "PAPER-HSC-2022-BIO",
    "title": "Class 12 HSC \u2014 Biology March 2022 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Biology",
    "year": "March 2022",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "3.0 MB",
    "date": "2022-03-17",
    "solutionAvailable": true,
    "solutionSize": "4.3 MB",
    "description": "Maharashtra HSC Board March 2022 Biology paper covering gametogenesis, transcription & translation, reflex arc, and ecosystem ecological pyramids with model diagrams.",
    "blueprint": "70 Marks HSC layout with diagram marking breakdowns."
  },
  {
    "id": "PAPER-HSC-2020-PHY",
    "title": "Class 12 HSC \u2014 Physics March 2020 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics",
    "year": "March 2020",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.7 MB",
    "date": "2020-02-24",
    "solutionAvailable": true,
    "solutionSize": "3.9 MB",
    "description": "Official Maharashtra HSC Board March 2020 Physics question paper with detailed derivations of angular momentum conservation, Kirchhoff laws, resonance in AC circuits, and photoelectric effect.",
    "blueprint": "MSBSHSE 70-mark pattern with complete answer explanations."
  },
  {
    "id": "PAPER-HSC-2020-CHE",
    "title": "Class 12 HSC \u2014 Chemistry March 2020 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Chemistry",
    "year": "March 2020",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.5 MB",
    "date": "2020-02-26",
    "solutionAvailable": true,
    "solutionSize": "3.7 MB",
    "description": "Official Maharashtra HSC Board March 2020 Chemistry paper with Nernst equation calculations, order of reaction derivations, coordination isomerism, and carbohydrates structures.",
    "blueprint": "MSBSHSE 70-mark pattern with chemical equations and step marking."
  },
  {
    "id": "PAPER-HSC-2020-MTH",
    "title": "Class 12 HSC \u2014 Mathematics & Statistics March 2020 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "March 2020",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.4 MB",
    "date": "2020-02-28",
    "solutionAvailable": true,
    "solutionSize": "3.8 MB",
    "description": "Official Maharashtra HSC Board March 2020 Mathematics paper covering derivatives of parametric functions, shortest distance between skew lines, planes in 3D, and Poisson distribution.",
    "blueprint": "Full 80-mark standard paper covering Part 1 and Part 2 with step marking."
  },
  {
    "id": "PAPER-HSC-2019-PHY",
    "title": "Class 12 HSC \u2014 Physics March 2019 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics",
    "year": "March 2019",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.6 MB",
    "date": "2019-02-25",
    "solutionAvailable": true,
    "solutionSize": "3.8 MB",
    "description": "Official Maharashtra HSC Board March 2019 Physics paper with circular motion acceleration, Bernoulli equation, stationary waves on stretched strings, and Bohr atom model postulates.",
    "blueprint": "MSBSHSE 70-mark pattern with complete answer explanations."
  },
  {
    "id": "PAPER-HSC-2019-CHE",
    "title": "Class 12 HSC \u2014 Chemistry March 2019 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Chemistry",
    "year": "March 2019",
    "marks": "70 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.4 MB",
    "date": "2019-02-27",
    "solutionAvailable": true,
    "solutionSize": "3.6 MB",
    "description": "Official Maharashtra HSC Board March 2019 Chemistry paper covering Raoult's law, half life of first order reactions, lanthanoid contraction, and polymer classifications.",
    "blueprint": "MSBSHSE 70-mark pattern with chemical equations and step marking."
  },
  {
    "id": "PAPER-HSC-2019-MTH",
    "title": "Class 12 HSC \u2014 Mathematics & Statistics March 2019 Board Question Paper",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "March 2019",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Board PYQ",
    "fileType": "PDF",
    "size": "2.3 MB",
    "date": "2019-03-01",
    "solutionAvailable": true,
    "solutionSize": "3.7 MB",
    "description": "Official Maharashtra HSC Board March 2019 Mathematics paper covering Rolle's Theorem, angle between planes, differential equations integrating factor, and continuous random variables.",
    "blueprint": "Full 80-mark standard paper covering Part 1 and Part 2 with step marking."
  },
  {
    "id": "PAPER-HSC-SCERT-PC",
    "title": "Class 12 HSC \u2014 SCERT Maharashtra Official Question Bank (Physics & Chemistry)",
    "standard": "Standard 12 (HSC)",
    "subject": "Physics & Chemistry (SCERT Bank)",
    "year": "2024-2025 Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "SCERT Question Bank",
    "fileType": "PDF",
    "size": "8.2 MB",
    "date": "2024-09-12",
    "solutionAvailable": true,
    "solutionSize": "10.4 MB",
    "description": "Complete official SCERT question bank for Class 12 Science stream with chapter-wise numericals, conceptual questions, derivations, and board sample solutions.",
    "blueprint": "Comprehensive chapter-wise question pool prepared by State Board subject committee."
  },
  {
    "id": "PAPER-HSC-SCERT-MTH",
    "title": "Class 12 HSC \u2014 SCERT Maharashtra Official Question Bank (Mathematics & Statistics)",
    "standard": "Standard 12 (HSC)",
    "subject": "Mathematics & Statistics",
    "year": "2024-2025 Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "SCERT Question Bank",
    "fileType": "PDF",
    "size": "7.5 MB",
    "date": "2024-09-12",
    "solutionAvailable": true,
    "solutionSize": "9.8 MB",
    "description": "Official SCERT Mathematics question bank with chapter-wise questions: Logic, Matrices, Trigonometry, Vectors, Differential Calculus, Integration, and Probability.",
    "blueprint": "Official SCERT repository covering every chapter of Class 12 Mathematics & Statistics."
  },
  {
    "id": "PAPER-09-ANNUAL-ALG",
    "title": "Class 9 Annual Exam \u2014 Mathematics Part 1 (Algebra) Model Question Paper",
    "standard": "Standard 9",
    "subject": "Mathematics Part 1",
    "year": "Annual Model",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.8 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "2.6 MB",
    "description": "Comprehensive annual exam model paper based on Maharashtra State Board syllabus: Sets, Real Numbers, Polynomials, Ratio & Proportion, Linear Equations in Two Variables, and Financial Planning.",
    "blueprint": "Maharashtra State Board Class 9 standard 40-mark annual evaluation pattern."
  },
  {
    "id": "PAPER-09-ANNUAL-GEO",
    "title": "Class 9 Annual Exam \u2014 Mathematics Part 2 (Geometry) Model Question Paper",
    "standard": "Standard 9",
    "subject": "Mathematics Part 2",
    "year": "Annual Model",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "2.0 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "2.8 MB",
    "description": "Comprehensive annual exam model paper for Geometry: Basic Concepts in Geometry, Parallel Lines, Triangles, Quadrilaterals, Circle, Coordinate Geometry, Trigonometry, and Surface Area & Volume.",
    "blueprint": "Maharashtra State Board Class 9 standard 40-mark annual evaluation pattern."
  },
  {
    "id": "PAPER-09-ANNUAL-MTH",
    "title": "Class 9 Annual Exam \u2014 Combined Mathematics Full Syllabus Model Paper",
    "standard": "Standard 9",
    "subject": "Mathematics Part 1 & 2",
    "year": "Annual Model",
    "marks": "80 Marks",
    "duration": "3 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "2.3 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "3.4 MB",
    "description": "Complete 80-mark combined annual examination paper covering both Algebra and Geometry with detailed answer sheets and step-by-step solutions by Nikhillesh Sir.",
    "blueprint": "Summative Evaluation 80-mark pattern used across top Maharashtra schools."
  },
  {
    "id": "PAPER-09-ANNUAL-SCI1",
    "title": "Class 9 Annual Exam \u2014 Science & Technology Part 1 Model Question Paper",
    "standard": "Standard 9",
    "subject": "Science & Technology",
    "year": "Annual Model",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.9 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "2.7 MB",
    "description": "Class 9 Science 1 annual model paper covering Laws of Motion, Work and Energy, Current Electricity, Measurement of Matter, Acids Bases & Salts, and Carbon Compounds.",
    "blueprint": "MSBSHSE Class 9 Science 1 pattern with numericals, definitions, and experimental setups."
  },
  {
    "id": "PAPER-09-ANNUAL-SCI2",
    "title": "Class 9 Annual Exam \u2014 Science & Technology Part 2 Model Question Paper",
    "standard": "Standard 9",
    "subject": "Science & Technology",
    "year": "Annual Model",
    "marks": "40 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.9 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "2.7 MB",
    "description": "Class 9 Science 2 annual model paper covering Classification of Plants, Energy Flow in an Ecosystem, Useful and Harmful Microbes, Environmental Management, and Information Technology.",
    "blueprint": "MSBSHSE Class 9 Science 2 pattern with labeled diagrams and biological processes."
  },
  {
    "id": "PAPER-09-TERM1-MS",
    "title": "Class 9 Semester 1 Exam \u2014 Combined Mathematics & Science Model Test",
    "standard": "Standard 9",
    "subject": "Mathematics & Science",
    "year": "Semester 1 Model",
    "marks": "50 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.7 MB",
    "date": "2026-09-08",
    "solutionAvailable": true,
    "solutionSize": "2.4 MB",
    "description": "Mid-term semester 1 evaluation test covering Sets, Polynomials, Parallel Lines, Laws of Motion, and Plant Classification with model answer key.",
    "blueprint": "50 Marks semester evaluation pattern with balanced objective and subjective sections."
  },
  {
    "id": "PAPER-09-SCERT-BANK",
    "title": "Class 9 SCERT Maharashtra Practice Question Bank (Maths & Science)",
    "standard": "Standard 9",
    "subject": "Maths & Science (SCERT Bank)",
    "year": "2024-2025 Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "SCERT Question Bank",
    "fileType": "PDF",
    "size": "5.6 MB",
    "date": "2024-09-12",
    "solutionAvailable": true,
    "solutionSize": "7.3 MB",
    "description": "Official SCERT practice questions and Balbharati exercises for Class 9 students preparing for annual school examinations.",
    "blueprint": "Chapter-wise practice problem sets and solutions."
  },
  {
    "id": "PAPER-08-ANNUAL-MTH",
    "title": "Class 8 Summative Assessment II (Annual Exam) \u2014 Mathematics Model Paper",
    "standard": "Standard 8",
    "subject": "Mathematics",
    "year": "Annual Model",
    "marks": "50 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.5 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "2.2 MB",
    "description": "Summative Assessment II (Annual Exam) model paper covering Rational Numbers, Parallel Lines & Transversal, Indices, Expansion Formulas, Factorisation of Algebraic Expressions, and Circles.",
    "blueprint": "Summative Assessment II standard 50-mark pattern according to Continuous Comprehensive Evaluation (CCE)."
  },
  {
    "id": "PAPER-08-ANNUAL-SCI",
    "title": "Class 8 Summative Assessment II (Annual Exam) \u2014 General Science Model Paper",
    "standard": "Standard 8",
    "subject": "General Science",
    "year": "Annual Model",
    "marks": "50 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.6 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "2.3 MB",
    "description": "Summative Assessment II (Annual Exam) General Science model paper: Living World & Classification of Microbes, Inside the Atom, Current Electricity, Chemical Change, and Measurement & Effects of Heat.",
    "blueprint": "Summative Assessment II standard 50-mark pattern according to Continuous Comprehensive Evaluation (CCE)."
  },
  {
    "id": "PAPER-08-TERM1-MTH",
    "title": "Class 8 Summative Assessment I (Term 1) \u2014 Mathematics Model Paper",
    "standard": "Standard 8",
    "subject": "Mathematics",
    "year": "Term 1 Model",
    "marks": "50 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.4 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "2.0 MB",
    "description": "First semester evaluation paper covering Chapters 1 to 8: Rational & Irrational Numbers, Parallel Lines, Indices & Cube Root, Altitudes & Medians of a Triangle, and Expansion Formulas.",
    "blueprint": "Term 1 Summative Assessment (50 Marks) with step-by-step marking guide."
  },
  {
    "id": "PAPER-08-TERM1-SCI",
    "title": "Class 8 Summative Assessment I (Term 1) \u2014 General Science Model Paper",
    "standard": "Standard 8",
    "subject": "General Science",
    "year": "Term 1 Model",
    "marks": "50 Marks",
    "duration": "2 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.5 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "2.1 MB",
    "description": "First semester evaluation paper covering Health & Diseases, Force & Pressure, Current Electricity & Magnetism, Inside the Atom, and Composition of Matter with model diagrams.",
    "blueprint": "Term 1 Summative Assessment (50 Marks) with model answer key."
  },
  {
    "id": "PAPER-08-UNITTEST-SET",
    "title": "Class 8 Unit Test 1 & 2 Practice Paper Set \u2014 Mathematics & Science",
    "standard": "Standard 8",
    "subject": "Mathematics & Science",
    "year": "Unit Test Set",
    "marks": "25 Marks Each",
    "duration": "1 Hour Each",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "1.3 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "1.8 MB",
    "description": "Periodic unit test practice sets for Class 8 students with model solution sheets for rapid chapter-wise assessment and conceptual reinforcement.",
    "blueprint": "Formative evaluation unit test papers (25 marks each) with teacher marking rubrics."
  },
  {
    "id": "PAPER-08-BALBHARATI",
    "title": "Class 8 Balbharati Model Practice Set & Question Bank",
    "standard": "Standard 8",
    "subject": "General Science",
    "year": "Practice Bank",
    "marks": "Full Bank",
    "duration": "Chapter-wise",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "4.2 MB",
    "date": "2026-09-05",
    "solutionAvailable": true,
    "solutionSize": "5.5 MB",
    "description": "Comprehensive textbook exercise question bank and chapter summaries with solved numerical problems and diagrams for Class 8.",
    "blueprint": "Balbharati chapter-wise practice set for Maharashtra State Board."
  },
  {
    "id": "PAPER-STK01",
    "title": "Special Course: Stock Market & Technical Analysis \u2014 Practical Mock Assessment",
    "standard": "Special: Stock Market",
    "subject": "Financial Markets",
    "year": "Practical Mock",
    "marks": "50 Marks",
    "duration": "1.5 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "2.2 MB",
    "date": "2026-09-27",
    "solutionAvailable": true,
    "solutionSize": "2.8 MB",
    "description": "Practical chart analysis case study paper testing Candlestick identification, trendlines, RSI indicators, moving averages crossover, and portfolio risk management.",
    "blueprint": "50 Marks practical exam: Chart identification (20M), Indicator analysis (15M), Risk-reward strategy case study (15M)."
  },
  {
    "id": "PAPER-AI01",
    "title": "Special Course: AI & Generative AI Mastery \u2014 Hands-On Assessment Paper",
    "standard": "Special: AI & Generative AI",
    "subject": "Artificial Intelligence",
    "year": "Hands-on Exam",
    "marks": "50 Marks",
    "duration": "1.5 Hours",
    "type": "Model Paper",
    "fileType": "PDF",
    "size": "2.0 MB",
    "date": "2026-09-28",
    "solutionAvailable": true,
    "solutionSize": "2.5 MB",
    "description": "Practical evaluation paper on prompt engineering benchmarks, LLM workflow automation, multimodal generation tasks, and AI ethical guidelines.",
    "blueprint": "50 Marks practical exam: Prompt engineering challenges (20M), Workflow design (15M), Real-world automation use case (15M)."
  }
];

// -------------------------------------------------------------
// Test Results & Marks Data
// -------------------------------------------------------------
const DEFAULT_TEST_RESULTS = [
  {
    id: 'TEST-101',
    studentId: 'STU-1001',
    studentName: 'Rahul Shinde',
    standard: 'Standard 10 (SSC)',
    testTitle: 'Chapter 1: Linear Equations in Two Variables (Algebra)',
    subject: 'Mathematics Part 1 (Algebra)',
    date: '2026-09-18',
    totalMarks: 40,
    marksObtained: 38,
    grade: 'A+',
    remarks: 'Outstanding conceptual clarity in Cramer\'s rule and graphical methods.'
  },
  {
    id: 'TEST-102',
    studentId: 'STU-1001',
    studentName: 'Rahul Shinde',
    standard: 'Standard 10 (SSC)',
    testTitle: 'Chapter 1: Gravitation & Space Missions (Science 1)',
    subject: 'Science & Technology Part 1',
    date: '2026-09-25',
    totalMarks: 40,
    marksObtained: 36,
    grade: 'A',
    remarks: 'Numerical problem steps are clear. Work on Kepler\'s third law derivations.'
  },
  {
    id: 'TEST-103',
    studentId: 'STU-1002',
    studentName: 'Sneha Kulkarni',
    standard: 'Standard 12 (HSC)',
    testTitle: 'Unit Test: Rotational Dynamics & Banking of Roads',
    subject: 'Physics',
    date: '2026-09-20',
    totalMarks: 50,
    marksObtained: 47,
    grade: 'A+',
    remarks: 'Excellent derivation work on conical pendulum and moment of inertia.'
  },
  {
    id: 'TEST-104',
    studentId: 'STU-1002',
    studentName: 'Sneha Kulkarni',
    standard: 'Standard 12 (HSC)',
    testTitle: 'Unit Test: Solid State & Packing Efficiency',
    subject: 'Chemistry',
    date: '2026-09-27',
    totalMarks: 50,
    marksObtained: 45,
    grade: 'A+',
    remarks: 'Very neat unit cell sketches and Bragg\'s law calculations.'
  },
  {
    id: 'TEST-105',
    studentId: 'STU-1003',
    studentName: 'Pranav Patil',
    standard: 'Standard 9',
    testTitle: 'Monthly Test: Polynomials & Real Numbers',
    subject: 'Mathematics Part 1',
    date: '2026-09-22',
    totalMarks: 30,
    marksObtained: 24,
    grade: 'B+',
    remarks: 'Good understanding. Practice synthetic division remainder theorem more.'
  },
  {
    id: 'TEST-106',
    studentId: 'STU-1004',
    studentName: 'Ananya Joshi',
    standard: 'Standard 8',
    testTitle: 'Summative Test: Rational Numbers & Living World',
    subject: 'Maths & Science',
    date: '2026-09-24',
    totalMarks: 40,
    marksObtained: 37,
    grade: 'A+',
    remarks: 'Great presentation and clear diagrams in biological classification.'
  },
  {
    id: 'TEST-107',
    studentId: 'STU-1005',
    studentName: 'Omkar Rane',
    standard: 'Special: AI & Stock Market',
    testTitle: 'Practical Mock: Candlestick Patterns & Technical Indicators',
    subject: 'Stock Market Mastery',
    date: '2026-09-29',
    totalMarks: 50,
    marksObtained: 48,
    grade: 'A+',
    remarks: 'Accurately identified Bullish Engulfing and Head-and-Shoulders patterns.'
  }
];

// -------------------------------------------------------------
// Attendance Records Data
// -------------------------------------------------------------
const DEFAULT_ATTENDANCE = [
  {
    studentId: 'STU-1001',
    studentName: 'Rahul Shinde',
    standard: 'Standard 10 (SSC)',
    totalLectures: 36,
    attendedLectures: 34,
    percentage: 94.4,
    lastMarkedDate: '2026-10-02',
    status: 'Present',
    history: [
      { date: '2026-10-02', status: 'Present', topic: 'SSC Geometry - Similarity Theorems' },
      { date: '2026-10-01', status: 'Present', topic: 'SSC Science - Chemical Reactions' },
      { date: '2026-09-30', status: 'Present', topic: 'SSC Algebra - Quadratic Equations' },
      { date: '2026-09-29', status: 'Present', topic: 'SSC Geometry - Construction Practice' },
      { date: '2026-09-28', status: 'Absent', topic: 'SSC Science 1 - Gravitation Numericals' }
    ]
  },
  {
    studentId: 'STU-1002',
    studentName: 'Sneha Kulkarni',
    standard: 'Standard 12 (HSC)',
    totalLectures: 40,
    attendedLectures: 39,
    percentage: 97.5,
    lastMarkedDate: '2026-10-02',
    status: 'Present',
    history: [
      { date: '2026-10-02', status: 'Present', topic: 'HSC Physics - Wave Optics' },
      { date: '2026-10-01', status: 'Present', topic: 'HSC Chemistry - Chemical Kinetics' },
      { date: '2026-09-30', status: 'Present', topic: 'HSC Physics - Superposition of Waves' }
    ]
  },
  {
    studentId: 'STU-1003',
    studentName: 'Pranav Patil',
    standard: 'Standard 9',
    totalLectures: 30,
    attendedLectures: 26,
    percentage: 86.7,
    lastMarkedDate: '2026-10-02',
    status: 'Present',
    history: [
      { date: '2026-10-02', status: 'Present', topic: 'Class 9 Maths - Triangles Congruence' },
      { date: '2026-10-01', status: 'Absent', topic: 'Class 9 Science - Current Electricity' }
    ]
  },
  {
    studentId: 'STU-1004',
    studentName: 'Ananya Joshi',
    standard: 'Standard 8',
    totalLectures: 28,
    attendedLectures: 27,
    percentage: 96.4,
    lastMarkedDate: '2026-10-02',
    status: 'Present',
    history: [
      { date: '2026-10-02', status: 'Present', topic: 'Class 8 Science - Inside the Atom' }
    ]
  },
  {
    studentId: 'STU-1005',
    studentName: 'Omkar Rane',
    standard: 'Special: AI & Stock Market',
    totalLectures: 20,
    attendedLectures: 19,
    percentage: 95.0,
    lastMarkedDate: '2026-10-01',
    status: 'Present',
    history: [
      { date: '2026-10-01', status: 'Present', topic: 'Generative AI - Prompt Engineering Lab' }
    ]
  }
];

// -------------------------------------------------------------
// Student Doubts & Q&A Box Data
// -------------------------------------------------------------
const DEFAULT_DOUBTS = [
  {
    id: 'DBT-101',
    studentId: 'STU-1001',
    studentName: 'Rahul Shinde',
    standard: 'Standard 10 (SSC)',
    subject: 'Mathematics Part 2 (Geometry)',
    chapter: 'Chapter 2: Pythagoras Theorem',
    question: 'Sir, what is the best shortcut to prove Apollonius Theorem in 4-mark Board questions?',
    date: '2026-10-01',
    status: 'Resolved',
    reply: 'Rahul, draw a perpendicular from the vertex to the opposite base and use Pythagoras on the two acute/obtuse triangles. I have added a step-by-step 3-line proof in your Geometry notes repository.',
    repliedBy: 'Nikhillesh Bhatkar Sir',
    replyDate: '2026-10-01'
  },
  {
    id: 'DBT-102',
    studentId: 'STU-1002',
    studentName: 'Sneha Kulkarni',
    standard: 'Standard 12 (HSC)',
    subject: 'Physics',
    chapter: 'Chapter 7: Wave Optics',
    question: 'Sir, how to determine whether fringe width changes when the entire Young\'s Double Slit apparatus is immersed in water?',
    date: '2026-10-02',
    status: 'Resolved',
    reply: 'Sneha, remember fringe width β = λD/d. Since wavelength in medium λ\' = λ/μ (refractive index μ > 1), the fringe width decreases by a factor of μ. We will practice 3 numericals on this tomorrow in class.',
    repliedBy: 'Amit Pawaskar Sir',
    replyDate: '2026-10-02'
  },
  {
    id: 'DBT-103',
    studentId: 'STU-1003',
    studentName: 'Pranav Patil',
    standard: 'Standard 9',
    subject: 'Science Part 1',
    chapter: 'Chapter 3: Current Electricity',
    question: 'Sir, difference between EMF of a cell and Potential Difference across a resistor?',
    date: '2026-10-02',
    status: 'Pending',
    reply: '',
    repliedBy: '',
    replyDate: ''
  }
];

// -------------------------------------------------------------
// Fee Receipts & Transaction Records Data
// -------------------------------------------------------------
const DEFAULT_RECEIPTS = [
  {
    receiptNo: 'REC-2026-081',
    studentId: 'STU-1001',
    studentName: 'Rahul Shinde',
    parentName: 'Suresh Shinde',
    standard: 'Standard 10 (SSC)',
    amount: 1000,
    term: 'Month of October 2026',
    paymentMode: 'UPI (GPay)',
    transactionId: 'UPI/261001/982211',
    date: '2026-10-01',
    status: 'Completed',
    collectedBy: 'Nikhillesh Bhatkar'
  },
  {
    receiptNo: 'REC-2026-082',
    studentId: 'STU-1002',
    studentName: 'Sneha Kulkarni',
    parentName: 'Milind Kulkarni',
    standard: 'Standard 12 (HSC)',
    amount: 5000,
    term: 'Physics & Chemistry Term 1',
    paymentMode: 'UPI (PhonePe)',
    transactionId: 'UPI/260928/774411',
    date: '2026-09-28',
    status: 'Completed',
    collectedBy: 'Nikhillesh Bhatkar'
  },
  {
    receiptNo: 'REC-2026-083',
    studentId: 'STU-1004',
    studentName: 'Ananya Joshi',
    parentName: 'Vikas Joshi',
    standard: 'Standard 8',
    amount: 800,
    term: 'Month of October 2026',
    paymentMode: 'Cash',
    transactionId: 'CASH-REC-083',
    date: '2026-10-01',
    status: 'Completed',
    collectedBy: 'Nikhillesh Bhatkar'
  },
  {
    receiptNo: 'REC-2026-084',
    studentId: 'STU-1005',
    studentName: 'Omkar Rane',
    parentName: 'Subhash Rane',
    standard: 'Special: AI & Stock Market',
    amount: 3500,
    term: 'Special Course Bundle Admission',
    paymentMode: 'UPI (Paytm)',
    transactionId: 'UPI/260801/838009',
    date: '2026-08-01',
    status: 'Completed',
    collectedBy: 'Nikhillesh Bhatkar'
  }
];

// -------------------------------------------------------------
// Live Batch Timetable Data
// -------------------------------------------------------------
const DEFAULT_TIMETABLE = [
  {
    standard: 'Standard 8',
    days: 'Monday to Friday',
    time: '4:00 PM – 5:00 PM',
    subjects: 'Mathematics & General Science',
    faculty: 'Nikhillesh Bhatkar Sir',
    room: 'Classroom 1'
  },
  {
    standard: 'Standard 9',
    days: 'Monday to Friday',
    time: '5:00 PM – 6:00 PM',
    subjects: 'Algebra, Geometry & Science',
    faculty: 'Nikhillesh Bhatkar Sir',
    room: 'Classroom 1'
  },
  {
    standard: 'Standard 10 (SSC)',
    days: 'Monday to Saturday',
    time: '6:00 PM – 7:30 PM',
    subjects: 'SSC Maths 1 & 2, Science & Technology',
    faculty: 'Nikhillesh Bhatkar Sir',
    room: 'Main Hall'
  },
  {
    standard: 'Standard 12 (HSC)',
    days: 'Monday to Saturday',
    time: '7:30 PM – 9:00 PM',
    subjects: 'Physics, Chemistry & Mathematics',
    faculty: 'Amit Pawaskar Sir & Nikhillesh Sir',
    room: 'Main Hall'
  },
  {
    standard: 'Special: Stock Market',
    days: 'Saturday & Sunday',
    time: '2:30 PM – 4:00 PM',
    subjects: 'Technical Analysis & Practical Trading Lab',
    faculty: 'Nikhillesh Bhatkar',
    room: 'Digital Lab'
  },
  {
    standard: 'Special: AI & Generative AI',
    days: 'Saturday & Sunday',
    time: '11:00 AM – 12:30 PM',
    subjects: 'Prompt Engineering, LLMs & AI Tools',
    faculty: 'Nikhillesh Bhatkar',
    room: 'Digital Lab'
  }
];

// -------------------------------------------------------------
// Hall of Fame & Toppers Data
// -------------------------------------------------------------
const DEFAULT_TOPPERS = [
  {
    name: 'Sayali Sawant',
    score: '96.4%',
    exam: 'SSC Board Exam',
    year: '2025',
    school: 'Sangameshwar High School',
    subjects: 'Maths: 100/100 • Science: 98/100',
    quote: 'Nikhillesh Sir\'s chapter-wise preliminary tests and formula notes gave me the confidence to score 100 in Mathematics!',
    badge: '🏆 Academy Rank 1'
  },
  {
    name: 'Aditya Kadam',
    score: '95.2%',
    exam: 'SSC Board Exam',
    year: '2025',
    school: 'Ninavi Secondary School',
    subjects: 'Maths: 98/100 • Science: 96/100',
    quote: 'The small batch size and individual doubt sessions helped clear all tricky Geometry and Physics concepts.',
    badge: '🥇 Gold Merit'
  },
  {
    name: 'Prathamesh Shirke',
    score: '93.8%',
    exam: 'HSC Science Board Exam',
    year: '2025',
    school: 'Sangameshwar Junior College',
    subjects: 'Physics: 95/100 • Chemistry: 94/100',
    quote: 'Amit Pawaskar Sir\'s numerical problem-solving sessions made HSC Physics intuitive and scoring.',
    badge: '⭐ HSC Distinction'
  },
  {
    name: 'Riddhi Kulkarni',
    score: '94.6%',
    exam: 'SSC Board Exam',
    year: '2024',
    school: 'Navnirman Vidyalaya',
    subjects: 'Maths: 99/100 • Science: 95/100',
    quote: 'Regular Sunday mock board tests eliminated exam anxiety completely. Best coaching in Sangameshwar!',
    badge: '🏆 SSC Star Performer'
  }
];

// -------------------------------------------------------------
// Free 10-Question Interactive Mock MCQ Quiz
// -------------------------------------------------------------
const DEFAULT_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'In quadratic equation ax² + bx + c = 0, if the discriminant Δ = b² - 4ac > 0, the roots are:',
    options: ['Real and equal', 'Real and unequal', 'Not real', 'Zero'],
    correctIndex: 1,
    explanation: 'When Δ > 0, the roots are real and unequal. If Δ = 0, roots are real and equal.'
  },
  {
    id: 2,
    question: 'According to Kepler\'s Third Law of planetary motion, the square of orbital period (T²) is proportional to:',
    options: ['r', 'r²', 'r³', '1/r²'],
    correctIndex: 2,
    explanation: 'Kepler\'s 3rd Law states that T² ∝ r³, where r is the mean distance of a planet from the Sun.'
  },
  {
    id: 3,
    question: 'What is the value of Determinant D for equations 3x + 2y = 11 and 2x + 3y = 4?',
    options: ['5', '-5', '13', '0'],
    correctIndex: 0,
    explanation: 'D = | 3  2 | = (3×3) - (2×2) = 9 - 4 = 5.'
  },
  {
    id: 4,
    question: 'Which of the following is a non-metal that is liquid at room temperature?',
    options: ['Mercury', 'Bromine', 'Gallium', 'Iodine'],
    correctIndex: 1,
    explanation: 'Bromine (Br) is the only liquid non-metal at standard room temperature. Mercury is a liquid metal.'
  },
  {
    id: 5,
    question: 'If triangle ABC ~ triangle PQR with A(ΔABC)/A(ΔPQR) = 81/49, and AB = 18 cm, what is PQ?',
    options: ['12 cm', '14 cm', '16 cm', '9 cm'],
    correctIndex: 1,
    explanation: 'By Theorem of Areas of Similar Triangles: Area Ratio = (AB/PQ)². So 81/49 = (18/PQ)² => 9/7 = 18/PQ => PQ = 14 cm.'
  },
  {
    id: 6,
    question: 'The SI unit of Gravitational Constant G is:',
    options: ['N m²/kg²', 'N kg²/m²', 'm/s²', 'N/kg'],
    correctIndex: 0,
    explanation: 'From F = G(m1·m2)/r², G = F·r²/(m1·m2), giving units N·m²/kg².'
  },
  {
    id: 7,
    question: 'What is the total number of periods and groups in Modern Periodic Table?',
    options: ['7 periods & 18 groups', '8 periods & 17 groups', '7 periods & 8 groups', '6 periods & 16 groups'],
    correctIndex: 0,
    explanation: 'The Modern Periodic Table designed by Henry Moseley consists of 7 horizontal rows (periods) and 18 vertical columns (groups).'
  },
  {
    id: 8,
    question: 'For an Arithmetic Progression (AP) with a = 5 and d = 3, what is the 10th term (t₁₀)?',
    options: ['32', '35', '30', '33'],
    correctIndex: 0,
    explanation: 'tₙ = a + (n-1)d. Therefore, t₁₀ = 5 + (10-1)×3 = 5 + 27 = 32.'
  },
  {
    id: 9,
    question: 'In HSC Physics, what is the Moment of Inertia of a uniform disc of mass M and radius R about its central transverse axis?',
    options: ['MR²', '1/2 MR²', '2/5 MR²', '1/12 MR²'],
    correctIndex: 1,
    explanation: 'The moment of inertia of a solid circular disc about its transverse central axis is I = 1/2 MR².'
  },
  {
    id: 10,
    question: 'In Candlestick charting, a long lower shadow with a small body at the upper end during a downtrend is called a:',
    options: ['Doji', 'Hammer', 'Shooting Star', 'Bearish Engulfing'],
    correctIndex: 1,
    explanation: 'A Hammer candlestick indicates that buyers entered aggressively at low prices, signaling a potential bullish reversal.'
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
  const storedPapers = JSON.parse(localStorage.getItem('academy_papers') || '[]');
  if (!localStorage.getItem('academy_papers') || storedPapers.length < DEFAULT_PAPERS.length) {
    localStorage.setItem('academy_papers', JSON.stringify(DEFAULT_PAPERS));
  }
  if (!localStorage.getItem('academy_notices')) {
    localStorage.setItem('academy_notices', JSON.stringify(DEFAULT_NOTICES));
  }
  if (!localStorage.getItem('academy_inquiries')) {
    localStorage.setItem('academy_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
  }
  if (!localStorage.getItem('academy_tests')) {
    localStorage.setItem('academy_tests', JSON.stringify(DEFAULT_TEST_RESULTS));
  }
  if (!localStorage.getItem('academy_attendance')) {
    localStorage.setItem('academy_attendance', JSON.stringify(DEFAULT_ATTENDANCE));
  }
  if (!localStorage.getItem('academy_doubts')) {
    localStorage.setItem('academy_doubts', JSON.stringify(DEFAULT_DOUBTS));
  }
  if (!localStorage.getItem('academy_receipts')) {
    localStorage.setItem('academy_receipts', JSON.stringify(DEFAULT_RECEIPTS));
  }
  if (!localStorage.getItem('academy_timetable')) {
    localStorage.setItem('academy_timetable', JSON.stringify(DEFAULT_TIMETABLE));
  }
  if (!localStorage.getItem('academy_toppers')) {
    localStorage.setItem('academy_toppers', JSON.stringify(DEFAULT_TOPPERS));
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

  getPapers: () => JSON.parse(localStorage.getItem('academy_papers') || JSON.stringify(DEFAULT_PAPERS)),
  savePapers: (papers) => localStorage.setItem('academy_papers', JSON.stringify(papers)),

  getNotices: () => JSON.parse(localStorage.getItem('academy_notices') || '[]'),
  saveNotices: (notices) => localStorage.setItem('academy_notices', JSON.stringify(notices)),

  getInquiries: () => JSON.parse(localStorage.getItem('academy_inquiries') || '[]'),
  saveInquiries: (inquiries) => localStorage.setItem('academy_inquiries', JSON.stringify(inquiries)),

  getTestResults: () => JSON.parse(localStorage.getItem('academy_tests') || JSON.stringify(DEFAULT_TEST_RESULTS)),
  saveTestResults: (tests) => localStorage.setItem('academy_tests', JSON.stringify(tests)),

  getAttendance: () => JSON.parse(localStorage.getItem('academy_attendance') || JSON.stringify(DEFAULT_ATTENDANCE)),
  saveAttendance: (att) => localStorage.setItem('academy_attendance', JSON.stringify(att)),

  getDoubts: () => JSON.parse(localStorage.getItem('academy_doubts') || JSON.stringify(DEFAULT_DOUBTS)),
  saveDoubts: (doubts) => localStorage.setItem('academy_doubts', JSON.stringify(doubts)),

  getReceipts: () => JSON.parse(localStorage.getItem('academy_receipts') || JSON.stringify(DEFAULT_RECEIPTS)),
  saveReceipts: (receipts) => localStorage.setItem('academy_receipts', JSON.stringify(receipts)),

  getTimetable: () => JSON.parse(localStorage.getItem('academy_timetable') || JSON.stringify(DEFAULT_TIMETABLE)),
  saveTimetable: (tt) => localStorage.setItem('academy_timetable', JSON.stringify(tt)),

  getToppers: () => JSON.parse(localStorage.getItem('academy_toppers') || JSON.stringify(DEFAULT_TOPPERS)),
  saveToppers: (toppers) => localStorage.setItem('academy_toppers', JSON.stringify(toppers)),

  getQuizQuestions: () => DEFAULT_QUIZ_QUESTIONS,

  resetToDefaults: () => {
    localStorage.setItem('academy_admin', JSON.stringify(DEFAULT_ADMIN));
    localStorage.setItem('academy_students', JSON.stringify(DEFAULT_STUDENTS));
    localStorage.setItem('academy_notes', JSON.stringify(DEFAULT_NOTES));
    localStorage.setItem('academy_papers', JSON.stringify(DEFAULT_PAPERS));
    localStorage.setItem('academy_notices', JSON.stringify(DEFAULT_NOTICES));
    localStorage.setItem('academy_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
    localStorage.setItem('academy_tests', JSON.stringify(DEFAULT_TEST_RESULTS));
    localStorage.setItem('academy_attendance', JSON.stringify(DEFAULT_ATTENDANCE));
    localStorage.setItem('academy_doubts', JSON.stringify(DEFAULT_DOUBTS));
    localStorage.setItem('academy_receipts', JSON.stringify(DEFAULT_RECEIPTS));
    localStorage.setItem('academy_timetable', JSON.stringify(DEFAULT_TIMETABLE));
    localStorage.setItem('academy_toppers', JSON.stringify(DEFAULT_TOPPERS));
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
