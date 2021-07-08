<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <AbsoluteLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn"  >
                <Label  class="back"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; " @tap="open(var1=1)" />
                <Label class="back2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas" textWrap="true">
                    <FormattedString>
                        <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
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
             <Label class="home1"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; "  @tap="open(var1=3)" />
                <Label class="home2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas-home" textWrap="true">
                    <FormattedString>
                        <Span text.decode="&#xf015;" fontAttributes="Bold"></Span>
                    </FormattedString>
              	</Label>
                  <Label class="VratiSe" text="Vrati se na početak"></Label>

                <Label class="replay1"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; " @tap="open(var1=4)"/>
                <Label class="replay2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas-replay" textWrap="true">
                    <FormattedString>
                        <Span text.decode="&#xf122;" fontAttributes="Bold"></Span>
                    </FormattedString>
              	</Label>  
                  <Label class="IgrajPonovo" text="Igraj ponovo"></Label>


<AbsoluteLayout class="TreciOkvir" >
    <Label class="tekst" text="Vaš rezultat !!"></Label>
</AbsoluteLayout>
<AbsoluteLayout class="PrviOkvir">

<AbsoluteLayout class="DrugiOkvir">
     <Label top="60" textWrap="true" class="ukupno" textAlignment="center" left="20">
     <FormattedString >
     <span text="Osvojili ste ukupno " class="txt1"/>
     <span  class="txt2"> {{bodovi}} </span>
     <span text=" bodova" class="txt3" />

     </FormattedString>
     </Label>
    <!-- <Label>{{bodovi}}</Label> -->
</AbsoluteLayout>
</AbsoluteLayout>

         

        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>
<script>
  import PogodiInstrument from '../components/PogodiInstrument'
  import PogodiInstrument2 from '../components/PogodiInstrument2'
  import GameBox from '../components/GameBox'
import MusicButton from '../components/MusicButton'





export default {
     props:["bodovi"],
    data(){
    return{
       porukaNePrikazuj : '',
        porukaPrikazi: "        1.  Napisite u svoje kajdanke 10 cijelih nota d1",
       var1:1,
         porukaNePrikazuj1 : '',
        porukaPrikazi1: "        1.  Napisite u svoje kajdanke 10 cijelih nota d1",
        var2:2,
        zatvori:false,
        

    }},
       components: {MusicButton, },

    methods:{
          onTap(){
            if(this.porukaNePrikazuj === ''){
                // console.log("Prikazi nesto")
                this.porukaNePrikazuj=this.porukaPrikazi
                this.porukaNePrikazuj1='';

            }
             
          },
          open(var1){
                
                if(var1===1){
                    this.$navigateTo(PogodiInstrument);
                }
                else if(var1==3)
                {
                    this.$navigateTo(GameBox);

                }
                else if(var1==4)
                {
                    this.$navigateTo(PogodiInstrument);

                }
          }
    }
}  

</script>


<style scoped>

/* .fas-home{
margin-top: 30px;
} */
.fas-home{
    font-family: 'Font Awesome 5 Free', 'fa-solid-900';
  font-weight: 900;
  color: black;
  font-size: 30%;
   margin-top: 820px;
    margin-left: 630px;
    z-index: 1;

}
.fas-replay{
     font-family: 'Font Awesome 5 Free', 'fa-solid-900';
  font-weight: 900;
  color: black;
  font-size: 30%;
  margin-top: 830px;
    margin-left: 325px;
    z-index: 1;
}
.replay1{
    margin-top: 800px;
    margin-left: 300px;
    z-index: 1;
}
.replay2{
    margin-top: 820px;
    margin-left: 320px;
    z-index: 1;
}
.home1{
    margin-top: 800px;
    margin-left: 600px;
    z-index: 1;
}
.home2{
     margin-top: 816px;
    margin-left: 620px;
    z-index: 1;
}

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
    .PrviOkvir{
        width: 800px;
        height: 570px;
        background-color: #F2C576;
        border-radius: 20%;
        margin-top: 500px;
        margin-left: 150px;

    }
    .DrugiOkvir{
         width: 750px;
        height: 500px;
        background-color: #F3D8A7;
        border-radius: 20%;
        margin-top:40px;
        margin-left: 20px;
        /* margin-top: 500px;
        margin-left: 150px; */
    }
    .TreciOkvir{
        background-color: #F8E9DA;
        width: 500px;
        height: 200px;
        margin-top: 470px;
        margin-left: 280px;
        border-radius: 20%;
        z-index: 1;
    }
    .tekst{
        font-size: 23px;
        color: orange;
        margin-left: 70px;
        margin-top: 50px;
        font-weight: bold;

    }
    .ukupno{
        text-align: center;
        line-height: 2rem;

    }
    .txt{
        line-height: 5rem;
        letter-spacing: 1rem;
        /* color:gold; */
    }
    .txt1{
        font-size: 18px;
        line-height: 5rem;
        letter-spacing: 1rem;
    }
    .txt2{
        font-size: 20px;
        font-weight: bold;
        line-height: 5rem;
        letter-spacing: 1rem

    }
    .txt3{
        font-size: 18px;
        line-height: 5rem;
        letter-spacing: 1rem;
    }
    .VratiSe{
        margin-top: 960px;
    margin-left: 550px;
    z-index: 1;
    }
    .IgrajPonovo{
        margin-top: 960px;
    margin-left: 300px;
    z-index: 1;
    }
</style>