<template>
  <div class="theeBody">
    <!-- <h1 class="transparentTxt">This is home version 4</h1> -->
    <div class="row rowWidth rowHeight">
      <div class="col-12 plainLogoDiv ">
        <img
          class="plainLogoN mx-auto"
          src="https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png"
          alt=""
        />
      </div>
      <div class="col-12 d-flex align-items-center">
        <div class="txtDiv creamBoxShadow mx-auto">
          <h1 class="creamTxt darkGreenBg mt-5 welcomeTxt">
            Hi, I'm Naeema Omar
          </h1>
          <h3 class="creamTxt darkGreenBg mt-5 welcomeTxt">
            Welcome to my online abode
          </h3>
          <div class="btnDiv d-flex justify-content-around">
            <a href="/about">
              <button class="mt-5 mb-5 homePg4Btn">
                <h3>About me</h3>
              </button>
            </a>
            <a href="/contact">
              <button class="mt-5 homePg4Btn">
                <h3>Get in touch</h3>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 
          Plain geometric bg - bright ver = https://i.ibb.co/4YTBQn0/clipped-Horizontal-Geo-Bg.png
          Plain geometric bg - muted version = https://i.ibb.co/RD2K2Cn/geometric-Bg.png
          Plain N logo = https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png
      
      -->
</template>

<style>
.theeBody {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://i.ibb.co/RD2K2Cn/geometric-Bg.png");
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.plainLogoN {
  max-width: 45%;
  max-height: 50%;
  /* box-shadow: 0px 0px 10px 10px var(--mainCream); */
  /* border-radius: 15px; */
}

.creamBoxShadow {
  box-shadow: 0px 0px 10px 10px var(--mainCream);
  border-radius: 50px;
}

.txtDiv {
  width: 55%;
  /* height: 100vh; */
  /* padding-block: 200px; */
  /* padding-inline: 200px; */
}

.rowWidth {
  width: 95%;
  margin-inline: 20px;
}

.rowHeight {
  height: 100vh;
  /* margin-block-start: 20px; */
  padding-block-end: 150px;
}

.plainLogoDiv {
    /* margin-top: 200px; */
    margin-top: 2%;
    height: max-content;
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

.homePg4Btn {
  background-color: var(--mainDarkGreen);
  width: fit-content;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  border: none;
  color: var(--mainCream);
}
</style>
