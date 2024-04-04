<template>
  <div class="resumeBody mainCreamBg">
    <!-- <h1>This is the resume page</h1> -->
    <div class="mainCvDiv mx-auto testBorder">
      <div class="borderedDiv">
        <!-- BANNER BORDER starts here -->
        <div class="row darkGreenBg">
          <div class="col-4 picCol">
            <img
              class="firstPic"
              src="https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png"
              alt=""
            />
          </div>
          <div class="col-8 whiteTxt leftAlignTxt">
            <h1>Naeema Omar</h1>
            <h3>Web Development Intern - Life Choices Academy</h3>
            <h5 class="mt-3">Vredelust, Cape Town, 7530</h5>
            <h5>naeemaomar19@gmail.com</h5>
            <h5>071 000 000</h5>
            <a href="/contact">
              <button class="resumeBtn">
                <h5><span class="boldTxt">Contact me</span></h5>
              </button>
            </a>
          </div>
        </div>
        <!-- BANNER BORDER ROW ends here -->
        <div class="row lightenedCreamBg">
          <div class="col-4 blackTxt testBorder">
            <h5 class="mt-3">Soft skills</h5>
            <div class="theBreakLine"></div>
            <h5>Technical skills</h5>
            <div class="theBreakLine"></div>
            <h5>Languages</h5>
            <div class="theBreakLine"></div>
          </div>
          <div class="col-8 lightenedCreamBg">
            <!-- EMPLOYMENT HISTORY COL-8 ends here -->
            <div class="row">
              <h4 class="leftAlignTxt blackTxt boldTxt">Employment history</h4>
              <div class="row blackTxt d-flex justify-content-around">
                <div class="col-2 workExp">
                  <h6>Year: 2016-2017</h6>
                  <h6>Role: Cashier, Floor manager</h6>
                  <h6>Employer: Baraka Bazaar</h6>
                  <h6>
                    (Card flip gives more details on responsibilities + skills
                    acquired???)
                  </h6>
                </div>
                <div class="col-2 workExp">
                  <h6>Year: 2016-2017</h6>
                  <h6>Role: Cashier, Floor manager</h6>
                  <h6>Employer: Baraka Bazaar</h6>
                  <h6>
                    (Card flip gives more details on responsibilities + skills
                    acquired???)
                  </h6>
                </div>
                <div class="col-2 workExp">
                  <h6>Year: 2016-2017</h6>
                  <h6>Role: Cashier, Floor manager</h6>
                  <h6>Employer: Baraka Bazaar</h6>
                  <h6>
                    (Card flip gives more details on responsibilities + skills
                    acquired???)
                  </h6>
                </div>
                <div class="col-2 workExp">
                  <h6>Year: 2016-2017</h6>
                  <h6>Role: Cashier, Floor manager</h6>
                  <h6>Employer: Baraka Bazaar</h6>
                  <h6>
                    (Card flip gives more details on responsibilities + skills
                    acquired???)
                  </h6>
                </div>
              </div>
              <!-- EMPLOYMENT HISTORY COL-8 ends here -->
            </div>
            <!-- EDUCATION ROW W/IN THE COL-8 starts here -->
            <div class="row blackTxt testBorder">
              <h4 class="leftAlignTxt blackTxt boldTxt">Education</h4>
            </div>
            <div class="row blackTxt d-flex justify-content-around">
              <div class="col-3 educationCol">
                <h6>Year: 2015</h6>
                <h6>Qualification: NSC</h6>
                <h6>Institute: Islamia College</h6>
              </div>
              <div class="col-3 educationCol">
                <h6>Year: 2015</h6>
                <h6>Qualification: NSC</h6>
                <h6>Institute: Islamia College</h6>
              </div>
              <div class="col-3 educationCol">
                <h6>Year: 2015</h6>
                <h6>Qualification: NSC</h6>
                <h6>Institute: Islamia College</h6>
              </div>
            </div>

            <!-- EDUCATION ROW W/IN THE COL-8 ends here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Profile pic options:
    https://i.ibb.co/98BLqz8/retake-Profile-Pic1.jpg
    https://i.ibb.co/tDxxzvg/retake-Profile-Pic2.jpg
    https://i.ibb.co/7gT3Z5C/retake-Profile-Pic3.jpg
-->

<style>
.mainCvDiv {
  width: 75%;
  margin-top: 150px;
}

.borderedDiv {
  margin: 50px;
}

.picCol {
  width: 50px;
  /* This doesn't work. WHy?????? */
}

.firstPic {
  height: 200px;
}

.theBreakLine {
  background-color: var(--mainDarkGreen);
  height: 5px;
  width: 75%;
  margin-block: 10px;
  margin-inline: auto;
  border-radius: 3px;
}

.resumeBtn {
  background-color: var(--mainCream);
  width: fit-content;
  border-radius: 50px;
  padding-block-start: 2px;
  box-shadow: 0px 0px 10px 10px var(--mainCream);
  border: none;
  color: var(--mainDarkGreen);
  margin-block: 10px;
}

.workExp {
  border-radius: 50px;
  background-color: var(--mainCream);
  box-shadow: 0px 0px 10px 10px var(--mainCream);
  margin-block: 25px;
}

.educationCol {
  background-color: var(--mainCream);
  border-radius: 50px;
  box-shadow: 0px 0px 10px 10px var(--mainCream);
  margin-block: 25px;
}
</style>
