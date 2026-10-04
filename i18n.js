// ------------------------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Multi-Language (i18n) Engine
// English | मराठी (Marathi) | हिंदी (Hindi)
// ------------------------------------------------------------------

const TRANSLATIONS = {
  en: {
    // Nav
    'nav_about': 'About',
    'nav_vision': 'Vision & Mission',
    'nav_courses': 'Courses',
    'nav_special_courses': 'Special Courses',
    'nav_syllabus': 'Syllabus',
    'nav_fees': 'Fees',
    'nav_faculty': 'Faculty',
    'nav_testimonials': 'Testimonials',
    'nav_gallery': 'Gallery',
    'nav_notes': 'Notes & Board Papers',
    'nav_contact': 'Contact',
    'nav_enroll': 'Enroll',
    'nav_login': '🔐 Portal Login',

    // Hero
    'hero_marathi_tagline': '|| Complete & Quality Education for 8th, 9th, 10th (SSC) & 12th (HSC) ||',
    'hero_title': 'Quality Tuition for Classes 8, 9, 10 & 12',
    'hero_subtext': 'Maharashtra State Board Coaching • Special Courses in Stock Market & Artificial Intelligence',
    'hero_btn_enroll': 'Enroll Now',
    'hero_btn_demo': 'Book Free Demo Class 🎯',
    'hero_btn_whatsapp': '💬 WhatsApp Us',

    // Trust Bar
    'trust_concept': '💡 Concept-Oriented Learning',
    'trust_faculty': '👨‍🏫 Expert Faculty (BE Mech / Lecturers)',
    'trust_results': '🏆 Proven Board Exam Results',
    'trust_fees': '💰 Affordable Monthly Fees',

    // About & Why Choose Us
    'about_title': 'About Nikhillesh Bhatkar Learning Academy',
    'about_subtitle': 'Empowering students in Sangameshwar with conceptual clarity and exam confidence',
    'about_p1': 'Nikhillesh Bhatkar Learning Academy is dedicated to providing high-quality, concept-driven coaching for school and higher secondary students in Sangameshwar. We believe every student has the potential to excel when guided with patience, structured study techniques, and rigorous practice.',
    'about_p2': 'Our focus extends beyond rote memorization — we build strong foundational understanding in Mathematics and Science, preparing students for State Board excellence and future competitive hurdles.',
    'why_title': 'Why Choose Us?',
    'why_1_title': 'Concept-Based Learning',
    'why_1_desc': 'Clear explanations of every theorem and scientific principle with real-world examples.',
    'why_2_title': 'Experienced Faculty',
    'why_2_desc': 'Classes led by experienced educators including Engineering graduates & Polytechnic College Lecturers.',
    'why_3_title': 'Regular Tests & Feedback',
    'why_3_desc': 'Weekly chapter tests, model board exams, and personalized feedback sessions for parents.',
    'why_4_title': 'Affordable Fee Structure',
    'why_4_desc': 'High-quality education accessible to every family with flexible monthly fee options.',

    // Vision & Mission
    'vm_badge': '🎯 OUR CORE PURPOSE & PHILOSOPHY',
    'vm_main_title': 'Our Vision & Mission',
    'vm_main_subtitle': 'Inspiring academic distinction, fostering analytical inquiry, and cultivating 21st-century technological and financial intelligence.',
    'vm_vision_tag': 'THE FUTURE HORIZON',
    'vm_vision_title': 'Our Vision',
    'vm_vision_quote': '“To be the benchmark learning academy that transcends rote memorization — transforming every student into a conceptually fearless scholar, an agile analytical thinker, and a future-ready leader equipped with 21st-century technological and financial intelligence.”',
    'vm_v1_title': 'Academic Distinction',
    'vm_v1_desc': 'Unmatched conceptual depth in Maharashtra Board SSC & HSC examinations.',
    'vm_v2_title': 'Tech-Forward Generation',
    'vm_v2_desc': 'Fostering practical expertise in Artificial Intelligence, data analysis, and modern problem solving.',
    'vm_v3_title': 'Financial Literacy from Youth',
    'vm_v3_desc': 'Instilling disciplined wealth consciousness, risk awareness, and sound financial decision making.',
    'vm_mission_tag': 'OUR DAILY COMMITMENT',
    'vm_mission_title': 'Our Mission',
    'vm_mission_quote': '“To deliver personalized, high-rigour, student-centered education that turns academic apprehension into absolute confidence, through expert faculty mentorship, cutting-edge study resources, and unyielding dedication to student success.”',
    'vm_m1_title': 'First-Principles Pedagogy',
    'vm_m1_desc': 'Demystifying complex Math & Science principles into intuitive, real-world models.',
    'vm_m2_title': 'Individual Attention & Doubt Clearance',
    'vm_m2_desc': 'Small batches ensuring every student’s questions are resolved with patience and care.',
    'vm_m3_title': 'Continuous Exam Readiness',
    'vm_m3_desc': '5-year PYQ mastery, weekly diagnostic tests, and personalized performance feedback.',
    'vm_values_heading': 'Our Core Guiding Values',
    'val_1_title': 'Excellence & Integrity',
    'val_1_desc': 'Honest guidance, transparent evaluation, and relentless pursuit of academic mastery.',
    'val_2_title': 'Conceptual Depth',
    'val_2_desc': 'No shortcuts or rote cramming — deep conceptual clarity that lasts a lifetime.',
    'val_3_title': 'Student-First Mentorship',
    'val_3_desc': 'Every child is unique. We provide tailored academic and emotional support to flourish.',
    'val_4_title': 'Innovation & Future Skills',
    'val_4_desc': 'Pioneering modern skills in Financial Literacy and Artificial Intelligence alongside schooling.',

    // Courses
    'courses_title': 'Our Academic Courses',
    'courses_subtitle': 'Maharashtra State Board (Balbharati) Curriculum Coaching',
    'c8_title': 'Standard 8',
    'c8_desc': 'Building strong foundations in Mathematics and General Science for high school.',
    'c9_title': 'Standard 9',
    'c9_desc': 'In-depth conceptual preparation to create a seamless stepping stone for the SSC Board year.',
    'c10_title': 'Standard 10 (SSC)',
    'c10_desc': 'Intensive board exam coaching: Algebra, Geometry, Science 1 & 2 with question bank solving.',
    'c12_title': 'Standard 12 (HSC)',
    'c12_desc': 'Specialized subject coaching in Mathematics, Physics & Chemistry with numericals mastery.',
    'btn_view_syllabus': 'View Syllabus & Chapters →',

    // Special Courses
    'special_title': 'Special Skill Development Courses',
    'special_subtitle': 'Practical 21st-century skills for students, youth, and enthusiasts',
    'stock_title': '📈 Stock Market & Financial Markets',
    'stock_badge': 'Special Skill Course',
    'stock_desc': 'Learn how stock markets work, fundamental & technical analysis, chart reading, risk management, and smart investing habits.',
    'stock_btn': 'Enroll in Stock Market Course →',
    'ai_title': '🤖 AI & Generative AI Mastery',
    'ai_badge': 'Cutting-Edge Skill Course',
    'ai_desc': 'Hands-on practical course in Artificial Intelligence, ChatGPT, Claude, Prompt Engineering, and AI productivity tools.',
    'ai_btn': 'Enroll in AI Course →',

    // Syllabus
    'syllabus_title': 'Maharashtra State Board Syllabus',
    'syllabus_subtitle': 'Official Balbharati chapter breakdown for Mathematics & Science',

    // Fees
    'fees_title': 'Fee Structure',
    'fees_subtitle': 'Affordable and transparent pricing for quality coaching',
    'th_class': 'Class / Standard',
    'th_fee': 'Fee Amount',
    'th_duration': 'Duration / Terms',
    'th_total': 'Total Course Fee',

    // Faculty
    'faculty_title': 'Our Faculty',
    'faculty_nikhillesh_role': 'Founder & Lead Educator',
    'faculty_nikhillesh_desc': 'Passionate educator and active market practitioner with 15 years of academic teaching experience and 5 years of financial market trading expertise. Committed to building strong mathematical foundations, analytical reasoning, and 21st-century practical skills.',
    'faculty_amit_role': 'Physics & Chemistry Expert',
    'faculty_amit_desc': 'BE Mechanical, Lecturer in Polytechnic College. Brings in‑depth subject knowledge, practical problem-solving, and Board exam techniques.',
    'faculty_creds_title': '📜 Key Qualifications & Certifications',
    'cred_be_mech': 'BE Mechanical Engineering (Bachelor of Engineering)',
    'cred_teaching_exp': '15 Years of Academic Teaching Experience (State Board Maths & Science)',
    'cred_trading_exp': '5 Years of Active Trading Experience in Financial & Capital Markets',
    'cred_malkan': 'Completed ABCT 360 Trading Course with Vishal Malkan',
    'cred_ffa': 'Completed Financial Freedom Accelerator (FFA) Futures & Options Course',
    'cred_be10x': 'Completed AI Master Course with Be10x (Generative AI & Productivity Tools)',
    'cred_polytechnic': 'BE Mechanical Engineering',
    'cred_poly_lect': 'Lecturer in Polytechnic College — Engineering & Applied Sciences',
    'cred_amit_subjects': 'Specialist in HSC & SSC State Board Physics & Chemistry Numericals',

    // Testimonials
    'testimonials_title': 'What Our Students & Parents Say',

    // Gallery
    'gallery_title': 'Academy Gallery',
    'gallery_hint': 'Photos of our classrooms, study sessions, and events.',

    // Contact
    'contact_title': 'Contact Us & Location',
    'contact_subtitle': 'Reach out for admissions, free demo classes, or visit our academy in Sangameshwar',
    'addr_title': 'Academy Address',
    'addr_text': 'At Post Sangameshwar, Near Ninavi Temple, Dist. Ratnagiri, Maharashtra – 415611',
    'form_msg_title': 'Send Us a Direct Message',
    'form_name_placeholder': 'Your Full Name',
    'form_email_placeholder': 'Your Email Address',
    'form_msg_placeholder': 'Your Message (e.g. Inquiring for Standard 10 / AI Course)',
    'form_btn_send': 'Send Message',
    'map_title': 'Find Us on Map',
    'btn_directions': '🚗 Get Directions on Google Maps',

    // Notes & Board Papers Hub
    'notes_hero_badge': '📚 Free & Enrolled Learning Resources',
    'notes_hero_title': 'Study Notes & Maharashtra Board Question Papers',
    'notes_hero_sub': 'Chapter-wise PDF summaries, formula books, Previous Year Board Papers (PYQs), and SCERT question banks for Maharashtra State Board.',
    'notes_search_placeholder': '🔍 Search notes or board papers by year, chapter, marks, subject...',
    'res_type_all': '🌟 All Materials',
    'res_type_notes': '📖 Study Notes & Formulas',
    'res_type_papers': '📝 Board Question Papers (PYQ)',
    'res_type_solutions': '🎯 Model Solutions & Keys',
    'res_type_banks': '📋 SCERT Question Banks',
    'notes_filter_all': 'All Standards',
    'notes_filter_8': 'Class 8',
    'notes_filter_9': 'Class 9',
    'notes_filter_10': 'Class 10 (SSC)',
    'notes_filter_12': 'Class 12 (HSC)',
    'notes_filter_stock': '📈 Stock Market',
    'notes_filter_ai': '🤖 AI & GenAI',
    'notes_cta_title': 'Are you an enrolled academy student?',
    'notes_cta_desc': 'Log in to the Student Portal to access full question banks, class-specific test papers, and model board solutions.',
    'notes_cta_btn': 'Go to Student Portal Login →',

    // Enrollment Form
    'enroll_title': 'Student Enrollment Form',
    'enroll_subtitle': 'Fill in the details below and we will contact you to confirm your admission.',
    'enroll_leg_type': 'Admission / Registration Type',
    'enroll_reg_adm': 'Regular Admission (Enroll for full academic session)',
    'enroll_demo_adm': '🎯 Book a Free 2-Day Demo Class (Experience our teaching first)',
    'enroll_leg_student': 'Student Information',
    'enroll_lbl_name': 'Student\'s Full Name',
    'enroll_lbl_dob': 'Date of Birth',
    'enroll_lbl_gender': 'Gender',
    'enroll_lbl_course': 'Course / Class to Enroll In',
    'enroll_lbl_school': 'Previous School / College',
    'enroll_leg_parent': 'Parent / Guardian Details',
    'enroll_lbl_pname': 'Parent / Guardian Name',
    'enroll_lbl_phone': 'Phone Number',
    'enroll_lbl_email': 'Email Address',
    'enroll_lbl_address': 'Home Address',
    'enroll_leg_extra': 'Additional Information',
    'enroll_lbl_source': 'How did you hear about us?',
    'enroll_lbl_remarks': 'Any remarks or questions?',
    'enroll_btn_submit': 'Submit Enrollment',
    'enroll_btn_clear': 'Clear Form',

    // Login Portal
    'login_tab_student': '🎓 Student Portal',
    'login_tab_admin': '⚙️ Admin Dashboard',
    'login_student_title': 'Student Portal Login',
    'login_student_sub': 'Access your class notes, formula books, test schedules, and notifications.',
    'login_lbl_stuid': 'Student ID or Mobile Number',
    'login_lbl_stupin': 'PIN / Password',
    'login_btn_student': 'Login to Student Portal →',
    'login_admin_title': 'Admin Dashboard Login',
    'login_admin_sub': 'Manage students, study notes, fee records, and announcements.',
    'login_lbl_admuser': 'Admin Username or Email',
    'login_lbl_admpass': 'Admin Password',
    'login_btn_admin': 'Login to Admin Dashboard →',
    'login_demo_title': '⚡ Quick Demo Credentials (Click to Auto-fill)',

    // Common
    'btn_logout': 'Logout',
    'footer_rights': 'All rights reserved.'
  },

  mr: {
    // Nav
    'nav_about': 'आमच्याबद्दल',
    'nav_vision': 'उद्दिष्टे व ध्येय',
    'nav_courses': 'कोर्सेस',
    'nav_special_courses': 'विशेष कोर्सेस',
    'nav_syllabus': 'अभ्यासक्रम',
    'nav_fees': 'फी रचना',
    'nav_faculty': 'शिक्षक वर्ग',
    'nav_testimonials': 'अभिप्राय',
    'nav_gallery': 'गॅलरी',
    'nav_notes': 'नोट्स व प्रश्नपत्रिका',
    'nav_contact': 'संपर्क',
    'nav_enroll': 'प्रवेश घ्या',
    'nav_login': '🔐 पोर्टल लॉगिन',

    // Hero
    'hero_marathi_tagline': '|| ८ वी, ९ वी, १० वी (SSC) व १२ वी (HSC) साठी परिपूर्ण व दर्जेदार शिक्षण ||',
    'hero_title': '८ वी, ९ वी, १० वी व १२ वी साठी दर्जेदार शिक्षण',
    'hero_subtext': 'महाराष्ट्र स्टेट बोर्ड कोचिंग • शेअर मार्केट व आर्टिफिशिअल इंटेलिजन्स (AI) चे विशेष कोर्सेस',
    'hero_btn_enroll': 'प्रवेश घ्या',
    'hero_btn_demo': 'मोफत २ दिवसांचा डेमो क्लास बुक करा 🎯',
    'hero_btn_whatsapp': '💬 व्हॉट्सॲपवर संपर्क करा',

    // Trust Bar
    'trust_concept': '💡 संकल्पना-आधारित शिक्षण',
    'trust_faculty': '👨‍🏫 तज्ज्ञ शिक्षक (BE Mech / पॉलिटेक्निक प्राध्यापक)',
    'trust_results': '🏆 बोर्ड परीक्षेत उत्तुंग यश',
    'trust_fees': '💰 परवडणारी मासिक फी रचना',

    // About & Why Choose Us
    'about_title': 'निखिलेश भाटकर लर्निंग अकॅडमीबद्दल',
    'about_subtitle': 'संगमेश्वरमधील विद्यार्थ्यांमध्ये संकल्पना स्पष्टता आणि आत्मविश्वास निर्माण करणारी संस्था',
    'about_p1': 'निखिलेश भाटकर लर्निंग अकॅडमी संगमेश्वरमधील शालेय व उच्च माध्यमिक विद्यार्थ्यांसाठी दर्जेदार व संकल्पना-आधारित शिक्षण देण्यासाठी समर्पित आहे. योग्य मार्गदर्शन आणि सराव यामुळे प्रत्येक विद्यार्थी प्रगती करू शकतो यावर आमचा दृढ विश्वास आहे.',
    'about_p2': 'फक्त पाठांतर न करता गणित आणि विज्ञान विषयातील मूळ संकल्पना पक्क्या करून आम्ही विद्यार्थ्यांना बोर्ड परीक्षेसाठी सज्ज करतो.',
    'why_title': 'आमचीच निवड का करावी?',
    'why_1_title': 'संकल्पना-आधारित शिक्षण',
    'why_1_desc': 'प्रत्येक प्रमेय आणि वैज्ञानिक नियमांचे सोप्या भाषेत व दैनंदिन उदाहरणांसह स्पष्टीकरण.',
    'why_2_title': 'अनुभवी व तज्ज्ञ शिक्षक',
    'why_2_desc': 'इंजिनिअरिंग पदवीधर व पॉलिटेक्निक कॉलेज प्राध्यापकांचे थेट व वैयक्तिक मार्गदर्शन.',
    'why_3_title': 'नियमित सराव चाचण्या',
    'why_3_desc': 'साप्ताहिक घटक चाचण्या, सराव बोर्ड पेपर्स आणि पालकांशी वैयक्तिक प्रगती चर्चा.',
    'why_4_title': 'परवडणारी फी रचना',
    'why_4_desc': 'प्रत्येक कुटुंबाला परवडेल अशी माफक मासिक फी आणि दर्जेदार शिक्षण.',

    // Vision & Mission
    'vm_badge': '🎯 आमची उद्दिष्टे व ध्येय',
    'vm_main_title': 'आमची दृष्टी व ध्येय (Vision & Mission)',
    'vm_main_subtitle': 'शैक्षणिक गुणवत्ता, वैचारिक स्पष्टता आणि २१व्या शतकातील तंत्रज्ञान व आर्थिक साक्षरतेचे परिपूर्ण मार्गदर्शन.',
    'vm_vision_tag': 'दूरदृष्टी व संकल्पना',
    'vm_vision_title': 'आमची दृष्टी (Our Vision)',
    'vm_vision_quote': '“केवळ घोकंपट्टी न करता प्रत्येक विद्यार्थ्याला सखोल संकल्पना समजणारा निडर अभ्यासक, विश्लेषणात्मक विचारवंत आणि २१व्या शतकातील AI व आर्थिक ज्ञानाने सुसज्ज भविष्यवेधी नागरिक घडवणे हे आमचे ध्येय आहे.”',
    'vm_v1_title': 'सर्वोच्च शैक्षणिक गुणवत्ता',
    'vm_v1_desc': 'महाराष्ट्र स्टेट बोर्ड SSC आणि HSC परीक्षांमध्ये १००% संकल्पनात्मक प्रभुत्व.',
    'vm_v2_title': 'तंत्रज्ञान-सक्षम विद्यार्थी',
    'vm_v2_desc': 'आर्टिफिशिअल इंटेलिजन्स (AI), डेटा व आधुनिक समस्या निवारणात कौशल्य विकास.',
    'vm_v3_title': 'विद्यार्थीदशेतूनच आर्थिक साक्षरता',
    'vm_v3_desc': 'पैशाचे व्यवस्थापन, जोखीम नियंत्रण आणि शिस्तबद्ध आर्थिक जाणीव निर्माण करणे.',
    'vm_mission_tag': 'दैनंदिन कटिबद्धता',
    'vm_mission_title': 'आमचे ध्येय (Our Mission)',
    'vm_mission_quote': '“प्रत्येक विद्यार्थ्याच्या क्षमतेला वाव देऊन, तज्ज्ञ शिक्षकांच्या मार्गदर्शनातून आणि वैयक्तिक लक्ष देऊन अभ्यासाची भीती दूर करून आत्मविश्वास निर्माण करणारे शिक्षण देणे ही आमची प्रतिज्ञा आहे.”',
    'vm_m1_title': 'पायाभूत संकल्पनांवर भर',
    'vm_m1_desc': 'गणित व विज्ञानातील कठीण सूत्रे सहज सोप्या आणि व्यावहारिक उदाहरणांसह स्पष्ट करणे.',
    'vm_m2_title': 'वैयक्तिक लक्ष व शंका निवारण',
    'vm_m2_desc': 'मर्यादित बॅचेस जेणेकरून प्रत्येक विद्यार्थ्याच्या प्रत्येक शंकेचे तत्काळ निरसन होते.',
    'vm_m3_title': 'सातत्यपूर्ण परीक्षा सराव',
    'vm_m3_desc': 'मागील ५ वर्षांच्या बोर्ड प्रश्नपत्रिका, साप्ताहिक चाचण्या आणि वैयक्तिक प्रगती अहवाल.',
    'vm_values_heading': 'आमची मार्गदर्शक जीवनमूल्ये',
    'val_1_title': 'उत्कृष्टता व प्रामाणिकपणा',
    'val_1_desc': 'पारदर्शक मूल्यमापन, प्रामाणिक मार्गदर्शन आणि गुणवत्तेचा अखंड ध्यास.',
    'val_2_title': 'सखोल संकल्पनात्मक स्पष्टता',
    'val_2_desc': 'शॉर्टकट किंवा घोकंपट्टीला थारा नाही — आयुष्यभर उपयोगी पडणारे सखोल ज्ञान.',
    'val_3_title': 'विद्यार्थी-केंद्रीत दृष्टीकोन',
    'val_3_desc': 'प्रत्येक विद्यार्थ्याची शिकण्याची गती वेगळी असते, प्रत्येकाला यशासाठी वैयक्तिक साथ.',
    'val_4_title': 'नाविन्यता व आधुनिक कौशल्ये',
    'val_4_desc': 'शालेय अभ्यासासोबतच शेअर मार्केट व AI सारख्या २१व्या शतकातील तंत्रज्ञानाची जोड.',

    // Courses
    'courses_title': 'आमचे शैक्षणिक अभ्यासक्रम',
    'courses_subtitle': 'महाराष्ट्र स्टेट बोर्ड (बालभारती) अभ्यासक्रम मार्गदर्शन',
    'c8_title': 'इयत्ता ८ वी',
    'c8_desc': 'माध्यमिक शिक्षणासाठी गणित आणि सामान्य विज्ञानाचा भक्कम पाया तयार करणे.',
    'c9_title': 'इयत्ता ९ वी',
    'c9_desc': '१० वी बोर्डाच्या पूर्वतयारीसाठी सखोल संकल्पना अभ्यास व सराव.',
    'c10_title': 'इयत्ता १० वी (SSC)',
    'c10_desc': 'बोर्ड परीक्षेची परिपूर्ण तयारी: बीजगणित, भूमिती, विज्ञान १ व २ आणि प्रश्नपत्रिका सराव.',
    'c12_title': 'इयत्ता १२ वी (HSC)',
    'c12_desc': 'गणित, भौतिकशास्त्र (Physics) आणि रसायनशास्त्र (Chemistry) चे विशेष मार्गदर्शन.',
    'btn_view_syllabus': 'अभ्यासक्रम व धडे पहा →',

    // Special Courses
    'special_title': 'विशेष कौशल्य विकास कोर्सेस',
    'special_subtitle': '२१ व्या शतकातील उपयुक्त कौशल्यांचे प्रॅक्टिकल प्रशिक्षण',
    'stock_title': '📈 शेअर मार्केट व फायनान्शियल मार्केट्स',
    'stock_badge': 'विशेष कौशल्य कोर्स',
    'stock_desc': 'शेअर मार्केट कसे चालते, फंडामेंटल व टेक्निकल ॲनालिसिस, चार्ट रिडींग, रिस्क मॅनेजमेंट आणि गुंतवणुकीचे नियम शिका.',
    'stock_btn': 'शेअर मार्केट कोर्ससाठी प्रवेश घ्या →',
    'ai_title': '🤖 AI व जनरेटिव्ह AI मास्टरी',
    'ai_badge': 'आधुनिक तंत्रज्ञान कोर्स',
    'ai_desc': 'आर्टिफिशिअल इंटेलिजन्स, ChatGPT, Claude, प्रॉम्ट इंजिनिअरिंग आणि AI टूल्सचे प्रॅक्टिकल प्रशिक्षण.',
    'ai_btn': 'AI कोर्ससाठी प्रवेश घ्या →',

    // Syllabus
    'syllabus_title': 'महाराष्ट्र स्टेट बोर्ड अभ्यासक्रम',
    'syllabus_subtitle': 'गणित आणि विज्ञान विषयांचे बालभारतीनुसार संपूर्ण प्रकरणे',

    // Fees
    'fees_title': 'फी रचना',
    'fees_subtitle': 'दर्जेदार शिक्षणासाठी परवडणारी व पारदर्शक फी रचना',
    'th_class': 'इयत्ता / वर्ग',
    'th_fee': 'फी रक्कम',
    'th_duration': 'कालावधी',
    'th_total': 'एकूण फी',

    // Faculty
    'faculty_title': 'आमचे शिक्षक वर्ग',
    'faculty_nikhillesh_role': 'संस्थापक व प्रमुख मार्गदर्शक',
    'faculty_nikhillesh_desc': '१५ वर्षांचा प्रदीर्घ अध्यापन अनुभव आणि ५ वर्षांचा सक्रिय शेअर मार्केट ट्रेडिंग अनुभव असलेले समर्पित शिक्षक. विद्यार्थ्यांच्या पायाभूत संकल्पना, विश्लेषणात्मक विचारसरणी आणि आधुनिक कौशल्यांच्या विकासासाठी कटिबद्ध.',
    'faculty_amit_role': 'भौतिकशास्त्र व रसायनशास्त्र तज्ज्ञ',
    'faculty_amit_desc': 'BE मेकॅनिकल, पॉलिटेक्निक कॉलेज प्राध्यापक. विषयाचे सखोल ज्ञान, प्रॅक्टिकल मार्गदर्शन व बोर्ड परीक्षा तंत्रांचे उत्तम जाणकार.',
    'faculty_creds_title': '📜 शैक्षणिक पात्रता व प्रमाणपत्रे',
    'cred_be_mech': 'BE मेकॅनिकल इंजिनिअरिंग (Bachelor of Engineering)',
    'cred_teaching_exp': '१५ वर्षांचा अध्यापन अनुभव (महाराष्ट्र स्टेट बोर्ड गणित व विज्ञान)',
    'cred_trading_exp': '५ वर्षांचा शेअर मार्केट सक्रिय ट्रेडिंग अनुभव',
    'cred_malkan': 'विशाल मलकान सरांसोबत ABCT 360 ट्रेडिंग कोर्स यशस्वीरीत्या पूर्ण',
    'cred_ffa': 'फायनान्शियल फ्रीडम अ‍ॅक्सिलरेटर (FFA) फ्युचर्स व ऑप्शन्स (F&O) कोर्स पूर्ण',
    'cred_be10x': 'Be10x सोबत AI मास्टर कोर्स पूर्ण (ChatGPT, GenAI व AI टूल्स)',
    'cred_polytechnic': 'BE मेकॅनिकल इंजिनिअरिंग',
    'cred_poly_lect': 'पॉलिटेक्निक कॉलेज प्राध्यापक — इंजिनिअरिंग व ॲप्लाईड सायन्स',
    'cred_amit_subjects': 'HSC व SSC स्टेट बोर्ड भौतिकशास्त्र व रसायनशास्त्र न्यूमेरिकल्स तज्ज्ञ',

    // Testimonials
    'testimonials_title': 'विद्यार्थी व पालकांचे मनोगत',

    // Gallery
    'gallery_title': 'अकॅडमी गॅलरी',
    'gallery_hint': 'आमचे वर्ग, विद्यार्थी आणि उपक्रमांची छायाचित्रे.',

    // Contact
    'contact_title': 'संपर्क व पत्ता',
    'contact_subtitle': 'प्रवेश, मोफत डेमो क्लास किंवा भेटीसाठी संपर्क साधा',
    'addr_title': 'अकॅडमीचा पत्ता',
    'addr_text': 'मु. पो. संगमेश्वर, निनावी मंदिराशेजारी, जि. रत्नागिरी, महाराष्ट्र – ४१५६११',
    'form_msg_title': 'आम्हाला थेट संदेश पाठवा',
    'form_name_placeholder': 'आपले पूर्ण नाव',
    'form_email_placeholder': 'आपला ईमेल आयडी',
    'form_msg_placeholder': 'आपला संदेश (उदा. १० वी प्रवेश / AI कोर्सबाबत चौकशी)',
    'form_btn_send': 'संदेश पाठवा',
    'map_title': 'नकाशावर आमचे स्थान',
    'btn_directions': '🚗 गुगल मॅपवर दिशा मिळवा',

    // Notes & Board Papers Hub
    'notes_hero_badge': '📚 मोफत व अकॅडमी विद्यार्थ्यांसाठी अभ्यास साहित्य',
    'notes_hero_title': 'अभ्यास नोट्स आणि महाराष्ट्र बोर्ड प्रश्नपत्रिका',
    'notes_hero_sub': 'धडानिहाय PDF सारांश, सूत्रपुस्तिका, मागील वर्षांच्या बोर्ड प्रश्नपत्रिका (PYQs) आणि SCERT प्रश्नपेढी.',
    'notes_search_placeholder': '🔍 वर्ष, विषय, प्रकरण, किंवा प्रश्नपत्रिकेनुसार शोधा...',
    'res_type_all': '🌟 सर्व साहित्य',
    'res_type_notes': '📖 अभ्यास नोट्स व सूत्रे',
    'res_type_papers': '📝 बोर्ड प्रश्नपत्रिका (PYQ)',
    'res_type_solutions': '🎯 मॉडेल उत्तरे व सोल्यूशन्स',
    'res_type_banks': '📋 SCERT प्रश्नपेढी',
    'notes_filter_all': 'सर्व इयत्ता',
    'notes_filter_8': 'इयत्ता ८ वी',
    'notes_filter_9': 'इयत्ता ९ वी',
    'notes_filter_10': 'इयत्ता १० वी (SSC)',
    'notes_filter_12': 'इयत्ता १२ वी (HSC)',
    'notes_filter_stock': '📈 शेअर मार्केट',
    'notes_filter_ai': '🤖 AI व GenAI',
    'notes_cta_title': 'तुम्ही अकॅडमीचे विद्यार्थी आहात का?',
    'notes_cta_desc': 'प्रश्नपेढी, घटक चाचणी पेपर्स आणि बोर्ड मॉडेल उत्तरपत्रिकांसाठी स्टुडंट पोर्टलवर लॉगिन करा.',
    'notes_cta_btn': 'स्टुडंट पोर्टल लॉगिनकडे जा →',

    // Enrollment Form
    'enroll_title': 'विद्यार्थी प्रवेश अर्ज',
    'enroll_subtitle': 'खालील माहिती भरा, आम्ही आपल्याशी प्रवेशासाठी लवकरच संपर्क करू.',
    'enroll_leg_type': 'प्रवेश / नोंदणी प्रकार',
    'enroll_reg_adm': 'नियमित प्रवेश (संपूर्ण शैक्षणिक वर्षासाठी)',
    'enroll_demo_adm': '🎯 मोफत २ दिवसांचा डेमो क्लास बुक करा (शिक्षणाचा अनुभव घ्या)',
    'enroll_leg_student': 'विद्यार्थ्याची माहिती',
    'enroll_lbl_name': 'विद्यार्थ्याचे पूर्ण नाव',
    'enroll_lbl_dob': 'जन्मतारीख',
    'enroll_lbl_gender': 'लिंग',
    'enroll_lbl_course': 'प्रवेश घेण्याचा वर्ग / कोर्स',
    'enroll_lbl_school': 'मागील शाळा / कॉलेज',
    'enroll_leg_parent': 'पालकांची माहिती',
    'enroll_lbl_pname': 'पालकांचे पूर्ण नाव',
    'enroll_lbl_phone': 'फोन नंबर',
    'enroll_lbl_email': 'ईमेल आयडी',
    'enroll_lbl_address': 'घराचा पत्ता',
    'enroll_leg_extra': 'इतर माहिती',
    'enroll_lbl_source': 'आमच्याबद्दल कसे समजले?',
    'enroll_lbl_remarks': 'काही प्रश्न किंवा सूचना?',
    'enroll_btn_submit': 'प्रवेश अर्ज सादर करा',
    'enroll_btn_clear': 'फॉर्म साफ करा',

    // Login Portal
    'login_tab_student': '🎓 स्टुडंट पोर्टल',
    'login_tab_admin': '⚙️ ॲडमिन डॅशबोर्ड',
    'login_student_title': 'स्टुडंट पोर्टल लॉगिन',
    'login_student_sub': 'तुमच्या वर्गाच्या नोट्स, सूत्रपुस्तिका, वेळापत्रक आणि सूचना पहा.',
    'login_lbl_stuid': 'विद्यार्थी आयडी किंवा मोबाईल नंबर',
    'login_lbl_stupin': 'पिन / पासवर्ड',
    'login_btn_student': 'स्टुडंट पोर्टलमध्ये लॉगिन करा →',
    'login_admin_title': 'ॲडमिन डॅशबोर्ड लॉगिन',
    'login_admin_sub': 'विद्यार्थी, अभ्यास नोट्स, फी नोंदी आणि घोषणा व्यवस्थापित करा.',
    'login_lbl_admuser': 'ॲडमिन युझरनेम किंवा ईमेल',
    'login_lbl_admpass': 'ॲडमिन पासवर्ड',
    'login_btn_admin': 'ॲडमिन डॅशबोर्डमध्ये लॉगिन करा →',
    'login_demo_title': '⚡ झटपट डेमो क्रेडेंशियल्स (ऑटो-फिलसाठी क्लिक करा)',

    // Common
    'btn_logout': 'लॉगआउट',
    'footer_rights': 'सर्व हक्क राखीव.'
  },

  hi: {
    // Nav
    'nav_about': 'हमारे बारे में',
    'nav_vision': 'विज़न और मिशन',
    'nav_courses': 'पाठ्यक्रम',
    'nav_special_courses': 'विशेष पाठ्यक्रम',
    'nav_syllabus': 'पाठ्यक्रम सूची',
    'nav_fees': 'शुल्क संरचना',
    'nav_faculty': 'हमारे शिक्षक',
    'nav_testimonials': 'प्रशंसापत्र',
    'nav_gallery': 'गैलरी',
    'nav_notes': 'नोट्स और प्रश्न पत्र',
    'nav_contact': 'संपर्क',
    'nav_enroll': 'प्रवेश लें',
    'nav_login': '🔐 पोर्टल लॉगिन',

    // Hero
    'hero_marathi_tagline': '|| ८वीं, ९वीं, १०वीं (SSC) और १२वीं (HSC) के लिए संपूर्ण एवं गुणवत्तापूर्ण शिक्षण ||',
    'hero_title': 'कक्षा ८वीं, ९वीं, १०वीं और १२वीं के लिए उत्कृष्ट शिक्षण',
    'hero_subtext': 'महाराष्ट्र स्टेट बोर्ड कोचिंग • शेयर मार्केट और आर्टिफिशियल इंटेलिजेंस (AI) के विशेष पाठ्यक्रम',
    'hero_btn_enroll': 'अभी प्रवेश लें',
    'hero_btn_demo': 'निःशुल्क २ दिवसीय डेमो क्लास बुक करें 🎯',
    'hero_btn_whatsapp': '💬 व्हाट्सएप पर संपर्क करें',

    // Trust Bar
    'trust_concept': '💡 संकल्पना-आधारित शिक्षण',
    'trust_faculty': '👨‍🏫 विशेषज्ञ शिक्षक (BE Mech / पॉलिटेक्निक व्याख्याता)',
    'trust_results': '🏆 बोर्ड परीक्षा में शानदार परिणाम',
    'trust_fees': '💰 किफायती मासिक शुल्क संरचना',

    // About & Why Choose Us
    'about_title': 'निखिलेश भाटकर लर्निंग एकेडमी के बारे में',
    'about_subtitle': 'संगमेश्वर में छात्रों में स्पष्ट अवधारणा और आत्मविश्वास जगाने वाला संस्थान',
    'about_p1': 'निखिलेश भाटकर लर्निंग एकेडमी संगमेश्वर में स्कूल और उच्चतर माध्यमिक छात्रों को उच्च गुणवत्ता और वैचारिक शिक्षण प्रदान करने के लिए समर्पित है। हमारा विश्वास है कि उचित मार्गदर्शन से हर छात्र उत्कृष्टता हासिल कर सकता है।',
    'about_p2': 'केवल रटने के बजाय हम गणित और विज्ञान के मूल सिद्धांतों को मजबूत बनाकर छात्रों को बोर्ड परीक्षाओं के लिए तैयार करते हैं।',
    'why_title': 'हमारा ही चयन क्यों करें?',
    'why_1_title': 'अवधारणा-आधारित शिक्षण',
    'why_1_desc': 'हर प्रमेय और वैज्ञानिक सिद्धांत की सरल भाषा और व्यावहारिक उदाहरणों के साथ व्याख्या।',
    'why_2_title': 'अनुभवी एवं विशेषज्ञ शिक्षक',
    'why_2_desc': 'इंजीनियरिंग स्नातकों एवं पॉलिटेक्निक कॉलेज व्याख्याताओं द्वारा व्यक्तिगत मार्गदर्शन।',
    'why_3_title': 'नियमित टेस्ट और मूल्यांकन',
    'why_3_desc': 'साप्ताहिक चैप्टर टेस्ट, मॉडल बोर्ड परीक्षा और अभिभावकों के साथ नियमित प्रगति चर्चा।',
    'why_4_title': 'किफायती शुल्क संरचना',
    'why_4_desc': 'हर परिवार के लिए सुलभ और किफायती मासिक शुल्क के साथ गुणवत्तापूर्ण शिक्षा।',

    // Vision & Mission
    'vm_badge': '🎯 हमारे मूल उद्देश्य एवं दर्शन',
    'vm_main_title': 'हमारा विज़न और मिशन (Vision & Mission)',
    'vm_main_subtitle': 'शैक्षणिक उत्कृष्टता, विश्लेषणात्मक विचार और २१वीं सदी के तकनीकी एवं वित्तीय नेतृत्व का निर्माण।',
    'vm_vision_tag': 'दूरगामी दृष्टिकोण',
    'vm_vision_title': 'हमारा विज़न (Our Vision)',
    'vm_vision_quote': '“केवल रटने के बजाय प्रत्येक छात्र को वैचारिक रूप से सक्षम, विश्लेषणात्मक विचारक और २१वीं सदी की AI व वित्तीय समझ से युक्त भविष्य के प्रति आश्वस्त लीडर बनाना ही हमारा विज़न है।”',
    'vm_v1_title': 'सर्वोच्च शैक्षणिक उत्कृष्टता',
    'vm_v1_desc': 'महाराष्ट्र स्टेट बोर्ड SSC और HSC परीक्षाओं में उत्कृष्ट वैचारिक समझ।',
    'vm_v2_title': 'तकनीक-सक्षम भविष्य',
    'vm_v2_desc': 'आर्टिफिशियल इंटेलिजेंस (AI) और आधुनिक समस्याओं के समाधान का व्यावहारिक ज्ञान।',
    'vm_v3_title': 'किशोरावस्था से वित्तीय साक्षरता',
    'vm_v3_desc': 'अनुशासित धन प्रबंधन, जोखिम समझ और वित्तीय निर्णय क्षमता का विकास।',
    'vm_mission_tag': 'हमारी दैनिक प्रतिबद्धता',
    'vm_mission_title': 'हमारा मिशन (Our Mission)',
    'vm_mission_quote': '“व्यक्तिगत ध्यान, विशेषज्ञ शिक्षकों के मार्गदर्शन और उच्च गुणवत्ता वाले अध्ययन संसाधनों से छात्रों के मन से परीक्षा का भय दूर कर अटूट आत्मविश्वास पैदा करना ही हमारा मिशन है।”',
    'vm_m1_title': 'बुनियादी अवधारणाओं पर बल',
    'vm_m1_desc': 'गणित और विज्ञान के कठिन सिद्धांतों को सहज और व्यावहारिक उदाहरणों से समझाना।',
    'vm_m2_title': 'व्यक्तिगत ध्यान और शंका समाधान',
    'vm_m2_desc': 'सीमित बैच संख्या ताकि प्रत्येक छात्र के प्रश्नों का धैर्यपूर्वक समाधान हो सके।',
    'vm_m3_title': 'निरंतर परीक्षा तैयारी',
    'vm_m3_desc': 'पिछले ५ वर्षों के बोर्ड प्रश्नपत्र, साप्ताहिक टेस्ट और व्यक्तिगत प्रगति रिपोर्ट।',
    'vm_values_heading': 'हमारे मार्गदर्शक जीवन मूल्य',
    'val_1_title': 'उत्कृष्टता और ईमानदारी',
    'val_1_desc': 'पारदर्शी मूल्यांकन, निष्ठावान मार्गदर्शन और शैक्षणिक श्रेष्ठता का निरंतर प्रयास।',
    'val_2_title': 'गहन वैचारिक स्पष्टता',
    'val_2_desc': 'रटने का कोई स्थान नहीं — जीवन भर काम आने वाली गहरी वैचारिक समझ।',
    'val_3_title': 'छात्र-केंद्रित दृष्टिकोण',
    'val_3_desc': 'प्रत्येक छात्र अद्वितीय है, हम उनकी क्षमता के अनुरूप व्यक्तिगत शैक्षणिक सहयोग देते हैं।',
    'val_4_title': 'नवाचार और भविष्य के कौशल',
    'val_4_desc': 'स्कूली शिक्षा के साथ-साथ वित्तीय साक्षरता और AI जैसी २१वीं सदी की दक्षताओं का समन्वय।',

    // Courses
    'courses_title': 'हमारे शैक्षणिक पाठ्यक्रम',
    'courses_subtitle': 'महाराष्ट्र स्टेट बोर्ड (बालभारती) पाठ्यक्रम मार्गदर्शन',
    'c8_title': 'कक्षा ८वीं',
    'c8_desc': 'हाई स्कूल के लिए गणित और सामान्य विज्ञान की मजबूत नींव तैयार करना।',
    'c9_title': 'कक्षा ९वीं',
    'c9_desc': '१०वीं बोर्ड की तैयारी के लिए गहन वैचारिक अध्ययन और अभ्यास।',
    'c10_title': 'कक्षा १०वीं (SSC)',
    'c10_desc': 'बोर्ड परीक्षा की संपूर्ण तैयारी: बीजगणित, रेखागणित, विज्ञान १ व २ और प्रश्न बैंक हल।',
    'c12_title': 'कक्षा १२वीं (HSC)',
    'c12_desc': 'गणित, भौतिकी (Physics) और रसायन विज्ञान (Chemistry) का विशेष मार्गदर्शन।',
    'btn_view_syllabus': 'पाठ्यक्रम और अध्याय देखें →',

    // Special Courses
    'special_title': 'विशेष कौशल विकास पाठ्यक्रम',
    'special_subtitle': '२१वीं सदी के उपयोगी कौशलों का व्यावहारिक प्रशिक्षण',
    'stock_title': '📈 शेयर मार्केट एवं वित्तीय बाजार',
    'stock_badge': 'विशेष कौशल पाठ्यक्रम',
    'stock_desc': 'शेयर मार्केट की कार्यप्रणाली, फंडामेंटल व टेक्निकल एनालिसिस, चार्ट रीडिंग और रिस्क मैनेजमेंट सीखें।',
    'stock_btn': 'शेयर मार्केट कोर्स में प्रवेश लें →',
    'ai_title': '🤖 AI और जनरेटिव AI मास्टरी',
    'ai_badge': 'अत्याधुनिक कौशल पाठ्यक्रम',
    'ai_desc': 'आर्टिफिशियल इंटेलिजेंस, ChatGPT, Claude, प्रॉम्प्ट इंजीनियरिंग और AI टूल्स का व्यावहारिक प्रशिक्षण।',
    'ai_btn': 'AI कोर्स में प्रवेश लें →',

    // Syllabus
    'syllabus_title': 'महाराष्ट्र स्टेट बोर्ड पाठ्यक्रम',
    'syllabus_subtitle': 'गणित और विज्ञान के बालभारती आधारित सभी अध्याय',

    // Fees
    'fees_title': 'शुल्क संरचना',
    'fees_subtitle': 'गुणवत्तापूर्ण शिक्षा के लिए किफायती और पारदर्शी शुल्क',
    'th_class': 'कक्षा / मानक',
    'th_fee': 'शुल्क राशि',
    'th_duration': 'अवधि',
    'th_total': 'कुल शुल्क',

    // Faculty
    'faculty_title': 'हमारे शिक्षक',
    'faculty_nikhillesh_role': 'संस्थापक एवं मुख्य मार्गदर्शक',
    'faculty_nikhillesh_desc': '१५ वर्षों का शिक्षण अनुभव और ५ वर्षों का सक्रिय वित्तीय बाजार ट्रेडिंग अनुभव रखने वाले समर्पित शिक्षक। छात्रों की वैचारिक समझ, विश्लेषणात्मक सोच और आधुनिक कौशल विकास के लिए सदैव प्रयासरत।',
    'faculty_amit_role': 'भौतिकी एवं रसायन विज्ञान विशेषज्ञ',
    'faculty_amit_desc': 'BE मैकेनिकल, पॉलिटेक्निक कॉलेज व्याख्याता। विषय का गहन ज्ञान, व्यावहारिक समस्या निवारण और बोर्ड परीक्षा तकनीक विशेषज्ञ।',
    'faculty_creds_title': '📜 शैक्षणिक योग्यता एवं प्रमाणपत्र',
    'cred_be_mech': 'BE मैकेनिकल इंजीनियरिंग (Bachelor of Engineering)',
    'cred_teaching_exp': '१५ वर्षों का शिक्षण अनुभव (महाराष्ट्र स्टेट बोर्ड गणित एवं विज्ञान)',
    'cred_trading_exp': '५ वर्षों का सक्रिय वित्तीय बाजार ट्रेडिंग अनुभव',
    'cred_malkan': 'विशाल मलकान के साथ ABCT 360 ट्रेडिंग कोर्स पूर्ण',
    'cred_ffa': 'फाइनेंशियल फ्रीडम एक्सेलेरेटर फ्यूचर्स एंड ऑप्शंस (F&O) कोर्स पूर्ण',
    'cred_be10x': 'Be10x के साथ AI मास्टर कोर्स पूर्ण (Generative AI एवं टूल्स)',
    'cred_polytechnic': 'BE मैकेनिकल इंजीनियरिंग',
    'cred_poly_lect': 'पॉलिटेक्निक कॉलेज व्याख्याता — इंजीनियरिंग एवं व्यावहारिक विज्ञान',
    'cred_amit_subjects': 'HSC व SSC स्टेट बोर्ड भौतिकी एवं रसायन विज्ञान विशेषज्ञ',

    // Testimonials
    'testimonials_title': 'हमारे छात्रों और अभिभावकों के अनुभव',

    // Gallery
    'gallery_title': 'एकेडमी गैलरी',
    'gallery_hint': 'हमारी कक्षाओं, अध्ययन सत्रों और कार्यक्रमों की तस्वीरें।',

    // Contact
    'contact_title': 'संपर्क एवं पता',
    'contact_subtitle': 'प्रवेश, निःशुल्क डेमो क्लास या विजिट के लिए संपर्क करें',
    'addr_title': 'एकेडमी का पता',
    'addr_text': 'मु. पो. संगमेश्वर, निनावी मंदिर के पास, जिला रत्नागिरी, महाराष्ट्र – ४१५६११',
    'form_msg_title': 'हमें सीधा संदेश भेजें',
    'form_name_placeholder': 'आपका पूरा नाम',
    'form_email_placeholder': 'आपका ईमेल पता',
    'form_msg_placeholder': 'आपका संदेश (उदा. १०वीं कक्षा / AI कोर्स के बारे में पूछताछ)',
    'form_btn_send': 'संदेश भेजें',
    'map_title': 'मानचित्र पर हमारा स्थान',
    'btn_directions': '🚗 गूगल मैप्स पर दिशा-निर्देश प्राप्त करें',

    // Notes & Board Papers Hub
    'notes_hero_badge': '📚 निःशुल्क एवं एकेडमी छात्रों के लिए अध्ययन सामग्री',
    'notes_hero_title': 'स्टडी नोट्स और महाराष्ट्र बोर्ड प्रश्न पत्र',
    'notes_hero_sub': 'अध्यायवार पीडीएफ सारांश, सूत्र पुस्तिकाएं, पिछले वर्षों के बोर्ड प्रश्न पत्र (PYQs) और SCERT प्रश्न बैंक।',
    'notes_search_placeholder': '🔍 वर्ष, विषय, अध्याय, या प्रश्न पत्र के अनुसार खोजें...',
    'res_type_all': '🌟 सभी अध्ययन सामग्री',
    'res_type_notes': '📖 स्टडी नोट्स और सूत्र',
    'res_type_papers': '📝 बोर्ड प्रश्न पत्र (PYQ)',
    'res_type_solutions': '🎯 मॉडल उत्तर और हल',
    'res_type_banks': '📋 SCERT प्रश्न बैंक',
    'notes_filter_all': 'सभी कक्षाएं',
    'notes_filter_8': 'कक्षा ८वीं',
    'notes_filter_9': 'कक्षा ९वीं',
    'notes_filter_10': 'कक्षा १०वीं (SSC)',
    'notes_filter_12': 'कक्षा १२वीं (HSC)',
    'notes_filter_stock': '📈 शेयर मार्केट',
    'notes_filter_ai': '🤖 AI और GenAI',
    'notes_cta_title': 'क्या आप एकेडमी के नामांकित छात्र हैं?',
    'notes_cta_desc': 'प्रश्न बैंक, टेस्ट पेपर्स और बोर्ड मॉडल उत्तर पुस्तिकाओं के लिए स्टूडेंट पोर्टल पर लॉगिन करें।',
    'notes_cta_btn': 'स्टूडेंट पोर्टल लॉगिन पर जाएं →',

    // Enrollment Form
    'enroll_title': 'छात्र नामांकन फॉर्म',
    'enroll_subtitle': 'नीचे विवरण भरें, हम आपके प्रवेश की पुष्टि के लिए शीघ्र संपर्क करेंगे।',
    'enroll_leg_type': 'प्रवेश / पंजीकरण प्रकार',
    'enroll_reg_adm': 'नियमित प्रवेश (पूर्ण शैक्षणिक सत्र के लिए)',
    'enroll_demo_adm': '🎯 निःशुल्क २ दिवसीय डेमो क्लास बुक करें (हमारे शिक्षण का अनुभव करें)',
    'enroll_leg_student': 'छात्र की जानकारी',
    'enroll_lbl_name': 'छात्र का पूरा नाम',
    'enroll_lbl_dob': 'जन्म तिथि',
    'enroll_lbl_gender': 'लिंग',
    'enroll_lbl_course': 'नामांकन के लिए कक्षा / पाठ्यक्रम',
    'enroll_lbl_school': 'पिछला स्कूल / कॉलेज',
    'enroll_leg_parent': 'अभिभावक का विवरण',
    'enroll_lbl_pname': 'अभिभावक का पूरा नाम',
    'enroll_lbl_phone': 'फ़ोन नंबर',
    'enroll_lbl_email': 'ईमेल पता',
    'enroll_lbl_address': 'घर का पता',
    'enroll_leg_extra': 'अतिरिक्त जानकारी',
    'enroll_lbl_source': 'हमारे बारे में कैसे पता चला?',
    'enroll_lbl_remarks': 'कोई टिप्पणी या प्रश्न?',
    'enroll_btn_submit': 'नामांकन फॉर्म जमा करें',
    'enroll_btn_clear': 'फॉर्म रीसेट करें',

    // Login Portal
    'login_tab_student': '🎓 स्टूडेंट पोर्टल',
    'login_tab_admin': '⚙️ एडमिन डैशबोर्ड',
    'login_student_title': 'स्टूडेंट पोर्टल लॉगिन',
    'login_student_sub': 'अपनी कक्षा के नोट्स, सूत्र पुस्तिकाएं, समय सारणी और सूचनाएं देखें।',
    'login_lbl_stuid': 'छात्र आईडी या मोबाइल नंबर',
    'login_lbl_stupin': 'पिन / पासवर्ड',
    'login_btn_student': 'स्टूडेंट पोर्टल में लॉगिन करें →',
    'login_admin_title': 'एडमिन डैशबोर्ड लॉगिन',
    'login_admin_sub': 'छात्रों, नोट्स, फीस रिकॉर्ड और घोषणाओं का प्रबंधन करें।',
    'login_lbl_admuser': 'एडमिन यूजरनेम या ईमेल',
    'login_lbl_admpass': 'एडमिन पासवर्ड',
    'login_btn_admin': 'एडमिन डैशबोर्ड में लॉगिन करें →',
    'login_demo_title': '⚡ त्वरित डेमो क्रेडेंशियल्स (ऑटो-फिल के लिए क्लिक करें)',

    // Common
    'btn_logout': 'लॉगआउट',
    'footer_rights': 'सर्वाधिकार सुरक्षित।'
  }
};

const I18n = {
  getCurrentLang: () => {
    return localStorage.getItem('academy_lang') || 'en';
  },

  setLanguage: (lang) => {
    if (!TRANSLATIONS[lang]) lang = 'en';
    localStorage.setItem('academy_lang', lang);
    document.documentElement.lang = lang;

    // Update all text nodes with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Update placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        input.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Update active state on language switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = lang;
    }
  },

  init: () => {
    const savedLang = I18n.getCurrentLang();
    I18n.setLanguage(savedLang);

    // Bind event handlers for language buttons or dropdowns
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = btn.getAttribute('data-lang');
        I18n.setLanguage(selected);
      });
    });

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        I18n.setLanguage(e.target.value);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
});
