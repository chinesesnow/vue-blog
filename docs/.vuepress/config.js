import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
	lang: 'zh-CN',
	title: '你好， VuePress ！',
	description: '这是lhl的轻博客',
	colorMode:'dark',
	toggleSidebar:'switch',
	theme: defaultTheme({
		logo: 'https://vuejs.org/images/logo.png',
		backToHome:'页面被外星人抓走了，点击返回',
		sidebar:[ //侧边栏配置，所有页面共用一个侧边栏
			{
				text:'指南',
				link:'/'
			},
			{
				text:'快速入门',
				link:'/guide',
				children:[
					{
						text:'安装',
						link:'/guide/index.md',
					}
				]
			}
		],
		navbar:[ //顶部导航栏
			{
				text:'指南',
				link:'/'
			},
			{
				text:'介绍',
				children:['/guide/index.md']
			},
		]
	}),
	plugins: [ //配置搜索插件，需先安装
		searchPlugin({
	      // 配置项
	    }),
	],
})