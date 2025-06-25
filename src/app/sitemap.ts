import { getPosts } from '@/app/utils/utils'
import { baseURL, routes as routesConfig } from '@/app/resources'

export default async function sitemap() {
    // Get blog posts
    let blogs = getPosts(['src', 'app', 'blog', 'posts', 'fr']).map((post) => ({
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    // Get work projects
    let works = getPosts(['src', 'app', 'work', 'projects', 'fr']).map((post) => ({
        url: `${baseURL}/work/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    // Get competences
    let competences = getPosts(['src', 'app', 'competences', 'posts', 'fr']).map((post) => ({
        url: `${baseURL}/competences/${post.slug}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    // Get active routes
    const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);
    let routes = activeRoutes.map((route) => ({
        url: `${baseURL}${route !== '/' ? route : ''}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...blogs, ...works, ...competences]
}