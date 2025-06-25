'use client'

import { useState, useEffect } from 'react'
import { Button, Flex, Heading, Text, IconButton, SmartImage, Dialog } from '@/once-ui/components'

interface Apprentissage {
    title: string;
    description: string;
    preuves: string[];
    technologies: string;
}

interface CompetenceSlideshowProps {
    post: {
        metadata: {
            title: string;
            subtitle?: string;
            summary?: string;
            image?: string;
        };
        content: string;
    };
}

export default function CompetenceSlideshow({ post }: CompetenceSlideshowProps) {
    // Extraction des apprentissages depuis le contenu MDX
    const extractApprentissages = (content: string): { niveau1: Apprentissage[], niveau2: Apprentissage[] } => {
        const lines = content.split('\n');
        const apprentissages: Apprentissage[] = [];
        let currentApprentissage: Partial<Apprentissage> | null = null;
        let isInDescription = false;
        let isInPreuves = false;
        let isInTechnologies = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            // Nouveau titre d'apprentissage
            if (line.startsWith('### ') && !line.includes('Niveau')) {
                // Sauvegarder l'apprentissage précédent s'il existe
                if (currentApprentissage && currentApprentissage.title) {
                    apprentissages.push(currentApprentissage as Apprentissage);
                }

                // Nouveau apprentissage
                let title = line.replace(/^###\s*/, '').trim();
                
                currentApprentissage = {
                    title,
                    description: '',
                    preuves: [],
                    technologies: ''
                };
                isInDescription = false;
                isInPreuves = false;
                isInTechnologies = false;
            }

            // Description
            if (line.startsWith('**Description :**') && currentApprentissage) {
                isInDescription = true;
                isInPreuves = false;
                isInTechnologies = false;
                currentApprentissage.description = line.replace('**Description :**', '').trim();
            }

            // Preuves et réalisations
            if (line.startsWith('**Ce que j\'ai fait dans BlaBlaBoat :**') && currentApprentissage) {
                isInDescription = false;
                isInPreuves = true;
                isInTechnologies = false;
            }

            // Technologies utilisées
            if ((line.startsWith('**Technologies utilisées :**') || line.startsWith('**Outils utilisés :**') || line.startsWith('**Standards appliqués :**') || line.startsWith('**Pratiques appliquées :**') || line.startsWith('**Outils de test :**') || line.startsWith('**Livrables :**')) && currentApprentissage) {
                isInDescription = false;
                isInPreuves = false;
                isInTechnologies = true;
                currentApprentissage.technologies = line.replace(/\*\*[^:]+:\*\*/, '').trim();
            }

            // Contenu des sections
            if (currentApprentissage) {
                if (isInPreuves && line.startsWith('- ')) {
                    currentApprentissage.preuves = currentApprentissage.preuves || [];
                    currentApprentissage.preuves.push(line.replace('- ', ''));
                }
                if (isInTechnologies && !line.startsWith('**') && !line.startsWith('!') && line.length > 0) {
                    if (!currentApprentissage.technologies) {
                        currentApprentissage.technologies = line;
                    }
                }
            }
        }

        // Sauvegarder le dernier apprentissage
        if (currentApprentissage && currentApprentissage.title) {
            apprentissages.push(currentApprentissage as Apprentissage);
        }

        // Séparer niveau 1 et niveau 2 (les 4 premiers sont niveau 1)
        return {
            niveau1: apprentissages.slice(0, 4),
            niveau2: apprentissages.slice(4)
        };
    };

    const { niveau1, niveau2 } = extractApprentissages(post.content);
    const [currentNiveau, setCurrentNiveau] = useState<1 | 2>(1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [imageZoom, setImageZoom] = useState<'fit' | 'fill' | 'actual'>('fit');
    
    // Déterminer le dossier d'images selon la compétence
    const getImageFolder = (title: string): string => {
        if (title.includes('Réaliser')) return 'ap1';
        if (title.includes('Optimiser')) return 'ap2';
        if (title.includes('Administrer')) return 'ap3';
        if (title.includes('Gérer')) return 'ap4';
        if (title.includes('Conduire')) return 'ap5';
        if (title.includes('Collaborer')) return 'ap6';
        return 'ap1'; // fallback
    };
    
    const imageFolder = getImageFolder(post.metadata.title);
    const currentApprentissages = currentNiveau === 1 ? niveau1 : niveau2;
    const maxSlides = currentApprentissages.length;
    
    // Calculer l'index global de l'apprentissage (pour les images)
    const getGlobalApprentissageIndex = (): number => {
        if (currentNiveau === 1) {
            return currentSlide + 1; // Niveau 1: apprentissages 1, 2, 3, 4...
        } else {
            return niveau1.length + currentSlide + 1; // Niveau 2: après les apprentissages du niveau 1
        }
    };

    // Navigation
    const nextSlide = () => {
        if (currentSlide < maxSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const switchNiveau = (niveau: 1 | 2) => {
        setCurrentNiveau(niveau);
        setCurrentSlide(0);
    };

    // Gestion des touches clavier
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsImageModalOpen(false);
                setImageZoom('fit');
                return;
            }
            if (!isImageModalOpen) {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === '1') switchNiveau(1);
                if (e.key === '2') switchNiveau(2);
            } else {
                // Controls dans la modal
                if (e.key === 'f' || e.key === 'F') setImageZoom('fit');
                if (e.key === 'z' || e.key === 'Z') setImageZoom('fill');
                if (e.key === 'a' || e.key === 'A') setImageZoom('actual');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentSlide, maxSlides, isImageModalOpen]);

    if (maxSlides === 0) {
        return (
            <Flex direction="column" alignItems="center" gap="l" fillWidth maxWidth="m">
                <Button href="/competences" variant="tertiary" size="s" prefixIcon="chevronLeft">
                    Retour aux compétences
                </Button>
                <Text>Aucun apprentissage trouvé pour cette compétence.</Text>
            </Flex>
        );
    }

    const currentApprentissage = currentApprentissages[currentSlide];

    return (
        <Flex 
            fillWidth 
            direction="column" 
            background="neutral-weak"
            style={{ overflow: 'hidden', minHeight: '100vh' }}>
            
            {/* Header style PowerPoint */}
            <Flex 
                fillWidth 
                padding="m" 
                justifyContent="space-between" 
                alignItems="center"
                background="surface"
                border="neutral-medium"
                borderStyle="solid-1">
                
                <Button href="/competences" variant="tertiary" size="s" prefixIcon="chevronLeft">
                    Compétences
                </Button>
                
                <Flex direction="column" alignItems="center" gap="xs">
                    <Heading variant="heading-strong-l">
                        {post.metadata.title}
                    </Heading>
                    {post.metadata.subtitle && (
                        <Text variant="body-default-m" onBackground="brand-strong">
                            {post.metadata.subtitle}
                        </Text>
                    )}
                    {post.metadata.summary && (
                        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                            {post.metadata.summary}
                        </Text>
                    )}
                </Flex>
                
                <Flex gap="s" alignItems="center">
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        {currentSlide + 1} / {maxSlides}
                    </Text>
                </Flex>
            </Flex>

            {/* Navigation Niveau */}
            <Flex 
                fillWidth 
                padding="m" 
                justifyContent="center" 
                gap="s"
                background="surface">
                
                <Button 
                    variant={currentNiveau === 1 ? "primary" : "secondary"}
                    size="m"
                    onClick={() => switchNiveau(1)}>
                    Niveau 1
                </Button>
                
                <Button 
                    variant={currentNiveau === 2 ? "primary" : "secondary"}
                    size="m"
                    onClick={() => switchNiveau(2)}>
                    Niveau 2
                </Button>
            </Flex>

            {/* Slide principal */}
            <Flex 
                fillWidth 
                flex={1} 
                padding="xl" 
                justifyContent="center">
                
                <Flex 
                    fillWidth 
                    maxWidth="xl" 
                    direction="column" 
                    gap="xl"
                    background="surface"
                    padding="xl"
                    radius="l"
                    border="neutral-medium"
                    borderStyle="solid-1">
                    
                    {/* Titre de l'apprentissage */}
                    <Flex direction="column" alignItems="center" gap="m">
                        <Heading variant="display-strong-l" align="center">
                            {currentApprentissage.title}
                        </Heading>
                        {currentApprentissage.description && (
                            <Text variant="body-default-l" align="center" onBackground="neutral-weak">
                                {currentApprentissage.description}
                            </Text>
                        )}
                    </Flex>

                    {/* Contenu principal en 2 colonnes */}
                    <Flex direction="row" gap="xl" wrap fillWidth>
                        
                        {/* Preuves et réalisations */}
                        {currentApprentissage.preuves && currentApprentissage.preuves.length > 0 && (
                            <Flex direction="column" gap="m" flex={1} style={{ minWidth: '300px' }}>
                                <Heading variant="heading-strong-m" onBackground="accent-strong">
                                    🎯 Ce que j'ai réalisé
                                </Heading>
                                <Flex direction="column" gap="s">
                                    {currentApprentissage.preuves.map((preuve, index) => (
                                        <Text key={index} variant="body-default-m">
                                            • {preuve}
                                        </Text>
                                    ))}
                                </Flex>
                            </Flex>
                        )}

                        {/* Technologies */}
                        {currentApprentissage.technologies && (
                            <Flex direction="column" gap="m" flex={1} style={{ minWidth: '300px' }}>
                                <Heading variant="heading-strong-m" onBackground="warning-strong">
                                    🛠️ Technologies / Outils
                                </Heading>
                                <Text variant="body-default-m" onBackground="brand-strong">
                                    {currentApprentissage.technologies}
                                </Text>
                            </Flex>
                        )}
                    </Flex>

                    {/* Image d'illustration */}
                    <Flex justifyContent="center" gap="m">
                        <SmartImage
                            src={`/images/comp/${imageFolder}/apprentissage-${getGlobalApprentissageIndex()}.png`}
                            alt={`Illustration pour ${currentApprentissage.title}`}
                            aspectRatio="16 / 9"
                            radius="m"
                            style={{
                                maxWidth: '600px',
                                cursor: 'pointer',
                                backgroundColor: '#f0f0f0',
                                border: '2px dashed #ccc',
                            }}
                            onClick={() => setIsImageModalOpen(true)}
                        />
                    </Flex>
                </Flex>
            </Flex>

            {/* Navigation arrows */}
            <Flex 
                fillWidth 
                padding="m" 
                justifyContent="space-between" 
                alignItems="center"
                background="surface">
                
                <IconButton
                    icon="chevronLeft"
                    size="l"
                    variant={currentSlide > 0 ? "primary" : "tertiary"}
                    disabled={currentSlide === 0}
                    onClick={prevSlide}
                />
                
                <Flex gap="xs" alignItems="center">
                    {/* Indicateurs de slides */}
                    {currentApprentissages.map((_, index) => (
                        <Flex
                            key={index}
                            width="8"
                            height="8"
                            radius="full"
                            background={index === currentSlide ? "brand-strong" : "neutral-medium"}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </Flex>
                
                <IconButton
                    icon="chevronRight"
                    size="l"
                    variant={currentSlide < maxSlides - 1 ? "primary" : "tertiary"}
                    disabled={currentSlide === maxSlides - 1}
                    onClick={nextSlide}
                />
            </Flex>

            {/* Modal d'image en plein écran */}
            {isImageModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        overflow: 'auto',
                    }}
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <img
                        src={`/images/comp/${imageFolder}/apprentissage-${getGlobalApprentissageIndex()}.png`}
                        alt={`Illustration pour ${currentApprentissage.title}`}
                        style={{
                            maxWidth: imageZoom === 'actual' ? 'none' : '95vw',
                            maxHeight: imageZoom === 'actual' ? 'none' : '90vh',
                            width: imageZoom === 'fill' ? '95vw' : 'auto',
                            height: imageZoom === 'fill' ? '90vh' : 'auto',
                            objectFit: imageZoom === 'fill' ? 'cover' : 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Bouton fermer */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            background: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.2s',
                        }}
                        onClick={() => setIsImageModalOpen(false)}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
                    >
                        ×
                    </div>
                    
                    {/* Controls de zoom */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            display: 'flex',
                            gap: '8px',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            style={{
                                padding: '8px 12px',
                                background: imageZoom === 'fit' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                                color: imageZoom === 'fit' ? 'black' : 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                            onClick={() => setImageZoom('fit')}
                        >
                            Ajuster (F)
                        </button>
                        <button
                            style={{
                                padding: '8px 12px',
                                background: imageZoom === 'fill' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                                color: imageZoom === 'fill' ? 'black' : 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                            onClick={() => setImageZoom('fill')}
                        >
                            Remplir (Z)
                        </button>
                        <button
                            style={{
                                padding: '8px 12px',
                                background: imageZoom === 'actual' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
                                color: imageZoom === 'actual' ? 'black' : 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                            onClick={() => setImageZoom('actual')}
                        >
                            Taille réelle (A)
                        </button>
                    </div>
                    
                    {/* Instructions */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontSize: '14px',
                            opacity: 0.8,
                            textAlign: 'center',
                            background: 'rgba(0, 0, 0, 0.5)',
                            padding: '8px 16px',
                            borderRadius: '4px',
                        }}
                    >
                        F: Ajuster • Z: Remplir • A: Taille réelle • Échap: Fermer • Clic: Fermer
                    </div>
                </div>
            )}

            {/* Instructions de navigation */}
            <Flex 
                padding="s" 
                justifyContent="center" 
                background="neutral-weak">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                    Navigation : ← → pour les apprentissages • 1/2 pour changer de niveau • Echap pour fermer
                </Text>
            </Flex>
        </Flex>
    );
} 