<script>
    import Header from "../components/header/Header.svelte"
    import Footer from "../components/footer/Footer.svelte"
    import "../styles/app.css";
  </script>
  
  <Header />
  <slot />
  <Footer />