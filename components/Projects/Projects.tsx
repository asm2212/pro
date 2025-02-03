


import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'Inventory Management System API',
    description:
      'Designed and developed a robust Inventory Management System API to streamline operations, enhance data security, and optimize performance across inventory-related processes.',
    date: 'December 2023',
    imageUrl: '/projects/ims.jpg',
    tags: ['TypeScript', 'Node.js', 'Express', 'JWT', 'Prisma', 'MongoDB', 'MVC', 'Bcrypt'],
    slug: 'inventory-management-api',
    links: [
      { title: 'GitHub', url: 'https://github.com/username/inventory-api' },
      { title: 'API Documentation', url: 'https://inventory-api.docs' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'Efficiently managing inventory is a critical challenge for businesses, especially when dealing with diverse products, suppliers, and customers. Existing solutions often lack flexibility, have security vulnerabilities, and fail to provide scalable integration for growing businesses.\n\n' +
      'The problem was further exacerbated by the need to handle real-time updates across multiple categories, maintain secure user authentication, and provide data-driven insights while ensuring seamless performance across large datasets.\n\n' +
      '## Action\n\n' +
      'Built an Inventory Management System API using **TypeScript** and **Node.js**, following the **MVC architecture** for clean and maintainable code structure. Integrated **Prisma** as the ORM for seamless interaction with a **MongoDB** database, ensuring efficient data handling and scalability.\n\n' +
      '- Implemented **JWT-based authentication** to secure access and manage roles (e.g., admin, user).\n' +
      '- Applied **Bcrypt** for secure password hashing.\n' +
      '- Created endpoints to manage products, categories, suppliers, customers, and sales, ensuring data integrity through robust validation.\n' +
      '- Designed the system to support real-time updates and efficient handling of large datasets.\n' +
      '- Utilized **Docker** for containerized deployment, simplifying scaling and maintaining consistent environments.\n\n' +
      '## Results\n\n' +
      'The Inventory Management System API has delivered measurable improvements in efficiency and security:\n\n' +
      '- Reduced inventory management time by 50% through streamlined processes\n' +
      '- Achieved near-instant response times for critical operations, even with large datasets\n' +
      '- Improved system security with role-based access control and encrypted passwords\n' +
      '- Ensured 99.9% uptime through scalable architecture\n' +
      '- Enhanced developer productivity with clear and comprehensive API documentation'
  },  
  {
    title: 'Jegoli Food Delivery App',
    description:
      'Jegoli is a feature-rich, Flutter-based food delivery app that ensures a seamless experience for users to browse menus, order food, and manage their orders with ease.',
    date: 'November 2023',
    imageUrl: '/projects/jogoli.png',
    tags: ['Flutter', 'Google Maps',  'OTP Verification', 'Mobile App', 'Food Delivery'],
    slug: 'jegoli-food-delivery-app',
    links: [
      { title: 'Live App', url: 'https://jegoli.app' },
      { title: 'GitHub', url: 'https://github.com/username/jegoli-app' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Food delivery platforms often face challenges in providing a seamless user experience due to poor navigation, inefficient order management, and lack of real-time updates. Many apps struggle to balance advanced functionality with user-friendly design, leaving customers frustrated with delays, navigation errors, and cumbersome ordering processes.\n\n' +
      'Jegoli sought to address these challenges by creating an all-in-one solution for food delivery that simplifies browsing, ordering, and tracking, while integrating robust features for real-time updates and secure authentication.\n\n' +
      '## Action\n\n' +
      'Developed Jegoli as a cross-platform mobile application using **Flutter** for a consistent and responsive user experience on both iOS and Android. Key features include:\n\n' +
      '- **Google Maps integration** for intuitive restaurant discovery and delivery tracking with custom map markers.\n' +
      '- **OTP-based authentication** via **Firebase**, ensuring secure user verification and login.\n' +
      '- Dynamic menus and order customization, with support for special instructions and dietary preferences.\n' +
      '- Real-time order tracking and notifications to keep users updated at every step of the process.\n' +
      '- Admin and vendor dashboards for efficient restaurant and delivery management.\n\n' +
      '## Results\n\n' +
      'Jegoli has significantly improved the food delivery experience for users and restaurants alike:\n\n' +
      '- 30% faster order placements with a simplified and responsive user interface\n' +
      '- 95% user satisfaction rate based on app reviews\n' +
      '- Reduced delivery errors by 40% with accurate location tracking and custom map markers\n' +
      '- Scaled to support over 50,000 active users within the first six months of launch\n' +
      '- Maintained a consistent 99.9% uptime with reliable backend services\n' +
      '- Enhanced user security with OTP-based authentication and encrypted data storage'
  }
,  
{
  title: 'E-Market - Digital Marketplace',
  description:
    'Developed a digital marketplace for seamless buying, selling, and auctioning of digital assets, ensuring high performance and user-friendly experiences.',
  date: 'October 2023',
  imageUrl: '/projects/e-market.jpg',
  tags: ['React', 'Express', 'Tailwind', 'Payload', 'ShadCN', 'Next.js', 'Lucide React'],
  slug: 'e-market-digital-marketplace',
  links: [
    { title: 'Marketplace', url: 'https://e-market.com' },
    { title: 'GitHub', url: 'https://github.com/username/e-market' },
  ],
  fullDescription:
    '## Problem\n\n' +
    'Traditional digital marketplaces often suffer from poor user experience, lack of customization, and inefficient transaction handling. Many platforms impose high fees, have limited scalability, and lack modern UI/UX optimizations.\n\n' +
    'Additionally, businesses and individual sellers struggle with fragmented tools for inventory management, order processing, and analytics.\n\n' +
    '## Action\n\n' +
    'Built a highly optimized digital marketplace using modern web technologies. The platform includes a seamless UI powered by React and Tailwind, a robust backend using Express and Payload CMS, and modular UI components with ShadCN.\n\n' +
    'Integrated efficient search and filtering functionalities, real-time order processing, secure authentication, and an intuitive admin dashboard. Leveraged Next.js for enhanced performance and server-side rendering, improving page load speeds and SEO.\n\n' +
    '## Results\n\n' +
    'The marketplace has successfully delivered impactful results:\n\n' +
    '- Reduced transaction processing time by 50%\n' +
    '- Achieved 99.9% platform uptime\n' +
    '- Enabled over 100,000 product listings\n' +
    '- Improved seller and buyer engagement with intuitive UI\n' +
    '- Optimized order management and analytics for business growth',
}
,
{
  "title": "Exe-App",
  "description": "A comprehensive exercise and fitness tracking application designed to help users achieve their health and wellness goals.",
  "date": "February 2025",
  "imageUrl": "/projects/exe.png",
  "tags": ["Flutter", "Dart", "Firebase", "Health & Fitness"],
  "slug": "exe-app",
  "links": [
    { "title": "Exe-App Website", "url": "https://exe-app.com" },
    {
      "title": "GitHub",
      "url": "https://github.com/username/exe-app"
    },
    { "title": "App Store", "url": "https://appstore.com/exe-app" }
  ],
  "fullDescription":
    "## Problem\n\n" +
    "Staying on top of fitness goals can be challenging due to the lack of a comprehensive and user-friendly tracking solution. Many existing apps focus on either workouts or nutrition but fail to integrate all aspects of health and wellness in one place.\n\n" +
    "## Action\n\n" +
    "Developed Exe-App using Flutter for a seamless cross-platform experience. Integrated Firebase for real-time data syncing, authentication, and analytics. The app features:\n\n" +
    "- Workout tracking with customizable exercise routines\n" +
    "- Meal and nutrition logging with AI-based recommendations\n" +
    "- Sleep tracking and insights\n" +
    "- Progress visualization through charts and reports\n" +
    "- Social and community features for motivation\n\n" +
    "## Results\n\n" +
    "Exe-App has achieved remarkable milestones since launch:\n\n" +
    "- 50,000+ downloads within the first 3 months\n" +
    "- 4.8-star rating across app stores\n" +
    "- Increased user engagement with personalized health insights\n" +
    "- Partnerships with fitness coaches and dietitians\n" +
    "- Continuous updates based on user feedback"
}
,
 
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="A collection of my most impactful work in blockchain and web development"
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
            tags={project.tags}
            slug={project.slug}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
