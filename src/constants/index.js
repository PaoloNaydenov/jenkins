import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker1,
    grafana,
    cloud,
    docker,
    kubernetes,
    gitlab,
    jenkins,
    circleci,
    zabbix,
    kalin,
    boyan,
    zdravko,
    vereign,
    bosch,
    boschlogo,
    vereignlogo,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Conteinerization",
      icon: web,
    },
    {
      title: "Infrastructure provisioning",
      icon: mobile,
    },
    {
      title: "Monitoring",
      icon: backend,
    },
    {
      title: "Automation",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "GitLab",
      icon: gitlab,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "CircleCI",
      icon: circleci,
    },
    {
      name: "Zabbix",
      icon: zabbix,
    },
    {
      name: "Grafana",
      icon: grafana,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud",
      company_name: "AWS, Google, Azure",
      icon: cloud,
      iconBg: "#383E56",
      date: "",
      points: [
        "Provisioning Kubernetes Clusters, Virtual Machines, Instances and maintaining them.",
        "Updating, Securing, Backups, Testing with developers to deploy high-quality products.",
        "Implementing Automation and creating one-click setups for integration and deployments.",
      ],
    },
    {
      title: "Conteinerization",
      company_name: "Kubernetes, Docker",
      icon: docker1,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Configuring applications and their dependencies for conteinerization.",
        "Configuring Cluster and Container networking.",
        "Creating customized Docker images for applications and customized Helm charts for Kubernetes.",
      ],
    },
    {
      title: "Automation",
      company_name: "GitLabCI, CircleCI, Jenkins",
      icon: gitlab,
      iconBg: "#383E56",
      date: "",
      points: [
        "Creating pipelines for deploying on Clusters, Virtual machines and Instances.",
        "Creating automatic build, push and pull scripts/pipelines for customized docker images and registries.",
        "Creating pipelines for automatic or manual deployment.",
        "Participating in code reviews and providing constructive feedback to developers.",
      ],
    },
    {
      title: "Monitoring",
      company_name: "Grafana & Loki, Zabbix",
      icon: grafana,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Creating, deploying and providing monitoring systems for cloud and on-site infrastructure.",
        "Monitoring application logs, status, health, cluster and/or virtual machines/instances status and health.",
        "Creating alert systems for when something is down or experiences an error.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Само лесни задачи им даваме, две седмици не сме ги закачали!",
      name: "Kalin Canov",
      designation: "Dev",
      company: "Vereign",
      image: kalin,
    },
    {
      testimonial:
        "Ако така пишех код, по-добре да напусна и да ходя в някоя колиба в гората!",
      name: "Boyan Tsolov",
      designation: "Dev",
      company: "Vereign",
      image: boyan,
    },
    {
      testimonial:
        "Една документация нямат написана!",
      name: "Zdravko Iliev",
      designation: "Dev",
      company: "Vereign",
      image: zdravko,
    },
  ];
  
  const projects = [
    {
      name: "Vereign",
      logo: vereignlogo,
      description:
        "Infrastructure provisioning with Terraform, CI/CD using GitLab, Conteinerizing applications using Docker and Kubernetes, creating custom docker images and helm charts.",
      tags: [
        {
          name: "GitLab",
          color: "blue-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "Terraform",
          color: "pink-text-gradient",
        },
        {
          name: "Ansible",
          color: "white-text-gradient",
        },
        {
          name: "Google",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
      ],
      image: vereign,
      source_code_link: "https://vereign.com",
    },
    {
      name: "BOSCH",
      logo: boschlogo,
      description:
        "Creating CI/CD using Jenkins, Conteinerization using Docker",
      tags: [
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "OpenShift",
          color: "pink-text-gradient",
        },
        {
          name: "Jenkins",
          color: "green-text-gradient",
        },
      ],
      image: bosch,
      source_code_link: "https://bosch.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };