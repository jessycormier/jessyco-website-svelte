<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container mx-auto">
	<h2>{$page.status}</h2>
	<p class="subhead">{$page?.error?.message}</p>

	<p><strong>Sorry!</strong> Maybe try one of these links?</p>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</div>
