
<svelte:head>
	<title>Parador | Reservation</title>
</svelte:head>

<section class="flex flex-col justify-center items-center space-y-2 px-6 py-6 bg-gray-50 pt-40 md:pt-32">
	<div class="container grid grid-cols-12 gap-6 mx-auto text-center md:py-10">
        <div class="col-span-full w-auto md:w-full h-[30rem] rounded-md bg-white relative bg-center bg-cover md:bg-fit bg-no-repeat" style="background-image: url('https://www.parador-hotels.com/images/uploads/home/Purifier.png');">
            <div class="absolute w-full left-0 bottom-0 z-auto opacity-90">
                <div class="w-full md:w-96 h-32 bg-transparent md:bg-white rounded-md-tl mb-12 md:mb-24 shadow-lg">
                    <div class="flex flex-col w-full h-auto justify-start items-start py-4 md:py-4 px-8">
                        <span class="font-bold text-lg md:text-xl text-white md:text-gray-900 uppercase text-left leading-none md:px-4">Parador Limited <br> Promotion</span>
                        <div class="flex mt-4 w-full h-auto">
                            <button class="flex justify-between items-center w-full h-auto py-2 bg-gray-900 hover:bg-gray-800 px-4 md:px-6">
                                <span class="font-bold text-white">Get Now</span>
                                <span class="ml-4 py-1 text-white">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
    <div class="container w-full h-auto mx-auto justify-center items-center py-8 md:py-4 relative">
        <div class="absolute inset-y-0 left-0 ml-2 md:ml-8 flex items-center">
            <div class="flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-white border-2">
                <span class="mx-auto">
                    <svg class="w-4 md:w-6 h-4 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </span>
            </div>
        </div>
        <div class="absolute inset-y-0 right-0 mr-2 md:mr-8 flex items-center">
            <div class="flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-white border-2">
                <span class="mx-auto">
                    <svg class="w-4 md:w-6 h-4 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
            </div>
        </div>
        <section class="w-full h-auto p-2 bg-white shadow-lg px-8 md:px-32">
            <div class="container grid grid-cols-4 gap-0 flex justify-center items-center mx-auto w-full bg-white">
                <div class="col-span-2 md:col-span-1 flex justify-center items-center p-6 align-middle">
                    <img class="w-auto h-12 object-contain object-center" src="https://www.parador-hotels.com/images/uploads/home/8085_fame.png" alt="Fame">
                </div>
                <div class="col-span-2 md:col-span-1 flex justify-center items-center p-6 align-middle">
                    <img class="w-auto h-12 object-contain object-center" src="https://www.parador-hotels.com/images/uploads/home/Website_Home_Page_-_Logo-Atria_Hotel__Living.png" alt="Atria">
                </div>
                <div class="col-span-2 md:col-span-1 flex justify-center items-center p-6 align-middle">
                    <img class="w-auto h-12 object-contain object-center" src="https://www.parador-hotels.com/images/uploads/home/8085_str.png" alt="Starlite">
                </div>
                <div class="col-span-2 md:col-span-1 flex justify-center items-center p-6 align-middle">
                    <img class="w-auto h-12 object-contain object-center" src="https://www.parador-hotels.com/images/uploads/home/logo_vga.png" alt="Vega">
                </div>
            </div>
        </section>
    </div>
	<div class="container w-full mx-auto justify-center items-center md:py-10">
        <div class="grid grid-cols-3 md:gap-16 w-full h-auto">
            <div class="col-span-full md:col-span-1 w-full rounded-md bg-white">
                <img src="https://www.parador-hotels.com/images/uploads/special-offer/semeja_1.jpg" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
                <div class="flex flex-col justify-between p-6 space-y-8">
                    <div class="space-y-2 text-center">
                        <h2 class="text-md font-semibold tracking-wide uppercase">Paket Semeja</h2>
                        <p class="dark:text-gray-700 text-sm">
                            Nikmati paket makan bersama keluarga di THE HANGRY RESTAURANT
                        </p>
                    </div>
                    <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-transparent">
                        Lihat Detail
                    </button>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full rounded-md bg-white">
                <img src="https://www.parador-hotels.com/images/uploads/special-offer/special_wyb.jpg" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
                <div class="flex flex-col justify-between p-6 space-y-8">
                    <div class="space-y-2 text-center">
                        <h2 class="text-md font-semibold tracking-wide uppercase">Staycation Deal</h2>
                        <p class="dark:text-gray-700 text-sm">
                            Manfaatkan penawaran staycation khusus di Atria Hotel Malang
                        </p>
                    </div>
                    <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-transparent">
                        Lihat Detail
                    </button>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full rounded-md bg-white">
                <img src="https://www.parador-hotels.com/images/uploads/special-offer/longer_stay.jpg" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
                <div class="flex flex-col justify-between p-6 space-y-8">
                    <div class="space-y-2 text-center">
                        <h2 class="text-md font-semibold tracking-wide uppercase">Stay Longer, Save More!</h2>
                        <p class="dark:text-gray-700 text-sm">
                            Pengalaman menginap menyenangkan di Atria Residences Gading Serpong
                        </p>
                    </div>
                    <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-transparent">
                        Lihat Detail
                    </button>
                </div>
            </div>
        </div>
    </div>
	<div class="container w-full mx-auto justify-center items-center md:py-10">
        <div class="container flex flex-col justify-center py-6 mx-auto md:py-12 lg:flex-row lg:justify-between">
            <div class="flex flex-col justify-center p-6 text-center rounded-sm max-w-md lg:text-left">
                <h1 class="text-4xl font-bold leading-none md::text-5xl text-gray-700">
                    Menginap di hotel kami, <span class="text-gray-900">di mana saja dan kapan saja</span>
                </h1>
                <p class="mt-6 mb-8 text-md md:mb-12">
                    Diseluruh indonesia dari mulai
                    <br class="hidden md:inline lg:hidden">
                    Tangerang, Jakarta Malang, Magelang, Bali, Semarang, dan masih banyak lagi.
                </p>
                <div class="flex flex-col space-y-4 md:items-center md:justify-center md:flex-row md:space-y-0 md:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="/" class="flex justify-between px-6 py-2 text-lg font-semibold rounded-lg bg-white border border-gray-900 shadow-lg">
                        <span class="font-bold text-sm text-gray-900 mt-1 uppercase">Lokasi</span>
                        <span class="ml-4 mt-1">
                            <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </span>
                    </a>
                </div>
            </div>
            <div class="flex items-end justify-end py-6 mt-8 lg:mt-0 h-72 md:h-80">
                <img src="https://www.parador-hotels.com/images/uploads/home/maps_2_1.png" alt="" class="object-contain h-72 md:h-80">
            </div>
        </div>
    </div>
	<div class="container w-full mx-auto justify-center items-center md:py-10 border-t">
        <div class="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div class="flex flex-col space-y-4 text-center lg:text-left max-w-md">
                <h1 class="text-5xl font-bold leading-none text-gray-700">Parador Newsletter</h1>
                <p class="text-lg leading-none">Sign up to our weekly newsletter to be the first to know what's on in <span class="uppercase font-bold text-sm">parador</span>.</p>
            </div>
            <div class="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md md:justify-end">
                <div class="flex flex-col md:flex-row">
                    <input type="text" placeholder="Enter your email" class="w-full px-4 py-4 rounded-l-lg md:w-full">
                    <button type="button" class="w-full px-4 font-semibold md:rounded-r-lg md:w-1/3 bg-gray-900 hover:bg-gray-800 text-sm text-white">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</section>