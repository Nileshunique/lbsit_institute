import { COURSES } from "./courses";

export const SITE_INFO = {
  name: "L.B.S.I.T. Institute",
  tagline: "Empower Your Dreams, Through Education",
  description: "Leading educational institute providing quality courses and resources for students to excel in their academic and professional journey.",
  email: "lbsitinstitute2012@gmail.com",
  phone: "+91-9971556986",
  whatsapp: "+919971556986",
  openingTime: {
    default: "Mon-Sat: 7:00 AM - 9:00 PM",
    morning: "7:00 AM - 12:00 PM",
    evening: "3:00 PM - 9:00 PM",
  },
  address: "324/21 Opp- Hari Nagar Gali No-1, Near Anaj Mandi Chowk, Gurugram, Haryana - 122001",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6843.3634089693!2d77.00915176476693!3d28.446229412650542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1821ae3a8d91%3A0xbe9d7a7471ef81fb!2sL.B.S.I.T.%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1758962226940!5m2!1sen!2sin",
  socialMedia: {
    facebook: "https://www.facebook.com/share/16pzmAH1jX/",
    instagram: "https://www.instagram.com/lbsi.t?igsh=MW40Yno0dHowZTJmNw==",
    youtube: "https://youtube.com/@lbsit.rksir2008?si=ciEIQ86ND1UCCC7n"
  }
};

export const HERO_CONTENT = {
  title: "Your Journey to Excellence Start Here",
  subtitle: "Join thousands of successful students who have achieved their dreams with our comprehensive courses and expert guidance.",
  ctaText: "Explore Courses",
  secondaryCtaText: "Download Brochure"
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  // { name: 'Books', href: '/books' }, add video in future
  { name: 'Contact', href: '/contact' }
];

// Site statistics
export const SITE_STATS = {
  studentsEnrolled: {
    count: "1000+",
    label: "Students Enrolled",
    icon: "AcademicCapIcon",
    color: "primary"
  },
  coursesAvailable: {
    count: COURSES.length.toString(),
    label: "Courses Available",
    icon: "BookOpenIcon",
    color: "secondary"
  },
  successRate: {
    count: "96%",
    label: "Success Rate",
    icon: "UsersIcon",
    color: "primary"
  }
};

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Courses', href: '/courses' },
    // { name: 'Books', href: '/books' }, // will add video sectio here
    { name: 'Contact', href: '/contact' }
  ],
  courses: [
    { name: 'Web Development', href: '/courses#web-development' },
    { name: 'Digital Marketing', href: '/courses#digital-marketing' },
    { name: 'Data Science', href: '/courses#data-science' },
    { name: 'Graphic Design', href: '/courses#graphic-design' }
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' }
  ]
};

