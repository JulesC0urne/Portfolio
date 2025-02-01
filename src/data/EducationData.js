export let subject = "informatique";

let education = [
    {
        id: 1,
        degree: "Diplôme d'ingénieur en Informatique orientée Système d'Informations",
        school: "Polytech Tours",
        location: "Tours, France",
        period: "09/2020 - 09/2023",
        description: "Formation approfondie en informatique, avec un focus sur les systèmes d'informations et l'architecture logicielle.",
        achievements: [
            "Conception d'une application web pour la gestion de tournois régionaux et départementaux de BMX.",
            "Conception d'une application web permettant de visualiser dynamiquement les données d'un sondage de qualité de vie au travail.",
            "Projet de fin d'études : Réalisation d'une application permmettant l'analyse et l'aide à la décision pour le choix d'un outils coupant pour un usinage.",
            "Stage de 3 mois au LIFAT : Conception d'une base de données et segmentation des données issue de 7200h de vidéo/audio pour faire du Fact-checking.",
            "Stage de 6 mois chez SOLUTEC : Conception d'une application de gestion de notes de frais."
        ],
        skills: ["Java", "C#", "C++", "Python", "Javascript", "React", "Vue", "HTLM/CSS", "Architecture Logicielle", "Base de données", "Sécurité des systèmes"]
    },
    {
        id: 2,
        degree: "Classe préparatoire ATS scientifique",
        school: "Lycée Blaise Pascal",
        location: "Rouen, France",
        period: "09/2019 - 06/2020",
        description: "Classe préparatoire aux écoles d'ingénieurs, avec un focus sur les mathématiques et les sciences appliquées.",
        achievements: [
            "Réussite au concours d'entrée en école d'ingénieurs",
        ],
        skills: ["Mathématiques", "Physique", "Analyse", "Résolution de problèmes"]
    },
    {
        id: 3,
        degree: "BTS Topographe-géomètre",
        school: "Lycée le Corbusier",
        location: "Saint-Etienne-du-Rouvray, France",
        period: "09/2017 - 06/2019",
        description: "Formation technique sur les sciences géographiques, la cartographie et la gestion des systèmes d'information géographique.",
        achievements: [
            "Formation certifiée en logiciels de géomatique"
        ],
        skills: ["Géomatique", "Topographie", "Cartographie", "SIG"]
    }
];

export const addEducation = (newEducation) => {
    education.push(newEducation);
};

// Fonction pour supprimer un project
export const deleteEducation = (educationId) => {
    education = education.filter(educ => educ.id !== educationId);
};

// Fonction pour récupérer les posts
export const getEducation = () => education;

export default education;