<script context="module">
	export async function load({ url }) {
		return {
			props: { currentPage: url.pathname },
		};
	}
</script>
<script>
    import { onMount } from 'svelte';
    import Header from "../../components/header/Header.svelte"
    import Footer from "../../components/footer/Footer.svelte"
    import MenuReservation from "../../components/quick-menu/MenuReservation.svelte"
    import "../../styles/app.css";
    
	  export let currentPage;
    onMount(async () => {
      document.body.style.overflow = 'hidden';
      const initInteractions = (await import('../../interactions/init-interactions')).default;
      initInteractions();
    });
</script>
<div class="w-full h-screen overflow-y-auto relative no-scrollbar">
    <Header {currentPage} />
    <div class="main h-auto w-full">
      <slot />
    </div>
    <Footer />

    <MenuReservation />
</div>