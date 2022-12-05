import { defineUserConfig, defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { searchPlugin } from '@vuepress/plugin-search';
import { hopeTheme } from "vuepress-theme-hope";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
    // 站点配置
    // lang: 'en-US',
    lang: 'zh-TW',
    title: '全自動股票管理表',
    description: '一份專為懶人而生的股票管理表。功能豐富、完整，還自動化!! 讓你輕輕鬆鬆管理股票',
    head: [
        ['meta', { name: 'google-site-verification', content: 'KoSwtocMBBPetZW_qAT1plr-FyvpTMWj5Rpt14AUf5s' }],
        [
            "script", // Fontawesome
            {
              src: "https://kit.fontawesome.com/ca37c296c5.js",
              crossorigin: "anonymous",
            },
        ]
    ],
    base: '/MyBlog/',

    // 主题和它的配置
    theme: hopeTheme({
        // search: true,
        logo: 'https://vuejs.org/images/logo.png',
        contributorsText: "作者",
        // lastUpdatedText: "最後更新",
        // breadcrumb: false,
        iconPrefix: "fa-solid fa-",
        // pageInfo: false,
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
                    { text: '台股免費版', link: '/Version/免費版.md', activeMatch: '^/Version/%E5%85%8D%E8%B2%BB%E7%89%88', },
                    { text: '台股收費版', link: '/Version/收費版.md', activeMatch: '^/Version/%E6%94%B6%E8%B2%BB%E7%89%88', },
                    { text: '美股收費版', link: '/Version/美股版.md', activeMatch: '^/Version/%E7%BE%8E%E8%82%A1%E7%89%88', },
                    { text: '客製化(含案例)', link: '/Version/客製化.md', activeMatch: '^/Version/%E5%AE%A2%E8%A3%BD%E5%8C%96', },
                ]
            },
            { text: '❓常見問題', icon: '', link: '/article' },
            { text: '🙍‍♂️懶魚', link: '/Contact' },
            { text: '💰贊助', link: '/Contact#贊助' },
        ],
        // sidebar: 'auto',
        sidebar: {
            '/StockProfolioDocs/': [
                // '/StockProfolioDocs/',
                // '/StockProfolioDocs/Introduction/',
                {
                    // text: '⏩快速上手',
                    text: '快速上手',
                    icon: 'bolt',
                    collapsable: true,
                    // collapsible: true,
                    children: [
                        '/StockProfolioDocs/QuickStart/介紹.md',
                        '/StockProfolioDocs/QuickStart/第一次使用.md',
                    ]
                },
                {
                    // text: '🚩基本功能',
                    text: '基本功能',
                    // icon: 'bars',
                    icon: 'circle-play',
                    collapsable: true,
                    // collapsible: true,
                    children: [
                        '/StockProfolioDocs/Introduction/儀表板.md',
                        '/StockProfolioDocs/Introduction/交易紀錄.md',
                        '/StockProfolioDocs/Introduction/持股&歷史損益.md',
                        '/StockProfolioDocs/Introduction/券商與分類.md',
                        '/StockProfolioDocs/Introduction/股票代號.md',
                    ]
                },
                {
                    // text: '⭐進階功能',
                    text: '進階功能',
                    icon: 'star',
                    collapsable: true,
                    // collapsible: true,
                    // link: '/StockProfolioDocs/PayOnly/test1.md',
                    children: [
                        '/StockProfolioDocs/PayOnly/進階簡介.md',
                        '/StockProfolioDocs/PayOnly/功能.md',
                        '/StockProfolioDocs/PayOnly/購買.md',
                    ]
                },
            ],
            '/Version/': [
                '/Version/免費版',
                '/Version/收費版',
                '/Version/美股版',
                '/Version/客製化',
            ],
        },
        plugins: {
            mdEnhance: {
                mark: true, // ==黃底強調==,
            },
            blog:  { // 文章列表
                autoExcerpt: true, // 自動摘要 > 取自 description
                filter: ({ filePathRelative }) => // 過濾只顯示在某個路徑下的文章
                filePathRelative ? filePathRelative.startsWith("StockProfolioDocs/QuickStart/") : false,
            },
        },
        blog: {
            name: '懶魚',
            timeline: '至今',
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜尋',
                },
            },
        }),
        googleAnalyticsPlugin({
            id: 'G-8PLR7JY5SH',
        }),
        sitemapPlugin({
            hostname: 'https://lazypisces.github.io/MyBlog/',
            excludeUrls: ['/test.html'],
        }),
        seoPlugin({
            author: '懶魚',
            hostname: "https://lazypisces.github.io/MyBlog/",
        }),
    ],
})