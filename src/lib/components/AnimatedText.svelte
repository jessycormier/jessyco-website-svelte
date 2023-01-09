<script lang="ts">
    const css = 'animate-text bg-clip-text text-transparent';
    export let cssClasses = '';
    export let colorFrom = 'from-blue-500';
    export let colorVia = 'via-indigo-500';
    export let colorTo = 'to-amber-600';
</script>
<span
	class="bg-gradient-to-r {colorFrom} {colorVia} {colorTo} {css} {cssClasses}">
	<slot />
</span>