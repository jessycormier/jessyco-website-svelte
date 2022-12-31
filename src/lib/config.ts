import GitHubIcon from "./components/icons/GitHubIcon.svelte";
import TwitterIcon from "./components/icons/TwitterIcon.svelte";

export const siteTitle = 'Jessy.co';
export const siteDescription = 'A personal homepage for Jessy Cormier';
export const siteURL = 'jessy.co';
export const siteLink = 'https://jessy.co';
export const siteAuthor = 'Jessy Cormier';

export const postsPerPage = 5;
export const navItems: {
	title: string;
	route: string;
	external?: boolean;
}[] = [
	// {
	// 	title: 'Index',
	// 	route: '/'
	// },
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'RSS',
		route: '/api/rss.xml',
		external: true
	}
];
// <a href="" >RSS</a>

export const socialLinks = [
	{
		href: 'https://twitter.com/jessycormier',
		sr: 'Twitter page',
		icon: TwitterIcon
	},
	{
		href: 'https://github.com/jessycormier',
		sr: 'GitHub account',
		icon: GitHubIcon
	}
]