import {
  mobile,
  backend,
  web,
  golang,
  git,
  bvLogo,
  uitlogo,
  nestjs,
  pg,
  java,
  spring,
  redis,
  kafka,
  jira,
  rest,
  grpc,
  docker,
  jenkins,
  k8s,
  hcm,
  bvcorp,
  career
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
    hightLight: false,
    note: 'Got it !'
  },
  {
    title: 'Backend Developer',
    icon: mobile,
    hightLight: true,
    note: 'My main role 😍'
  },
  {
    title: 'Devops',
    icon: backend,
    hightLight: false,
    note: 'Basic'
  },
]

const technologies = [
  {
    name: 'Golang',
    icon: golang
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Spring Boot',
    icon: spring
  },
  {
    name: 'NestJS',
    icon: nestjs
  },
  {
    name: 'Rest API',
    icon: rest
  },
  {
    name: 'Grpc',
    icon : grpc
  },
  {
    name: 'Redis',
    icon: redis
  },
  {
    name: 'Kafka',
    icon: kafka
  },
  {
    name: 'Postgres SQL',
    icon: pg
  },
  {
    name: 'Docker',
    icon: docker
  },
  {
    name : 'Jenkins',
    icon: jenkins
  },
  {
    name : 'K8s',
    icon : k8s
  },
  {
    name: 'Git',
    icon: git
  },
  {
    name: 'Jira',
    icon: jira
  }
]

const experiences = [
  {
    title: 'Junior Backend Developer',
    company_name: 'BanVien Corporation',
    icon: bvLogo,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Present',
    points: [
      'Acting a sub-leader in a team of 10 developers for the Company\'s Official Website.',
      'Developing and maintaining web applications as a Backend Developer ',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Responsible for deploying application and managing infrastructure in test environment',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Mentoring newcomers'
    ]
  },
  {
    title: 'Student',
    company_name: 'UIT',
    icon: uitlogo,
    iconBg: '#E6DEDD',
    date: 'Sep 2016 - Dec 2021',
    points: [
      'Major: Software Engineering',
      'GPA: 7.33/10',
      'Degree: Engineering degree in information technology'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Minh proved me wrong.',
    name: 'Minh Nguyen',
    designation: 'Sofware Engineer',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      'I\'ve never met a web developer who truly cares about their clients\' success like Minh does.',
    name: 'Duy Nguyen',
    designation: 'Project Manager',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      'Minh always welcomes feedback and is willing to make changes to ensure the final product meets the client\'s needs.',
    name: 'Khai Truong',
    designation: 'Sofware Engineer',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Company\'s Official Website',
    description:
      'The website offers overview of the company, including its mission, vision, values, history, and key milestones, news & press',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient'
      },
      {
        name: 'grpc',
        color: 'green-text-gradient'
      },
      {
        name: 'kafka',
        color: 'pink-text-gradient'
      },
      {
        name: 'Amazon S3',
        color: 'orange-text-gradient'
      }
    ],
    image: bvcorp
  },
  {
    name: 'Human capital management',
    description: 'State the main objective of the project, which could be to streamline HR operations, enhance employee experience, and improve workforce management through the implementation of an HCM system with self-service capabilities.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient'
      },
      {
        name: 'java',
        color: 'orange-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'spring boot',
        color: 'green-text-gradient'
      },
      {
        name: 'fiber',
        color: 'dark-blue-text-gradient'
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient'
      },
      {
        name: 'microservice',
        color: 'orange-text-gradient'
      },
      {
        name: 'kafka',
        color: 'green-text-gradient'
      },
      {
        name: 'redis',
        color: 'pink-text-gradient'
      },
    ],
    image: hcm
  },
  {
    name: 'Company\'s Career Website',
    description: 'The career website offers information about the organization, including its mission, values, history, culture, and any unique benefits or perks offered to employees. This section helps candidates understand the company\'s values and whether it aligns with their own.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient'
      },
      {
        name: 'grpc',
        color: 'green-text-gradient'
      },
      {
        name: 'kafka',
        color: 'pink-text-gradient'
      },
      {
        name: 'Amazon S3',
        color: 'orange-text-gradient'
      }
    ],
    image: career
  }
]

export { services, technologies, experiences, testimonials, projects }
