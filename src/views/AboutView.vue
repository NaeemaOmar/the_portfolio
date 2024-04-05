<template>
  <div class="aboutBody">
    <div class="centerThisDiv mx-auto">
      <div class="row row1Margins">
        <div class="col-4">
          <div class="darkGreenBg imgDiv">
            <img
              class="mainCreamBg profilePic my-5"
              src="https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-8">
          <div class="mx-auto aboutHeadingtxtDiv darkGreenBg">
            <div class="aboutHeadingTxt mx-auto">
              <h1 class="blackTxt">
                Hello, I am <span class="boldTxt darkGreentxt">Naeema Omar</span>,
                an
              </h1>
              <h1>
                aspiring
                <span class="boldTxt darkGreentxt">software developer</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <!-- ROW 1 ends here -->
      <!-- ROW 2 starts here -->
      <div class="row row2Margins">
        <div class="col-7">
          <div class="breakLine"></div>
          <div>
            <h3 class="blackTxt leftAlignTxt">
              I first developed an interest in a tech career in 2020 when covid
              boredom lead me to begin learning
              <span class="boldTxt darkGreentxt">python</span> and
              <span class="boldTxt darkGreentxt">c++</span>. It was a great deal
              of fun breaking down the program you would like to build into its
              basic pieces before building it back up. seeing a completed product
              that you know you built from scratch is really good for my pride and
              confidence
            </h3>
          </div>
          <div class="breakLine"></div>
          <div class="row">
            <div class="col-6">
              <h3 class="blackTxt leftAlignTxt">
                I would describe myself as some one who is passionate, very
                curious and sociable. I enjoy long hikes, reading, learning and new
                experiences.
              </h3>
              <a href="/contact">
                <button class="creamTxt aboutPgBtn my-2">Get in touch with me</button>
              </a>
            </div>
            <div class="col-6">
              <div class="darkGreenBg creamTxt readingDiv mt-3">
                <h3>Currently reading:</h3>
                <p>Atomic Habits - James Clear</p>
                <h3>Next on my list:</h3>
                <p>Limitless - Jim Kwik</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="hikePicDiv darkGreenBg">
            <img class="hikePic" src="https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg" alt="">
          </div>
        </div>
        <div class="antiFooterMargin transparentTxt">
          h
        </div>
      </div>
      <!-- ROW 2 ends here -->
    </div>
  </div>
</template>

  <!-- Hiking pic =  https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg -->
  <!-- Profile pic - square version = https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png -->
  <!-- Square geometric bg = https://i.ibb.co/cv3p3NM/square-Geo-Bg.png -->

<style>
.aboutBody {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--mainCream);
}

.imgDiv {
  border-radius: 50px;
  width: 70%;
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

.profilePic {
  border-radius: 50px;
  width: 80%;
}

.geoBg {
  background-image: url("https://i.ibb.co/cv3p3NM/square-Geo-Bg.png");
  background-size: cover;
}

.row1Margins {
  margin-top: 150px;
  margin-inline: 50px;
}

.row2Margins {
  margin-inline: 50px;
}

.aboutHeadingTxt {
  background-color: var(--mainCream);
  border-radius: 50px;
  margin-block: 50px;
  margin-inline: 30px;
  width: fit-content;
  padding-block: 15px;
  padding-inline: 20px;
}

.aboutHeadingtxtDiv {
  border-radius: 50px;
  height: fit-content;
  margin-block-start: 6%;
  width: fit-content;
  /* margin-inline: auto; */
  margin-inline-end: 0%;
  border-color: darkgoldenrod;
  padding-inline: 50px;
  padding-block: 5px;
}

.breakLine {
  background-color: var(--mainDarkGreen);
  height: 10px;
  width: 75%;
  margin-block: 50px;
  margin-inline: auto;
}

.readingDiv{
  border-radius: 50px;
  width: fit-content;
  padding-inline: 30px;
  padding-block: 10px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen); 
}

.hikePic{
  height: 530px;
  border-radius: 50px;
}

.hikePicDiv{
  width: fit-content;
  padding: 50px;
  border-radius: 50px;
}

.antiFooterMargin{
  height: 100px;
}

.aboutPgBtn{
  background-color: var(--mainDarkGreen);
  width: fit-content;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen); 
  border: none;
  color: var(--mainCream);
}

.centerThisDiv{
  width: 95%;
  padding: 0;
  margin: 0;
}

</style>
