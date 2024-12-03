import {
  FaBriefcase,
  FaClipboardList,
  FaClockRotateLeft,
  FaFileSignature,
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLinkedin,
  FaRegClock,
  FaRegUser,
  FaTwitter,
  FaUser,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa6";
import logo from "../src/assets/logo.png";
import { LuGraduationCap, LuLock } from "react-icons/lu";
import { IoDocument, IoDocumentAttach, IoDocumentText, IoNewspaperOutline } from "react-icons/io5";
import { GiDirectorChair, GiOffshorePlatform, GiProgression } from "react-icons/gi";
import {
  MdAutoGraph,
  MdDescription,
  MdLock,
  MdLockReset,
} from "react-icons/md";
import { Book, Lock, LockIcon, Text, User, User2, User2Icon, UserCog2, Users } from "lucide-react";
import computerGifImg from './assets/image_processing20200421-9716-1wjcx8i.gif'
import studentChar from './assets/character_student.gif'
export const constants = {
  logo,
};
export const computerGif = computerGifImg;
export const studentGIF = studentChar;
export const navBarLink = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  // { label: "Page", link: "/page" },
  { label: "Contact", link: "/contact" },
  // { label: "Support", link: "/support" },
];

export const authCardDetails = {
  signup: [
    {
      imgSrc:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-35b0a3e2315d19a46c046165f315b000.jpg?ts=1592240511",
      btnLabel: "Student Signup",
      redirectRoute: "student",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=612x612&w=0&k=20&c=FqW7PHJFlpzTfK3ax3zPhxgTCgCnVQaPnnmTRPmdjjc=",
      btnLabel: "College Staff Signup",
      redirectRoute: "college-staff",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/767px-American_Broadcasting_Company_Logo.svg.png",
      btnLabel: "Company Signup",
      redirectRoute: "company",
    },
  ],
  login: [
    {
      imgSrc:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-35b0a3e2315d19a46c046165f315b000.jpg?ts=1592240511",
      btnLabel: "Student Login",
      redirectRoute: "student",
      btnColour: "black",
    },

    {
      imgSrc:
        "https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=612x612&w=0&k=20&c=FqW7PHJFlpzTfK3ax3zPhxgTCgCnVQaPnnmTRPmdjjc=",
      btnLabel: "College Staff Login",
      redirectRoute: "college-staff",
      btnColour: "black",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/767px-American_Broadcasting_Company_Logo.svg.png",
      btnLabel: "Company Login",
      redirectRoute: "company",
      btnColour: "black",
    },
  ],
};

export const signupFormComponents = {
  firstName: {
    placeholder: "Enter your first name",
    label: "First Name",
  },
};

export const studentSidebarItems = [
  {
    label: "Profile",
    icon: FaUserCheck,
  },
  {
    label: "Academic Details",
    icon: FaGraduationCap,
  },
  {
    label: "Resume",
    icon: IoDocumentAttach,
  },
  {
    label: "Previous Internships",
    icon: FaBriefcase,
  },
  {
    label: "Projects",
    icon: FaFolderOpen,
  },
  {
    label: "Job Vacancies",
    icon: GiOffshorePlatform,
  },
  {
    label: "Interview",
    icon: FaUsers,
  },
  {
    label: "Application Status",
    icon: GiProgression,
  },
  {
    label: "Reset Password",
    icon: LuLock,
  },
];

export const collegeStaffSidebarItems = [
  {
    label: "Profile",
    icon: FaUserCheck,
  },
  {
    label: "Students",
    icon: Users,
  },
  {
    label: "Companies",
    icon: IoNewspaperOutline,
  },
  {
    label: "Reset Password",
    icon: LuLock,
  },
];

export const companySidebarItems = [
  {
    label: "Profile",
    icon: FaUserCheck,
  },
  {
    label: "Students",
    icon: LuGraduationCap,
  },
  {
    label: "Job Posts",
    icon: IoNewspaperOutline,
  },
  {
    label: "Applicants",
    icon: IoNewspaperOutline,
  },
  {
    label: "Reset Password",
    icon: LuLock,
  },
];

export const userPlaceholderImage =
  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

export const socialHandles = [
  {
    name: "My Portfolio",
    icon: FaGlobe,
    link: "https://amartripathi.vercel.app/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/amartripathi0",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/amartripathi_",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://github.com/amartripathi0",
  },
];

export const projectDetails = {
  projectTitle: "PlacedX",
  projectBio:
    "PlacedX is an ongoing MERN stack-based project streamlining college hiring. It connects students, recruiters, and colleges for efficient recruitment. Stay tuned for major frontend and backend enhancements.",
  projectThumbnailSrc: "/assets/logo.png",
  projectGithubLink: "https://github.com/amartripathi0/Web_Placement_Portal",
  projectDeployedLink: "https://placement-nexus.vercel.app/",
  
  projectTools: [
    "React JS",
    "React Hook Form",
    "React Router DOM",
    "Redux Toolkit",
    "Axios",
    "React Toastify",
    "Tailwind CSS",
    "Node JS",
    "Express JS",
    "MongoDB Atlas",
    "Mongoose",
    "Multer",
    "Postman",
    "bcrypt",
    "jsonwebtoken",
    "Vercel",
    "Cyclic.sh",
  ],
};
