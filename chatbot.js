// ------------------------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Interactive Inquiry Chatbot
// Trilingual AI Assistant: English | मराठी | हिंदी
// ------------------------------------------------------------------

(function () {
  'use strict';

  // Lead Collection State
  const leadState = {
    active: false,
    step: 0, // 1: Name, 2: Course/Class, 3: Phone
    data: {
      name: '',
      standard: '',
      phone: '',
      type: 'Chatbot Inquiry / Demo Booking'
    }
  };

  // Knowledge Base Responses in English, Marathi, and Hindi
  const KB = {
    en: {
      botName: 'Academy Assistant',
      botSubtitle: 'Online • Nikhillesh Bhatkar Learning Academy',
      greeting: '👋 Hello! I am the **Academy Assistant**. How can I help you today? You can ask me about **courses**, **fees**, **board question papers (PYQs)**, **batch timings**, **faculty**, or **book a free 2-day demo class**!',
      chips: [
        { label: '🎯 Book Free Demo', query: 'book demo' },
        { label: '🎯 Vision & Mission', query: 'vision' },
        { label: '📝 Board Papers & PYQs', query: 'board papers' },
        { label: '💰 Course Fees', query: 'fees' },
        { label: '📚 Classes 8-10 & 12', query: 'courses' },
        { label: '📈 Stock Market & AI', query: 'special courses' },
        { label: '⏰ Batch Timings', query: 'timings' },
        { label: '👨‍🏫 Faculty Info', query: 'faculty' },
        { label: '📍 Academy Address', query: 'address' },
        { label: '💬 Chat on WhatsApp', query: 'whatsapp' }
      ],
      leadStart: '🎯 **Great! Let\'s book your Free 2-Day Demo Class / Admission Inquiry.**\n\nWhat is the **Student\'s Full Name**?',
      leadStepCourse: (name) => `Thank you, **${name}**! Which **Standard / Course** are you inquiring for?\n(e.g., Class 8, Class 9, Class 10 SSC, Class 12 HSC, Stock Market, or AI Course)`,
      leadStepPhone: 'Got it! What is your **10-Digit Mobile Number** so Nikhillesh Sir can send you batch details?',
      invalidPhone: '⚠️ Please enter a valid 10-digit mobile number (e.g. 9876543210):',
      leadSuccess: (lead) => `✅ **Thank you, ${lead.name}!**\n\nYour inquiry for **${lead.standard}** has been registered successfully! Nikhillesh Sir will contact you shortly on **${lead.phone}**.\n\n📲 You can also connect directly on WhatsApp now:`,
      leadCancel: 'Lead registration cancelled. Feel free to ask any other questions!',
      fallback: 'I want to make sure you get the exact details. You can ask about **Board Question Papers (PYQs)**, **Fees**, **Batch Timings**, **Classes 8, 9, 10, 12**, **Stock Market**, **AI Course**, or talk directly with Nikhillesh Sir on WhatsApp.',
      inputPlaceholder: 'Type your question here...',
      sendBtn: 'Send'
    },
    mr: {
      botName: 'अकॅडमी सहाय्यक',
      botSubtitle: 'ऑनलाइन • निखिलेश भाटकर लर्निंग अकॅडमी',
      greeting: '👋 नमस्कार! मी **निखिलेश भाटकर लर्निंग अकॅडमीचा डिजिटल सहाय्यक** आहे. मी तुम्हाला कशी मदत करू? तुम्ही **कोर्सेस**, **बोर्ड प्रश्नपत्रिका व सोल्यूशन्स**, **फी**, **बॅचच्या वेळा**, **शिक्षक**, किंवा **मोफत २ दिवसांचा डेमो क्लास** बाबत विचारू शकता!',
      chips: [
        { label: '🎯 मोफत डेमो बुक करा', query: 'book demo' },
        { label: '🎯 आमची दृष्टी व ध्येय', query: 'vision' },
        { label: '📝 बोर्ड प्रश्नपत्रिका (PYQ)', query: 'board papers' },
        { label: '💰 फी रचना', query: 'fees' },
        { label: '📚 ८ वी, ९ वी, १० वी, १२ वी', query: 'courses' },
        { label: '📈 शेअर मार्केट व AI', query: 'special courses' },
        { label: '⏰ बॅचच्या वेळा', query: 'timings' },
        { label: '👨‍🏫 शिक्षक माहिती', query: 'faculty' },
        { label: '📍 अकॅडमीचा पत्ता', query: 'address' },
        { label: '💬 व्हॉट्सॲपवर संपर्क', query: 'whatsapp' }
      ],
      leadStart: '🎯 **छान! मोफत २ दिवसांचा डेमो क्लास किंवा प्रवेशासाठी माहिती नोंदवूया.**\n\nकृपया **विद्यार्थ्याचे पूर्ण नाव** सांगा?',
      leadStepCourse: (name) => `धन्यवाद, **${name}**! तुम्ही कोणत्या **इयत्ता किंवा कोर्ससाठी** प्रवेश घेऊ इच्छिता?\n(उदा. ८ वी, ९ वी, १० वी (SSC), १२ वी (HSC), शेअर मार्केट किंवा AI कोर्स)`,
      leadStepPhone: 'समजले! कृपया आपला **१० अंकी मोबाईल नंबर** द्या जेणेकरून निखिलेश सर आपल्याशी संपर्क साधू शकतील:',
      invalidPhone: '⚠️ कृपया १० अंकी वैध मोबाईल नंबर प्रविष्ट करा (उदा. ९८७६५४३२१०):',
      leadSuccess: (lead) => `✅ **धन्यवाद, ${lead.name}!**\n\nतुमची **${lead.standard}** साठीची चौकशी यशस्वीपणे नोंदवली आहे. निखिलेश सर लवकरच **${lead.phone}** वर संपर्क साधतील.\n\n📲 आपण खालील बटनावर क्लिक करून थेट व्हॉट्सॲपवरही बोलू शकता:`,
      leadCancel: 'नोंदणी रद्द झाली. आपण इतर काहीही विचारू शकता!',
      fallback: 'मला समजले नाही. आपण **बोर्ड प्रश्नपत्रिका (PYQ)**, **फी**, **वेळापत्रक**, **८ वी ते १२ वी कोर्सेस**, **शेअर मार्केट**, **AI कोर्स** बाबत विचारू शकता किंवा थेट व्हॉट्सॲपवर संपर्क करू शकता.',
      inputPlaceholder: 'आपला प्रश्न येथे टाईप करा...',
      sendBtn: 'पाठवा'
    },
    hi: {
      botName: 'एकेडमी सहायक',
      botSubtitle: 'ऑनलाइन • निखिलेश भाटकर लर्निंग एकेडमी',
      greeting: '👋 नमस्ते! मैं **निखिलेश भाटकर लर्निंग एकेडमी का डिजिटल सहायक** हूँ। मैं आपकी क्या मदद कर सकता हूँ? आप **पाठ्यक्रम**, **बोर्ड प्रश्न पत्र व मॉडल समाधान**, **शुल्क**, **समय सारणी**, **शिक्षक**, या **निःशुल्क २ दिवसीय डेमो क्लास** के बारे में पूछ सकते हैं!',
      chips: [
        { label: '🎯 डेमो क्लास बुक करें', query: 'book demo' },
        { label: '🎯 विज़न और मिशन', query: 'vision' },
        { label: '📝 बोर्ड प्रश्न पत्र (PYQ)', query: 'board papers' },
        { label: '💰 शुल्क संरचना', query: 'fees' },
        { label: '📚 ८वीं, ९वीं, १०वीं, १२वीं', query: 'courses' },
        { label: '📈 शेयर मार्केट व AI', query: 'special courses' },
        { label: '⏰ बैच का समय', query: 'timings' },
        { label: '👨‍🏫 शिक्षक विवरण', query: 'faculty' },
        { label: '📍 एकेडमी का पता', query: 'address' },
        { label: '💬 व्हाट्सएप पर चैट', query: 'whatsapp' }
      ],
      leadStart: '🎯 **उत्कृष्ट! निःशुल्क २ दिवसीय डेमो क्लास या प्रवेश के लिए जानकारी दर्ज करें।**\n\nकृपया **छात्र का पूरा नाम** बताएं?',
      leadStepCourse: (name) => `धन्यवाद, **${name}**! आप किस **कक्षा या पाठ्यक्रम** के लिए रुचि रखते हैं?\n(उदा. कक्षा ८वीं, ९वीं, १०वीं SSC, १२वीं HSC, शेयर मार्केट या AI कोर्स)`,
      leadStepPhone: 'धन्यवाद! कृपया अपना **१० अंकों का मोबाइल नंबर** बताएं ताकि निखिलेश सर आपसे संपर्क कर सकें:',
      invalidPhone: '⚠️ कृपया १० अंकों का वैध मोबाइल नंबर दर्ज करें (उदा. ९८७६५४३२१०):',
      leadSuccess: (lead) => `✅ **धन्यवाद, ${lead.name}!**\n\nआपकी **${lead.standard}** के लिए पूछताछ सफलतापूर्वक दर्ज कर ली गई है। निखिलेश सर शीघ्र ही **${lead.phone}** पर संपर्क करेंगे।\n\n📲 आप सीधे व्हाट्सएप पर भी बात कर सकते हैं:`,
      leadCancel: 'पंजीकरण रद्द कर दिया गया। आप कोई अन्य प्रश्न पूछ सकते हैं!',
      fallback: 'कृपया अधिक स्पष्ट पूछें। आप **बोर्ड प्रश्न पत्र (PYQ)**, **शुल्क**, **समय**, **पाठ्यक्रम (८वीं, ९वीं, १०वीं, १२वीं)**, **शेयर मार्केट**, **AI कोर्स** के बारे में पूछ सकते हैं या सीधे व्हाट्सएप पर संपर्क कर सकते हैं।',
      inputPlaceholder: 'अपना प्रश्न यहाँ लिखें...',
      sendBtn: 'भेजें'
    }
  };

  // Helper to get active language
  function getLang() {
    if (typeof I18n !== 'undefined' && I18n.getCurrentLang) {
      return I18n.getCurrentLang();
    }
    return localStorage.getItem('academy_lang') || 'en';
  }

  // Knowledge Base Query Resolver
  function getBotReply(userText) {
    const raw = (userText || '').trim().toLowerCase();
    const lang = getLang();

    // 1. Lead Capture Triggers
    if (/demo|admission|enroll|join|register|book|प्रवेश|नोंदणी|दाखिला|डेमो/i.test(raw)) {
      leadState.active = true;
      leadState.step = 1;
      leadState.data = { name: '', standard: '', phone: '', type: 'Chatbot Demo/Admission Lead' };
      return {
        text: KB[lang].leadStart,
        chips: [
          { label: 'Class 10 (SSC)', query: 'Standard 10 (SSC)' },
          { label: 'Class 12 (HSC)', query: 'Standard 12 (HSC)' },
          { label: 'Class 8 / 9', query: 'Class 8 / 9' },
          { label: 'Stock Market Course', query: 'Special: Stock Market Course' },
          { label: 'AI & GenAI Course', query: 'Special: AI & Generative AI' },
          { label: '❌ Cancel', query: 'cancel' }
        ]
      };
    }

    // 1B. Board Question Papers & PYQs
    if (/paper|papers|pyq|pyqs|previous year|question paper|board paper|model paper|question bank|scert|solution|marking scheme|प्रश्नपत्रिका|प्रश्न पत्रिका|पेपर|उत्तरपत्रिका/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `📝 **महाराष्ट्र स्टेट बोर्ड प्रश्नपत्रिका व सोल्यूशन्स (PYQ Hub):**\n\n• **१० वी (SSC):** बीजगणित, भूमिती, विज्ञान १ व २ (मार्च २०२४, २०२३, SCERT प्रश्न बँक, प्रिलिम पेपर्स)\n• **१२ वी (HSC):** Physics, Chemistry, Mathematics (२०२४, २०२३ बोर्ड पेपर्स व SCERT बँक)\n• **८ वी व ९ वी:** वार्षिक सराव प्रश्नपत्रिका\n• **स्टेप-बाय-स्टेप मॉडेल उत्तरे:** अधिकृत बोर्ड मार्किंग स्कीमसह उपलब्ध!\n\n📄 *सर्व पेपर्स व उत्तरपत्रिका 'Notes & Board Papers' पेजवर मोफत उपलब्ध आहेत!*`,
          chips: [
            { label: '📚 पेपर्स व नोट्स पेज उघडा', query: 'open_notes' },
            { label: '🎯 मोफत २ दिवसांचा डेमो बुक करा', query: 'book demo' },
            { label: '💬 शंका विचारण्यासाठी व्हॉट्सॲप', query: 'whatsapp' }
          ]
        };
      } else if (lang === 'hi') {
        return {
          text: `📝 **महाराष्ट्र स्टेट बोर्ड प्रश्न पत्र व मॉडल उत्तर (PYQ Hub):**\n\n• **१०वीं (SSC):** बीजगणित, रेखागणित, विज्ञान १ व २ (मार्च २०२४, २०२३, SCERT क्वेश्चन बैंक, मॉडल पेपर्स)\n• **१२वीं (HSC):** Physics, Chemistry, Mathematics (२०२४, २०२३ बोर्ड पेपर्स व SCERT बैंक)\n• **८वीं व ९वीं:** वार्षिक अभ्यास प्रश्न पत्र\n• **स्टेप-बाय-स्टेप हल:** बोर्ड मार्किंग स्कीम के साथ उपलब्ध!\n\n📄 *सभी प्रश्न पत्र 'Notes & Board Papers' पेज पर उपलब्ध हैं!*`,
          chips: [
            { label: '📚 पेपर्स और नोट्स पेज देखें', query: 'open_notes' },
            { label: '🎯 डेमो क्लास बुक करें', query: 'book demo' },
            { label: '💬 व्हाट्सएप पर डाउट पूछें', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `📝 **Maharashtra State Board Past Papers & Solutions (PYQ Hub):**\n\n• **Class 10 (SSC):** Algebra, Geometry, Science 1 & 2 (March 2024, 2023, SCERT Question Banks, Prelim Mocks)\n• **Class 12 (HSC):** Physics, Chemistry, Mathematics (2024, 2023 Board Papers & SCERT Banks)\n• **Classes 8 & 9:** Annual exam practice papers\n• **Step-by-Step Solutions:** Complete board marking schemes prepared by Nikhillesh Sir & Amit Sir.\n\n📄 *Available for download on our 'Notes & Board Papers' page and Student Portal!*`,
          chips: [
            { label: '📚 Open Board Papers Page', query: 'open_notes' },
            { label: '🎯 Book Free Demo Class', query: 'book demo' },
            { label: '💬 Ask Doubt on WhatsApp', query: 'whatsapp' }
          ]
        };
      }
    }

    // 2. Fees & Pricing
    if (/fee|fees|cost|price|paisa|rupee|charges|installment|फी|खर्च|पैसे|शुल्क|किस्त/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `💰 **निखिलेश भाटकर लर्निंग अकॅडमी - फी रचना:**\n\n• **इयत्ता ८ वी:** ₹८०० / महिना (१० महिने)\n• **इयत्ता ९ वी:** ₹९०० / महिना (१० महिने)\n• **इयत्ता १० वी (SSC):** ₹१,००० / महिना (१० महिने)\n• **इयत्ता १२ वी (HSC):** ₹५,००० / विषय (गणित / Physics / Chemistry)\n• **शेअर मार्केट कोर्स:** विशेष सवलत उपलब्ध\n• **AI मास्टरी कोर्स:** विशेष सवलत उपलब्ध\n\n💡 *मासिक हप्त्यांची (Installment) सोय उपलब्ध आहे!*`,
          chips: [
            { label: '🎯 मोफत २ दिवसांचा डेमो बुक करा', query: 'book demo' },
            { label: '⏰ बॅचच्या वेळा', query: 'timings' },
            { label: '💬 व्हॉट्सॲपवर विचारा', query: 'whatsapp' }
          ]
        };
      } else if (lang === 'hi') {
        return {
          text: `💰 **निखिलेश भाटकर लर्निंग एकेडमी - शुल्क विवरण:**\n\n• **कक्षा ८वीं:** ₹८०० / महीना (१० महीने)\n• **कक्षा ९वीं:** ₹९०० / महीना (१० महीने)\n• **कक्षा १०वीं (SSC):** ₹१,००० / महीना (१० महीने)\n• **कक्षा १२वीं (HSC):** ₹५,००० / प्रति विषय (Maths / Physics / Chemistry)\n• **शेयर मार्केट कोर्स:** विशेष ऑफर उपलब्ध\n• **AI मास्टरी कोर्स:** विशेष ऑफर उपलब्ध\n\n💡 *आसान मासिक किस्तों की सुविधा उपलब्ध है!*`,
          chips: [
            { label: '🎯 डेमो क्लास बुक करें', query: 'book demo' },
            { label: '⏰ समय सारणी', query: 'timings' },
            { label: '💬 व्हाट्सएप पर पूछें', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `💰 **Nikhillesh Bhatkar Learning Academy — Fee Structure:**\n\n• **Standard 8:** ₹800 / month (10 months)\n• **Standard 9:** ₹900 / month (10 months)\n• **Standard 10 (SSC):** ₹1,000 / month (10 months)\n• **Standard 12 (HSC):** ₹5,000 / subject (Maths, Physics, Chemistry)\n• **Stock Market Course:** Special batch discounts\n• **AI & GenAI Mastery:** Practical workshop package\n\n💡 *Flexible monthly installment options available!*`,
          chips: [
            { label: '🎯 Book Free Demo Class', query: 'book demo' },
            { label: '⏰ View Timetable', query: 'timings' },
            { label: '💬 Ask on WhatsApp', query: 'whatsapp' }
          ]
        };
      }
    }

    // 3. Batch Timings & Schedule
    if (/timing|time|batch|schedule|timetable|वेळ|वेळापत्रक|समय|टाइम|कब/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `⏰ **नियमित बॅच वेळापत्रक (सोमवार ते शुक्रवार):**\n\n• **इयत्ता ८ वी:** दुपारी ४:०० ते ५:०० (गणित / विज्ञान)\n• **इयत्ता ९ वी:** सायंकाळी ५:०० ते ६:०० (गणित / विज्ञान)\n• **इयत्ता १० वी (SSC):** सायंकाळी ६:०० ते ७:३० (बीजगणित / भूमिती / विज्ञान)\n• **इयत्ता १२ वी (HSC):** रात्री ७:३० ते ९:०० (Physics / Chemistry)\n\n• **शनिवार:** रिव्हिजन, शंका निरसन व HSC न्यूमेरिकल्स\n• **रविवार:** सकाळी ९:०० ते १२:०० सराव चाचणी परीक्षा`,
          chips: [
            { label: '🎯 डेमो क्लास बुक करा', query: 'book demo' },
            { label: '💰 फी रचना पहा', query: 'fees' },
            { label: '💬 व्हॉट्सॲपवर संपर्क', query: 'whatsapp' }
          ]
        };
      } else if (lang === 'hi') {
        return {
          text: `⏰ **नियमित बैच समय सारणी (सोमवार से शुक्रवार):**\n\n• **कक्षा ८वीं:** दोपहर ४:०० से ५:०० (गणित / विज्ञान)\n• **कक्षा ९वीं:** शाम ५:०० से ६:०० (गणित / विज्ञान)\n• **कक्षा १०वीं (SSC):** शाम ६:०० से ७:३० (बीजगणित / रेखागणित / विज्ञान)\n• **कक्षा १२वीं (HSC):** रात्रि ७:३० से ९:०० (भौतिकी / रसायन)\n\n• **शनिवार:** रिवीजन, न्यूमेरिकल हल और डाउट सेशन\n• **रविवार:** सुबह ९:०० से १२:०० साप्ताहिक टेस्ट सीरीज`,
          chips: [
            { label: '🎯 डेमो क्लास बुक करें', query: 'book demo' },
            { label: '💰 शुल्क देखें', query: 'fees' },
            { label: '💬 व्हाट्सएप पर पूछें', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `⏰ **Regular Batch Timetable (Monday – Friday):**\n\n• **Class 8:** 4:00 PM – 5:00 PM (Maths & Science)\n• **Class 9:** 5:00 PM – 6:00 PM (Maths & Science)\n• **Class 10 (SSC):** 6:00 PM – 7:30 PM (Algebra, Geometry, Science)\n• **Class 12 (HSC):** 7:30 PM – 9:00 PM (Physics & Chemistry)\n\n• **Saturday:** Revision, doubt solving & HSC numericals\n• **Sunday:** 9:00 AM – 12:00 PM Weekly board exam practice test`,
          chips: [
            { label: '🎯 Book Free Demo', query: 'book demo' },
            { label: '💰 Check Fees', query: 'fees' },
            { label: '💬 WhatsApp Faculty', query: 'whatsapp' }
          ]
        };
      }
    }

    // 4. Special Courses (Stock Market & AI)
    if (/stock|market|share|trading|invest|ai|artificial|chatgpt|claude|शेअर|मार्केट|आर्टिफिशिअल|शेयर/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `📈 **विशेष कौशल्य कोर्सेस:**\n\n1. **शेअर मार्केट व फायनान्शियल मार्केट्स:**\nकसे काम करते, फंडामेंटल व टेक्निकल ॲनालिसिस, कॅन्डलस्टिक चार्ट्स, रिस्क मॅनेजमेंट आणि स्मार्ट गुंतवणुकीचे नियम.\n\n2. **AI व जनरेटिव्ह AI मास्टरी:**\nChatGPT, Claude, प्रॉम्प्ट इंजिनिअरिंग, AI प्रेझेंटेशन्स आणि उत्पादकता वाढवणारी टूल्सचे प्रॅक्टिकल हँड्स-ऑन ट्रेनिंग.\n\n🎯 *विद्यार्थी, तरुण आणि पालकांसाठी उपयुक्त!*`,
          chips: [
            { label: '🎯 या कोर्ससाठी नोंदणी करा', query: 'book demo' },
            { label: '💰 फी विचारा', query: 'fees' },
            { label: '💬 व्हॉट्सॲपवर माहिती मिळवा', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `📈 **Special Skill Development Courses:**\n\n1. **Stock Market & Financial Markets:**\nLearn fundamental & technical analysis, candlestick charts, price action, risk management, and smart investing habits.\n\n2. **AI & Generative AI Mastery:**\nHands-on training in ChatGPT, Claude, Prompt Engineering, AI content tools, and practical 21st-century workflows.\n\n🎯 *Open for school students, college youth, and enthusiastic adults!*`,
          chips: [
            { label: '🎯 Enroll in Special Course', query: 'book demo' },
            { label: '💰 Ask Fee Details', query: 'fees' },
            { label: '💬 Chat on WhatsApp', query: 'whatsapp' }
          ]
        };
      }
    }

    // 5. Faculty & Teachers
    if (/faculty|teacher|sir|nikhillesh|amit|sirji|sir kon|qualification|experience|degree|शिक्षक|प्राध्यापक|सर|पात्रता|अनुभव/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `👨‍🏫 **आमचे तज्ज्ञ शिक्षक वर्ग व पात्रता:**\n\n• **निखिलेश भाटकर सर (संस्थापक व प्रमुख मार्गदर्शक):**\n🎓 **शैक्षणिक पात्रता:** BE मेकॅनिकल (इंजिनिअरिंग)\n📚 **अध्यापन अनुभव:** १५+ वर्षांचा प्रदीर्घ अनुभव (महाराष्ट्र स्टेट बोर्ड गणित व विज्ञान)\n📈 **ट्रेडिंग अनुभव:** ५+ वर्षे सक्रिय शेअर मार्केट प्रॅक्टिशनर\n📜 **प्रमाणपत्रे:**\n  ✔ विशाल मलकान सरांसोबत ABCT 360 ट्रेडिंग कोर्स पूर्ण\n  ✔ फायनान्शियल फ्रीडम अ‍ॅक्सिलरेटर (FFA) फ्युचर्स व ऑप्शन्स (F&O) कोर्स पूर्ण\n  ✔ Be10x सोबत AI मास्टर कोर्स पूर्ण (Generative AI व आधुनिक प्रॉम्प्टिंग)\n\n• **अमित पावसकर सर (Physics & Chemistry Expert):**\n🎓 BE मेकॅनिकल, पॉलिटेक्निक कॉलेज प्राध्यापक. विज्ञानाच्या कठीण संकल्पना, थिअरी व बोर्ड न्यूमेरिकल्स सहज सोप्या भाषेत स्पष्ट करतात.`,
          chips: [
            { label: '🎯 मोफत २ दिवसांचा डेमो बुक करा', query: 'book demo' },
            { label: '📈 शेअर मार्केट कोर्स माहिती', query: 'special courses' },
            { label: '💬 सरांशी व्हॉट्सॲपवर बोला', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `👨‍🏫 **Our Expert Faculty & Qualifications:**\n\n• **Nikhillesh Bhatkar Sir (Founder & Lead Educator):**\n🎓 **Qualification:** BE Mechanical Engineering\n📚 **Teaching Experience:** 15+ Years (Maharashtra State Board Maths & Science)\n📈 **Trading Experience:** 5+ Years Active Financial Market Practitioner\n📜 **Certifications & Specialized Courses:**\n  ✔ Completed **ABCT 360 Trading Course** with Vishal Malkan\n  ✔ Completed **Financial Freedom Accelerator (FFA)** Futures & Options (F&O) Course\n  ✔ Completed **AI Master Course with Be10x** (Generative AI & Productivity Tools)\n\n• **Amit Pawaskar Sir (Physics & Chemistry Expert):**\n🎓 BE Mechanical, Lecturer in Polytechnic College. Specialist in HSC State Board numerical solving, theory derivation, and exam technique.`,
          chips: [
            { label: '🎯 Book Demo Class', query: 'book demo' },
            { label: '📈 Stock Market Course', query: 'special courses' },
            { label: '💬 Chat with Nikhillesh Sir', query: 'whatsapp' }
          ]
        };
      }
    }

    // 6. Address & Location
    if (/address|location|where|map|sangameshwar|ninavi|पत्ता|कुठे|स्थान|पत्ता काय आहे|कहाँ/i.test(raw)) {
      return {
        text: `📍 **Academy Location:**\n\n**Nikhillesh Bhatkar Learning Academy**\nAt Post Sangameshwar, Near Ninavi Temple,\nDist. Ratnagiri, Maharashtra – 415611.\n\n🚗 Easy landmark near Sangameshwar central town.`,
        chips: [
          { label: '🗺️ Google Maps Directions', query: 'directions' },
          { label: '🎯 Book Demo Class', query: 'book demo' },
          { label: '💬 WhatsApp for Directions', query: 'whatsapp' }
        ]
      };
    }

    // Vision & Mission & Core Philosophy
    if (/vision|mission|goal|purpose|philosophy|values|ध्येय|उद्दिष्ट|मूल्ये|संकल्पना|विज़न|मिशन|लक्ष्य|उद्देश्य/i.test(raw)) {
      if (lang === 'mr') {
        return {
          text: `🎯 **निखिलेश भाटकर लर्निंग अकॅडमीची दृष्टी व ध्येय (Vision & Mission):**\n\n🔭 **आमची दृष्टी (Vision):**\nकेवळ घोकंपट्टी न करता प्रत्येक विद्यार्थ्याला सखोल संकल्पना समजणारा निडर अभ्यासक, विश्लेषणात्मक विचारवंत आणि २१व्या शतकातील AI व आर्थिक साक्षरतेने सुसज्ज भविष्यवेधी नागरिक घडवणे.\n\n🚀 **आमचे ध्येय (Mission):**\n• **पायाभूत संकल्पनांवर भर:** गणित व विज्ञानातील कठीण सूत्रे सोप्या, व्यावहारिक उदाहरणांसह स्पष्ट करणे.\n• **वैयक्तिक लक्ष व शंका निवारण:** मर्यादित बॅचेस आणि थेट निखिलेश सरांचे १-ऑन-१ मार्गदर्शन.\n• **बोर्ड परीक्षेत उत्तुंग यश:** मागील ५ वर्षांच्या प्रश्नपत्रिका (PYQs) व साप्ताहिक चाचण्यांचा सराव.\n• **२१व्या शतकातील कौशल्ये:** शालेय अभ्यासासोबतच शेअर मार्केट व AI चे प्रॅक्टिकल ज्ञान.\n\n💎 **मार्गदर्शक मूल्ये:** उत्कृष्टता, सखोल स्पष्टता, विद्यार्थी-केंद्रीत दृष्टी आणि सतत नाविन्यता!`,
          chips: [
            { label: '🎯 मोफत २ दिवसांचा डेमो बुक करा', query: 'book demo' },
            { label: '👨‍🏫 शिक्षकांची माहिती', query: 'faculty' },
            { label: '📝 बोर्ड प्रश्नपत्रिका (PYQ)', query: 'board papers' },
            { label: '💬 सरांशी व्हॉट्सॲपवर बोला', query: 'whatsapp' }
          ]
        };
      } else if (lang === 'hi') {
        return {
          text: `🎯 **निखिलेश भाटकर लर्निंग एकेडमी का विज़न और मिशन (Vision & Mission):**\n\n🔭 **हमारा विज़न (Vision):**\nकेवल रटने के बजाय प्रत्येक छात्र को वैचारिक रूप से सक्षम, विश्लेषणात्मक विचारक और २१वीं सदी की AI व वित्तीय समझ से युक्त भविष्य के प्रति आश्वस्त लीडर बनाना।\n\n🚀 **हमारा मिशन (Mission):**\n• **बुनियादी अवधारणाओं पर बल:** गणित और विज्ञान के कठिन सिद्धांतों को सहज और व्यावहारिक उदाहरणों से समझाना।\n• **व्यक्तिगत ध्यान और शंका समाधान:** सीमित बैच और निखिलेश सर का सीधा १-ऑन-१ मार्गदर्शन।\n• **बोर्ड परीक्षा तैयारी:** पिछले ५ वर्षों के बोर्ड प्रश्नपत्र (PYQs) और साप्ताहिक टेस्ट का गहन अभ्यास।\n• **२१वीं सदी की दक्षता:** स्कूली शिक्षा के साथ-साथ वित्तीय साक्षरता और AI की व्यावहारिक समझ।\n\n💎 **मूल दर्शन:** उत्कृष्टता, गहरी वैचारिक स्पष्टता, छात्र-हित और निरंतर नवाचार!`,
          chips: [
            { label: '🎯 निःशुल्क २ दिवसीय डेमो बुक करें', query: 'book demo' },
            { label: '👨‍🏫 शिक्षक परिचय', query: 'faculty' },
            { label: '📝 बोर्ड प्रश्न पत्र (PYQ)', query: 'board papers' },
            { label: '💬 व्हाट्सएप पर बात करें', query: 'whatsapp' }
          ]
        };
      } else {
        return {
          text: `🎯 **Nikhillesh Bhatkar Learning Academy — Vision & Mission:**\n\n🔭 **Our Vision:**\nTo be Maharashtra's benchmark learning academy that transcends rote memorization — transforming every student into a conceptually fearless scholar, an agile analytical thinker, and a future-ready leader equipped with 21st-century technological and financial intelligence.\n\n🚀 **Our Mission:**\n• **First-Principles Pedagogy:** Demystifying complex Math & Science formulas into intuitive real-world understanding.\n• **1-on-1 Personalized Mentorship:** Small batches ensuring every student's doubts are resolved with care.\n• **Proven Board Readiness:** Rigorous 5-year PYQ mastery, weekly diagnostic tests, and personalized feedback.\n• **Future-Ready Edge:** Equipping students with practical skills in Generative AI and Financial Literacy.\n\n💎 **Core Values:** Excellence & Integrity, Conceptual Rigour, Student-First Mentorship, and Continuous Innovation.`,
          chips: [
            { label: '🎯 Book Free 2-Day Demo', query: 'book demo' },
            { label: '👨‍🏫 Faculty Credentials', query: 'faculty' },
            { label: '📝 Board Papers & PYQs', query: 'board papers' },
            { label: '💬 Chat with Nikhillesh Sir', query: 'whatsapp' }
          ]
        };
      }
    }

    // 7. WhatsApp / Phone / Contact
    if (/whatsapp|phone|call|contact|number|mobile|संपर्क|फोन|व्हॉट्सॲप|नंबर|कॉल/i.test(raw)) {
      return {
        text: `📞 **Direct Contact Information:**\n\n• **Phone / WhatsApp:** +91 8380096494\n• **Email:** nikhileshbhatkar379@gmail.com\n• **Address:** At Post Sangameshwar, Near Ninavi Temple, Dist. Ratnagiri.\n\n👇 Click below to chat with Nikhillesh Sir on WhatsApp directly:`,
        chips: [
          { label: '💬 Open WhatsApp Chat Now', query: 'whatsapp_direct' },
          { label: '🎯 Book Free Demo Class', query: 'book demo' }
        ]
      };
    }

    // 8. General Courses Breakdown
    if (/course|subject|class|syllabus|maths|science|physics|chemistry|10th|12th|8th|9th|अभ्यासक्रम|विषय/i.test(raw)) {
      return {
        text: `📚 **Courses Offered at Academy:**\n\n1. **Standard 8 & 9 (State Board):** Mathematics & General Science foundational clarity.\n2. **Standard 10 SSC Board:** Algebra, Geometry, Science 1 & 2 + Intensive Question Bank solving.\n3. **Standard 12 HSC Board:** Specialized coaching in Mathematics, Physics & Chemistry.\n4. **Special Skill Courses:** Stock Market & Financial Literacy + Practical AI & ChatGPT Mastery.`,
        chips: [
          { label: '🎯 Book 2-Day Free Demo', query: 'book demo' },
          { label: '💰 Check Course Fees', query: 'fees' },
          { label: '⏰ View Timings', query: 'timings' }
        ]
      };
    }

    // 9. Default Fallback
    return {
      text: KB[lang].fallback,
      chips: KB[lang].chips
    };
  }

  // Save inquiry to AcademyDB and notify FormSubmit
  function submitChatLead(lead) {
    // 1. Save to localStorage database for Admin Dashboard
    if (typeof AcademyDB !== 'undefined' && AcademyDB.getInquiries) {
      const inquiries = AcademyDB.getInquiries();
      const newInquiry = {
        id: 'INQ-' + Date.now().toString().slice(-4),
        name: lead.name,
        phone: lead.phone,
        email: 'chatbot-lead@academy.local',
        type: 'Free 2-Day Demo (Chatbot)',
        standard: lead.standard || 'Standard 10 (SSC)',
        date: new Date().toISOString().split('T')[0],
        status: 'New'
      };
      inquiries.unshift(newInquiry);
      AcademyDB.saveInquiries(inquiries);
    }

    // 2. Submit to FormSubmit in background
    try {
      const formData = new FormData();
      formData.append('student_name', lead.name);
      formData.append('parent_phone', lead.phone);
      formData.append('class', lead.standard);
      formData.append('admission_type', 'Free 2-Day Demo Class (Via Chatbot)');
      formData.append('_subject', `New Chatbot Lead: ${lead.name} (${lead.standard})`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      fetch('https://formsubmit.co/ajax/nikhileshbhatkar379@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).catch(() => {
        // Fail gracefully
      });
    } catch (e) {
      // Ignore background network error
    }
  }

  // Build and Inject the Chatbot DOM
  function createChatbotUI() {
    if (document.getElementById('academyChatbotRoot')) return;

    const lang = getLang();
    const config = KB[lang] || KB.en;

    const container = document.createElement('div');
    container.id = 'academyChatbotRoot';
    container.innerHTML = `
      <!-- Floating Chat Trigger Button -->
      <div class="chatbot-trigger-wrapper" id="chatbotTriggerWrapper">
        <div class="chatbot-teaser-bubble" id="chatbotTeaser">
          <span>👋 Have questions? Ask Academy AI!</span>
          <button class="teaser-close-btn" id="teaserCloseBtn" aria-label="Close teaser">×</button>
        </div>
        <button class="chatbot-floating-btn" id="chatbotLauncherBtn" aria-label="Open Academy Assistant Chat">
          <span class="chatbot-btn-avatar">🤖</span>
          <span class="chatbot-online-dot"></span>
        </button>
      </div>

      <!-- Chat Drawer Window -->
      <div class="chatbot-window" id="chatbotWindow" style="display:none;" role="dialog" aria-label="Academy Assistant Chat">
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-header-avatar">🤖</div>
            <div>
              <h4 id="chatBotHeaderTitle">${config.botName}</h4>
              <small><span class="online-pulse"></span> ${config.botSubtitle}</small>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button class="chat-btn-header" id="chatResetBtn" title="Restart Conversation">🔄</button>
            <button class="chat-btn-header" id="chatCloseBtn" title="Close Chat">✕</button>
          </div>
        </div>

        <div class="chatbot-messages" id="chatbotMessages">
          <!-- Initial Welcome Message -->
          <div class="chat-msg bot-msg">
            <div class="chat-bubble">
              ${config.greeting.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </div>
            <div class="chat-time">Just now</div>
          </div>
        </div>

        <!-- Quick Reply Chips Bar -->
        <div class="chatbot-chips-bar" id="chatbotChipsBar">
          ${config.chips.map(c => `<button class="chat-chip" data-query="${escapeHTML(c.query)}">${escapeHTML(c.label)}</button>`).join('')}
        </div>

        <!-- Chat Input Footer -->
        <form class="chatbot-input-form" id="chatbotInputForm">
          <input type="text" id="chatbotTextInput" placeholder="${config.inputPlaceholder}" autocomplete="off" required aria-label="Chat query">
          <button type="submit" id="chatbotSendBtn" aria-label="Send message">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(container);
    bindChatEvents();
  }

  // Bind Event Listeners
  function bindChatEvents() {
    const launcher = document.getElementById('chatbotLauncherBtn');
    const chatWindow = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatCloseBtn');
    const resetBtn = document.getElementById('chatResetBtn');
    const form = document.getElementById('chatbotInputForm');
    const input = document.getElementById('chatbotTextInput');
    const messages = document.getElementById('chatbotMessages');
    const chipsBar = document.getElementById('chatbotChipsBar');
    const teaser = document.getElementById('chatbotTeaser');
    const teaserClose = document.getElementById('teaserCloseBtn');

    // Toggle Chat Window
    function toggleChat(open) {
      const isVisible = (open !== undefined) ? open : (chatWindow.style.display !== 'none');
      if (isVisible) {
        chatWindow.style.display = 'none';
        launcher.classList.remove('active');
      } else {
        chatWindow.style.display = 'flex';
        launcher.classList.add('active');
        if (teaser) teaser.style.display = 'none';
        setTimeout(() => input.focus(), 150);
        scrollToBottom();
      }
    }

    if (launcher) launcher.addEventListener('click', () => toggleChat());
    if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(true));
    if (teaserClose) teaserClose.addEventListener('click', (e) => { e.stopPropagation(); if (teaser) teaser.style.display = 'none'; });

    // Reset Chat
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        leadState.active = false;
        leadState.step = 0;
        const lang = getLang();
        const config = KB[lang] || KB.en;
        messages.innerHTML = `
          <div class="chat-msg bot-msg">
            <div class="chat-bubble">${config.greeting.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
            <div class="chat-time">Just now</div>
          </div>
        `;
        renderChips(config.chips);
      });
    }

    // Handle Form Submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        input.value = '';
        handleUserMessage(text);
      });
    }

    // Handle Chips Click (Delegated)
    if (chipsBar) {
      chipsBar.addEventListener('click', (e) => {
        const chip = e.target.closest('.chat-chip');
        if (chip) {
          const query = chip.getAttribute('data-query');
          if (query === 'open_notes' || query === 'notes') {
            window.location.href = 'notes.html';
            return;
          }
          if (query === 'directions') {
            window.open('https://maps.google.com/?q=Sangameshwar+Ratnagiri', '_blank');
            return;
          }
          if (query === 'whatsapp' || query === 'whatsapp_direct') {
            window.open('https://wa.me/918380096494?text=Hello%20Nikhillesh%20Sir%2C%20I%20have%20an%20inquiry%20regarding%20the%20Academy.', '_blank');
            return;
          }
          if (query === 'wa_custom') {
            const lead = leadState.data;
            const waText = encodeURIComponent(`Hello Nikhillesh Sir, I just registered for a Demo Class for ${lead.standard || 'Academy'}. My name is ${lead.name || 'Student'} (Phone: ${lead.phone || ''}).`);
            window.open(`https://wa.me/918380096494?text=${waText}`, '_blank');
            return;
          }
          handleUserMessage(chip.textContent.trim(), query);
        }
      });
    }
  }

  // Handle User Input and State Machine
  function handleUserMessage(displayText, rawQuery) {
    appendUserMessage(displayText);

    const lang = getLang();
    const config = KB[lang] || KB.en;
    const text = rawQuery || displayText;

    // Check if user is cancelling lead flow
    if (leadState.active && /cancel|थांबवा|रद्द|रद्द करा|नहीं/i.test(text)) {
      leadState.active = false;
      leadState.step = 0;
      setTimeout(() => {
        appendBotMessage(config.leadCancel, config.chips);
      }, 400);
      return;
    }

    // Step-by-Step Lead State Machine
    if (leadState.active) {
      if (leadState.step === 1) {
        // Stored Name
        leadState.data.name = text;
        leadState.step = 2;
        setTimeout(() => {
          appendBotMessage(config.leadStepCourse(leadState.data.name), [
            { label: 'Class 10 (SSC)', query: 'Standard 10 (SSC)' },
            { label: 'Class 12 (HSC)', query: 'Standard 12 (HSC)' },
            { label: 'Class 8 / 9', query: 'Class 8 / 9' },
            { label: 'Stock Market Course', query: 'Special: Stock Market Course' },
            { label: 'AI & GenAI Course', query: 'Special: AI & Generative AI' },
            { label: '❌ Cancel', query: 'cancel' }
          ]);
        }, 500);
        return;
      } else if (leadState.step === 2) {
        // Stored Course
        leadState.data.standard = text;
        leadState.step = 3;
        setTimeout(() => {
          appendBotMessage(config.leadStepPhone, [
            { label: '❌ Cancel Registration', query: 'cancel' }
          ]);
        }, 500);
        return;
      } else if (leadState.step === 3) {
        // Validate 10-digit phone
        const cleanedPhone = text.replace(/[^0-9]/g, '');
        if (cleanedPhone.length < 10) {
          setTimeout(() => {
            appendBotMessage(config.invalidPhone || '⚠️ Please enter a valid 10-digit mobile number:', [
              { label: '❌ Cancel Registration', query: 'cancel' }
            ]);
          }, 300);
          return;
        }

        // Stored Phone & Finalize
        leadState.data.phone = cleanedPhone.slice(-10);
        submitChatLead(leadState.data);

        const successText = config.leadSuccess(leadState.data);
        const waLink = `https://wa.me/918380096494?text=${encodeURIComponent(`Hello Nikhillesh Sir, I just registered for a Demo Class for ${leadState.data.standard}. My name is ${leadState.data.name} (Phone: ${leadState.data.phone}).`)}`;

        leadState.active = false;
        leadState.step = 0;

        setTimeout(() => {
          appendBotMessage(successText, [
            { label: '💬 Open WhatsApp with Nikhillesh Sir', query: 'wa_custom' },
            { label: '📚 Explore Study Notes', query: 'notes' },
            { label: '💰 View Fee Details', query: 'fees' }
          ], waLink);
        }, 600);
        return;
      }
    }

    // Normal FAQ / Knowledge Base Query
    setTimeout(() => {
      const reply = getBotReply(text);
      appendBotMessage(reply.text, reply.chips);
    }, 450);
  }

  // DOM Helpers
  function appendUserMessage(text) {
    const messages = document.getElementById('chatbotMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg user-msg';
    msgDiv.innerHTML = `
      <div class="chat-bubble">${escapeHTML(text)}</div>
      <div class="chat-time">Just now</div>
    `;
    messages.appendChild(msgDiv);
    scrollToBottom();
  }

  function appendBotMessage(markdownText, chips, customLink) {
    const messages = document.getElementById('chatbotMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg bot-msg';

    let formatted = markdownText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    if (customLink) {
      formatted += `<br><br><a href="${customLink}" target="_blank" rel="noopener noreferrer" class="btn-chat-wa">📲 Chat on WhatsApp with Sir</a>`;
    }

    msgDiv.innerHTML = `
      <div class="chat-bubble">${formatted}</div>
      <div class="chat-time">Just now</div>
    `;
    messages.appendChild(msgDiv);
    scrollToBottom();

    if (chips && chips.length > 0) {
      renderChips(chips);
    }
  }

  function renderChips(chips) {
    const chipsBar = document.getElementById('chatbotChipsBar');
    if (!chipsBar) return;
    chipsBar.innerHTML = chips.map(c => `
      <button class="chat-chip" data-query="${escapeHTML(c.query)}">${escapeHTML(c.label)}</button>
    `).join('');
  }

  function scrollToBottom() {
    const messages = document.getElementById('chatbotMessages');
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    createChatbotUI();
  });

})();
