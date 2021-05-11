<template>
<Page class="sve" actionBarHidden="true">

<StackLayout orientation="vertical" class="glavni">

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
            <!-- <AbsoluteLayout class="memory" left="0"> -->
        <StackLayout orientation="horizontal" >
            <StackLayout class="memoryList" width="40%"  >
                <GridLayout   v-for="card in tipkeCards" class="okvir" :class="{'flipped':card.isFlipped }" :key="card.id" @tap="turn(card)">
                    
                        <Image src="~/images/druga.jpg" class="slika" /> 
                <Image v-if="card.isFlipped" class="fliped" stretch="aspectFill"  :src="card.img"/>
                    
                </GridLayout>
                
            </StackLayout>

            <StackLayout class="memoryList2" width="40%" >
                    <GridLayout   v-for="card in memoryCards" class="okvir" :class="{'flipped':card.isFlipped }" :key="card.id" @tap="turn(card)">
                        
                            <Image src="~/images/druga.jpg" class="slika" /> 
                    <Image v-if="card.isFlipped" class="fliped" stretch="aspectFill"  :src="card.img"/>
                        
                    </GridLayout>
            </StackLayout>

    
        </StackLayout>
   

            <!-- </AbsoluteLayout> -->
</StackLayout>
   </Page>

</template>


<script> 
 import _ from 'lodash'

 export default{
     data(){
         return{
             slice:3,
              
             tipkeCards: [
                           {
                               id:0,
                               name: 'klavir',
                               img: "~/images/klavir.jpg",
                               isFlipped:false
           
                           },
                           {
                               id:1,

                               name: 'harmonika',
                               img: "~/images/harmonika.jpg",
                               isFlipped:false
            
                           },
                           {
                               id:2,

                               name: 'cembalo',
                               img: "~/images/cembalo.jpg",
                               isFlipped:false
           
                           },
                           {  
                               id:3,

                               name: 'sintisazjer',
                               img: "~/images/sintisajzer.jpg",
                               isFlipped:false
                           }
            ],
            memoryCards:[]
         }
       },
        created(){
        this.tipkeCards.forEach((card) => {
            card.isFlipped = false;
        });
         var cards1=_.cloneDeep(this.tipkeCards);
         var cards2=_.cloneDeep(this.tipkeCards);
        //  this.memoryCards = _.shuffle(this.memoryCards.concat(cards1, cards2));//8
         this.tipkeCards=_.shuffle(cards1);
         this.memoryCards=_.shuffle(cards2);
    },
       methods:{
            turn(card){
               card.isFlipped=true;

           }
       }
            
       
     }



</script>

<style scoped>

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

 .memoryList{
    /* display: flex; 
    
    flex-flow: column wrap;
      justify-content: space-around; */
      /* align-content: stretch;  */
     /* background-color: red; */
    /* width:30%;
    margin-top: 5%;
    margin-right: 65%; */
    margin-left:8%;
       
   
     
 }
 .memoryList2{
    /* background-color: yellow; */
    /* width: 30%; */
    margin-right:8%;
    


 }
 
 
 .fliped{
      height: 300px;
    width: 300px;
 }
 
</style>