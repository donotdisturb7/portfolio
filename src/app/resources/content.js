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
        link: 'https://www.linkedin.com/in/r%C3%A9nald-desire-ba47992b0/',
    },
    {
        name: 'Mon CV',
        icon: 'curriculum',
        link: 'https://drive.google.com/file/d/1ef73z2A7ibY7_jW6L0lL7Qr8jBK5-1oO/view?usp=sharing',
        download: true,
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:renalddesire55@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Bonjour,  je suis Rénald</>,
    subline: <>Etudiant en informatique à <InlineCode>IUT de la Martinique</InlineCode>. <br />
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
        title: 'Skills',
        skills: [
            {
                title: 'Front-end',
                description: <></>,
                images: [
                    {
                        src: '/images/react.svg',
                        alt: 'React',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/vite.png',
                        alt: 'Vite',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/tailwind.png',
                        alt: 'Tailwind',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/js.png',
                        alt: 'JS',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/vue.png',
                        alt: 'JS',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/html.png',
                        alt: 'JS',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/css.png',
                        alt: 'JS',
                        width: 4,
                        height: 4
                    }
                ]
            },
            {
                title: 'Back-end',
                description: <></>,
                images: [
                    {
                        src: '/images/laravel.png',
                        alt: 'Laravel',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/php.png',
                        alt: 'PHP',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/mysql.png',
                        alt: 'MySQL',
                        width: 4,
                        height: 4
                    }
                ]
            },
            {
                title: 'DevOps & Outils',
                description: <></>,
                images: [
                    {
                        src: '/images/docker.png',
                        alt: 'Docker',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/git.png',
                        alt: 'Git',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/bash.png',
                        alt: 'Bash',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/github.svg',
                        alt: 'Bash',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/arch.png',
                        alt: 'Linux',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/figma.png',
                        alt: 'Linux',
                        width: 4,
                        height: 4
                    }
                ]
            },
            {
                title: 'Langage de programmation',
                description: <></>,
                images: [
                    {
                        src: '/images/python.png',
                        alt: 'Python',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/js.png',
                        alt: 'JS',
                        width: 4,
                        height: 4
                    }
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



export { person, social, home, about, blog, work };