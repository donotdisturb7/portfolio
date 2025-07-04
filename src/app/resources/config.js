const baseURL = 'demo.magic-portfolio.com'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['fr'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'fr'         // Locale used by default and as a fallback
}

const routes = {
    '/':            true,
    '/about':       true,
    '/work':        true,
    '/blog':        false,
    '/competences': true,

}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': false
}


const effects = {
    mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.4            // 0 - 1
    },
    dots: {
        display: true,
        opacity: 0.4,           // 0 - 1
        size: '24'              
    },
    lines: {
        display: false,
    },
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'emerald',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}



export { routes, protectedRoutes, effects, style, display, baseURL, i18n, i18nOptions };