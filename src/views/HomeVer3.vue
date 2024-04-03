<template>
  <div class="">
    <!-- <h1 class="transparentTxt">This is home view version 3</h1> -->
    <div class="row">
      <div class="col-12 darkGreenBg">
        <img
          class="horizontalLogo"
          src="https://i.ibb.co/dt7Vk1c/favImg.png"
          alt=""
        />
        <div class="theIntroDiv">
          <h1 class="boldTxt transparentTxt marginBtm mx-auto">Hi, I'm Naeema Omar,</h1>
          <h1 class="boldTxt transparentTxt">an aspiring software developer</h1>
          <div class="marginTop">
            <a href="/about">
              <button class="mt-5 marginEnd homePgBtn">
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
    </div>
  </div>
</template>

<!-- Horizontal logo = https://i.ibb.co/dt7Vk1c/favImg.png -->
<!-- Smaller btn, margin top at btn and no introTxt -->
<!-- Combine the lekker ft's of home 1 and home 3:
Advice fr Ntokozo + Baidah: 
    make Bg cream not green
    split the N logo and the geometric bg. Put the logo to the left and the "Hi,..." + "Welcome to ..." texts (w/ green shadow) to the right
    keep the btns green but a lil smaller
    lose the square txtBox in home 1
Advice fr Seth:
    Home 3 is perfect as a landing pg
    Home 1 square txtBox needs shadows on the sides only (or top only but not all 4) 
-->


<style>
.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

.marginBtm {
  margin-block-end: 50px;
}

.marginTop{
    margin-block-start: 440px;
}

.marginEnd{
    margin-inline-end: 150px;
}

.horizontalLogo {
  width: 70%;
  /* height: 100%; */
  border-radius: 50px;
  margin-bottom: 100px;
}

.txtBg {
  width: fit-content;
  background-color: var(--mainCream);
  padding-inline: 15px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 10px var(--mainCream);
}

.theIntroDiv {
  position: absolute;
  top: 2%; /* Adjust as needed */
  left: 47%; /* Adjust as needed */
  margin-inline-start: -13%;
  color: var(--mainDarkGreen);
  font-size: 24px; /* Adjust as needed */
  font-weight: bold; /* Adjust as needed */
  text-align: center; /* Align text to the center */
  padding: 10px; /* Adjust as needed */
}
</style>
