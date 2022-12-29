<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import timezone from 'dayjs/plugin/timezone';
	dayjs.extend(relativeTime);
	dayjs.extend(timezone);
	dayjs.tz.setDefault('Atlantic Standard Time');
	import ImageHover from './ImageHover.svelte';
	export let posts = [] as any;
</script>

<div class="flex flex-col gap-12">
	{#each posts as post}
		<article class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 rounded">
			<div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
				<time
					datetime={post.date}
					class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white">
					<span>{dayjs(post.date).format('YYYY')}</span>
					<span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10" />
					<span>{dayjs(post.date).format('MMM DD')}</span>
				</time>
			</div>

			<div class="hidden sm:block sm:basis-32">
				<a href="/blog/{post.slug}">
					<ImageHover showDetails={false}>
						<img
							src="/api/polybg.svg?w=400&h=400&s={post.slug}"
							alt=""
							class="h-32 object-cover w-full aspect-square motion-safe:group-hover:scale-110 transition duration-300 ease-in-out" />
					</ImageHover>

					<!-- <img
					alt="Guitar"
					src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
					class="aspect-square h-full w-full object-cover" /> -->
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
				</div>
			</div>
		</article>
	{/each}
</div>
