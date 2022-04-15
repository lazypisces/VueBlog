import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    // lang: 'en-US',
    lang: 'zh-TW',
    title: '全自動股票管理表',
    description: '一份專為懶人而生的股票管理表。功能豐富、完整，還自動化!! 讓你輕輕鬆鬆管理股票',
    head: [
        ['meta', { name: 'google-site-verification', content: 'KoSwtocMBBPetZW_qAT1plr-FyvpTMWj5Rpt14AUf5s' }]
    ],
    base: '/MyBlog/',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        // search: true,
        logo: 'https://vuejs.org/images/logo.png',
        contributorsText:"作者",
        lastUpdatedText:"最後更新",
        // navbar: [
        //     // NavbarItem
        //     {
        //         text: 'Foo',
        //         link: '/foo/',
        //     },
        //     // NavbarGroup
        //     {
        //         text: 'Group',
        //         children: ['/group/foo.md', '/group/bar.md'],
        //     },
        //     // 字符串 - 頁面文件路徑
        //     '/bar/README.md',
        // ],
        //導航欄
        navbar: [
            { text: '🏠首頁', link: '/' },  //text:導航標題內容
            {
                text: '📙指南',
                children: [
                    { text: '快速上手', link: '/StockProfolioDocs/QuickStart/介紹.md', activeMatch: '^/StockProfolioDocs/QuickStart/', },
                    { text: '基本功能', link: '/StockProfolioDocs/Introduction/儀表板.md', activeMatch: '^/StockProfolioDocs/Introduction/', },
                    { text: '進階功能', link: '/StockProfolioDocs/PayOnly/進階簡介.md', activeMatch: '^/StockProfolioDocs/PayOnly/', },
                ]
            },
            {
                text: '📝版本',
                children: [
                    { text: '台股免費版', link: '/StockProfolioDocs/Version/免費版.md', activeMatch: '^/StockProfolioDocs/Version/%E5%85%8D%E8%B2%BB%E7%89%88', },
                    { text: '台股收費版', link: '/StockProfolioDocs/Version/收費版.md', activeMatch: '^/StockProfolioDocs/Version/%E6%94%B6%E8%B2%BB%E7%89%88', },
                    { text: '美股收費版', link: '/StockProfolioDocs/Version/美股版.md', activeMatch: '^/StockProfolioDocs/Version/%E7%BE%8E%E8%82%A1%E7%89%88', },
                    { text: '客製化(含案例)', link: '/StockProfolioDocs/Version/客製化.md', activeMatch: '^/StockProfolioDocs/Version/%E5%AE%A2%E8%A3%BD%E5%8C%96', },
                ]
            },
            { text: '🙍‍♂️聯繫我', link: '/Contact' },
            { text: '💰贊助', link: '/Contact#贊助' },
        ],
        // sidebar: 'auto',
        sidebar: {
            '/StockProfolioDocs/Version/%E5%AE%A2%E8%A3%BD%E5%8C%96': [
                '',
            ],
            '/StockProfolioDocs/': [
                // '/StockProfolioDocs/',
                // '/StockProfolioDocs/Introduction/',
                {
                    text: '快速上手',
                    collapsible: true,
                    children: [
                        '/StockProfolioDocs/QuickStart/介紹.md',
                        '/StockProfolioDocs/QuickStart/快速上手.md',
                    ]
                },
                {
                    text: '基本功能',
                    collapsible: true,
                    children: [
                        '/StockProfolioDocs/Introduction/儀表板.md',
                        '/StockProfolioDocs/Introduction/交易紀錄.md',
                        '/StockProfolioDocs/Introduction/持股&歷史損益.md',
                        '/StockProfolioDocs/Introduction/券商與分類.md',
                        '/StockProfolioDocs/Introduction/股票代號.md',
                    ]
                },
                {
                    text: '⭐進階功能',
                    collapsible: true,
                    // link: '/StockProfolioDocs/PayOnly/test1.md',
                    children: [
                        '/StockProfolioDocs/PayOnly/進階簡介.md',
                        '/StockProfolioDocs/PayOnly/購買.md',
                        '/StockProfolioDocs/PayOnly/功能.md',
                    ]
                },
            ],
        }
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
              id: 'G-8PLR7JY5SH',
            },
        ],
        [
            'sitemap',
            {
                hostname: 'https://lazypisces.github.io/MyBlog/',
                exclude: ["/404.html"],
            }
        ],
        [
            'autometa', {
                site: {
                    name: 'Lazy Pisces',
                    keywords: ['股票管理','自動化範本','股票excel'],
                },
                canonical_base: 'https://lazypisces.github.io/MyBlog/',
            }
        ],
        [
            'seo',
            {
                siteTitle: (_, $site) => $site.title,
                title: $page => $page.title,
                description: $page => $page.frontmatter.description,
                author: (_, $site) => $site.themeConfig.author,
                tags: $page => $page.frontmatter.tags,
                // twitterCard: _ => 'summary_large_image',
                type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
                url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
                image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
                publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
                modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
            }
        ],
    ],
})