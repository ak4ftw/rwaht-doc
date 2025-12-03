// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RWAHT 官方文档 Q&A',
            favicon: '/favicon.ico',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },

			sidebar: [
                {
                    label: '开始',
                    items: [
                        { label: '官方媒体地址', slug: 'start/official-address' },
                        { label: '如何获取手机app', slug: 'start/how-to-get-app' },
                        { label: '为什么我的提币未到账', slug: 'start/why-has-not-my-withdrawal-arrived-in-the-account' },
                        { label: '充/提币现到错误地址，可以找回吗', slug: 'start/translate-error-address' },
                    ],
                },
                {
                    label: '商务合作',
                    items: [
                        { label: '如何让我的代币在RWAHT中交易', slug: 'bisiness/how-to-trade-my-token-in-rwaht' },
                    ],
                },
			],
		}),
	],
    output: 'static',
});
