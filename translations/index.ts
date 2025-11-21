export const translations = {
  en: {
    // Header
    header: {
      home: "Home",
      about: "About",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      clientLogin: "Client Login",
      companyName: "Liu CPA , PLLC",
      phone: "TEL: 801-895-2011",
    },
    // Hero Section
    hero: {
      subtitle:
        "ACCOUNTING AND TAX SERVICES FOR INDIVIDUALS & SMALL BUSINESSES",
      title:
        "Your one-stop CPA firm for bookkeeping and tax\nSimple, reliable, done right",
      cta: "GET A FREE QUOTE",
    },
    // About Me Section
    aboutMe: {
      title: "ABOUT ME",
      name: "Meet Alex Liu, CPA",
      content:
        "Alex graduated from East China University in Shanghai with a Bachelor of Science in Accounting and earned her Master of Accounting from Washington University in St. Louis. She is a certified public accountant and a member of the AICPA (American Institute of Certified Public Accountants). She is now living in Salt Lake City, Utah with her husband and four pets.",
      learnMore: "LEARN MORE",
    },
    // We Offer Section
    weOffer: {
      title: "WE OFFER",
      service1: {
        title: "Tax",
        description:
          "We make the tax process clear, efficient, and personalized - whether for individuals or businesses. We explain what matters in simple terms and guide you through each decision. Our goal is to help you file accurately, save on taxes, and feel confident every step of the way.",
      },
      service2: {
        title: "Bookkeeping",
        description:
          "Bookkeeping shouldn't slow you down. We keep your financial records accurate, organized, and up-to-date, giving you clear insight into your business's performance. Whether you are a small business owner or self-employed, the numbers are handled so you can stay focused on what you do best.",
      },
      service3: {
        title: "Consulting",
        description:
          "We provide consulting services tailored to you and your business, including QuickBooks setup, account cleanup, IRS audit representation, and payroll system setup. Have questions? We are here to help.",
      },
      cta: "SEE ALL SERVICES",
    },
    // Services Section
    services: {
      title: "Our Services",
      taxPreparation: {
        title: "Tax Preparation",
        description:
          "Comprehensive tax preparation for individuals and businesses",
      },
      bookkeeping: {
        title: "Bookkeeping",
        description:
          "Accurate and timely bookkeeping services to keep your finances in order",
      },
      consulting: {
        title: "Business Consulting",
        description: "Strategic financial advice to help your business grow",
      },
    },
    // About Section
    about: {
      title: "TESTIMONIALS",
      testimonials: [
        {
          quote:
            '"I\'m a testimonial. Click to edit me and add text that says something nice about you and your services."',
          name: "Jason Strauss",
          position: "CEO of ML Associates",
        },
        {
          quote:
            "We're just getting started - more reviews to come. Stay tuned!",
          name: "",
          position: "",
        },
      ],
    },
    // Our Guarantee Section
    ourGuarantee: {
      title: "OUR GUARANTEE",
      items: [
        {
          title: "Expert Bookkeeping, Tax and CPA Guidance",
          description:
            "We keep your books accurate and organized so your business runs smoothly. With strong CPA expertise, we help minimize your tax burden, maximize credits, and stay in full compliance—keeping you informed every step of the way.",
        },
        {
          title: "Secure and Confidential Financial Handling",
          description:
            "Your privacy is important. We use secure platforms like TaxDome to protect your information and keep communications confidential.",
        },
        {
          title: "1-Business-Day Response Guarantee",
          description:
            "Ask any questions, and we'll respond within one business day - no question is too small.",
        },
        {
          title: "Transparent, No-Hidden-Fee Pricing",
          description:
            "You get a clear quote upfront. Our 60-day money-back guarantee ensures your satisfaction. If you're not happy, you can request a full refund, hassle-free.",
        },
      ],
    },
    // Contact Section
    contactSection: {
      title: "Get In Touch",
      subtitle: "Ready to discuss your accounting needs?",
      email: "Email: contact@liucpa.com",
      phone: "Phone: 801-895-2011",
    },
    // Footer
    footer: {
      title: "GET IN TOUCH",
      address: "123 Main Street, Suite 100, New York, NY 10001",
      phone: "801-895-2011",
      wechat: "alexliucpa",
      copyright: "© 2025 by Liu CPA, PLLC. All Rights Reserved.",
      chatButton: "Let's Chat!",
    },
  },
};

export type Language = "en";
export type TranslationKeys = typeof translations.en;
