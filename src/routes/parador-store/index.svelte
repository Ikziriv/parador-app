
<svelte:head>
	<title>Parador | Store</title>
</svelte:head>

<section class="w-full h-screen dark:bg-gray-800 dark:text-gray-100">
	<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10">
		<div class="flex flex-col space-y-2 mt-32 md:mt-8">
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">Comming Soon</h1>
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">
                <span class="text-yellow-500 tracking-none uppercase">Dont Forget to See</span>
            </h1>
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">The Creator</h1>
        </div>
		<p class="px-8 mt-8 mb-12 text-lg uppercase">
            <a class="text-sm font-medium hover:text-yellow-600" target="_blank" href="https://ikziriv.com">Ikziriv.art</a>
        </p>
		<div class="flex flex-wrap justify-center">
			<a sveltekit:prefetch href="/" class="px-8 py-3 m-2 text-lg font-semibold rounded-full bg-gray-900 text-white">Go Home</a>
		</div>
	</div>
</section>