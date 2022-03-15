<script>
	import { slide } from 'svelte/transition';
    import { btnReservNow } from "../../stores/index";

    const handleOpen = () => {
        btnReservNow.set(true);
    };

    const handleClose = () => {
        btnReservNow.set(false);
    };
</script>

{#if $btnReservNow}
<div transition:slide class="px-0 bg-transparent rounded-t-lg fixed bottom-0 inset-x-0 w-full flex justify-center items-center z-10">
    <div class="w-full h-96 md:h-20 bg-transparent border-b shadow-lg z-40 px-12">
        <div class="grid grid-cols-12 gap-2 rounded-t-lg w-full h-96 md:h-20 bg-gray-900 border shadow-lg">
            <div class="col-span-full md:col-span-10 w-full h-80 md:h-auto bg-gray-800">
                <div class="flex flex-col w-full h-auto">
                    <div class="grid grid-cols-12 gap-2 w-full">
                        <div class="col-span-full md:col-span-4 bg-transparent px-4 md:px-10 py-1 border-l-8 border-gray-100">
                            <span class="font-bold text-white text-sm">Kamar Hotel</span>
                        </div>
                        <div class="col-span-full md:col-span-6">
                            
                        </div>
                        <div class="col-span-full md:col-span-2">

                        </div>
                    </div>
                    
                    <div class="grid grid-cols-12 gap-2 w-full px-4 md:px-0">
                        <div class="col-span-full md:col-span-4 bg-transparent md:pl-10 py-1">
                            <button type="button" class="relative w-full bg-transparent border rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span class="flex items-center">
                                    <span class="ml-3 block truncate text-white">
                                        Kamar Hotel
                                    </span>
                                </span>
                                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="col-span-full md:col-span-6">
                            <div class="grid grid-cols-2 gap-2 w-full h-auto px-0">
                                <div class="col-span-full md:col-span-1 py-1">
                                    <button type="button" class="relative w-full bg-transparent border rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <span class="flex items-center">
                                            <span class="ml-3 block truncate text-white">
                                                Date Range
                                            </span>
                                        </span>
                                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </span>
                                    </button>
                                </div>
                                
                                <div class="col-span-full md:col-span-1 py-1">
                                    <button type="button" class="relative w-full bg-transparent border rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <span class="flex items-center">
                                            <span class="ml-3 block truncate text-white">
                                                Duration
                                            </span>
                                        </span>
                                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-full md:col-span-2 py-1 md:pr-4">
                            <button type="button" class="relative w-full bg-gray-900 rounded-md pl-3 pr-10 py-2.5 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span class="flex items-center">
                                    <span class="ml-3 block truncate text-white">
                                        Pesan
                                    </span>
                                </span>
                                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-2 flex flex-row justify-end items-center w-full h-auto">
                <span on:click={handleClose} class="mr-4 py-1 cursor-pointer">
                    <div class="p-2 rounded-full shadow text-white hover:text-blue-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                </span>

                <span on:click={handleClose} class="mr-4 py-1 cursor-pointer">
                    <div class="p-2 rounded-full border hover:border-red-500 text-white hover:text-red-500">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                </span>
            </div>
        </div>
    </div>
</div>
{/if}

<div on:click={handleOpen} class="px-0 bg-transparent rounded-t-lg fixed bottom-0 right-0 w-full md:w-64 flex justify-center items-center cursor-pointer z-0">
    <div class="w-64 h-12 bg-transparent shadow-lg z-40 md:mr-24">
        <div class="flex justify-between items-center px-6 w-64 h-12 bg-gray-900 rounded-t-lg border-b border-white hover:border-green-500">
            <span class="font-bold uppercase text-sm text-white hover:text-green-500">Pesan Sekarang</span>
            <span class="ml-4 py-1">
                <div class="p-2 rounded-full border hover:border-green-500">
                    <svg class="w-3 h-3 text-white hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    <!-- <svg class="w-3 h-3 text-white hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> -->
                </div>
            </span>
        </div>
    </div>
</div>