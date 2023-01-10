<script lang="ts">
	import type { PostMeta } from '$lib/interfaces/post-meta.interface';
	import { slugify } from '$lib/functions/slugify.function';
	import dayjs from 'dayjs';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import ImageHover from './ImageHover.svelte';
	import Tag from './Tag.svelte';
	
	export let posts = [] as PostMeta[]; 
</script>

<div class="flex flex-col gap-12">
	{#each posts as post, index}
		<article
			class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 rounded"
			in:fade={{ duration: 1200, easing: cubicOut, delay: index * 100 }}>
			<div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
				<time
					datetime={post.date}
					class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
					<span>{dayjs(post.date).format('YYYY')}</span>
					<span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10" />
					<span>{dayjs(post.date).format('MMM DD')}</span>
				</time>
			</div>

			<div class="basis-12 sm:basis-32 flex items-center">
				<a href="/blog/{post.slug}">
					<ImageHover showDetails={false}>
						<img
							src="/api/polybg/400x400/{slugify(post.title)}"
							alt="{post.title}"
							class="h-32 object-cover w-full aspect-square motion-safe:group-hover:scale-110 transition duration-300 ease-in-out" />
					</ImageHover>
				</a>
			</div>

			<div class="flex flex-1 flex-col justify-between">
				<div class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
					<a href="/blog/{post.slug}">
						<h3 class="font-bold uppercase text-gray-900 dark:text-white">
							{post.title}
						</h3>
					</a>

					<p class="mt-2 leading-relaxed text-gray-700 line-clamp-2 dark:text-gray-200">
						{post.excerpt}
					</p>

					<p class="mt-2">
						{#each post.categories as category}
							<Tag {category} />
						{/each}
					</p>
				</div>
			</div>
		</article>
	{/each}
</div>
