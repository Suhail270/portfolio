import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    postgresql,
    mysql,
    docker,
    python,
    aws,
    threejs,
    icode,
    softlogic,
    io21,
    alyousuf,
    pmTrans,
    hafilatuna,
    nlp,
    rta,
    aaico,
    hwu,
    pytorch,
    tensorflow,
    scikit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "resume",
      title: "Download Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning Engineer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Django Developer",
      icon: backend,
    },
    {
      title: "Cross-Functional Team Lead",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Scikit",
      icon: scikit,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data & Business Intern",
      company_name: "iCode Jr.",
      icon: icode,
      iconBg: "white",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Built and maintained a database for all schools in Dubai, Sharjah and Abu Dhabi.",
        "Built a database consisting information of all participating schools, teams, and students.",
        "Co-ordinated with various stakeholders to further spread brand awareness. ",
        "Played a huge role in orchestrating one of Dubai's biggest inter-school hackathons till date and ensuring its success.",
      ],
    },

    {
      title: "Software Development Intern",
      company_name: "IO21 (now acquired by EuroTech ME)",
      icon: io21,
      iconBg: "black",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Analyzed and reviewed a website as a team, highlighting its flaws and suggesting further features to incorporate into the website.",
        "Presented the aforementioned review to the CTO as well as our fellow batchmates.",
        "Noted down further suggestions given, and worked on the website to bring our ideas and changes to life.",
        "Worked on the front-end using HTML and CSS.",
        "Worked on the backend using Django, Python, and JavaScript.",
        "Completed all given hands-on programming assignments or tasks."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Al Yousuf Group",
      icon: alyousuf,
      iconBg: "white",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Started as a full stack developer. Was quickly promoted to a team lead and then, project manager.",
        "Worked on 5 different projects in total: CRM, Sales forecasting & data visualization, Gamification, Appointment Scheduling, and a Chatbot.",
        "Managed 3 different teams as project manager and rolled out 3 different projects.",
        "Automated the company’s lead management workflow by building a CRM app tailored to the company’s needs.",
        "Regularly drove requirement elicitation meetings and had a good relationship and understanding with all the stakeholders.",
      ],
    },

    {
      title: "Solutions Engineering Intern",
      company_name: "Softlogic",
      icon: softlogic,
      iconBg: "white",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Drove initiatives and negotiations with international clients and stakeholders.",
        "Managed the company’s HealthTech software projects in the Middle East.",
        "Was a part of the product development and enhancement team.",
        "Reported directly to the director and CEO of the Middle East and was under his mentorship.",
      ],
    },
  ];
  
  const achievements = [
    {
      achievement:
        "Runner's Up - National Competition.",
      name: "RTA Sustainability Hackathon 2023",
      company: "RTA - Roads and Transport Authority",
      image: rta,
    },
    {
      achievement:
        "Placed 2nd in the UAE and 5th globally.",
      name: "AAICO x DDS Hackathon 2024",
      company: "The Applied Artificial Intelligence Company (AAICO)",
      image: aaico,
    },
    {
      achievement:
        "Deputy Principal's Award for Academic Excellence.",
      name: "University - Bachelor's",
      company: "Heriot-Watt University",
      image: hwu,
    },
  ];
  
  const projects = [
    {
      name: "Unsupervised Domain Adaptation using Transformers",
      description:
        "For unsupervised domain adaptation (UDA), I used the vision transformer's (ViT) patch mix module to create an intermediate domain by learning a probability distribution through game-theoretical models. In this framework, I implemented the following models for a comparative study: SwinTransformer V1 & V2, Data-efficient Image Transformer (DeiT), ViT, Hierarchical Visual Transformer (HVT). These models were implemented using PyTorch, with some pre-trained on ImageNet.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "green-text-gradient",
        },
        {
          name: "PyTorch",
          color: "pink-text-gradient",
        },
      ],
      image: pmTrans,
      source_code_link: "https://github.com/",
    },
    {
      name: "Smart Routing for Student Commute",
      description:
        "I developed a hybrid K-Means and DBSCAN model to cluster students based on their location and route them to the nearest bus stop, clusters of students were mapped to clusters of schools. I also developed a routing algorithm that would route the buses to the schools based on the clusters of students. My team also developed a cross-platform mobile application using Flutter and an admin panel using NextJS.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Data Science",
          color: "green-text-gradient",
        },
        {
          name: "Full-Stack Development",
          color: "pink-text-gradient",
        },
      ],
      image: hafilatuna,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sentiment and Formality Analysis on Multilingual Surveys",
      description:
        "I created a Streamlit application to extract information from a PDF containing survey responses. I processed the PDF to extract the names, age, continent of origin, and their response in different languages. I then used the deep translator API to translate non-English languages and leveraged a Bert-base and RoBERTa-base model subsequently to perform sentiment and formality analysis.",
      tags: [
        {
          name: "Large Language Models (LLM)",
          color: "blue-text-gradient",
        },
        {
          name: "Natural Language Processing (NLP)",
          color: "green-text-gradient",
        },  
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: nlp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, achievements, projects };