<template>
  <div class="projectsBody">
    <div  class="d-flex justify-content-around mainCreamBg">
        <div class="projectsMT">
            <div class="row rowWidth darkGreenBg mx-auto">
                <div class="col-12 projectsHeight">
                    Capstone div
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/Q95MFVh/capstone-EOMP.png" alt="">  
                    </div>
                </div>
            </div>
            <div class="row rowWidth mx-auto">
                <div class="col-8 projectsHeight blackBg ">NodeJs div
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/94kgQMv/nodeEOMP.png" alt="">
                    </div>
                </div>
                <div class="col-4 projectsHeight secondaryBg"> hexToRgb
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/C6R6yqZ/Hex-To-Rgb-no-Bg.png" alt="">
                    </div>
                </div>
            </div>
            <div class="row rowWidth mx-auto">
                <div class="col-4 projectsHeight secondFavSecondary ">JS calculator
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/vjjZN2k/blue-JSCalc.png" alt="">
                    </div>
                </div>
                <div class="col-8 projectsHeight accentBg"> js eCommerce site
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/tbkc4bH/JS-EOMP-no-Bg.png" alt="">
                    </div>
                </div> 
            </div>
            <div class="row projectsMB rowWidth mx-auto">
                <div class="col-7 projectsHeight secondFavAccent">the neurons bazaar
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/m6JrT7y/TNBpic-no-Bg.png" alt="">
                    </div>
                </div>
                <div class="col-5 projectsHeight lighterCreamBg">my first portfolio
                    <div>
                        <img class="capstonePic" src="https://i.ibb.co/V0Fy8tb/first-Portfolio-no-Bg.png" alt="">
                    </div>
                </div> 
            </div>
        </div>
    </div>

    <!-- SET-UP PLANNING. NOTE: bright colors = small spaces OR NB projects
    12 capstone
    1 js calculator <-> 11 nodeEOMP
    2 hexToRgb <-> 10 js eCommerce site
    3  <-> 9 
    4  <=> 8 
    5 my first portfolio <-> 7 the neurons bazaar
    6 6    
    2 2 2 2 2 = BMI calculator, etc

    https://i.ibb.co/tbkc4bH/JS-EOMP-no-Bg.png
    https://i.ibb.co/V0Fy8tb/first-Portfolio-no-Bg.png
    https://i.ibb.co/C6R6yqZ/Hex-To-Rgb-no-Bg.png - hexToRgb 
    https://i.ibb.co/vjjZN2k/blue-JSCalc.png - js calculator
    https://i.ibb.co/m6JrT7y/TNBpic-no-Bg.png - the neurons bazaar
    https://i.ibb.co/94kgQMv/nodeEOMP.png
    https://i.ibb.co/Q95MFVh/capstone-EOMP.png-->
  </div>
</template>

<style>
.projectsBody {
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

.projectsHeight{
    height: 300px;
    border-radius: 15px;
    border: dotted;
}

.rowWidth{
    width: 100%;
    margin-inline: 2%;
    border-radius: 15px;
}

.capstonePic{
    height: 250px;
    border-radius: 10px ;
    width: 85%;
}

.secondaryBg{
    background-color: #F8FE70;
}

.accentBg{
    background-color: #A4FE3E;
}

.lighterCreamBg{
    background-color: #FDDB7E;
}

.secondFavSecondary{
    background-color:#D8B166;
}

.secondFavAccent{
    background-color: #9ADB68;
}

button {
  background-color: var(--mainCream);
  border-radius: 10px;
  width: 80px;
}

.projectsMB{
    margin-block-end: 100px;
}

.projectsMT{
    margin-block-start: 50px;
}

</style>
