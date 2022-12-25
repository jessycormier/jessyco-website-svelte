<script>
	import profilePic from '$lib/assets/profile.webp';
	import TextHighlight from '$lib/components/TextHighlight.svelte';
</script>

<section class="dark:bg-gray-800 bg-gray-50 pt-12 pb-12 text-2xl p-4 overflow-hidden top-0 left-0 right-0">
	<div class="container mx-auto">
		<div class="flex justify-start content-center">
			<div class="mr-8 hidden md:block s">
				<img
					class="object-cover rounded-[18px] profile-picture shadow-lg hover:transition-all transition ease-in-out  hover:-translate-y-1 hover:scale duration-500 shadow-blue-800/20 hover:shadow-blue-800/80"
					src={profilePic}
					alt="Profile Pic of Jessy Cormier" />
			</div>

			<div class="flex flex-col justify-center text-center md:text-left">
				<p>
					Hi!, welcome to
					<TextHighlight>Jessy.co</TextHighlight>
					I&apos;m Jessy Cormier. I&apos;m a software engineer based in Canada.
				</p>
				<p>
					I&apos;m a
					<TextHighlight>Senior Front-End Developer</TextHighlight>
					with a passion for
					<TextHighlight>web development</TextHighlight> and
					<TextHighlight>user expereince</TextHighlight>.
				</p>
				<p>
					I develop and implement well-considered and maintainable experiences, I believe in
					<TextHighlight>consistency</TextHighlight>,
					<TextHighlight>accessibility</TextHighlight>, and
					<TextHighlight>utility</TextHighlight>.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="pt-8">
	<div class="container mx-auto">
		<section>
			<div class="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 class="mb-4 text-4xl lg:text-5xl leading-tight">
						<a href="#" class="hover:underline">TITLE</a>
					</h3>
					<div class="mb-4 md:mb-0 text-lg" />
				</div>
			</div>
		</section>
	</div>
</section>

<style>
	.profile-picture {
		width: 300px;
		height: 400px;
		max-height: 400px;
		max-width: 300px;
		min-width: 300px;
		min-height: 400px;
	}
</style>
