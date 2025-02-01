import {
    LayoutDashboard,
    FileCode,
    GraduationCap,
    BadgeCheck,
    Layers,
    Paperclip,
} from 'lucide-react';

let items = [
    {
        title: "Profil",
        icon: <BadgeCheck className="w-5 h-5" />,
        path: "/"
    },
    {
        title: "Experiences",
        icon: <LayoutDashboard className="w-5 h-5" />,
        path: "/experiences"
    },
    {
        title: "Education",
        icon: <GraduationCap className="w-5 h-5" />,
        path: "/education"
    },
    {
        title: "Skills",
        icon: <FileCode className="w-5 h-5" />,
        path: "/skills"
    },
    {
        title: "Projets",
        icon: <Layers className="w-5 h-5" />,
        path: "/projects"
    },
    {
        title: "CV",
        icon: <Paperclip className="w-5 h-5" />,
        path: "/cv"
    }
];

export const addItems = (newItems) => {
    items.push(newItems);
};

// Fonction pour supprimer un project
export const deleteItems = (itemId) => {
    items = items.filter(item => item.id !== itemId);
};

// Fonction pour récupérer les posts
export const getItems = () => items;

export default items;