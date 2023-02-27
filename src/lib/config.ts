import GitHubIcon from './components/icons/GitHubIcon.svelte';
import TwitterIcon from './components/icons/TwitterIcon.svelte';

export const siteTitle = 'Jessy.co';
export const siteDescription = 'A personal homepage for Jessy Cormier';
export const siteLink = 'https://jessy.co';
export const siteAuthor = 'Jessy Cormier';

export const postsPerPage = 5;
export const navItems: {
	title: string;
	route: string;
	external?: boolean;
	ariaDetail?: string;
}[] = [
	{
		title: 'Blog Posts',
		route: '/blog',
		ariaDetail: 'My blog posts'
	},
	{
		title: 'RSS',
		route: '/rss.xml',
		external: true
	}
];

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
];
