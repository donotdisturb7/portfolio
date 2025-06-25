import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text, SmartImage, Button } from '@/once-ui/components';
import { baseURL } from '@/app/resources';

export async function generateMetadata() {
	const title = "Mes Compétences BUT Informatique";
	const description = "Découvrez les 6 compétences clés du BUT Informatique développées à travers mes projets concrets.";
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/competences/`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Competences() {
	let allCompetences = getPosts(['src', 'app', 'competences', 'posts', 'fr']);
	const person = { name: 'Rénald DESIRE' };

	// Données des compétences avec leurs projets associés
	const competencesData = [
		{
			id: '01-realiser',
			title: 'Réaliser un développement d\'application',
			icon: '/images/competence-dev.svg',
			description: 'De la conception à l\'implémentation, transformez une idée en application complète et fonctionnelle.',
			// projet: 'Site web e-commerce - Boutique de vêtements',
		},
		{
			id: '02-optimiser', 
			title: 'Optimiser des applications',
			icon: '/images/competence-optimisation.svg',
			description: 'Analyser, comparer et sélectionner les algorithmes et structures de données les plus pertinents.',
			projet: 'Algorithmes de pathfinding dans un labyrinthe Python',
		},
		{
			id: '03-administrer',
			title: 'Administrer des systèmes d\'informations communicants',
			icon: '/images/competence-admin.svg',
			description: 'Installer, configurer et maintenir des infrastructures système et réseau.',
			// projet: 'Application Python de monitoring des ressources Linux',
		},
		{
			id: '04-gerer',
			title: 'Gérer les données de l\'information',
			icon: '/images/competence-data.svg',
			description: 'Concevoir, développer et exploiter des bases de données et entrepôts de données.',
			projet: 'Application de gestion de prêt étudiant',
		},
		{
			id: '05-conduire',
			title: 'Conduire un projet',
			icon: '/images/competence-projet.svg',
			description: 'Organiser et piloter un projet informatique en équipe en suivant une démarche de qualité.',
			projet: 'Stage - Développement d\'API Python en équipe',
		},
		{
			id: '06-collaborer',
			title: 'Collaborer au sein d\'une équipe informatique',
			icon: '/images/competence-equipe.svg',
			description: 'Acquérir, développer et mobiliser les aptitudes pour travailler efficacement en équipe.',
			projet: 'Projets en équipe et stage - Développement de compétences collaboratives',
		}
	];

	return (
		<Flex
			fillWidth maxWidth="xl"
			direction="column"
			gap="xl"
			paddingY="xl">
			
			{/* En-tête de la page */}
			<Flex direction="column" gap="m" alignItems="center">
				<Heading variant="display-strong-xl" align="center">
					Mes Compétences BUT Informatique
				</Heading>
				<Text variant="body-default-l" onBackground="neutral-weak" align="center">
					Découvrez les 6 compétences clés du Bachelor Universitaire de Technologie Informatique 
					développées à travers mes projets concrets et leurs apprentissages critiques.
				</Text>
			</Flex>

			{/* Grille des compétences */}
			<Flex direction="column" gap="xl">
				{competencesData.map((competence, index) => {
					const competencePost = allCompetences.find(post => post.slug === competence.id);
					
					return (
						<Flex
							key={competence.id}
							direction="column"
							gap="l"
							padding="xl"
							border="neutral-medium"
							borderStyle="solid-1"
							radius="l"
							background="surface"
							style={{
								borderLeft: `4px solid var(--brand-strong)`,
							}}>
							
							{/* En-tête de la compétence */}
							<Flex direction="row" gap="l" alignItems="center">
								<SmartImage
									src={competence.icon}
									alt={competence.title}
									style={{
										width: "80px",
										height: "80px",
									}}
								/>
								<Flex direction="column" gap="s" flex={1}>
									<Heading variant="display-strong-s">
										{competence.title}
									</Heading>
									<Text variant="body-default-m" onBackground="neutral-weak">
										{competence.description}
									</Text>
								</Flex>
							</Flex>

							{/* Projet associé */}
							<Flex direction="column" gap="s">
								{/* <Text variant="label-default-s" onBackground="neutral-weak">
									Projet illustrant cette compétence :
								</Text> */}
								<Text variant="heading-default-s" onBackground="brand-strong">
									{competence.projet}
								</Text>
							</Flex>

							{/* Aperçu des apprentissages critiques */}
							{competencePost && (
								<Flex direction="column" gap="m">
									<CompetencePreview content={competencePost.content} />
								</Flex>
							)}

							{/* Actions */}
							<Flex justifyContent="flex-end" alignItems="center">
								<Button
									href={`/competences/${competence.id}`}
									variant="secondary"
									size="s">
									Présentation détaillée →
								</Button>
							</Flex>
						</Flex>
					);
				})}
			</Flex>

			{/* JSON-LD structuré */}
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'CollectionPage',
						headline: "Mes Compétences BUT Informatique",
						description: "Découvrez les 6 compétences clés du BUT Informatique développées à travers mes projets concrets.",
						url: `https://${baseURL}/competences`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
						hasPart: allCompetences.map(competence => ({
							'@type': 'CreativeWork',
							headline: competence.metadata.title,
							description: competence.metadata.summary,
							url: `https://${baseURL}/competences/${competence.slug}`,
							image: `${baseURL}/${competence.metadata.image}`,
						})),
					}),
				}}
			/>
		</Flex>
	);
}

// Composant pour afficher un aperçu des compétences
function CompetencePreview({ content }: { content: string }) {
	// Extraction des apprentissages critiques par niveau
	const lines = content.split('\n');
	const apprentissages: { niveau1: string[], niveau2: string[] } = { niveau1: [], niveau2: [] };
	let currentNiveau: 1 | 2 | null = null;
	
	for (const line of lines) {
		// Détecter les sections de niveau
		if (line.includes('Niveau 1')) {
			currentNiveau = 1;
			continue;
		}
		if (line.includes('Niveau 2')) {
			currentNiveau = 2;
			continue;
		}
		
		// Chercher les lignes qui commencent par ###
		if (line.startsWith('### ') && currentNiveau) {
			// Extraire le titre en supprimant ### 
			let title = line.replace(/^###\s*/, '').trim();
			// Vérifier que ce n'est pas un titre de section
			if (title && !title.includes('Niveau') && title.length > 0) {
				if (currentNiveau === 1) {
					apprentissages.niveau1.push(title);
				} else {
					apprentissages.niveau2.push(title);
				}
			}
		}
	}

	return (
		<Flex direction="column" gap="m">
			<Text variant="label-default-s" onBackground="neutral-weak">
				Apprentissages critiques :
			</Text>
			
			<Flex direction="row" gap="xl" wrap fillWidth>
				{/* Niveau 1 */}
				{apprentissages.niveau1.length > 0 && (
					<Flex direction="column" gap="s" flex={1} style={{ minWidth: '300px' }}>
						<Flex alignItems="center" gap="s">
							<Flex
								width="20" height="20"
								background="brand-strong"
								radius="full"
								alignItems="center"
								justifyContent="center">
								<Text variant="body-default-xs" style={{ color: 'white', fontWeight: 'bold' }}>
									1
								</Text>
							</Flex>
							<Text variant="heading-default-xs" onBackground="brand-strong">
								Niveau 1
							</Text>
						</Flex>
						<Flex direction="column" gap="xs">
							{apprentissages.niveau1.map((apprentissage, index) => (
								<Text key={index} variant="body-default-xs" onBackground="neutral-medium">
									• {apprentissage}
								</Text>
							))}
						</Flex>
					</Flex>
				)}

				{/* Niveau 2 */}
				{apprentissages.niveau2.length > 0 && (
					<Flex direction="column" gap="s" flex={1} style={{ minWidth: '300px' }}>
						<Flex alignItems="center" gap="s">
							<Flex
								width="20" height="20"
								background="accent-strong"
								radius="full"
								alignItems="center"
								justifyContent="center">
								<Text variant="body-default-xs" style={{ color: 'white', fontWeight: 'bold' }}>
									2
								</Text>
							</Flex>
							<Text variant="heading-default-xs" onBackground="accent-strong">
								Niveau 2
							</Text>
						</Flex>
						<Flex direction="column" gap="xs">
							{apprentissages.niveau2.map((apprentissage, index) => (
								<Text key={index} variant="body-default-xs" onBackground="neutral-medium">
									• {apprentissage}
								</Text>
							))}
						</Flex>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
	
