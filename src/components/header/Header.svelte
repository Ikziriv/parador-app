<script>
	import { onMount } from "svelte"
  	import Headroom from "svelte-headroom";
	import { beforeNavigate } from "$app/navigation";
	import NotificationTop from "../notification/NotificationTop.svelte"
	
	export const currentPage = "";
	
	let isMenuOpen = false;
	
	const scrollThreshold = 10;
	// close the mobile menu when the user clicks on one of the items
	beforeNavigate(() => {
		isMenuOpen = false;
	});
	
	onMount(() => {
		// On Load
	});
</script>
<div class="flex flex-col w-full h-auto fixed z-40">
	
	<header id="navbar" class="p-4 bg-white w-full bg-gray-50 border-b shadow-lg">
		<div class="container flex justify-center h-16 mx-auto relative md:mb-4 w-full">
			<div class="absolute inset-y-0 left-0 hidden md:block">
				<div class="flex items-center md:space-x-4 py-2 md:py-6">
					<span class="mr-4">
						<svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
					</span>
					<span>
						<svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</span>
				</div>
			</div>

			<a sveltekit:prefetch href="/" class="flex items-center p-2">
				<img src="https://www.parador-hotels.com/assets/images/blue-parador.png" alt="Parador Logo">
			</a>
			
			<div class="absolute inset-y-0 right-0 hidden md:block">
				<div class="flex items-center md:space-x-4 py-2 md:py-6">
					<span class="mr-4">
						<svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
					</span>
					<span class="rounded-full border-2 p-2 bg-gray-900 shadow">
						<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
					</span>
				</div>
			</div>
		</div>
		<!-- Mobile View -->
		<div class="container flex justify-center items-center h-8 mx-auto relative border-t block md:hidden">
			<div class="w-full flex justify-center items-center space-x-4 md:space-x-8 flex flex-row py-2 md:py-2 overflow-x-auto md:overflow-hidden relative">
				<span class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="uppercase text-xs text-gray-900 flex items-center font-normal mt-1">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
					</a>
				</span>
			</div>
			{#if isMenuOpen}
			<div class="w-full flex justify-center items-center space-x-4 md:space-x-8 flex flex-row py-2 md:py-2 overflow-x-auto md:overflow-hidden relative">
				<span class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="uppercase text-xs text-gray-900 flex items-center font-normal mt-1">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
					</a>
				</span>
			</div>
			{/if}
		</div>
		<!-- Web View -->
		<div class="container flex justify-center items-center h-8 mx-auto relative border-t hidden md:block">
			<ul class="w-full flex justify-center items-center space-x-4 md:space-x-8 flex flex-row py-2 md:py-2 overflow-x-auto md:overflow-hidden">
				<li class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="flex flex-row uppercase text-xs text-gray-900 flex items-center font-normal">
						<span>Hotels</span>
						<span class="ml-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</a>
				</li>
				<li class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="flex flex-row uppercase text-xs text-gray-900 flex items-center font-normal">
						<span>Destinasi</span>
						<span class="ml-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</a>
				</li>
				<li class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="uppercase text-xs text-gray-900 flex items-center font-normal">
					Promo Spesial
					</a>
				</li>
				<li class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="uppercase text-xs text-gray-900 flex items-center font-normal">
					Rapat & Acara
					</a>
				</li>
				<li class="flex mt-2 w-auto">
					<a rel="noopener noreferrer" href="/" class="uppercase text-xs text-gray-900 flex items-center font-normal">
					Program Loyalitas
					</a>
				</li>
			</ul>
		</div>
	</header>
	<NotificationTop />

</div>

<style lang="postcss">
	header  {
		transition: background 0.3s ease-in-out, top 0.3s, padding 0.3s, box-shadow 0.3s, height 0.3s;
	}
	#navbar {
	  transition: transform 0.3s; /* Transition effect when sliding down (and up) */
	}
</style>