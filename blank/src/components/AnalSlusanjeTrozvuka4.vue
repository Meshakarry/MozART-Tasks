<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <AbsoluteLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn-back" @tap="open(var1=3)">
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


<AbsoluteLayout class="TreciOkvir" >
    <Label class="tekst" text="Vaš rezultat !!"></Label>
</AbsoluteLayout>
<AbsoluteLayout class="PrviOkvir">

<AbsoluteLayout class="DrugiOkvir"></AbsoluteLayout>
</AbsoluteLayout>

         

        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>
<script>
  import PogodiInstrument from '../components/PogodiInstrument'
  import PogodiInstrument2 from '../components/PogodiInstrument2'
  import Diktati from '../components/Diktati'



export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    data(){
    return{
       porukaNePrikazuj : '',
        porukaPrikazi: "        1.  Napisite u svoje kajdanke 10 cijelih nota d1",
       var1:1,
         porukaNePrikazuj1 : '',
        porukaPrikazi1: "        1.  Napisite u svoje kajdanke 10 cijelih nota d1",
        var2:2,
        zatvori:false

    }},
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
                }else if(var1==2) {
                    this.$navigateTo(PogodiInstrument2);
                
                }
                else if(var1==3)
          {
                    this.$navigateTo(Diktati);

          }
          }
    }
}  

</script>


<style scoped>

.glavni{
  background-image: url("~/images/diktatiPoz.jpg");
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
        margin-top: 600px;
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
        margin-top: 500px;
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
</style>