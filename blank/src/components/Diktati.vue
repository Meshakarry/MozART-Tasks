<template>
<Page class="sve" actionBarHidden="true">
<ScrollView>
<StackLayout orientation="vertical" class="glavni">

  <AbsoluteLayout class="btn">
                <Label  class="back"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                <Label class="back2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas" textWrap="true" @tap="open(var1=3)">
                    <FormattedString>
                        <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                    </FormattedString>
                </Label>
                 <Label class="circle-music1"
                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                    <Label class="circle-music2"
                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                        <!-- <Button class="fas" text.decode="&#xf060;"  ></Button> -->
                 <MusicButton/>
  </AbsoluteLayout>

<!-- <Label v-if="porukaNePrikazuj"  text="nesto" :key="porukaPrikazi" ></Label> -->
<!-- <Label v-if="porukaNePrikazuj"  text="nesto" :v-text="porukaPrikazi"></Label> -->


<AbsoluteLayout class="prviOkvir">
    <AbsoluteLayout class="drugiOkvir">
     <Button class="treciOkvir" text="ANALITIČKO SLUŠANJE TROZVUKA" @tap="onTap" ></Button>    
    </AbsoluteLayout>
</AbsoluteLayout>


<Label v-if="porukaNePrikazuj" class="tekstic" textWrap="true"  textAlignment="center" @tap="open(var1=1)">
   <FormattedString >
          <Span class="tekstDiktata" 
                text="

      1. Napisite u svoje kajdanke 10 cijelih nota d1 
       rasporedjenih u 10 taktova.
                
     2. Zapišite šiframa i notama trozvuke koje prepoznajete
      u audio zapisu.
                
    * Zvuk se može preslušati 3 puta">
          </Span>
  </FormattedString>
</Label> 





 <AbsoluteLayout class="prviOkvir2">
    <AbsoluteLayout class="drugiOkvir2">
     <Button class="treciOkvir2" text="JEDNOGLASNI DIKTAT" @tap="onTap1" ></Button>    
    </AbsoluteLayout>
</AbsoluteLayout> 

<Label v-if="porukaNePrikazuj1" class="tekstic2" textWrap="true" textAlignment="center" @tap="open(var1=2)">
   <FormattedString >
          <Span class="tekstDiktata2"
                text="

    1. U nastavku će vam biti određen tonalitet
       i glazbena mjera kompozicije.
                
   2.Preslušajte kadencu, pređite na 
     preslušavanje fraza i zapisivanje jednoglasnog 
     diktata.
                
    ">
          </Span>
  </FormattedString>
</Label> 





</StackLayout>
</ScrollView>
</Page>
</template>
<script>
import MusicButton from '../components/MusicButton'

// import DictatsCompositions from './components/DictatsCompositions.vue'; 
import DictatsCompositions from '../components/DictatsCompositions'
import Home from '../components/Home'
import Diktati from '../components/Diktati'
import AnalSlusanjeTrozvuka from '../components/AnalSlusanjeTrozvuka'
  import JednoglasniDiktat from '../components/JednoglasniDiktat'





  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
       components: {MusicButton, },
    
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
methods:{
          onTap(){
            if(this.porukaNePrikazuj === ''){
                // console.log("Prikazi nesto")
                this.porukaNePrikazuj=this.porukaPrikazi
                this.porukaNePrikazuj1='';

            }
             
          },
          onTap1(){
            if(this.porukaNePrikazuj1 === ''){
                this.porukaNePrikazuj1=this.porukaPrikazi1
              this.porukaNePrikazuj='';
            }
           
          }, 
           open(var1){
                
                if(var1===1){
                    this.$navigateTo(AnalSlusanjeTrozvuka);
                }else if(var1==2) {
                    this.$navigateTo(JednoglasniDiktat);
                
                }
                else if(var1==3) {
                    this.$navigateTo(Home);
             
                }

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
    background-image: url("~/images/poyy.jpg");
  background-size: cover;
  background-position: center;
}
.prviOkvir{
    background-color: #7B8EAE;
    width: 850px;
    height: 400px;
    border-radius: 70%;
    margin-top: 100px;
}
.drugiOkvir{
    background-color: #F2F1E1;
    width: 840px;
    height: 300px;
    border-radius: 70%;
    margin-top: 50px;
    border: 1px solid yellow;
}
.treciOkvir{
    background-color: rgb(250, 248, 250);
    width: 720px;
    height: 200px;
    border-radius: 70%;
    margin-top: 50px;
    margin-left: 50px;
    color:red;
    font-weight: bold;
    font-size: 18px;
}
.tekstic{
  background-color: #F2F1E1;
    width: 820px;
    height: 400px;
    border-radius: 70%;
    margin-top: -100px;
  white-space: initial;
}
.tekstDiktata{
    color: black;
    padding-top: 20px;
}
.prviOkvir2{
    background-color: #7B8EAE;
    width: 850px;
    height: 400px;
    border-radius: 70%;
    margin-top: 100px;
}
.drugiOkvir2{
    background-color: #F2F1E1;
    width: 840px;
    height: 300px;
    border-radius: 70%;
    margin-top: 50px;
    border: 1px solid yellow;
}
.treciOkvir2{
    background-color: rgb(250, 248, 250);
    width: 720px;
    height: 200px;
    border-radius: 70%;
    margin-top: 50px;
    margin-left: 50px;
    color:red;
    font-weight: bold;
    font-size: 18px;
}
.tekstic2{
  background-color: #F2F1E1;
    width: 820px;
    height: 400px;
    border-radius: 70%;
    margin-top: -100px;
    border: 1px solid yellow;
  white-space: initial;
}
.tekstDiktata2{
    color: black;
    /* padding-top: 20px; */
    margin-left: 20px;
}
</style>