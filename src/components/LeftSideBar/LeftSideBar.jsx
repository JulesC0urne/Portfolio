import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Importation de useLocation
import {
    LayoutDashboard,
    FileCode,
    GraduationCap,
    BadgeCheck,
    Layers,
    Paperclip,
    HelpCircle
} from 'lucide-react';

const mainMenuItems = [
    {
        title: "Profil",
        icon: <BadgeCheck className="w-5 h-5" />,
        path: "/Portfolio/profile"  // Ajout du préfixe /Portfolio
    },
    {
        title: "Experiences",
        icon: <LayoutDashboard className="w-5 h-5" />,
        path: "/Portfolio/experiences"  // Ajout du préfixe /Portfolio
    },
    {
        title: "Education",
        icon: <GraduationCap className="w-5 h-5" />,
        path: "/Portfolio/education"  // Ajout du préfixe /Portfolio
    },
    {
        title: "Skills",
        icon: <FileCode className="w-5 h-5" />,
        path: "/Portfolio/skills"  // Ajout du préfixe /Portfolio
    },
    {
        title: "Projets",
        icon: <Layers className="w-5 h-5" />,
        path: "/Portfolio/projects"  // Ajout du préfixe /Portfolio
    },
    {
        title: "CV",
        icon: <Paperclip className="w-5 h-5" />,
        path: "/Portfolio/cv"  // Ajout du préfixe /Portfolio
    }
];


const LeftSideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="fixed left-0 w-64 h-screen bg-white shadow-lg flex flex-col">
            {/* Menu principal */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {mainMenuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : ''
                            }`}
                    >
                        <span>{item.icon}</span>
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Section About */}
            <div className="p-4 border-t">
                <button
                    onClick={() => navigate('/about')}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 ${location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                >
                    <HelpCircle className="w-5 h-5" />
                    A propos
                </button>
            </div>
        </aside>
    );
};

export default LeftSideBar;
