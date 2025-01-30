import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Tabs, Tab, Box, Button, IconButton } from '@mui/material';
import { TabContext } from '@mui/lab';
import { MapPin, Mail, Github, Linkedin, MessageCircle, Calendar } from 'lucide-react';
import { TabPanels } from '../Post/Post';
import MessageForm from '../MessageForm/MessageForm';

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState('interests');
    const [openPopup, setOpenPopup] = useState(false);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const posts = {
        interests: [
            {
                id: 1,
                title: "Échec et mat... enfin presque !",
                content: "Petite série de victoires aux échecs qui prouve que même un débutant peut avoir son quart d'heure de gloire. Mon niveau ? Disons que je suis quelque part entre 'débutant prometteur' et 'Le Fou est ma pièce préférée car il se déplace en diagonale comme moi après 3 cafés'. 🏆♟️",
                date: "Il y a 2 jours",
                likes: 24,
                comments: 8,
                image: `${process.env.PUBLIC_URL}/posts/chess.png`
            },
            {
                id: 2,
                title: "Mon Product Owner à 4 pattes",
                content: "Nouveau membre dans l'équipe : un expert en méthodes Agiles qui maîtrise particulièrement le sprint (surtout quand c'est l'heure de la promenade) ! Son code de conduite ? Des câlins = des commits. 🐕💻",
                date: "Il y a 1 semaine",
                likes: 45,
                comments: 16,
                image: `${process.env.PUBLIC_URL}/posts/dog.jpg`
            },
            {
                id: 3,
                title: "Digital Detox au bord du lac",
                content: "Quand on me demande où je debugge le mieux, je réponds : face à un lac ! Rien de tel qu'une pause nature pour rafraîchir ses idées et optimiser son code mental. La meilleure connexion ? Parfois c'est celle qu'on a avec soi-même. 🌊💭",
                date: "Il y a 3 semaines",
                likes: 6,
                comments: 4,
                image: `${process.env.PUBLIC_URL}/posts/lac.jpg`
            }
        ],
        langages: [
            {
                id: 1,
                title: "TOEIC : Mission Accomplished! 🎯",
                content: "Après des mois de 'Hello World' répétitifs, je peux enfin dire que je parle couramment le Javascript ET l'anglais ! Un dev bilingue, c'est comme un code bien commenté : ça facilite la communication internationale. Une nouvelle compétence qui ouvre les portes des projets internationaux ! 🇬🇧✨",
                date: "Il y a 1 an",
                likes: 27,
                comments: 2,
                image: `${process.env.PUBLIC_URL}/posts/toeic.png`
            }
        ],
        travels: [
            {
                id: 1,
                title: "Découverte de l'Afrique du Sud 🦁",
                content: "Un voyage inoubliable entre savane et modernité. Des moments magiques à observer les lions dans le Kruger Park, des couchers de soleil à couper le souffle sur Table Mountain, et des rencontres authentiques avec les communautés locales. De Cape Town à Johannesburg, chaque étape a été une nouvelle aventure riche en découvertes ! 🌍",
                date: "Il y a 1 an",
                likes: 31,
                comments: 36,
                image: [`${process.env.PUBLIC_URL}/posts/africa1.jpg`, `${process.env.PUBLIC_URL}/posts/africa2.jpg`, `${process.env.PUBLIC_URL}/posts/africa3.jpg`, `${process.env.PUBLIC_URL}/posts/africa4.jpg`],
            },
            {
                id: 2,
                title: "Madagascar, l'île aux trésors 🌴",
                content: "Une immersion totale dans un paradis de biodiversité. Entre les allées de baobabs, les plages paradisiaques de Nosy Be, et les rencontres uniques avec les lémuriens dans leurs habitats naturels. Un voyage qui m'a fait découvrir une culture riche et des paysages à couper le souffle. Une expérience qui restera à jamais gravée dans ma mémoire ! 🌺",
                date: "Il y a 1 an",
                likes: 23,
                comments: 9,
                image: [`${process.env.PUBLIC_URL}/posts/madagascar1.jpg`, `${process.env.PUBLIC_URL}/posts/madagascar2.jpg`, `${process.env.PUBLIC_URL}/posts/madagascar3.jpg`, `${process.env.PUBLIC_URL}/posts/madagascar4.jpg`],
            }
        ]
    };

    const socialLinks = [
        {
            Icon: Github,
            url: "https://github.com/JulesC0urne",
            label: "Github"
        },
        {
            Icon: Linkedin,
            url: "https://www.linkedin.com/in/jules-courn%C3%A9-430a79230/",
            label: "LinkedIn"
        }
    ];

    return (
        <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50">
            <Card className="relative shadow-lg">
                {/* Image de couverture */}
                <CardMedia
                    component="img"
                    height="200"
                    image={`${process.env.PUBLIC_URL}/cover.jpg`}
                    alt="Cover"
                    className="h-80 object-cover"
                />

                {/* Les icons réseaux sociaux */}
                <div className="absolute top-4 right-4 flex space-x-2">
                    {socialLinks.map(({ Icon, url, label }, index) => (
                        <IconButton
                            key={index}
                            className="bg-white hover:bg-gray-100"
                            onClick={() => window.open(url, '_blank')}
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5 text-blue-200" />
                        </IconButton>
                    ))}
                </div>

                <CardContent className="p-0">
                    {/* Photo de profil */}
                    <div className="relative">
                        <img
                            src={`${process.env.PUBLIC_URL}/profil.png`}
                            alt="Profile"
                            className="w-[120px] h-[120px] rounded-full border-4 border-white absolute -top-20 left-6 shadow-lg object-cover"
                        />

                        {/* Pseudo à droite de la photo de profil */}
                        <span className="absolute -top-2 left-[150px] text-blue-400 font-semibold text-sm">
                            @julescourne
                        </span>
                    </div>

                    <div className="mt-6 p-6">
                        {/* Nom + Poste */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold pl-2">Jules Courné</h1>
                                <p className="text-primary font-semibold text-md mt-1 pl-2"> Développeur Full-Stack</p>
                            </div>

                            <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
                                <MessageCircle className="w-4 h-4 mr-1" />
                                Message
                            </Button>
                        </div>

                        {/* Infos personnelles */}
                        <div className="mt-4 text-gray-700 space-y-3 pl-2">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                <span>02 Juillet 1996</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                                <span>Mantes-la-Jolie, France</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                                <span>jules.courne@gmail.com</span>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="pl-2 pt-6 text-gray-700 leading-relaxed">
                            Passionné par le développement web et les nouvelles technologies avec 1 an d'expérience.
                            Spécialisé dans la création d'applications web performantes et scalables.
                            Amateur de clean code et d'architecture logicielle.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <TabContext value={selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        aria-label="profile tabs"
                        sx={{
                            backgroundColor: 'white',
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 'bold',
                            },
                            '& .MuiTabs-flexContainer': {
                                justifyContent: 'space-around'
                            }
                        }}
                    >
                        <Tab label="Intérêts" value="interests" />
                        <Tab label="Langages" value="langages" />
                        <Tab label="Voyages" value="travels" />
                    </Tabs>
                </Box>
                <TabPanels posts={posts} selectedTab={selectedTab} />
            </TabContext>
            <MessageForm open={openPopup} onClose={() => setOpenPopup(false)} />
        </div>
    );
};

export default Profile;