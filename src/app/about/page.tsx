import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const title = "À propos de Rénald DESIRE";
  const description = "Découvrez mon parcours, mes expériences et mes compétences en développement d'applications.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
    const person = {
        firstName: 'Rénald',
        lastName:  'DESIRE',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      "Étudiant en informatique",
        avatar:    '/images/avatar.JPEG',
        location:  'Martinique',
        languages: ['Français', 'Anglais']
    };

    const social = [
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
            name: 'Email',
            icon: 'email',
            link: 'mailto:renalddesire55@gmail.com',
        },
        {
            name: 'CV',
            icon: 'curriculum',
            link: 'https://drive.google.com/file/d/19zFY1rUKw8Qf7hudi9aFlycOBmXnN-x4/view?usp=sharing',
            download: true
        }
    ];

    const about = {
        tableOfContent: {
            display: true,
            subItems: true
        },
        intro: {
            display: true,
            title: "Introduction",
            description: "Je m'intéresse au développement web, aussi bien front-end que back-end, et je fais également un peu de Linux. Je consacre mon temps libre à la réalisation de projets personnels, en dehors de tout cela, je m'intéresse beaucoup à la musique et je m'efforce également de me tenir en forme par la pratique de la musculation."
        },
        work: {
            display: true,
            title: 'Expériences Professionnelles',
            experiences: [
                {
                    company: 'Kweevo',
                    timeframe: '14 Avril - 6 Juin 2025',
                    role: 'Développeur DevOps/DataOps Junior',
                    achievements: [
                        "Développement d'API Python pour la gestion et l'analyse des données opérationnelles.",
                        "Intégration de systèmes d'IA pour automatiser et optimiser les flux de travail de données.",
                        "Création d'API d'IA pour permettre l'accès et l'utilisation des modèles d'apprentissage automatique dans les applications."
                    ]
                },
                {
                    company: 'IUT de la Martinique : L3MA',
                    timeframe: 'Juin 2024',
                    role: 'Développeur',
                    achievements: [
                        "Développement d'une interface interactive utilisant des bibliothèques Python pour la visualisation des données côtières de la Martinique.",
                        "Création d'un système de modélisation pour analyser l'érosion des plages et l'évolution des zones côtières via la télédétection."
                    ]
                },
            ]
        },
        studies: {
            display: true,
            title: 'Éducation',
            institutions: [
                {
                    name: 'IUT de la Martinique : 2023 -> 2026',
                    description: "Bachelor universitaire de technologie Informatique.",
                },
                {
                    name: 'Lycée de Bellevue : 2020 -> 2023',
                    description: "Baccalauréat en Sciences Économiques et Sociales et Numérique Science Informatique.",
                }
            ]
        },
        technical: {
            display: true,
            title: "Skills",
            skills: [
                                {
                    title: 'Front-end',
                    images: [
                        { src: '/images/skills/html.png', alt: 'HTML' },
                        { src: '/images/skills/css.png', alt: 'CSS' },
                        { src: '/images/skills/js.png', alt: 'JavaScript' },
                        { src: '/images/skills/react.svg', alt: 'React' },
                        { src: '/images/skills/vue.png', alt: 'Vue.js' },
                        { src: '/images/skills/tailwind.png', alt: 'Tailwind CSS' }
                    ]
                },
                {
                    title: 'Back-end',
                    images: [
                        { src: '/images/skills/php.png', alt: 'PHP' },
                        { src: '/images/skills/python.png', alt: 'Python' },
                        { src: '/images/skills/laravel.png', alt: 'Laravel' },
                        { src: '/images/skills/mysql.png', alt: 'MySQL' },
                        { src: '/images/skills/postgresql.svg', alt: 'PostgreSQL' },
                        { src: '/images/skills/supabase.svg', alt: 'Supabase' }
                    ]
                },
                {
                    title: 'DevOps & Outils',
                    images: [
                        { src: '/images/skills/git.png', alt: 'Git' },
                        { src: '/images/skills/github.svg', alt: 'GitHub' },
                        { src: '/images/skills/docker.png', alt: 'Docker' },
                        { src: '/images/skills/arch.png', alt: 'Arch Linux' },
                        { src: '/images/skills/bash.png', alt: 'Bash' },
                        { src: '/images/skills/figma.png', alt: 'Figma' }
                    ]
                },
                {
                    title: 'Langages de programmation',
                    images: [
                        { src: '/images/skills/js.png', alt: 'JavaScript' },
                        { src: '/images/skills/python.png', alt: 'Python' },
                        { src: '/images/skills/php.png', alt: 'PHP' }
                    ] 
                }
            ]
        }
    };

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
    <Flex>
      <Flex fillWidth mobileDirection="column" justifyContent="center">
          <Flex
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Flex>
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          <Flex
            id={about.intro.title}
            fillWidth
            minHeight="160"
            direction="column"
            justifyContent="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
              >
                
                {social.map(
                  (item) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="tertiary"
                        download={item.download || undefined}
                      />
                    )
                )}
              </Flex>
            )}
          </Flex>

          {about.intro.display && (
            <Flex
              direction="column"
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Flex>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Flex
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    direction="column"
                  >
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Flex as="ul" direction="column" gap="16">
                      {experience.achievements.map(
                        (achievement: string, index: any) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution) => (
                  <Flex
                    key={institution.name}
                    fillWidth
                    direction="column"
                    gap="4"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="body-default-m">
                      {institution.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              {about.technical.skills.map((skill) => (
                <Flex
                  key={skill.title}
                  direction="column"
                  gap="s"
                  marginBottom="40"
                  fillWidth
                >
                  <Text id={skill.title} variant="heading-strong-m">
                    {skill.title}
                  </Text>
                  
                  <Flex gap="m" fillWidth wrap>
                    {skill.images &&
                      skill.images.map((image, index) => (
                        <SmartImage
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "var(--radius-s)",
                          }}
                        />
                      ))}
                  </Flex>
                </Flex>
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
    </Flex>
  );
}