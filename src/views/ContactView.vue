<template>
  <div>
    <h1>This is the contact pg</h1>
    <div class="row d-flex justify-content-around">
      <!-- GREEN DIV starts here -->
      <div class="col-12 col-sm-3">
        <div class="greenDiv my-5">
          <h3>Get in touch</h3>
          <div class="row">
            <div class="col-12 col-sm-3">
              <i class="fa-solid fa-location-dot fa-xl iconStyling"></i>            
              </div>
            <div class="col-12 col-sm-9">
              <p>Bellville, Cape Town, 7530</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-3">
              <i class="fa-solid fa-envelope fa-xl iconStyling"></i>            
              </div>
            <div class="col-12 col-sm-9">
              <p>naeemaomar19@gmail.com</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 d-flex justify-content-around">
              <i class="fa-solid fa-phone-volume fa-xl iconStyling"></i>
              <i class="fa-brands fa-square-whatsapp fa-2xl iconStyling"></i>  
              <!-- <i class="fa-brands fa-whatsapp fa-xl"></i>           -->
              </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <p>071 000 000</p>
            </div>
          </div>
          <div class="line"></div>
          <p class="mt-3">Links:</p>
          <div class="row">
            <div class="col-12 col-sm-6 d-flex justify-content-around">
              <a href="/">
                <i class="fa-brands fa-linkedin fa-2xl iconStyling"></i>
              </a>
            </div>
            <div class="col-12 col-sm-6 d-flex justify-content-around">
              <a href="/about">
                <i class="fa-brands fa-square-github fa-2xl iconStyling"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
      <!-- FORM DIV starts here -->
      <div class="col-12 col-sm-9 formDiv my-3 boxShadow">
        <div class="theForm">
            <div class="row">
                <div class="col-12 testBorder">
                    <p>Name</p>
                    <input type="text" class="testBorder" placeholder="Enter your name...">
                </div>
                <div class="col-12">
                    <p>Surname</p>
                    <input type="text" placeholder="Enter your surname...">
                </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>Email</p>
                <input type="text" class="emailInput" placeholder="Enter your email address...">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>Your message</p>
                <input type="text" class="msgBox" placeholder="Enter your message...">
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.greenDiv {
  width: 200px;
  background-color: var(--mainDarkGreen);
  color: var(--mainCream);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  /* margin-block: 50px; */
  /* margin-inline-start: 20px; */
  /* NOTE: the margins mess w/ responsivity */
  /* width: 35%;  */
  /*ALTERNATIVELY: use row w/ col-4 vs col-8. col-4 will have a green div w/ a margin 20px allround*/
  /* UPDATE: defs need to use row otherwise i'll need to use grids to get the stuff in 1 line */
}

.boxShadow{
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  /* use the full row boxShadow as an effect in the home/about page(s) */
  border-radius: 10px;
}

.line{
  border: solid;
  border-color: var(--mainCream);
  border-radius: 2px;
  border-width: 2px;
}

input{
  width: 260px;
    border-radius: 5px;
    border: none;
    background-color: var(--mainDarkGreen);
    box-shadow: 0px 0px 10px 4px var(--mainDarkGreen);
}

.emailInput{
  width: 260px;
}

::placeholder{
    color: var(--lightenedCream);
}

.iconStyling{
  color: var(--mainCream);
  /* background-color: var(--mainCream); */
}

.msgBox{
  height: 100px;
  width: 260px;
}

.formDiv{
  max-width: 290px;
}

</style>
