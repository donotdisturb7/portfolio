import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';


import { ProjectCard } from '@/components';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {

	
	const { competences } = renderContent();

	const title = competences.title;
	const description = competences.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/competences/`,
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

export default function Competences(
	{ params: {locale}}: { params: { locale: string }}
) {
	let allCompetences = getPosts(['src', 'app', '[locale]', 'competences', 'posts', locale]);

	const { person, competences } = renderContent();

	return (
		<Flex
			fillWidth maxWidth="m"
			direction="column">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'CollectionPage',
						headline: competences.title,
						description: competences.description,
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
			<Flex as="ul" gap="24" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
				{allCompetences.map((project) => (
					<ProjectCard
						key={project.slug}
						slug={project.slug}
						basePath="competences"
						images={[project.metadata.image || '']}
						title={project.metadata.title}
						description={project.metadata.summary || ''}
						content={project.content}
						avatars={[]}
					/>
				))}
			</Flex>
		</Flex>
	);
}