<template>
<Page class="sve" actionBarHidden="true">
<ScrollView>
<AbsoluteLayout orientation="vertical" class="glavni">

  <AbsoluteLayout class="btn-back" @tap="open(var1=3)" >
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
                     

                <GridLayout class="okvir1">
                <Image src="~/images/puzzleViolina.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir2" @tap="open(var1=1)">
                <Image src="~/images/Boy.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir3">
                <Image src="~/images/puzzleKlavir.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir4">
                <Image src="~/images/puzzleSaksofon.jpg" class="slika" />
                </GridLayout>

                <GridLayout class="okvir5">
                <Image src="~/images/puzzleDrums.jpg" class="slika" />
                </GridLayout> 

</AbsoluteLayout>
</ScrollView>
   </Page>

</template>


<script>
import Puzzle from '../components/Puzzle'

export default {
    
     methods: {
          open(var1){
                
                if(var1===1){
                    this.$navigateTo(Puzzle);
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
    width: 600px;
}
.okvir1{
    background-color: #0B9CBE;
    height: 1100px;
    width: 650px;
    left: 60px;
    top: 350px;
}

.okvir2{
    background-color: #23B943;
    height: 900px;
    width: 650px;
    top: 150px;
    left: 760px;
}
.okvir3{
    background-color: #EB8B11;
    height: 800px;
    width: 650px;
    top: 1130px;
    left: 760px;
}
.okvir4{
background-color: #DF4F3D;
    height: 960px;
    width: 650px;
    top: 1520px;
    left: 60px;

}
.okvir5{
background-color: #10CEF0;
    height: 490px;
    width: 650px;
    top: 2000px;
    left: 760px;
}

</style>