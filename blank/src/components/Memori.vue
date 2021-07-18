<template>
<Page class="sve" actionBarHidden="true">

<StackLayout orientation="vertical" class="glavni">

    <AbsoluteLayout class="btn">
                <Label  class="back"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; " @tap="open(var1=1)" />
                <Label class="back2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas" textWrap="true" >
                    <FormattedString>
                        <Span text.decode="&#xf060;" fontAttributes="Bold" @tap="$navigateBack"></Span>
                    </FormattedString>
                </Label>
                        <!-- <Button class="fas" text.decode="&#xf060;"  ></Button> -->
                <Label class="circle-music1"
                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                    <Label class="circle-music2"
                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                        <!-- <Button class="fas" text.decode="&#xf060;"  ></Button> -->
                 <MusicButton/>
    </AbsoluteLayout>


            <!-- <StackLayout class="memoryOkvir" orientation="horizontal" borderRadius="10" borderColor="grey" borderWidth="1" >  -->
                    <FlexBoxLayout class="memoryList"  >
                        <GridLayout   v-for="card in memoryCards" class="okvir" :class="{'flipped':card.isFlipped,'matched':card.isMatched}" :key="card.id" @tap="turn(card)">

                                <Image src="~/images/zutaNova.jpg" class="slika" />
                        <Image v-if="card.isFlipped" class="fliped" stretch="aspectFill"  :src="card.img"/>

                        </GridLayout>
                    </FlexBoxLayout>

        <Button @tap="reset" class="PonovoPokreni"> Ponovo Pokreni</Button> 

        <!-- <Button @tap="reset"> Ponovo Pokreni</Button>  -->
     



</StackLayout>
   </Page>

</template>


<script>
 import _ from 'lodash'
    import { ImagePopup } from 'nativescript-image-popup';
    import {nizKategorija} from '~/data/kategorije.js'
import GameBox from '../components/GameBox'
import MusicButton from '../components/MusicButton'


 export default{
     
     components: {MusicButton, },
     data(){
         return{
             nizKategorija:nizKategorija,
            memoryCards:[],
            flippedCards:[],
            finish:false,
         }
       },
        created(){
            this.reset();

    },
       methods:{
           open(var1){
                
                if(var1===1){
                    this.$navigateTo(GameBox);
                }
                
    
        },
            turn(card){
                    if(card.isMatched || card.isFlipped || this.flippedCards.length === 2)
                          return;
                card.isFlipped=true;

                if(this.flippedCards.length < 2)
                    this.flippedCards.push(card);
                if(this.flippedCards.length === 2)
                    this.match(card);

           },
           match(card){
                if(this.flippedCards[0].name === this.flippedCards[1].name){
                        setTimeout(() => {
                        this.flippedCards.forEach(card => card.isMatched = true);
                        this.flippedCards = [];
                         //all card matched
                        if(this.memoryCards.every(card => card.isMatched === true)){
                        ImagePopup.localImagePopup("~/images/Cestitamo.jpg");
                        this.finish = true;

    }
                    }, 400);
                }
                else{
                   setTimeout(() => {
                        this.flippedCards.forEach((card) => {card.isFlipped = false});
                        this.flippedCards = [];
                    }, 800);
                }

           },
           reset(){
               

                                
                const random=Math.floor(Math.random()*this.nizKategorija.length);
                //  console.log(this.nizKategorija[random]);
                    this.nizKategorija[random].forEach((card) => {
                    card.isFlipped = false;
                    card.isMatched=false;
                });

                setTimeout(() => {
                this.memoryCards = [];
                this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.nizKategorija[random]), _.cloneDeep(this.nizKategorija[random])));

                 this.finish = false;
                 this.flippedCards = [];

                }, 600);

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

 .okvir{

      margin:10;
    height: 300px;
    width: 300px;

 }

 .memoryList {
     display: flex;
     flex-flow: row wrap;
     width:70%;
 }
 .memoryList2{
    margin-right:8%;

 }
 .fliped{
      height: 300px;
    width: 300px;
 }
 .matched{
     opacity: 0.3;
 }
 .memoryOkvir{
     height:67%;
  
 }
 .PonovoPokreni{
     width: 400px;
     height: 400px;
     border-radius: 50%;
     background-color: #ffff80;
     color: black;
    margin-top: -1500px;

 }

</style>