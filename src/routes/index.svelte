
<svelte:head>
	<title>Parador | Home</title>
</svelte:head>

<div class="w-full h-screen bg-gray-50 overflow-hidden relative">
    <div class="grid grid-cols-12 flex justify-center items-center w-full h-screen">
        <div class="col-span-full md:col-span-4 w-full h-auto px-4 md:px-8 py-4 md:py-4">
            <div class="flex flex-col w-full h-auto py-4 md:py-4 border-b mb-8">
                <button 
                on:click={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.replaceState(null, '', '/');
                }}
                type="button" class="flex items-center p-2">
                    <img src="https://www.parador-hotels.com/assets/images/blue-parador.png" alt="Parador Logo">
                </button>
            </div>
            <div class="w-full h-auto mt-4">
                <div class="flex flex-col w-full h-auto space-y-2">
                    <div class="w-full inline-flex shadow-sm">
                        <a sveltekit:prefetch href="/parador-main" class="flex flex-row justify-between w-full py-4 px-6 border text-md bg-transparent hover:bg-gray-200 text-gray-900 hover:text-gray-800 w-full transition ease-in duration-200">
                            <span class="text-gray-800 text-gray-900 hover:text-gray-800 text-center text-base font-semibold">Hotels & Resort</span>
                            <span class="ml-4 py-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </a>
                    </div>
                    <div class="w-full inline-flex shadow-sm">
                        <a sveltekit:prefetch href="/parador-store" class="flex flex-row justify-between w-full py-4 px-6 border text-md bg-transparent hover:bg-gray-200 text-gray-900 hover:text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold">
                            <span class="text-gray-800 text-gray-900 hover:text-gray-800 text-center text-base font-semibold">Parador Store</span>
                            <span class="ml-4 py-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-8 w-full h-screen relative">
            <div class="absolute inset-y-0 right-0 w-20 md:w-12 h-screen flex justify-center items-center md:mr-8">
                <div class="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center border">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>
            <img alt="HomeImage" src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" class="object-cover object-center h-auto md:h-screen w-full"/>
            <div class="absolute inset-x-0 bottom-0 w-full h-16 bg-gray-900 opacity-75 block md:hidden"></div>
        </div>
    </div>
</div>
