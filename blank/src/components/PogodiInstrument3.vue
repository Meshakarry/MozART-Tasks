<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <AbsoluteLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn-back" >
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



<GridLayout class="ZaVideo"></GridLayout>

<AbsoluteLayout class="prviOkvir">
     <!-- <Button></Button>     -->
          <Button @tap="onTap" ></Button>    

</AbsoluteLayout>

<AbsoluteLayout class="drugiOkvir">
     <Button @tap="onTap"   ></Button>    
   
</AbsoluteLayout>

<AbsoluteLayout class="treciOkvir">
          <Button @tap="onTapTacna" ref="tacna" ></Button>    
   
</AbsoluteLayout>


 <GridLayout v-if="porukaNePrikazuj" class="TacanOdgovorSlika" textWrap="true"  textAlignment="center">
             <StackLayout>
              <Image  src="~/images/netacanOdgovor.jpg" ></Image>
               </StackLayout>
        </GridLayout>

 <GridLayout v-if="porukaNePrikazuj" class="NETacanOdgovorSlika1"  textWrap="true"  textAlignment="center">
             <StackLayout>
              <Image src="~/images/netacanOdgovor.jpg" ></Image>
               </StackLayout>
        </GridLayout>

         <GridLayout v-if="tacna" class="NETacanOdgovorSlika2" textWrap="true"  textAlignment="center">
             <StackLayout>
              <Image src="~/images/tacanOdgovor1.jpg" ></Image>
               </StackLayout>
        </GridLayout>



<Button class="PokreniPonovo" text="Pokreni ponovo" @tap="reset()"></Button>
<Button :class="[ isDisabled?'disabled':'PokreniNarednu']"  text="Pokreni narednu" @tap="open(var1=2)" ></Button>
 <AbsoluteLayout>
   <Label class="labelBod" left="240" top="20">Bodovi :</Label>
   <TextField class="inputBod" left="310" top="20" :text="bodovi"  borderRadius="10" borderColor="orange" borderWidth="2" />

 </AbsoluteLayout>
         

        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>
<script>
  import PogodiInstrument from '../components/PogodiInstrument'
  import PogodiInstrument4 from '../components/PogodiInstrument4'


export default {
    props:["bodovi"],
    data(){
        return{
            porukaNePrikazuj : '',
        porukaPrikazi: "        1.  Napisite u svoje kajdanke 10 cijelih nota d1",
       var1:1,
        var2:2,
        isDisabled:false,
        zatvori:false,
        isLoadedZero:true,
        tacna:false,
        isLoadedTen:false

    }},
        mounted() {
          
        this.isDisabled=true;
        if(this.bodovi!=0 ){
         this.isLoadedZero=false;
         this.isLoadedTen=true;
        }
        else if(this.bodovi==10){
         isLoadedTen=true;
        }
        },
    methods:{
          onTap(){
            if(this.porukaNePrikazuj === ''){
                this.isDisabled=false;
                this.porukaNePrikazuj=this.porukaPrikazi
                this.tacna=true;
                
                // this.netacna=true;
              
            }
           
        
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
                    this.$navigateTo(PogodiInstrument4,{
                     props:{
                         bodovi:this.bodovi
                     }
                    
                    
                    });
                
                }
          },
          reset(){
              this.porukaNePrikazuj='';
            this.tacna=false;

              switch(this.bodovi){
                  case 30:
                      this.bodovi=20;
                  break;
                  case 20:
                    if(this.isLoadedTen){
                        this.bodovi=10;
                    }
                    else{
                    this.bodovi=20;
                    }
                break;
                  case 10:
             if(!this.isLoadedZero && this.isLoadedTen){
                this.bodovi=10;
             }
             else {
               this.bodovi=0;
             }
                 break;

              }
                //  case this.isLoadedZero:
                     
                //      this.bodovi=0;
              this.isDisabled=true;
          },
        
          
          
    }
}  

</script>


<style scoped>

.glavni{
  background-image: url("~/images/ribice.jpg");
  background-size: cover;
  background-position: center;
}
.fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 40%;
        left: 30%;
        font-size: 30%;
    }
    .ZaVideo{
         background-image: url("~/images/punoNota.png");
        background-size: cover;
        background-position: center;
        background-color: black;
        width: 700px;
        height: 400px;
        margin-top: 200px;
        margin-left: 18%;
    }
    .prviOkvir{
        height: 350px;
        width: 350px;
        border-radius: 100%;
        background-color: black;
        margin-top: 650px;
        margin-left: 10%;
        background-image: url("~/images/klavirNovi.jpg");
        background-size: cover;
        background-position: center;
    }
    Button{
        background-color: transparent;
        /* margin-top: 20%; */
        border-radius: 100%;
        height: 350px;
        width: 350px;
        margin-left: -2px;
        margin-top: -2px;
        /* border-style: 1px solid transparent; */

    }
    .drugiOkvir{
         height: 350px;
        width: 350px;
        border-radius: 100%;
        background-color: black;
        margin-top: 650px;
        margin-left: 60%;
        background-image: url("~/images/bubanj.jpg");
        background-size: cover;
        background-position: center;
    }
    .treciOkvir{
         height: 350px;
        width: 350px;
        border-radius: 100%;
        background-color: black;
        margin-top: 900px;
        margin-left: 35%;
        background-image: url("~/images/harmonika.jpg");
        background-size: cover;
        background-position: center;
    }
.TacanOdgovorSlika{
        height: 150px;
        width: 150px;
        margin-top: 650px;
        margin-left: 10%;
        border-radius: 250%;

}
.NETacanOdgovorSlika1{
      height: 150px;
        width: 150px;
        border-radius: 250%;
        /* background-color: black; */
        margin-top: 650px;
        margin-left: 60%;
}
.NETacanOdgovorSlika2{
      height: 150px;
        width: 150px;
        border-radius: 250%;
        /* background-color: black; */
        margin-top: 900px;
        margin-left: 35%;
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
    margin-left: 200px;
    color: black;

}
.PokreniNarednu{
    width: 200px;
    height: 200px;
    background-color: orange;
    border-radius: 100%;
    margin-top: 1300px;
    margin-left: 700px;
    color: white;
}
  .disabled{
      opacity: 0.9; 
     width: 200px;
    height: 200px;
    border-radius: 100%;
    margin-top: 1300px;
    margin-left: 700px;
    color: black;

 }
 .labelBod{
  color:orange;
  font-size: 23;
 }
 .inputBod{
  width:50;
  /* padding: 5; */
  text-align: center;
 }
</style>