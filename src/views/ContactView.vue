<template>
  <div>
    <h1>This is the contact pg</h1>
    <div class="row">
      <div class="col-3">
        <div class="greenDiv">
          <h3>Get in touch</h3>
          <div class="row">
            <div class="col-3">
              <p class="mx-auto">icon</p>
            </div>
            <div class="col-9">
              <p>Bellville, Cape Town, 7530</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="mx-auto">icon</p>
            </div>
            <div class="col-9">
              <p>naeemaomar19@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <p class="mx-auto">icon</p>
            </div>
            <div class="col-9">
              <p>071 000 000</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">gitHub+linkedIn icons</div>
          </div>
        </div>
      </div>
      <div class="col-9 testBorder">
        <div class="theForm">
            <div class="row">
                <div class="col-6">
                    <p>Name</p>
                    <input type="text" placeholder="Enter your name...">
                </div>
                <div class="col-6">
                    <p>Surname</p>
                    <input type="text" placeholder="Enter your surname...">
                </div>
            </div>
            <div class="row">
                <p>Email</p>
                <input type="text" placeholder="Enter your email address...">
            </div>
            <div class="row">
                <p>Your message</p>
                <input type="text" placeholder="Enter your message...">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.greenDiv {
  background-color: var(--mainDarkGreen);
  color: var(--mainCream);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  margin-block: 50px;
  margin-inline-start: 20px;
  /* width: 35%;  */
  /*ALTERNATIVELY: use row w/ col-4 vs col-8. col-4 will have a green div w/ a margin 20px allround*/
  /* UPDATE: defs need to use row otherwise i'll need to use grids to get the stuff in 1 line */
}
</style>
