let experiences = [
    {
        id: 1,
        position: "Développement Full Stack d'une application de gestion de projet",
        company: "SOLUTEC",
        location: "Paris",
        period: "Sep 2024 - Déc 2024",
        responsibilities: [
            "Utilisation du framework React.js pour le développement d'interfaces utilisateur dynamiques",
            "Mise en place d'une architecture en microservices avec spring boot",
            "Implémentation des bases de données PostgreSQL pour chaque microservices",
            "Conteneurisation de l'application avec Docker"
        ],
        technologies: ["React.js", "Spring Boot", "PostgreSQL", "Docker", "Microservices"]
    },
    {
        id: 2,
        position: "Développement Full Stack d'une application de gestion de notes de frais",
        company: "SOLUTEC",
        location: "Lyon",
        period: "Avr 2023 - Sep 2023",
        responsibilities: [
            "Rédaction du dossier de cadrage de projet",
            "Utilisation du framework React.js pour le développement d'interfaces utilisateur dynamiques",
            "Développement de microservices avec Spring Boot",
            "Création de tests unitaires et de tests d'intégration pour garantir la fiabilité des fonctionnalités développées",
            "Conteneurisation de l'application avec Docker"
        ],
        technologies: ["React.js", "Spring Boot", "Docker", "Tests unitaires", "Tests d'intégration"]
    },
    {
        id: 3,
        position: "Développement d'un système de segmentation audio-vidéo",
        company: "LIFAT",
        location: "Tours",
        period: "Juin 2022 - Sep 2022",
        responsibilities: [
            "Conception et développement d'un système de segmentation audio-vidéo pour l'analyse de contenu multimédia",
            "Mise en place d'outils de structuration de données et d'indexation pour faciliter la recherche et la navigation",
            "Optimisation des algorithmes de segmentation pour une meilleure précision et rapidité d'analyse"
        ],
        technologies: ["Traitement audio-vidéo", "Structuration de données", "Algorithmes d'optimisation"]
    }
];

// Fonction pour ajouter un newExperience
export const addExperience = (newExperience) => {
    experiences.push(newExperience);
};

// Fonction pour supprimer un Experience
export const deleteExperience = (experienceId) => {
    experiences = experiences.filter(experience => experience.id !== experienceId);
};

// Fonction pour récupérer les posts
export const getExperiences = () => experiences;

export default experiences;