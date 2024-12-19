import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Rénald',
    lastName:  'DESIRE',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Etudiant en informatique',
    avatar:    '/images/avatar.JPEG',
    location:  'America/Martinique',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['French', 'English']  // optional: Leave the array empty if you don't want to display languages
}


const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/donotdisturb7',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Bonjour,  je suis Rénald</>,
    subline: <>Etudiant en informatique à <InlineCode>IUT de la Martinique</InlineCode>. 
    Je m'intéresse au développement web, aussi bien front-end que back-end, et je fais également un peu de Linux. Je consacre mon temps libre à la réalisation de projets personnels.</>
}

const about = {
    label: 'Moi',
    title: 'À propos de moi',
    description: `Rencontre ${person.name}, ${person.role} de ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
    Je m'intéresse au développement web, aussi bien front-end que back-end, et je fais également un peu de Linux. Je consacre mon temps libre à la réalisation de projets personnels, en dehors de tout cela, je m'interesse beaucoup à la musique et je m'efforce egalement de me tenir en forme par la pratique de la musculation</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Expériences Professionnelles',
        experiences: [
            {
                company: 'IUT de la Martinique : L3MA',
                timeframe: 'Juin 2024 ',
                role: 'Développeur',
                achievements: [
                    <>Développement d'une interface interactive utilisant des bibliothèques Python pour la visualisation des données côtières de la Martinique.</>,
                    <>Création d'un système de modélisation pour analyser l'érosion des plages et l'évolution des zones côtières via la télédétection.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                ]
            },
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'IUT de la Martinique : 2023 -> 2026',
                description: <>Bachelor universitaire de technologie Informatique.</>,
            },
,
            {
                name: 'Lycée de Bellevue : 2020 -> 2023',
                description: <>Baccalauréat en Sciences Économiques et Sociales et Numérique Science Informatique.</>,
            },

        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Compétences',
        skills: [
            {
                title: 'Compétence',
                description: <>.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Compétence',
                description: <>.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Competences',
    title: 'Compétences',
    description: ``
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Mes projets',
    title: 'Mes projets',
    description: `Design et développement de projets par ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

// const gallery = {
//     label: 'Gallery',
//     title: 'My photo gallery',
//     description: `A photo collection by ${person.name}`,
//     // Images from https://pexels.com
//     images: [
//         { 
//             src: '/images/gallery/img-01.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-02.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-03.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-04.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-05.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-06.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-07.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-08.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-09.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-10.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-11.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-12.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-13.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-14.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//     ]
// }

export { person, social, home, about, blog, work };