import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { TextField, InputAdornment, List, ListItem, Typography, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


const RightSideBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const theme = useTheme();

    const siteContent = [
        {
            path: '/skills',
            section: 'Compétences',
            items: [
                {
                    text: "Frontend Development",
                    subsection: "Technologies Web",
                    preview: "ReactJS (85%), Javascript (85%), Typescript (80%), HTML (90%), CSS (85%), Python (85%), Flask (80%)"
                },
                {
                    text: "Backend & Database",
                    subsection: "Technologies Serveur",
                    preview: "Spring Boot (75%), Java (75%), PostgreSQL (80%), MySQL (80%), SQL (85%)"
                },
                {
                    text: "DevOps & Tools",
                    subsection: "Outils de Développement",
                    preview: "Docker (75%), Docker Compose (75%), Git (85%), GitLab (80%), Jira (75%)"
                },
                {
                    text: "Soft Skills",
                    subsection: "Compétences Transversales",
                    preview: "Proactif avec forte capacité d'anticipation, Force de propositions et solutions innovantes, Adaptabilité aux changements, Esprit d'équipe et communication positive"
                }
            ]
        },
        {
            path: '/experiences',
            section: 'Expériences',
            items: [
                {
                    text: "Développement Full Stack - Gestion de projet",
                    subsection: "SOLUTEC Paris (Sep 2024 - Déc 2024)",
                    preview: "Développement React.js, Architecture microservices Spring Boot, Base de données PostgreSQL, Conteneurisation Docker"
                },
                {
                    text: "Développement Full Stack - Notes de frais",
                    subsection: "SOLUTEC Lyon (Avr 2023 - Sep 2023)",
                    preview: "Rédaction du dossier de cadrage, Développement React.js et Spring Boot, Tests unitaires et d'intégration, Conteneurisation Docker"
                },
                {
                    text: "Développement Système - Segmentation audio-vidéo",
                    subsection: "LIFAT Tours (Juin 2022 - Sep 2022)",
                    preview: "Conception système segmentation audio-vidéo, Structuration et indexation des données, Optimisation des algorithmes"
                }
            ]
        },
        {
            path: '/education',
            section: 'Education',
            items: [
                {
                    text: "Diplôme d'ingénieur en Informatique",
                    subsection: "Polytech Tours (2020-2023)",
                    preview: "Systèmes d'Informations, Architecture logicielle, Java, C#, C++, Python, Javascript, React, Vue, HTML/CSS, Base de données, Sécurité"
                },
                {
                    text: "Classe préparatoire ATS",
                    subsection: "Lycée Blaise Pascal (2019-2020)",
                    preview: "Mathématiques, Physique, Analyse, Résolution de problèmes complexes, Réussite au concours d'entrée en école d'ingénieurs"
                },
                {
                    text: "BTS Topographe-géomètre",
                    subsection: "Lycée le Corbusier (2017-2019)",
                    preview: "Géomatique, Topographie, Cartographie, SIG, Formation certifiée en logiciels de géomatique"
                }
            ]
        },
        {
            path: '/projects',
            section: 'Projets',
            items: [
                {
                    text: "HubTask - Application de gestion de projets",
                    subsection: "Gestion de Projets Collaboratifs",
                    preview: "Application web complète avec React, Spring Boot, Spring Security, PostgreSQL, WebSocket, Docker, Gestion de projets, tâches et chat en temps réel"
                },
                {
                    text: "CineMatch - Recommandation de films",
                    subsection: "Application de suggestion personnalisée",
                    preview: "Application React avec TmdbAPI, Tailwind CSS, Material-UI, système de recommandation basé sur le profil utilisateur"
                },
                {
                    text: "E-commerce Platform",
                    subsection: "Frontend Design",
                    preview: "Interface e-commerce avec React, Tailwind CSS, Framer-motion, Animations et design moderne"
                },
                {
                    text: "Application QVT",
                    subsection: "Visualisation de Données",
                    preview: "Application VueJS, Firebase, Vega-Lite pour l'analyse et l'affichage dynamique des résultats de sondage QVT"
                },
                {
                    text: "Application BMX",
                    subsection: "Gestion de Compétitions",
                    preview: "Application web Python, Flask, SQLite, SQL_Alchemy, MVC pour la gestion des courses et tournois de BMX"
                },
                {
                    text: "Portfolio",
                    subsection: "Site Web Personnel",
                    preview: "Site web avec React, Tailwind CSS, Material-UI, présentation intuitive des compétences et réalisations"
                }
            ]
        },
        {
            path: '/profile',
            section: 'Profil',
            items: [
                {
                    text: "Centres d'intérêt - Jeux d'échecs",
                    subsection: "Loisirs",
                    preview: "Passionné de jeux d'échecs en apprentissage constant"
                },
                {
                    text: "Centres d'intérêt - Animaux",
                    subsection: "Loisirs",
                    preview: "Amateur d'animaux et propriétaire d'un chien"
                },
                {
                    text: "Langues - Anglais",
                    subsection: "Compétences Linguistiques",
                    preview: "TOEIC validé, communication professionnelle en anglais"
                },
                {
                    text: "Voyages - Afrique du Sud",
                    subsection: "Expériences Internationales",
                    preview: "Voyage d'exploration et d'adaptation en Afrique du Sud"
                },
                {
                    text: "Voyages - Madagascar",
                    subsection: "Expériences Internationales",
                    preview: "Découverte culturelle et exploration à Madagascar"
                }
            ]
        }
    ];

    // Fonction pour extraire les mots-clés du contenu
    const extractKeywords = (item) => {
        const keywords = new Set();

        // Ajoute tous les mots du texte, sous-section et preview
        const addWords = (text) => {
            text.toLowerCase()
                .split(/[\s,/()]+/) // Sépare sur les espaces, virgules, slash et parenthèses
                .filter(word => word.length > 2) // Ignore les mots trop courts
                .forEach(word => keywords.add(word));
        };

        // Extrait les pourcentages et les nombres
        const extractNumbers = (text) => {
            const numbers = text.match(/\d+(?:\.\d+)?%?/g) || [];
            numbers.forEach(num => keywords.add(num));
        };

        // Extrait les technologies spécifiques
        const extractTechnologies = (text) => {
            const techRegex = /(React|JavaScript|TypeScript|HTML|CSS|Spring Boot|Java|Docker|Git|SQL|API|Vue|Firebase|PostgreSQL|MySQL)/gi;
            const technologies = text.match(techRegex) || [];
            technologies.forEach(tech => keywords.add(tech.toLowerCase()));
        };

        [item.text, item.subsection, item.preview].forEach(text => {
            if (text) {
                addWords(text);
                extractNumbers(text);
                extractTechnologies(text);
            }
        });

        return Array.from(keywords);
    };

    // Enrichir le contenu avec des mots-clés
    const enrichedContent = siteContent.map(section => ({
        ...section,
        items: section.items.map(item => ({
            ...item,
            keywords: extractKeywords(item)
        }))
    }));

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const searchTerms = searchQuery.toLowerCase().split(/\s+/);

        const results = enrichedContent.flatMap(section =>
            section.items
                .filter(item => {
                    // Vérifie si tous les termes de recherche correspondent à au moins un mot-clé
                    return searchTerms.every(term =>
                        item.keywords.some(keyword => keyword.includes(term)) ||
                        item.text.toLowerCase().includes(term) ||
                        item.preview.toLowerCase().includes(term) ||
                        item.subsection.toLowerCase().includes(term)
                    );
                })
                .map(item => ({
                    ...item,
                    section: section.section,
                    path: section.path
                }))
        );

        setSearchResults(results);
    }, [searchQuery]);

    const handleResultClick = (path) => {
        navigate(path);
        setSearchQuery('');
    };

    return (
        <aside className="fixed right-0 w-64 h-screen bg-white shadow-lg overflow-y-auto"
            style={{ backgroundColor: theme.palette.background.paper }}>
            <div className="p-4">
                <TextField
                    type="search"
                    placeholder="Rechercher..."
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search className="h-4 w-4 text-gray-400" />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        mb: 2, // Add margin-bottom using the theme's spacing
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'background.default', // Use the theme background
                        },
                    }}
                />

                {searchResults.length > 0 && (
                    <List sx={{ mt: 2 }}>
                        {searchResults.map((result, index) => (
                            <ListItem
                                key={index}
                                button
                                onClick={() => handleResultClick(result.path)}
                                sx={{
                                    mb: 2,
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    '&:hover': {
                                        backgroundColor: 'grey.100',
                                    },
                                }}
                            >
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography variant="subtitle2" color="primary">
                                            {result.subsection}
                                        </Typography>
                                        <Chip
                                            label={result.section}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                color: 'primary.main',
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2"
                                        sx={{
                                            mb: 1,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {result.text}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {result.preview}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                )}

                {searchQuery && searchResults.length === 0 && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2, textAlign: 'center' }}
                    >
                        Aucun résultat trouvé
                    </Typography>
                )}
            </div>
        </aside>
    );
};

export default RightSideBar;