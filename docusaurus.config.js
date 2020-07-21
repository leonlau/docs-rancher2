const sidebars = require("./sidebars");
const metadata = require("./metadata");

module.exports = {
    title: "Rancher文档",
    tagline: "Run Kubernetes Everywhere",
    baseUrl: "/",
    url: "https://www.rancher.cn",
    favicon: "img/favicon.ico",
    themeConfig: {
        baiduAnalytics: {
            trackingID: "692a488c8d0d137240f1a940bde32441",
        },
        navbar: {
            title: "Rancher 2.x",
            logo: {
                alt: "Rancher Logo",
                src: "img/rancher-logo-cow-white.svg",
            },
            links: [
                {
                    href: "https://docs.rancher.cn/",
                    label: "文档中心",
                    position: "left",
                },
                { to: "pdf", label: "获取 PDF 文档", position: "left" },
                {
                    href: "https://www.rancher.cn/weixin/",
                    label: "微信",
                    position: "left",
                },
                {
                    href: "https://www.rancher.cn/",
                    label: "中国官网",
                    position: "right",
                },
                {
                    href:
                        "https://rancher.com/support-maintenance-terms/all-supported-versions/",
                    label: "支持矩阵",
                    position: "right",
                },
                {
                    href: "https://www.rancher.cn/support/",
                    label: "技术支持",
                    position: "right",
                },
                {
                    href: "https://github.com/rancher/rancher",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        algolia: {
            apiKey: "f790c2168867f49bb212aee8c224116d",
            indexName: "rancher",
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Rancher Labs, Inc. All Rights Reserved. 粤ICP备16086305号`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/cnrancher/docs-rancher2/edit/dev/",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    customFields: {
        sidebars,
        metadata,
        stable: "版本说明 - v2.4.5",
        baseCommit: "3303b080ca3735cd932fd530266796c729aca7ef - July 21, 2020",
        rkeBaseCommit:
            "29992bb2ff420d53ca6c51b6520fe97a13c46c2d - June 4, 2020",
    },
    plugins: ["@docusaurus/plugin-baidu-analytics"],
};
