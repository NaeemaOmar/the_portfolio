<template>
  <div class="mainCreamBorder d-flex justify-content-start">
    <img class="vertLogo" src="https://i.ibb.co/fX8qD26/vertical-Logo.png" alt="">
    <div class="infoDiv">
      <h1 class="creamTxt darkGreenBg mt-5 welcomeTxt">Hi, I'm Naeema Omar</h1>
      <h3 class="creamTxt darkGreenBg mt-5 welcomeTxt">Welcome to my online abode</h3>

      <div class="boxShadow">
        <h1 class="pt-5">I am <span class="boldTxt"> Naeema Omar</span>,</h1>
        <h1 class="mt-5 pb-5">an aspiring software developer</h1>
      </div>
      <div class="btnDiv d-flex justify-content-around">
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
  </div>
</template>

<!-- vertical Logo = https://i.ibb.co/fX8qD26/vertical-Logo.png -->
<style>
.vertLogo{
  width: 35%;
  height: 760px;
  margin-block: 20px;
  margin-inline-start: 20px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}

.infoDiv{
  width: 65%;
}

.welcomeTxt{
  width: fit-content;
  margin-inline: auto;
  padding-inline: 15px;
  padding-block: 8px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}

.boxShadow{
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen); 
  margin-top: 150px;
  margin-inline: auto;
  width: 60%;
}

.homePgBtn{
  background-color: var(--mainDarkGreen);
  width: fit-content;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen); 
  border: none;
  color: var(--lightenedCream);
}

.btnDiv{
  margin-top: 60px;
}

</style>