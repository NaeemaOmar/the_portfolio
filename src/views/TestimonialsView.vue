<template>
  <div class="testimonialsBody">
    <!-- <h1>This is the testimonials page</h1> -->
    <!-- <h1 class="display-1">LET THE CARD-FLIPPING BEGIN!!!!</h1> -->
    <div class="">
      <h1 class="creamTxt">
        Prompt: What do you think about Naeema as an employee?
      </h1>
    </div>
    <div class="pgHeading">
      <h1 class="display-4 boldTxt">Prompt: Describe Naeema...</h1>
    </div>
    <!-- CARD-FLIPPING STARTS HERE -->
    <div class="row">
      <div
        v-for="person in this.$store.state.testimonialsArray"
        :key="person.name"
      >
        <div class="card-container">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <div class="nameHeight d-flex justify-content-around align-items-center">
                    <h2 class="creamTxt">{{ person.name }}:</h2>
                </div>
                <img class="personImg" :src="person.img" alt="" />
                <h3 class="creamTxt mt-3">{{ person.relation }}</h3>
              </div>
              <div class="card-back">
                <h5 class="creamTxt my-3">
                  What {{ person.name }} has to say:
                </h5>
                <p class="creamTxt my-4">{{ person.testimonial }}</p>
                <a :href="person.portfolio" target="_blank">
                  <button class="my-3">
                    Learn more about {{ person.name }}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CARD-FLIPPING ENDS HERE -->

    <!-- BELOW = protecting functioning cards loop -->
    <!-- <div
      v-for="person in this.$store.state.testimonialsArray"
      :key="person.name"
    >
      <div class="card-container ">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h2 class="creamTxt">{{ person.name }}:</h2>
              <img class="personImg" :src="person.img" alt="" />
              <h3 class="creamTxt mt-3">{{ person.relation }}</h3>
            </div>
            <div class="card-back">
                <h5 class="creamTxt my-3">What {{ person.name }} has to say:</h5>
                <p class="creamTxt  my-4">{{ person.testimonial }}</p>
              <a :href="person.portfolio" target="_blank">
                <button class=" my-3">Learn more about {{ person.name }}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    whatTheySay() {
      alert("This is their answer");
    },
  },
  mounted() {
    try {
      console.log("This is the mounted of the testimonials pg");
      this.$store.dispatch("getTestimonials");
      console.log(
        "This is the 'getting testimonials info' of the mounted of the testimonials pg"
      );
    } catch (err) {
      console.log(
        `The following error occured while trying to dispatch the getTestimonials fx in the mounted of the testimonials pg: ${err}`
      );
    }
  },
};
</script>

<style>
.card-container {
  position: relative;
  margin-block: 150px;
  margin-inline: 50px;
}

.card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
  margin-bottom: 20px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 250px;
  height: 435px;
  border-radius: 10px;
  background-color: var(--mainDarkGreen);
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  position: absolute;
  backface-visibility: hidden;
}

.card-front {
  /* Front-specific styling goes here */
}

.card-back {
  margin-inline: -55px;
  transform: rotateY(180deg);
}

.personImg {
  width: 200px;
  height: 300px;
  /* background-color: var(--mainDarkGreen); */
  background-color: var(--mainCream);
  box-shadow: 0px 0px 3px 5px var(--mainCream);
  border-radius: 10px;
}

button {
  background-color: var(--mainCream);
  border-radius: 10px;
  width: 150px;
}

.nameHeight{
    height: 80px;
}

.testimonialsBody {
  /* width: 100%; */
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--mainCream);
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-attachment: fixed; */
}
</style>
