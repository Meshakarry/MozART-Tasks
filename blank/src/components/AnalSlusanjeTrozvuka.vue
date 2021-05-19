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


<GridLayout class="ZaVideo"></GridLayout>

<AbsoluteLayout class="OkvirZaNote">
<AbsoluteLayout class="prviOkvir">
     <!-- <Button></Button>     -->
     <Button class="Button"  @tap="onTapTacna" ref="tacna" ></Button>

</AbsoluteLayout>


<AbsoluteLayout class="drugiOkvir">
     <!-- <Button></Button>     -->
     <Button class="Button"  @tap="onTap" ></Button>

</AbsoluteLayout>

<AbsoluteLayout class="treciOkvir">
     <!-- <Button></Button>     -->
     <Button class="Button"  @tap="onTap" ></Button>

</AbsoluteLayout>


<GridLayout v-if="tacna" class="TacanOdgovorSlika" textWrap="true"  textAlignment="center" >
             <StackLayout>
              <Image  src="~/images/tacanOdgovor1.jpg" ></Image>
               </StackLayout>
        </GridLayout>

<GridLayout v-if="porukaNePrikazuj" class="NETacanOdgovorSlika1"  textWrap="true"  textAlignment="center">
             <StackLayout>
              <Image src="~/images/netacanOdgovor.jpg" ></Image>
               </StackLayout>
        </GridLayout>

         <GridLayout v-if="porukaNePrikazuj" class="NETacanOdgovorSlika2" textWrap="true"  textAlignment="center">
             <StackLayout>
              <Image src="~/images/netacanOdgovor.jpg" ></Image>
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





 export default {
     computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    mounted() {
      
    //   this.reset();
    this.isDisabled=true;
    },
    data(){
    return{
       porukaNePrikazuj : '',
        porukaPrikazi: " ",
        zatvori:false,
        isDisabled:false,
        bodovi:0,
        tacna:false,

    }},
     methods:{
           onTap(){
            if(this.porukaNePrikazuj === ''){
                this.isDisabled=false;
                this.porukaNePrikazuj=this.porukaPrikazi
                this.tacna=true;
            }
                
                // this.netacna=true;
              
            },
              onTapTacna(){
                   if( this.$refs.tacna){
                       this.tacna=true;
                      this.bodovi+=10;

                   }
                this.porukaNePrikazuj=this.porukaPrikazi
                  this.isDisabled=false;

          },
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
.prviOkvir{
        height: 160px;
        width: 750px;
        /* border-radius: 100%; */
        background-color: black;

        margin-left: 160px;
        margin-top: 60px;

        background-image: url("~/images/KvintakordObrati .jpg");
        background-size: cover;
        background-position: center;
}
.drugiOkvir{
    height: 160px;
        width: 750px;
        /* border-radius: 100%; */
        background-color: black;

        margin-left: 160px;
        margin-top: 250px;

        background-image: url("~/images/KvintakordObrati .jpg");
        background-size: cover;
        background-position: center;
}
.treciOkvir
{
        height: 160px;
        width: 750px;
        /* border-radius: 100%; */
        background-color: black;

        margin-left: 160px;
        margin-top: 440px;

        background-image: url("~/images/KvintakordObrati .jpg");
        background-size: cover;
        background-position: center;
}
.Button{
         height: 210px;
        width: 800px;
    background-color: transparent;
    margin-top: -20px;
    margin-left: -20px;

}
.TacanOdgovorSlika{
        height: 100px;
        width: 100px;
        margin-top: 90px;
        margin-left: 4%;
        border-radius: 250%;

}
.NETacanOdgovorSlika1{
        height: 100px;
        width: 100px;
        margin-top: 270px;
        margin-left: 4%;
        border-radius: 250%;
}
.NETacanOdgovorSlika2{
        height: 100px;
        width: 100px;
        margin-top: 460px;
        margin-left: 4%;
        border-radius: 250%;
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
</style>