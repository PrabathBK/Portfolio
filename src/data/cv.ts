import { PersonalInfo, Education, Experience, Award, Certification, Skills, News, ExtraCurricular, SportsActivity, Reference } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Prabath Wijethilaka',
  title: 'Electronic and Telecommunication Engineering',
  email: 'prabathwijethilaka50@gmail.com',
  phone: '+94(0)714745349',
  location: 'Sri Lanka',
  website: 'https://prabath.auradigitallabs.com',
  github: 'https://github.com/PrabathBK',
  linkedin: 'https://www.linkedin.com/in/prabath-wijethilaka-4950b220b/',
  facebook: 'https://www.facebook.com/share/1BgzRX6GWA/',
  instagram: 'https://www.instagram.com/prabath_wije50?igsh=dWlubWdyODFlM3hj',
  summary: 'I am Prabath Wijethilaka, a Final Year undergraduate student in Electronic and Telecommunication Engineering at the University of Moratuwa, skilled in digital electronics and communications.',
  interests: [
    'FPGA Hardware Accelerated Systems',
    'Computer Architecture',
    'Embedded Systems',
    'Full Stack Development',
    'AI & ML',
    'Entrepreneurship',
    'Sports and Outdoor Activities'
  ],
  profileImage: '/img/prof_pic.jpg'
};

export const education: Education[] = [
  {
    id: 'uom-bsc',
    degree: 'BSc (Hons) Electronic and Telecommunication Engineering',
    institution: 'University of Moratuwa',
    location: 'Sri Lanka',
    startDate: '2022',
    endDate: 'Present',
    gpa: '3.70/4.0',
    details: [
      'CGPA: 3.70/4.0',
      "Dean's List: Semester 2, 6, 7",
      'Focus: FPGA Design, Hardware Acceleration, Computer Architecture'
    ]
  },
  {
    id: 'al-dharmaraja',
    degree: 'GCE Advanced Level Examinations',
    institution: 'Dharmaraja College - Kandy',
    location: 'Kandy, Sri Lanka',
    startDate: '2012',
    endDate: '2020',
    details: [
      'Stream: Physical Science',
      'Z score: 2.5258',
      'District Rank: 13',
      'Island Rank: 134'
    ]
  }
];

export const experience: Experience[] = [
  {
    id: 'lseg-internship',
    title: 'Hardware Accelerated Systems Engineer - Internship',
    organization: 'London Stock Exchange Group',
    location: 'On-site',
    startDate: 'Dec 2024',
    endDate: 'June 2025',
    description: 'Contributing to the verification of high-performance FPGA-based networking systems',
    bulletPoints: [
      'Developed a UVM-driven Ethernet packet capture and replay tool capable of injecting .pcap files to reliably reproduce real production failures',
      'Migrated the full testbench architecture from nanosecond to femtosecond precision, resolving critical timing alignment issues in the TCP Offload Engine pipeline',
      'Explored Linux kernel driver operation for configuring the Xilinx Alveo U50 data-center FPGA',
      'Integrated Model Checking principles into the verification methodology to strengthen functional correctness and coverage'
    ]
  },
  {
    id: 'aura-digital-labs',
    title: 'Co-Founder',
    organization: 'Aura Digital Labs',
    location: 'Remote',
    startDate: 'May 2024',
    endDate: 'Present',
    description: 'Co-founded and led a digital solutions agency delivering embedded systems, full-stack applications, computer vision, and automation solutions for small-to-medium enterprises.',
    bulletPoints: [
      'Co-founded and led a digital solutions agency delivering embedded systems, full-stack applications, computer vision, and automation solutions for small-to-medium enterprises',
      'Website: https://www.auradigitallabs.com'
    ]
  },
  {
    id: 'hydrolink',
    title: 'Hydrolink — Team Leader',
    organization: 'Champions — SLIoT Challenge 2023',
    location: 'Sri Lanka',
    startDate: '2023',
    endDate: '2024',
    description: 'Hydrolink is an innovative IoT solution designed to transform water-tank management. Our team developed the product from concept to deployment, earning a grant from the World Bank to manufacture a pilot batch and create a market-ready device',
    bulletPoints: [
      'Led the team to secure first place at the SLIoT Challenge 2023',
      'Earned a grant from the World Bank to manufacture a pilot batch',
      'Developed the product from concept to deployment, creating a market-ready device',
      'Strengthened experience in leadership, project management, business planning, and product marketing',
      'Launched official website: hydrolink.auradigitallabs.com'
    ]
  }
];

export const awards: Award[] = [
  {
    id: 'dvcon-2025',
    title: '1st Runners-Up | DVCon India 2025 – International Design Contest',
    organization: 'DVCon India 2025',
    date: 'September 2025',
    category: 'FPGA/Design',
    description: 'SLMs on Edge – A lightweight FPGA-based systolic array accelerator and bare-metal inference engine designed to run the full Qwen3 pipeline on the VEGA AT1051 RISC-V SoC.',
    details: [
      'Awarded 1st Runners-up at the DVCon India 2025 Design Contest organized by CDAC Trivandrum',
      'Designed a custom accelerator for the VEGA AT1051 SoC',
      'Built a framework capable of running the full Qwen3 inference pipeline on bare metal',
      'Demonstrated strong hardware–software co-design skills while competing against top university and industry teams'
    ],
    image: '/img/Projects/SLM/1.JPG'
  },
  {
    id: 'sliot-2023',
    title: 'Championship | SLIoT Challenge 2023 - All island IoT competition',
    organization: 'SLIoT Challenge 2023',
    date: '2023',
    category: 'IoT',
    description: 'Hydrolink - A Complete IoT Device Revolutionizing Water Tank Management',
    details: [
      'Secured first place at the SLIoT Challenge 2023',
      'Earned a grant from the World Bank to manufacture a pilot batch',
      'Developed a complete IoT solution from concept to deployment',
      'Launched official website: www.hydrolink.lk'
    ],
    image: '/img/hydrolink2.jpeg'
  },
  {
    id: 'ieee-circuit-2024',
    title: 'Championship | IEEE Sri Lanka Circuit Challenge 2024',
    organization: 'IEEE Sri Lanka',
    date: '2024',
    category: 'Embedded Systems',
    description: 'Steer Safe by PulseX - A wearable device that utilizes machine learning and Electrooculography (EOG) signals to track a driver state of awareness in real-time.',
    details: [
      'Championship at IEEE Sri Lanka Circuit Challenge 2024',
      'Developed wearable EOG-based drowsiness detection system',
      'Integrated machine learning for real-time driver monitoring'
    ],
    image: '/img/Projects/steersafe/3.png'
  },
  {
    id: 'brainstorm-2024',
    title: '1st Runners-Up | Brainstorm 2024 - Healthcare innovation competition',
    organization: 'Brainstorm 2024',
    date: '2024',
    category: 'Healthcare',
    description: 'Steer Safe - A wearable device that utilizes machine learning and Electrooculography (EOG) signals to track a driver state of awareness in real-time',
    details: [
      '1st Runners-up at Brainstorm 2024',
      'Healthcare innovation focused on driver safety',
      'EOG-based attention monitoring system'
    ],
    image: '/img/Achievments/brainstrom.png'
  },
  {
    id: 'dvcon-2024',
    title: 'Stage 2 (Top 20) | DVCon India 2024 - International Design Contest',
    organization: 'DVCon India 2024',
    date: '2024',
    category: 'FPGA/Design',
    description: 'GateMasters - Design and implement a hardware accelerator for a Vision Transformer-based malware detection system on a VEGA Processor.',
    details: [
      'Reached Stage 2 (Top 20) in international competition',
      'Designed hardware accelerator for ViT-based malware detection',
      'Competed with team GateMasters'
    ],
    image: '/img/Achievments/dvcon2024.png'
  },
  {
    id: 'hackx-2024',
    title: 'Finalist | HackX 2024 - Inter University Startup Challenge',
    organization: 'HackX 2024',
    date: '2024',
    category: 'Entrepreneurship',
    description: 'Hydrolink - A Complete IoT Device Revolutionizing Water Tank Management.',
    details: [
      'Finalist in inter-university startup challenge',
      'Pitched Hydrolink IoT solution to investors',
      'Demonstrated business viability and market potential'
    ],
    image: '/img/Achievments/hackx.jpeg'
  },
  {
    id: 'slug-2023',
    title: 'Sri Lanka University Games Championship 2023',
    organization: 'Sri Lanka University Games (SLUG)',
    date: '2023',
    category: 'Sports',
    description: 'Championship title at the Sri Lanka University Games 2023.',
    details: [
      'Sri Lanka University Games Championship 2023',
      'University Baseball Team - University of Moratuwa'
    ],
    image: '/img/Achievments/SLUG.jpeg'
  },
  {
    id: 'deans-list',
    title: "Dean's List",
    organization: 'University of Moratuwa',
    date: '',
    category: 'Academic',
    description: 'Academic excellence recognition',
    details: [
      'Semester 2',
      'Semester 6',
      'Semester 7'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'fpga-vitis',
    title: 'Function Acceleration on FPGA with Vitis',
    organization: 'Udemy'
  },
  {
    id: 'linux-drivers',
    title: 'Linux Device Drivers',
    organization: 'LinkedIn Learning'
  },
  {
    id: 'cpp-lseg',
    title: 'High-Performance and Mission-Critical Software Development Using C++',
    organization: 'London Stock Exchange Group'
  },
  {
    id: 'fpga-intro',
    title: 'Introduction to FPGA Design for Embedded Systems',
    organization: 'University of Colorado Boulder - Coursera'
  },
  {
    id: 'fpga-softcore',
    title: 'FPGA Softcore Processors and IP Acquisition',
    organization: 'University of Colorado Boulder - Coursera'
  },
  {
    id: 'hdl-fpga',
    title: 'Hardware Description Languages for FPGA Design',
    organization: 'University of Colorado Boulder - Coursera'
  },
  {
    id: 'ml-specialization',
    title: 'Machine Learning Specialization',
    organization: 'Deeplearning.AI - Coursera'
  },
  {
    id: 'aat',
    title: 'AAT Level 3 Completed',
    organization: 'Association of Accounting Technicians of Sri Lanka'
  },
  {
    id: 'diploma-english',
    title: 'Diploma in English',
    organization: 'Esoft Metro Campus - Sri Lanka'
  },
  {
    id: 'diploma-it',
    title: 'Diploma in IT',
    organization: 'Esoft Metro Campus - Sri Lanka'
  }
];

export const skills: Skills = {
  languages: ['Java', 'C', 'C++', 'VHDL', 'Verilog', 'SystemVerilog', 'Python', 'SQL', 'React', 'JavaScript', 'Dart', 'HTML', 'CSS'],
  developerTools: ['Vivado', 'Vitis', 'Quartus', 'IntelliJ', 'MATLAB', 'Git', 'Altium Designer', 'SolidWorks', 'Android Studio', 'Gazebo', 'Docker', 'VS Code', 'Postman'],
  frameworks: ['UVM', 'Spring Boot', 'Flutter', 'Arduino', 'Scikit-learn', 'ROS2'],
  databases: ['Firebase', 'MongoDB', 'Microsoft Azure', 'MySQL'],
  operatingSystems: ['Ubuntu', 'Windows', 'RedHat', 'Raspbian'],
  softSkills: ['Problem-Solving', 'Team Leadership', 'Project Management', 'Teamwork', 'Public Speaking', 'Finance and Account management', 'Strategic Decision-Making', 'Digital Marketing', 'Teaching', 'Photography', 'Videography']
};

export const news: News[] = [
  {
    id: 'floodsupport-volunteer',
    title: 'Volunteer Developer for FloodSupport Sri Lanka',
    date: 'December 2025',
    description: 'Developed a real-time disaster analytics dashboard for the FloodSupport initiative, providing interactive data visualization and region-wise insights to support emergency relief operations during the Sri Lanka floods.',
    category: 'Volunteering',
    link: 'https://stats.floodsupport.org',
    image: '/img/flood1.png'
  },
  {
    id: 'dvcon-2025-award',
    title: 'Awarded 1st Runners-Up at DVCon India 2025',
    date: 'September 2025',
    description: 'Our project "SLMs on Edge" secured 1st Runners-Up position at the DVCon India 2025 Design Contest, competing against top university and industry teams.',
    category: 'Achievement',
    link: 'https://www.linkedin.com/posts/dvcon-india_dvconindia2025-activity-7371561431197986816-c_HJ',
    image: '/img/Projects/SLM/1.JPG'
  },
  {
    id: 'lseg-internship',
    title: 'Started Internship at London Stock Exchange Group',
    date: 'December 2024',
    description: 'Joined LSEG as Hardware Accelerated Systems Engineer Intern, working on high-performance FPGA-based networking systems verification.',
    category: 'Career'
  },
  {
    id: 'hackx-finalist',
    title: 'Finalist at HackX 2024',
    date: '2024',
    description: 'Hydrolink was selected as a finalist in the HackX 2024 Inter-University Startup Challenge, pitching our IoT solution to industry investors.',
    category: 'Achievement',
    image: '/img/Achievments/hackx.jpeg'
  },
  {
    id: 'head-marketing',
    title: 'Appointed Head of Marketing',
    date: 'August 2024',
    description: 'Took on the role of Head of Marketing for the Electronic Club at the University of Moratuwa, leading strategic initiatives and event promotion.',
    category: 'Career'
  },
  {
    id: 'ieee-circuit-champion',
    title: 'Championship at IEEE Circuit Challenge 2024',
    date: '2024',
    description: 'Steer-Safe project won the IEEE Sri Lanka Circuit Challenge 2024 for innovative drowsiness detection system.',
    category: 'Achievement',
    image: '/img/Projects/steersafe/3.png'
  },
  {
    id: 'dvcon-2024-stage2',
    title: 'Top 20 at DVCon India 2024',
    date: '2024',
    description: 'Team GateMasters reached Stage 2 (Top 20) in the International Design Contest with our hardware accelerator for malware detection.',
    category: 'Achievement',
    image: '/img/Achievments/dvcon2024.png'
  },
  {
    id: 'slug-2023',
    title: 'SLUG 2023 Baseball Champions',
    date: '2023',
    description: 'University of Moratuwa Baseball Team clinched the Championship title at the Sri Lanka University Games 2023.',
    category: 'Achievement',
    image: '/img/Achievments/SLUG.jpeg'
  },
  {
    id: 'sliot-champion',
    title: 'Champions at SLIoT Challenge 2023',
    date: '2023',
    description: 'Project Hydrolink won the SLIoT Challenge 2023 and received funding from the World Bank for pilot production.',
    category: 'Achievement',
    image: '/img/hydrolink2.jpeg'
  },
  {
    id: 'deans-list',
    title: 'Dean\'s List Recognition',
    date: '2023',
    description: 'Recognized on the Dean\'s List for academic excellence in Semester 2 and Semester 6.',
    category: 'Academic'
  }
];

export const conferences = [
  {
    id: 'dvcon-2025',
    title: 'DVCon India 2025 – Design and Verification Conference',
    date: 'September 10-11, 2025',
    location: 'Radisson Blu, Marathahalli, Bangalore',
    role: 'Runners-up – Design Contest',
    description: 'Participated in the DVCon India 2025 Design Contest organized by CDAC Trivandrum',
    link: 'https://dvcon-india.org/'
  },
  {
    id: 'lead-cs-8',
    title: 'LEAD CS 8.0 – Leadership Development Program',
    date: 'March 2022',
    location: 'Hotel Ramrich, Ja-Ela',
    role: 'Participant',
    description: 'Leadership development program organized by AIESEC Society – University of Moratuwa'
  }
];

export const recommendations = [
  {
    author: 'Nuwantha Silva',
    position: 'Assoc. Tech Lead (FPGA)',
    organization: 'London Stock Exchange Group',
    text: 'Prabath demonstrated outstanding self-learning skills, quickly adapting to our existing codebase with minimal intervention and significantly improved the test bench running time. I highly recommend Prabath to any organization. He would be an invaluable asset to any forward-thinking organization',
    link: 'https://www.linkedin.com/posts/prabath-wijethilaka-4950b220b_im-truly-grateful-to-have-received-this-activity-7353341714419363841-uBZN'
  }
];

export const extraCurricular: ExtraCurricular[] = [
  {
    id: 'floodsupport-volunteer',
    title: 'Volunteer Developer – FloodSupport Sri Lanka',
    organization: 'Community Disaster Relief Initiative – Sri Lanka',
    role: 'Developer',
    year: '2025'
  },
  {
    id: 'judge-hackelite',
    title: 'Judge Board – HackElite 2.0',
    organization: 'IEEE Sri Lanka Women in Engineering – University of Moratuwa',
    year: '2025'
  },
  {
    id: 'session-biomedical',
    title: 'Conduct Knowledge Session: Advanced Biomedical Electronics & Computational Technologies',
    organization: 'IEEE EMBS Student Branch Chapter – University of Moratuwa',
    year: '2025'
  },
  {
    id: 'session-raspberry',
    title: 'Conduct Knowledge Session: Raspberry Pi Web Services',
    organization: 'Pi Mora, SPARK Branch - University of Moratuwa',
    year: '2025'
  },
  {
    id: 'head-marketing',
    title: 'Head of Marketing',
    organization: 'Electronic Club - University of Moratuwa',
    startDate: 'Aug 2025',
    endDate: 'Present'
  },
  {
    id: 'marketing-coordinator',
    title: 'Marketing Coordinator',
    organization: 'Electronic Club - University of Moratuwa',
    startDate: 'Sep 2024',
    endDate: 'Aug 2025'
  },
  {
    id: 'social-media-1',
    title: 'Social Media Sub-Coordinator',
    organization: 'Electronic Club - University of Moratuwa',
    startDate: 'Aug 2023',
    endDate: 'Sep 2024'
  },
  {
    id: 'batch-rep',
    title: 'Department Batch Representative',
    organization: 'Department of Electronic and Telecommunication Engineering - University of Moratuwa',
    startDate: 'Jan 2024',
    endDate: 'May 2025'
  },
  {
    id: 'finance-ieee',
    title: 'Finance Committee member',
    organization: 'IEEE Society University of Moratuwa - project "Mora Foresight 1.0"',
    startDate: 'Mar 2023',
    endDate: 'Aug 2023'
  },
  {
    id: 'event-exmo',
    title: 'Event Sub-Committee member',
    organization: 'EXMO - University of Moratuwa',
    startDate: 'July 2023',
    endDate: 'Aug 2023'
  },
  {
    id: 'finance-aiesec',
    title: 'Finance Committee member',
    organization: 'AIESEC Society University of Moratuwa - project "Rooted 1.0"',
    startDate: 'Aug 2022',
    endDate: 'Dec 2022'
  },
  {
    id: 'prefect',
    title: 'Junior Prefect',
    organization: 'Dharmaraja Collage - Kandy',
    startDate: 'Jan 2015',
    endDate: 'Dec 2015'
  },
  {
    id: 'president',
    title: 'President of Collage Hosteler\'s Society',
    organization: 'Dharmaraja Collage - Kandy',
    startDate: 'Jan 2017',
    endDate: 'Dec 2017'
  },
  {
    id: 'volunteer-teaching',
    title: 'Volunteering in Sasnaka Sansada',
    organization: 'Teaching experience with Volunteering in "Ganitha Saviya" Project',
    startDate: '2021',
    endDate: '2022'
  }
];

export const sportsActivities: SportsActivity[] = [
  {
    id: 'baseball-uni',
    title: 'Sri Lanka University Games Championship 2023',
    organization: 'University Baseball Team - University of Moratuwa'
  },
  {
    id: 'hiking',
    title: 'Participated STRIDIAN\'23',
    organization: 'Mora Hiking Club - University of Moratuwa'
  },
  {
    id: 'volleyball-captain',
    title: 'Captain of the college under 17 volleyball team',
    organization: 'Dharmaraja College - Kandy'
  },
  {
    id: 'hockey-merit',
    title: 'Obtained a \'Merit\' for Hockey on Annual "Colors Nite"',
    organization: 'Dharmaraja College - Kandy'
  },
  {
    id: 'sports-teams',
    title: 'Member of the college Baseball, and Hockey team',
    organization: 'Dharmaraja College - Kandy'
  }
];

export const references: Reference[] = [
  {
    name: 'Ajith A. Pasqual',
    credentials: 'B.Sc. Eng. (Moratuwa, Sri Lanka), M.Eng. (Tokyo), Ph.D. (Tokyo), MIEEE, MACM',
    title: 'Senior Lecturer',
    department: 'Department of Electronic and Telecommunication Engineering',
    organization: 'University of Moratuwa, Moratuwa, Sri Lanka',
    email: 'pasqual@uom.lk',
    phone: '+94(0)777413099'
  },
  {
    name: 'Nuwantha Silva',
    credentials: 'B.Sc. Eng. (Moratuwa, Sri Lanka)',
    title: 'Assoc. Tech Lead',
    organization: 'London Stock Exchange Group',
    email: 'nuwantha.silva@lseg.com',
    phone: '+94(0)779213449'
  }
];
