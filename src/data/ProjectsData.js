let projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Page d'acceuil d'une plateforme d'e-commerce alliant design et animations.",
        technologies: ["React", "Tailwind CSS", "Framer-motion"],
        githubUrl: "https://github.com/JulesC0urne/ECommerce.git",
    },
    {
        id: 2,
        title: "HubTask",
        description: "Application web de gestion de projets permettant de gérer des projets, des tâches, des membres et de chater le tout en temps réel.",
        technologies: ["React", "SpringBoot", "Spring Security", "Docker", "Docker Compose", "PostgreSQL", "WebSocket", "Tailwind CSS", "React Context"],
        githubUrl: "https://github.com/JulesC0urne/HubTask",
    },
    {
        id: 3,
        title: "CineMatch",
        description: "Application web proposant une liste de films en fonction du profil de l'utilisateur. Chaque critère remplie par l'utilisateur est pris en compte pour la suggestion de films.",
        technologies: ["React", "Tailwind CSS", "JavaScript", "TmbdAPI", "Material-UI"],
        githubUrl: "https://github.com/JulesC0urne/CineMatch.git",
    },
    {
        id: 4,
        title: "Application QVT",
        description: "Application web permettant, à partir de données collectées lors d'un sondage de qualité de vie au travail, d'afficher dynamiquement les résultats de ce sondage.",
        technologies: ["VueJs", "Javascript", "Firebase", "Vega-Lite"],
        githubUrl: "https://github.com/JulesC0urne/QVT.git",
    },
    {
        id: 5,
        title: "BMX Application",
        description: "Application web de gestion de courses de BMX pour les tournois régionaux et départementaux. Permet l'enregistrement d'un participant, son inscription dans des tournois, la gestion de son placement et le brassage de son couloir de départ.",
        technologies: ["Python", "Flask", "SQLite", "MVC", "SQL_Alchemy"],
        githubUrl: "https://github.com/JulesC0urne/BMX.git",
    },
    {
        id: 6,
        title: "Portfolio",
        description: "Portfolio permettant de regrouper mes informations dans un site web intuitif.",
        technologies: ["React", "Tailwind CSS", "Material-UI"],
        githubUrl: "https://github.com/JulesC0urne/portfolio.git",
    }
];

// Fonction pour ajouter un newProject
export const addProject = (newProject) => {
    projectsData.push(newProject);
};

// Fonction pour supprimer un project
export const deleteProject = (projectId) => {
    projectsData = projectsData.filter(project => project.id !== projectId);
};

// Fonction pour récupérer les posts
export const getProjects = () => projectsData;

export default projectsData;