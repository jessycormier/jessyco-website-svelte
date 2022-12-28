<script lang="ts">
	import profilePic from '$lib/assets/profile.webp';
	import ImageHover from './ImageHover.svelte';
</script>

<ImageHover title="Jessy Cormier" text="👋 hello! thanks for visiting">
	<img
		alt="Profile Pic of Jessy Cormier"
		class="profile-picture object-cover w-full aspect-square motion-safe:group-hover:scale-110 transition duration-300 ease-in-out"
		src={profilePic} />
</ImageHover>

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
