<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	const todos: {
		icon?: string;
		desc?: string;
		completed?: boolean;
	}[] = [
		{ icon: '⭐', desc: 'Add component for YouTube embeds' },
		{ icon: '⭐', desc: 'create link component and use tailwind inside instead of using an apply in scss file.' },
		{ icon: '⭐', desc: 'Add component for article layouts? or use library layouts to figure that out.' },
		{ icon: '📄', desc: 'Fix metadata for posts', completed: false },
		{ icon: '🐣', desc: 'Sort tags on posts...' },
		{ icon: '😩', desc: 'Fix up the GMT issue on dates.' },
		{ icon: '😍', desc: 'Create a fix for Tringlify lib for @Typed library.' },
		{ icon: '🤔', desc: 'Add a check for "back" button on blog posts so users don\'t go back to search engine but back to "/blog" if they came from google or whatever.' },
		{ icon: '🏅', desc: 'Add details to changelog.md about history of project' },
		{ icon: '🏅', desc: 'Add testing framework that svelte suggests' },
		{ icon: '🤦', desc: 'Maybe track todo\'s in a single location rather than spread between here and Obsidian' },
		{ icon: '📄', desc: 'Add metadata for posts', completed: true },
		
	];
</script>

<Container>
	<section class="prose prose-stone max-w-none dark:prose-invert lg:prose-xl m-auto mt-24">
		<h1>&lbrace; Todos &rbrace;</h1>
		<p>A list of todos in no particular order and most likely out of date</p>
		<ul class="font-mono">
			{#each todos as todo }
				<li class="{todo.completed ? 'line-through':''}">{todo.icon} {todo.desc}</li>
			{/each}
		</ul>
	</section>
</Container>
