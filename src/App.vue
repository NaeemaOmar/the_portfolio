<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <NavBar />
      <div class="mainCreamBg mx-auto topMargin">
        <router-view />
        <Footer />
      </div>
    <!-- BELOW = ALT STYLING. NOTE: mainCreamBg below has a width of 95% -->
    <!-- <div class="darkGreenBg-Gradient">
      <div class="mainCreamBg mx-auto topMargin">
        <router-view />
      </div>
      <Footer />

    </div> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

<style>
/* GENERAL STYLING */
:root {
  --mainDarkGreen: #051808;
  --mainCream: #ffe49f;
  --white: #ffffff;
  --black: #000000;
}

.topMargin{
  margin-top: 92px;
}

.testBorder{
  border: dotted;
  border-color: aqua;
}

.testBg{
  background-color: aqua;
}

.testColor{
  color: aqua;
}

.darkGreenBg{
  background-color: var(--mainDarkGreen);
}

.mainCreamBg{
  background-color: var(--mainCream);
  /* width: 90%; */
}

.darkGreenBg-Gradient{
  background-image: radial-gradient(var(--mainCream), var(--mainDarkGreen));
}

.mainCreamBorder{
  border: solid;
  border-color: var(--mainCream);
  border-radius: 5px ;
}

.creamTxt{
  color: var(--mainCream);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--mainDarkGreen);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--black);
}

nav a.router-link-exact-active {
  color: var(--mainCream);
}
</style>
