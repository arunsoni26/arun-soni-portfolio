const baseUrl = import.meta.env.BASE_URL

export const profile = {
  name: 'Arun Soni',
  title: 'Technical Lead',
  location: 'Indore, Madhya Pradesh',
  phone: '+91-93010-85339',
  email: 'arun.soni.260695@gmail.com',
  linkedin: 'linkedin.com/in/arun-soni-099291137',
  image: `${baseUrl}assets/arun-profile.jpg`,
  summary:
    'Highly skilled software engineer with 8 years of experience in full stack development, technical leadership, and delivery of complex software solutions. Strong in coding standards, testing practices, documentation, agile collaboration, risk management, and mentoring cross-functional teams.',
  highlights: [
    { value: '8+', label: 'Years building software' },
    { value: '4', label: 'Companies served' },
    { value: '3+', label: 'Large product builds' },
    { value: 'AI', label: 'OpenAI platform work' }
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Barkat-Ullah University',
      years: '2013 - 2016',
      place: 'Pachore, Dist - Rajgarh, Madhya Pradesh'
    },
    {
      degree: 'Master of Computer Applications',
      school: 'RGPV',
      years: '2016 - 2018',
      place: 'Indore, Madhya Pradesh'
    }
  ],
  experience: [
    {
      role: 'Technical Lead',
      company: 'Ibentos',
      years: '2022 - Present',
      detail:
        'Leading work for an events platform specialized in larger-than-life brand campaigns, businesses, events, immersive virtual environments, and metaverse experiences.'
    },
    {
      role: 'Software Developer',
      company: 'Qubit3 Technologies',
      years: '2021 - 2022',
      detail:
        'Built tailored software solutions for modern enterprises with a focus on practical delivery and scalable implementation.'
    },
    {
      role: 'Web Developer',
      company: 'IBR Infotech',
      years: '2019 - 2021',
      detail:
        'Delivered web design, web development, ecommerce, and mobile-focused software for offshore clients.'
    },
    {
      role: 'PHP Developer',
      company: 'Softcaliber Systems',
      years: '2017 - 2019',
      detail:
        'Worked on modern app and web technologies for an Indore-based IT firm.'
    }
  ],
  skills: [
    'PHP',
    'Python',
    'JavaScript',
    'JQuery',
    'NodeJS',
    'AI (OpenAI)',
    'ExpressJS',
    'NextJS',
    'React',
    'Angular',
    'Laravel',
    'CodeIgniter',
    'MySQL',
    'MongoDB',
    'AWS',
    'Microservices',
    'Firebase',
    'Elasticsearch'
  ],
  projects: [
    {
      name: 'AI Assistant',
      overview:
        'AI voice assistant for customer support, lead generation, training success, and business workflows. It includes a human-like avatar, embeddable website chat, and lead generation for business websites.',
      technologies: ['HTML', 'Bootstrap', 'Three.js', 'JQuery', 'Laravel 10', 'MySQL', 'OpenAI'],
      role: [
        'Led a team of 3 developers and contributed heavily to development.',
        'Designed the architecture and database schema for scalability, performance, and security.',
        'Owned quality across deliverables.'
      ]
    },
    {
      name: 'Everest Timesheet',
      overview:
        'Web-based timesheet SaaS with employee, customer, holiday, tender, project, task, activity, weekly timesheet, approval, and reporting modules.',
      technologies: ['HTML', 'Bootstrap', 'JQuery', 'Laravel 8', 'MySQL'],
      role: [
        'Led a team of 2 members.',
        'Built Laravel modules and tested core flows.',
        'Prepared project documentation and ensured delivery quality.'
      ]
    },
    {
      name: 'Deal Onion',
      overview:
        'Online shopping application with public storefront and admin panel for product management, sales, invoices, and reporting.',
      technologies: ['Angular', 'ExpressJS', 'MongoDB'],
      role: [
        'Worked with 2 team members.',
        'Developed the backend with Node.js and Express.',
        'Designed software architecture and maintained delivery quality.'
      ]
    }
  ]
}
