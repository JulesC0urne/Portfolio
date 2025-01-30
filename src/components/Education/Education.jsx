import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
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

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'grey.50',
            minHeight: '100vh',
            '& > *': { mb: 3 }
        }}>
            {/* En-tête */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <GraduationCap size={32} />
                    Formation
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                    Mon parcours académique en développement et informatique
                </Typography>
            </Box>

            {/* Parcours éducatif */}
            <Box sx={{ '& > *': { mb: 3 } }}>
                {education.map((edu, index) => (
                    <Card key={index} sx={{
                        transition: 'box-shadow 0.3s',
                        '&:hover': { boxShadow: 6 }
                    }}>
                        <CardContent sx={{ p: 3 }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 3
                            }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main'
                                    }}>
                                        {edu.degree}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mt: 1,
                                        color: 'text.secondary'
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Calendar size={16} />
                                            {edu.period}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <MapPin size={16} />
                                            {edu.location}
                                        </Box>
                                    </Box>

                                    <Typography sx={{ fontWeight: 600, mt: 2 }}>
                                        {edu.school}
                                    </Typography>

                                    <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                                        {edu.description}
                                    </Typography>

                                    {/* Réalisations */}
                                    <Box sx={{ mt: 3 }}>
                                        <Typography sx={{
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 1
                                        }}>
                                            <Award size={16} />
                                            Réalisations clés
                                        </Typography>
                                        <Box component="ul" sx={{
                                            listStyleType: 'disc',
                                            pl: 2,
                                            '& > li': { mb: 0.5 }
                                        }}>
                                            {edu.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Compétences acquises */}
                                <Box sx={{ width: { xs: '100%', md: '30%' } }}>
                                    <Typography sx={{ fontWeight: 600, mb: 1 }}>
                                        Compétences acquises
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1
                                    }}>
                                        {edu.skills.map((skill, i) => (
                                            <Chip
                                                key={i}
                                                label={skill}
                                                sx={{
                                                    backgroundColor: 'primary.light',
                                                    color: 'primary.main',
                                                    '&:hover': { backgroundColor: 'primary.light' }
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Education;
