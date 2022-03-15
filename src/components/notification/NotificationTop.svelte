<script>
	import { fade } from 'svelte/transition';
    import { notifHead } from "../../stores/index";

    const handleClose = () => {
        notifHead.set(false);
    };
</script>

{#if $notifHead}
<div transition:fade class="p-4 w-full h-auto bg-transparent relative">
    <div class="absolute inset-x-0 top-0 bg-transparent w-full h-16 md:h-8 bg-trnasparent z-10">
        <div class="flex justify-between py-0 px-4 md:px-8 md:px-12">
            <div class="flex justify-center w-auto h-16 md:h-8 items-center">
                <span class="text-white mr-4">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </span>
            </div>

            <div class="flex justify-center w-auto h-16 md:h-8 items-center">
                <span class="text-sm font-normal text-white">
                    All you need to know about status and policy of flights during Corona Virus Outbreak
                </span>
            </div>

            <div on:click={handleClose} class="cursor-pointer flex justify-center w-auto h-16 md:h-8 items-center">
                <span class="text-white hover:text-red-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
            </div>
        </div>
    </div>
    <div class="absolute inset-x-0 top-0 bg-gray-900 w-full h-16 md:h-8 bg-gray-50 z-0 opacity-80">
    </div>
</div>
{/if}