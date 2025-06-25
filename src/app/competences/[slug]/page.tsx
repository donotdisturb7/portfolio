import { notFound } from 'next/navigation'
import { getPosts } from '@/app/utils/utils'
import { baseURL } from '@/app/resources'
import CompetenceSlideshow from './CompetenceSlideshow'

interface CompetenceParams {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = getPosts(['src', 'app', 'competences', 'posts', 'fr']);
    return posts.map(post => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params: { slug } }: CompetenceParams) {
	let post = getPosts(['src', 'app', 'competences', 'posts', 'fr']).find((post) => post.slug === slug)
	
	if (!post) {
		return
	}

	let {
		title,
		summary: description,
		image,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			url: `https://${baseURL}/competences/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Competence({ params }: CompetenceParams) {
	let post = getPosts(['src', 'app', 'competences', 'posts', 'fr']).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return <CompetenceSlideshow post={post} />
}