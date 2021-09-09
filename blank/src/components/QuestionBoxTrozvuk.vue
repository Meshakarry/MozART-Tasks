<template>
<Page class="sve" actionBarHidden="true" >
<ScrollView>
<AbsoluteLayout orientation="vertical" class="glavni">

   <AbsoluteLayout class="btn-back" @tap="open(var1=3)" >
                            <Label class="back"
                                style="background-color: #FA8C54; height: 60; width: 60; border-radius: 50%; " />
                            <Label class="back2"
                                style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                            <Label class="fas" textWrap="true">
                                <FormattedString>
                                    <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                </FormattedString>
                            </Label>
                            <!-- <Button class="fas" text.decode="&#xf060;" ></Button> -->
            </AbsoluteLayout>


 <GridLayout class="ZaVideo">
   

 </GridLayout>


  <ButtonTrozvuk :audio="pitanja[index].audio"/> 

 <!-- Ovo predstavlja okvir za pitanja -->

            
 <AbsoluteLayout class="OkvirZaNote"> 
   
  
 <FlexBoxLayout class="okvirPitanja">
<GridLayout   v-for="(answer,index) in shuffledAnswers"  :key="index" @tap="onTap(index)" >

                <Image :src="answer" :key="index" class="odgovor"> </Image>

  </GridLayout>
</FlexBoxLayout>
   
       
     <GridLayout class="prikaz"  textWrap="true"  textAlignment="center" >
             <StackLayout>
              <Image v-if="isCorrect && odabraniIndex===0" src="~/images/tacanOdgovor1.jpg" class="PrvaPozicija"></Image>
              <Image v-if="isCorrect && odabraniIndex===1" src="~/images/tacanOdgovor1.jpg" class="DrugaPozicija"></Image>
              <Image v-if="isCorrect && odabraniIndex===2" src="~/images/tacanOdgovor1.jpg" class="TrecaPozicija"></Image>
              <Image v-if="inCorrect && odabraniIndex!==0" src="~/images/netacanOdgovor.jpg" class="PrvaPozicija"></Image>
              <Image v-if="inCorrect && odabraniIndex!==1" src="~/images/netacanOdgovor.jpg" class="DrugaPozicija"></Image>
              <Image v-if="inCorrect && odabraniIndex!==2 " src="~/images/netacanOdgovor.jpg" class="TrecaPozicija"></Image>



               </StackLayout>
        </GridLayout>
              
    
</AbsoluteLayout>




<Button class="PokreniPonovo" text="Pokreni ponovo" @tap="reset()"></Button>
<Button class="PokreniNarednu" :class="[ isDisabled?'disabled':'PokreniNarednu']" text="Pokreni narednu" @tap="open(var1=2)"></Button>
<AbsoluteLayout>
   <Label class="labelBod" left="490" top="-340" color="orange">Bodovi :</Label>
   <TextField class="inputBod" left="560" top="-340" :text="bodovi" editable="false"  borderRadius="10" borderColor="orange" borderWidth="2" />

 </AbsoluteLayout>
</AbsoluteLayout>
</ScrollView>
</Page>
</template>
<script >
  import AnalSlusanjeTrozvuka from '../components/AnalSlusanjeTrozvuka'
  import AnalSlusanjeTrozvuka2 from '../components/AnalSlusanjeTrozvuka2'
  import Diktati from '../components/Diktati'
import ButtonTrozvuk from '../components/ButtonTrozvuk'
    import {pitanja} from '~/data/trozvukPitanja.js'
   import _ from 'lodash'






 export default {
     
    mounted() {
      
    //   this.reset();
                //     let answer=[...this.pitanja[this.index].incorrectAnswers,this.pitanja[this.index].correctAnswer];
                // console.log(answer);
                //     let mesha=_.shuffle(answer);
                //     console.log(mesha);
                //     var tacan=mesha.indexOf(this.pitanja[this.index].correctAnswer);

                //     console.log(tacan);
                this.shuffles();
                

    this.isDisabled=true;
    },
    data(){
    return{
       porukaNePrikazuj : '',
        porukaPrikazi: " ",
        zatvori:false,
        audio:"",
        isDisabled:false,
        bodovi:0,
        tacna:false,
        pitanja: pitanja,
        index : 0,
        odabraniIndex: null,
        correctIndex: null,
        shuffledAnswers: [],
        isCorrect:false,
        inCorrect:false,

        answered: false


    }},
       components: {ButtonTrozvuk, },
       
       
     methods:{
         shuffles(){
                let answer=[...this.pitanja[this.index].incorrectAnswers,this.pitanja[this.index].correctAnswer];
                this.shuffledAnswers=_.shuffle(answer);
                this.correctIndex=this.shuffledAnswers.indexOf(this.pitanja[this.index].correctAnswer);
                // this.correctIndex=0;
                 console.log(this.shuffledAnswers);
                 console.log(this.correctIndex);
            },
         onTap(index){
            // if(this.porukaNePrikazuj === ''){
            //     this.isDisabled=false;
            //     this.porukaNePrikazuj=this.porukaPrikazi
            //     this.tacna=true;


            // } 
            this.odabraniIndex=index;

                if(this.odabraniIndex=== this.correctIndex){
                    this.isCorrect=true;
                    this.isDisabled=false;
                    this.inCorrect=false;
                    // console.log(this.$refs.tacnica);
                    // console.log(this.$refs.tacnica.style.backgroundColor="red");
                    //  this.$refs.tacnica.backgroundImage="url('~/images/tacanOdgovor1.jpg')";
                
                }
                else{

                    this.inCorrect=true;
                    this.isCorrect=false;
                }
                    // this.$refs.netacna.backgroundImage="url('~/images/netacanOdgovor.jpg')";
                    // this.$refs.netacna1.backgroundImage="url('~/images/netacanOdgovor.jpg')";

                
                this.answered=true;

                this.index++;
                // this.netacna=true;
              
            },
            
        //       onTapTacna(){
        //            if( this.$refs.tacna){
        //                this.tacna=true;
        //               this.bodovi+=10;

        //            }
        //         this.porukaNePrikazuj=this.porukaPrikazi
        //           this.isDisabled=false;

        //   },
           open(var1){
                
                 if(var1==2 && this.porukaNePrikazuj!=='' ) {
                    this.$navigateTo(AnalSlusanjeTrozvuka2,{
                     props:{
                         bodovi:this.bodovi
                     }
                    
                    
                    });
               
                }
                else if(var1==3){
                    this.$navigateTo(Diktati);

                }
          },
           reset(){
              this.porukaNePrikazuj='';
            this.tacna=false;
            this.bodovi=0;
              this.isDisabled=true;
          },
          next(){
              this.index++;
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
.glavni{
     background-image: url("~/images/diktatiPoz.jpg");
  background-size: cover;
  background-position: center;
}
.ZaVideo{
    width: 600px;
    height: 600px;
    border-radius: 150%;
    background-color: #FA8C54;
    margin-right: 1000px;
    margin-top: 300px;
     /* background-image: url("~/images/videoSlika.jpg");
  background-size: cover;
  background-position: center; */

}
.OkvirZaNote{

    width: 1800px;
    height: 680px;
    border-radius: 100%;
    background-color: #BAE1DF;
    margin-top: 1000px;
    margin-left: 150px;
}


.Button{
         height: 210px;
        width: 800px;
    background-color: transparent;
    margin-top: -20px;
    margin-left: -20px;

}
.prikaz{
    margin-left: 4%;
}
.PrvaPozicija{
     height: 100px;
        width: 100px;
        margin-top: 90px;
        border-radius: 250%;
        

}
.DrugaPozicija{
        height: 100px;
        width: 100px;
         margin-top: 270px;
        border-radius: 250%;
         
}
.TrecaPozicija{
        height: 100px;
        width: 100px;
        margin-top: 480px;
       
        border-radius: 250%;
}
.tacna{
    background-color: green;
        height: 160px;
        width: 750px;
        margin-left: 160px;
         margin-top: 50px;
}
.netacna{
    background-color: rebeccapurple;
        height: 160px;
        width: 750px;
        margin-left: 160px;
         margin-top: 50px;
}
Image{
    border-radius: 250%;
}
.PokreniPonovo{
    width: 200px;
    height: 200px;
    background-color: yellow;
    border-radius: 100%;
    margin-top: 1500px;
    /* margin-left: 200px; */
    color: black;

}
.PokreniNarednu{
    width: 200px;
    height: 200px;
    background-color: orange;
    border-radius: 100%;
    /* margin-top: 100px; */
    /* margin-bottom: 400px; */
    margin-top: 600px;
    margin-left: 800px;

    color: white;
}
 .disabled{
      opacity: 0.9; 
      width: 200px;
    height: 200px;
  
    border-radius: 100%;
    margin-top: 600px;
    margin-left: 800px;
    color: black;
    background-color: lightgray;
 }
 .labelBod{
  color:orange;
  font-size: 21;
  margin-top: 900px;
  margin-left: -600px;
 }
 .inputBod{
  width:50;
  /* padding: 5; */
  text-align: center;
  margin-top: 900px;
  margin-left: -550px;
  /* background-color: blue; */
 }
 .okvirPitanja{
     display:flex;
     flex-direction: column;
     flex-wrap: wrap;
     

}
.odgovor{
    height: 160px;
        width: 750px;
        margin-left: 160px;
         margin-top: 50px;
}
</style>