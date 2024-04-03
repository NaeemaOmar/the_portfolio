<template>
  <div class="theBody">
    <h1 class="transparentTxt">This is home view version 2</h1>
    <div class="introDiv">
        <h1 class="mainCreamBg introTxt boldTxt">Hi, I am Naeema Omar,</h1>
        <h1 class="mainCreamBg introTxt boldTxt">an aspiring software developer</h1>
    </div>
    <div class=" theBtnDiv d-flex justify-content-around">
      <a href="/about">
        <button class="mt-5 homePgBtn">
          <h3>About me</h3>
        </button>
      </a>
      <a href="/contact">
        <button class="mt-5 homePgBtn">
          <h3>Get in touch</h3>
        </button>
      </a>
    </div>
  </div>
</template>

<!-- Horizontal logo = https://i.ibb.co/dt7Vk1c/favImg.png -->

<style>
.theBody {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://i.ibb.co/dt7Vk1c/favImg.png");
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

/* .introDiv{
    margin-block: 180px;
} */

.introTxt {
  width: fit-content;
  padding-inline: 15px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  margin-inline: auto;
  margin-block: 150px;
}

.theBtnDiv{
    padding-block-end: 200px;
}
</style>
