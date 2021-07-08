<template>
<Page class="sve" actionBarHidden="true">
<ScrollView>
<AbsoluteLayout orientation="vertical" class="glavni">

  <AbsoluteLayout class="btn-back" @tap="open(var1=6)" >
                            <Label class="back"
                                style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                            <Label class="back2"
                                style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                            <Label class="fas" textWrap="true">
                                <FormattedString>
                                    <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                </FormattedString>
                            </Label>
                            <!-- <Button class="fas" text.decode="&#xf060;" ></Button> -->
            </AbsoluteLayout>
                     

                <GridLayout class="okvir1" @tap="open(var1=5)">
                <Image src="~/images/puzzleViolina.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir2" @tap="open(var1=1)">
                <Image src="~/images/Boy.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir3" @tap="open(var1=2)">
                <Image src="~/images/puzzleKlavir.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir4" @tap="open(var1=3)">
                <Image src="~/images/puzzleSaksofon.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir5" @tap="open(var1=4)">
                <Image src="~/images/puzzleDrums.jpg" class="slika" />
                </GridLayout> 

</AbsoluteLayout>
</ScrollView>
   </Page>

</template>


<script>
import Puzzle from '../components/Puzzle'
import Puzzle1 from '../components/Puzzle1'
import Puzzle2 from '../components/Puzzle2'
import Puzzle3 from '../components/Puzzle3'
import Puzzle4 from '../components/Puzzle4'
import GameBox from '../components/GameBox'



export default {
    
     methods: {
          open(var1){
                
                if(var1===1){
                    this.$navigateTo(Puzzle);
                }
                else if(var1==2)
                {
                    this.$navigateTo(Puzzle1);

                }
                else if(var1==3)
                {
                    this.$navigateTo(Puzzle2);

                }
                else if(var1==4)
                {
                    this.$navigateTo(Puzzle3);

                }
                else if(var1==5)
                {
                    this.$navigateTo(Puzzle4);

                }
                else if(var1==6)
                {
                    this.$navigateTo(GameBox);

                }
    
        }
     }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}

.fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 40%;
        left: 30%;
        font-size: 30%;
    }

.slika{
    width: 80%;
}
.okvir1{
    background-color: orange;
    height: 700px;
    width: 450px;
    left: 40px;
    top: 275px;
}

.okvir2{
    background-color: #23B943;
    height: 600px;
    width: 450px;
    top: 150px;
    left: 600px;
}
.okvir3{
    background-color: #EB8B11;
    height: 500px;
    width: 450px;
    top: 775px;
    left: 600px;
}
.okvir4{
background-color: #DF4F3D;
    height: 600px;
    width: 450px;
    top: 1050px;
    left: 40px;

}
.okvir5{
background-color: #10CEF0;
    height: 400px;
    width: 450px;
    top: 1300px;
    left: 600px;
}

</style>