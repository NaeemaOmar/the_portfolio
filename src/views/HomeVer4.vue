<template>
    <div class="theeBody ">
        <h1>This is version 4 of the home page</h1>
        <div class="row marginVert">
            <div class="col-5">
                <img src="https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png" alt="">
                haye
            </div>
            <div class="col-7 creamShadow">

            </div>
        </div>
    </div>
    <!-- Geometric bg only = https://i.ibb.co/RD2K2Cn/geometric-Bg.png
        N-part only = https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png
     -->
</template>



<style>
.theeBody {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://i.ibb.co/RD2K2Cn/geometric-Bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: var(--mainDarkGreen);
  background-position: center;
  background-attachment: fixed;
}

.darkGreenShadow{
    box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}

.creamShadow{
    box-shadow: 0px 0px 10px 10px var(--mainCream);
}

.marginVert{
    margin-block-start: 3%;
    padding-block-end: 3%;
}

</style>