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
  mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14032.610772854408!2d77.00224110087272!3d28.444813130560892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1821ae3a8d91%3A0xbe9d7a7471ef81fb!2sL.B.S.I.T.%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1758997906921!5m2!1sen!2sin",
  allbranches: [
    {
      type: "main",
      address: "324/21 Opp- Hari Nagar Gali No-1, Near Anaj Mandi Chowk, Gurugram, Haryana - 122001",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14032.610772854408!2d77.00224110087272!3d28.444813130560892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1821ae3a8d91%3A0xbe9d7a7471ef81fb!2sL.B.S.I.T.%20Computer%20Institute!5e0!3m2!1sen!2sin!4v1758997906921!5m2!1sen!2sin",
      phone: "+91-9971556986",
      whatsapp: "+919971556986",
    },
    {
      type: "Sub Branch",
      address: "47, Saraswati Enclave, Sector 10B, Gurugram, NCR, Region, Haryana 122006",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.73092369087!2d76.97838015541991!3d28.443907500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17564c36ee69%3A0xaef0b99fcf29e3fb!2sLBSIT%20INSTITUTE!5e0!3m2!1sen!2sin!4v1758997997003!5m2!1sen!2sin",
      phone: "+91-9971556986",
      whatsapp: "+919971556986",
    },
    {
      type: "Sub Branch",
      address: "393/17, Hans Enclave, Rajiv Chowk, Gurugram, Haryana 122004",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14032.535677323833!2d77.01108166178585!3d28.445379145723383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19001d22b4bd%3A0x112c2727e632467e!2sLBSIT%20Institute%20(Hans%20Enclave)!5e0!3m2!1sen!2sin!4v1758997945634!5m2!1sen!2sin",
      phone: "+91-9971556986",
      whatsapp: "+919971556986",
    },
  ],
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
  { name: 'Branches', href: '/branches' },
  // { name: 'Books', href: '/books' }, add video in future
  { name: 'Contact', href: '/contact' }
];

// Site statistics
export const SITE_STATS = {
  studentsEnrolled: {
    count: "3000+",
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
const popularCourseIds = [1, 2, 7, 21];
export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Courses', href: '/courses' },
    { name: 'Branches', href: '/branches' },
    // { name: 'Books', href: '/books' }, // will add video sectio here
    { name: 'Contact', href: '/contact' }
  ],
  courses: COURSES.filter((i) => popularCourseIds.includes(i.id)).map(item => ({ name: item.name, href: `/course/${item.id}` })),
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' }
  ]
};

