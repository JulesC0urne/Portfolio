let posts = {
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

// Fonction pour ajouter un post
export const addPost = (category, newPost) => {
    posts[category].push(newPost);
};

// Fonction pour supprimer un post
export const deletePost = (category, postId) => {
    posts[category] = posts[category].filter(post => post.id !== postId);
};

// Fonction pour récupérer les posts
export const getPosts = () => posts;

export default posts;
