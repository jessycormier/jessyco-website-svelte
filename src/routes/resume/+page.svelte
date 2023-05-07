<script lang="ts">
	import { Radar } from 'svelte-chartjs';
	const data = {
		labels: ['Communication', 'Database', 'UI Design', 'UX Design', 'Coding'],
		
		datasets: [
			{
				label: 'Skills',
				borderWidth: 1,
				hoverBorderWidth:3, 
				pointStyle: false,
				backgroundColor: 'rgba(0, 116, 161, 0.2)',
				borderColor: 'rgb(0, 116, 161)',
				data: [75, 40, 90, 80, 75],
				
			}
			// {
			// 	label: 'My Second dataset',
			// 	backgroundColor: 'rgba(71, 225, 167, 0.5)',
			// 	borderColor: 'rgb(71, 225, 167)',
			// 	data: [28, 48, 40, 19, 96, 27, 100]
			// }
		]
	} ;

	import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement } from 'chart.js';
	import Container from '$lib/components/Container.svelte';

	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);
</script>

<Container>
	<section class="flex justify-center">
		<div class="border border-red-500 h-1/2 w-2/4">
			<Radar {data} options={{ responsive: true }} />
		</div>
		<div class="border border-red-500 w-56">hello world.</div>
	</section>
</Container>
