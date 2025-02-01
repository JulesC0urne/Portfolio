import { Code, Database, Terminal } from "lucide-react"; // Import des icônes si besoin

let technicalSkills = [
    {
        category: "Frontend Development",
        icon: <Code />,
        skills: [
            { name: "ReactJS", level: 85 },
            { name: "Javascript", level: 85 },
            { name: "Typescript", level: 80 },
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "Python", level: 85 },
            { name: "Flask", level: 80 },
        ]
    },
    {
        category: "Backend & Database",
        icon: <Database />,
        skills: [
            { name: "Spring Boot", level: 75 },
            { name: "Java", level: 75 },
            { name: "PostgreSQL", level: 80 },
            { name: "MySQL", level: 80 },
            { name: "SQL", level: 85 }
        ]
    },
    {
        category: "DevOps & Tools",
        icon: <Terminal />,
        skills: [
            { name: "Docker", level: 75 },
            { name: "Docker Compose", level: 75 },
            { name: "Git", level: 85 },
            { name: "GitLab", level: 80 },
            { name: "Jira", level: 75 }
        ]
    }
];

let softSkills = [
    {
        name: "Proactif",
        description: "Capacité à anticiper les besoins et prendre des initiatives"
    },
    {
        name: "Force de propositions",
        description: "Contribution active avec des idées innovantes et solutions constructives"
    },
    {
        name: "Adaptabilité",
        description: "Flexibilité face aux changements et nouvelles technologies"
    },
    {
        name: "Esprit d'équipe",
        description: "Collaboration efficace et communication positive avec les membres de l'équipe"
    }
];


export const getTechnicalSkills = () => technicalSkills;
export const getSoftSkills = () => softSkills;

export const addTechnicalSkill = (category, newSkill) => {
    const categoryIndex = technicalSkills.findIndex(skill => skill.category === category);
    if (categoryIndex !== -1) {
        technicalSkills[categoryIndex].skills.push(newSkill);
    } else {
        technicalSkills.push({ category, icon: <Code />, skills: [newSkill] });
    }
};

export const addSoftSkill = (newSkill) => {
    softSkills.push(newSkill);
};

export const deleteTechnicalSkill = (category, skillName) => {
    technicalSkills = technicalSkills.map(skill => {
        if (skill.category === category) {
            return { ...skill, skills: skill.skills.filter(s => s.name !== skillName) };
        }
        return skill;
    }).filter(skill => skill.skills.length > 0);
};

export const deleteSoftSkill = (skillName) => {
    softSkills = softSkills.filter(skill => skill.name !== skillName);
};

export default { getTechnicalSkills, getSoftSkills, addTechnicalSkill, addSoftSkill, deleteTechnicalSkill, deleteSoftSkill };
