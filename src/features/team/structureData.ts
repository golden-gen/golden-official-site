import elite from "@/public/team/elite.png";
import faruq from "@/public/team/faruq.png";
import abdrahman from "@/public/team/abdrahman.jpg";
import { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  position: string;
  level: "National" | "Local" | "International";
  image?: StaticImageData | string;
  bio?: string;
  linkedin?: string;
}

export const nationalTeam: TeamMember[] = [
  {
    level: "National",
    position: "President",
    name: "Jokanola Yusuff Olatunji",
    bio: "Yusuff Olatunji, a dedicated final year student at the University of Ibadan in the Department of Civil Engineering, is passionate about software development, AI, and robotics. In addition to his academic pursuits, Yusuff is an experienced software engineer. He envisions a future where his expertise in software engineering, civil engineering, AI, and robotics will contribute to positive societal changes.",
    image: elite,
  },
  {
    level: "National",
    position: "Vice President",
    name: "Adebayo Faruq Adebayo",
    image: faruq,
    linkedin: "https://www.linkedin.com/in/adebayofaruq",
    bio: "Faruq Adebayo is a passionate penultimate law student at the University of Ilorin. He has a keen interest in human rights, constitutional law, TechLaw, and arbitration. Faruq has contributed to public interest projects within his community and school system. He engages in article writing and content creation. When he isn’t buried in his books, Faruq dedicates himself to making positive changes in society. He looks forward to a future of advocacy and impactful legal art.",
  },
  { level: "National", position: "Secretary", name: "Yekeen AbdMuiz" },
  { level: "National", position: "Treasurer", name: "Dhikrullahi Uthman" },
  { level: "National", position: "Social Director", name: "Yusuf Tesleem" },
  { level: "National", position: "Welfare Officer", name: "—" },
  { level: "National", position: "P.R.O", name: "Alarape Ridwanullah Tomiwa" },
  {
    level: "National",
    position: "Financial Secretary",
    name: "Bilal",
    bio: "Bilal Oyeleke Solih, a protagonist in agile technology and a software engineering student at ALX, is committed to continual learning and growth in the field. With a passion for coding and technology, he actively engages in personal projects and collaborations within tech communities. Beyond the classroom, he envisions leveraging his skills to create impactful software solutions and shape the future of technology.",
  },
  {
    level: "National",
    position: "Auditor",
    name: "Olanrewaju Abdhameed",
    bio: "Olanrewaju Abdulhameed is a driven Electrical and Electronics Engineering student at Obafemi Awolowo University. With a passion for innovation and problem-solving, he is dedicated to creating change and building products that revolutionize human life and simplify tasks. Interested in building startups, Abdulhameed spends his time studying and learning about energy, power, marketing, and sales. When he’s not buried in his books, he explores ways to harness technology to drive positive impact and looks forward to a future of entrepreneurship and innovation.",
  },
  {
    level: "National",
    position: "Legal Adviser (Barrister)",
    name: "Nurudeen Khalid",
  },
  {
    level: "National",
    position: "Mobilization Officer",
    name: "Abdhameed Abdraqib",
  },
  {
    level: "National",
    position: "Assistant Secretary",
    name: "Jimoh Rokeebat",
  },
  {
    level: "National",
    position: "Assistant Treasurer",
    name: "Oluokun Maleek",
  },
  { level: "National", position: "Technical Director", name: "—" },
  {
    level: "National",
    position: "Project Coordinator",
    name: "Bello Toheeb Opeyemi",
  },
  {
    level: "National",
    position: "Logistics Officer",
    name: "Alatise Abdrahman",
  },
  {
    level: "National",
    position: "ICT Chairperson",
    name: "Oladimeji Abdrahman Adebayo",
    image: abdrahman,
    linkedin: "https://www.linkedin.com/in/oladimeji-abdrahman",
    bio: 'Abdrahman Adebayo, a certified and experienced frontend software developer (Web & Mobile) and a graduate of Computer Science from LAUTECH, has a proven track record of leading, organizing, and co-organizing tech communities like Google Developer Student Clubs, Microsoft Learn Student Ambassador, Google Developer Group, and Postman Student Community. He fosters a supportive environment for tech enthusiasts and is an open-source advocate. Abdrahman has contributed to numerous open-source projects and even created and maintains one named "Language AI," an AI Text and Document Translator. He is open to mentoring individuals in tech communities, guiding them through their tech journeys.',
  },
  {
    level: "National",
    position: "ICT Assistant",
    name: "Babalola Ruqoyyah",
    bio: "Ruqoyat Abike, a dedicated final year student at the University of Ilorin in the Department of Computer Science, is passionate about software development and computer science. In addition to her academic pursuits, Ruqoyat actively engages in projects aimed at enhancing her skills in coding and software creation. She envisions a future where her expertise in computer science and software development will contribute to positive changes in society.",
  },
  {
    level: "National",
    position: "ICT Officer",
    name: "Soliu Billal",
    bio: "Bilal Oyeleke Solih, a protagonist in agile technology and a software engineering student at ALX, is committed to continual learning and growth in the field. With a passion for coding and technology, he actively engages in personal projects and collaborations within tech communities. Beyond the classroom, he envisions leveraging his skills to create impactful software solutions and shape the future of technology.",
  },
  {
    level: "National",
    position: "Strategic Planning Officer",
    name: "Alarape Quadri",
  },
  {
    level: "National",
    position: "Research Officer",
    name: "AbdAzeem AbdAleem",
  },
  {
    level: "National",
    position: "Female Representative I",
    name: "Oniwinde Suliat",
  },
  {
    level: "National",
    position: "Female Representative II",
    name: "Ibikunle Maryam",
  },
  { level: "National", position: "Health Director", name: "Hameed Abdsamad" },
  {
    level: "National",
    position: "ECONOMICS Director",
    name: "Abdrasheed Abass Babatunde",
  },
];

export const localTeam: TeamMember[] = [
  {
    level: "Local",
    position: "Coordinator",
    name: "Qamarudeen Uthman Adesina",
  },
  {
    level: "Local",
    position: "Assistant Coordinator",
    name: "Abdulwasiu Abdulsamad Opeyemi",
  },
  { level: "Local", position: "Secretary", name: "Adebayo Aishat Motunrayo" },
  { level: "Local", position: "P.R.O", name: "Tijani Maryam Omotoyosi" },
  { level: "Local", position: "Treasurer", name: "Nurain Aishat Odunola" },
  {
    level: "Local",
    position: "Financial Secretary",
    name: "Abdulraheem Abdulbasit",
  },
  { level: "Local", position: "Welfare Officer", name: "Adepoju Maryam" },
  {
    level: "Local",
    position: "Health Officer",
    name: "Adepoju Ridwan Damilare",
  },
  { level: "Local", position: "Legal Adviser", name: "Nurudeen Khalid" },
];

export const internationalTeam: TeamMember[] = [
  {
    level: "International",
    position: "Patron",
    name: "Mr. Adeleke Sarafadeen",
  },
  { level: "International", position: "Adviser", name: "Dr. Ganiyu Alatise" },
  { level: "International", position: "Matron", name: "Mrs Azeez Temitope" },
  { level: "International", position: "Member", name: "Mr. Sallam Kowiyu" },
  {
    level: "International",
    position: "Member",
    name: "Sister Zainab Kola Aderoju",
  },
  { level: "International", position: "Member", name: "Adepoju Maleeq" },
  { level: "International", position: "Member", name: "Ishola Lawal" },
  { level: "International", position: "Member", name: "Adepoju Mujeeb" },
  { level: "International", position: "Member", name: "Adebisi Muhammed" },
  { level: "International", position: "Member", name: "Sister Adetoun" },
  { level: "International", position: "Member", name: "Br. Yusuf" },
  { level: "International", position: "Member", name: "Nurudeen Khalid" },
];
