<script lang="ts">
	export let title = '';
	export let text = '';
	export let rounded = false;
	export let showDetails = true;
</script>

<div class="overflow-hidden relative group" class:rounded-xl={rounded}>
	<div
		class:rounded-xl={rounded}
		class="z-50 motion-safe:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
		<div class:hidden={!showDetails}>
			<div
				class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
				<div class="font-bold">{title}</div>

				<div class="opacity-60 text-sm">
					{text}
				</div>
			</div>
		</div>
	</div>
	<slot />
</div>
