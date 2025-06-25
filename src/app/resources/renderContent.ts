// Hardcoded French content for the portfolio
export function renderContent() {
    return {
        person: {
            name: 'Rénald DESIRE',
            role: 'Développeur Full Stack',
            avatar: '/images/avatar.JPEG',
            location: 'Europe/Paris',
            languages: ['Français'],
        },
        social: [
            {
                name: 'GitHub',
                icon: 'github',
                link: 'https://github.com/',
            },
            {
                name: 'LinkedIn',
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/',
            },
            {
                name: 'Email',
                icon: 'email',
                link: 'mailto:contact@example.com',
            },
        ],
        newsletter: {
            display: false,
            title: 'Restez informé',
            description: 'Inscrivez-vous pour recevoir les dernières actualités.'
        },
        home: {
            label: 'Accueil',
            title: 'Portfolio de Rénald DESIRE',
            description: 'Développeur Full Stack passionné par la création d\'applications innovantes.',
            headline: 'Développeur Full Stack basé en France',
            subline: 'Je suis Rénald, un développeur full stack qui transforme les idées en expériences numériques exceptionnelles.',
        },
        about: {
            label: 'À propos',
            title: 'À propos de moi',
            description: 'Découvrez mon parcours et mes compétences en développement web.',
        },
        blog: {
            label: 'Blog',
            title: 'Blog',
            description: 'Mes réflexions sur le développement web et la technologie.',
        },
        work: {
            label: 'Projets',
            title: 'Mes projets',
            description: 'Découvrez une sélection de mes projets de développement.',
        },
        competences: {
            label: 'Compétences',
            title: 'Mes compétences',
            description: 'Compétences développées dans le cadre de mon BUT Informatique.',
        },
        gallery: {
            label: 'Galerie',
            title: 'Galerie',
            description: 'Une collection de mes créations visuelles.',
        }
    };
} 