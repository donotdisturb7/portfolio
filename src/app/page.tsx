import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL } from '@/app/resources'; 

export async function generateMetadata() {
	const title = "Rénald DESIRE | Étudiant en informatique";
	const description = "Étudiant en informatique à l'IUT de la Martinique. Passionné par le développement web front-end et back-end, utilisateur quotidien de Linux. Découvrez mes projets personnels.";
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
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

export default function Home() {
	const person = {
        name: 'Rénald DESIRE',
        avatar: '/images/avatar.JPEG',
    };

	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: "Rénald DESIRE | Développeur",
						description: "Portfolio de Rénald DESIRE",
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent("Rénald DESIRE | Développeur")}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
					<Flex
						direction="column"
						fillWidth maxWidth="s">
						<RevealFx
							translateY="4" fillWidth justifyContent="flex-start" paddingBottom="m">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								Salut, je suis Rénald.
							</Heading>
						</RevealFx>
						<RevealFx
							translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="m">
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="heading-default-xl">
								Étudiant en informatique à l'IUT de la Martinique.<br/>
								Je m'intéresse au développement web, aussi bien front-end que back-end, et je travaille quotidiennement sur Linux. Je consacre mon temps libre à la réalisation de projets personnels.
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Flex fillWidth>
								<Button
									id="about"
									data-border="rounded"
									href="/about"
									variant="tertiary"
									size="m">
									<Flex
										gap="8"
										alignItems="center">
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
											À propos de moi
											<Arrow trigger="#about"/>
									</Flex>
								</Button>
							</Flex>
						</RevealFx>
					</Flex>
				
			</Flex>
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1,1]} />
			</RevealFx>
		</Flex>
	);
}
