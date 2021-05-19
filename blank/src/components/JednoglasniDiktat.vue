<template>
<Page class="sve" actionBarHidden="true" >
<ScrollView>
<StackLayout orientation="vertical" class="glavni">



	   <AbsoluteLayout class="btn-back" @tap="open(var1=1)" >
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
                    
            <AbsoluteLayout>
                <Label class="krug" />
               
                <!-- <Label class="kocka" textAlignment="center" fontWeight="Bold" /> -->

                <Label class="kocka" textWrap="true"  textAlignment="center">
   <FormattedString >
          <Span class="tekstDiktata" 
                text="
  KADENCA 
Tonalitet: D dur 
Glazbena mjera: 4/4

">
          </Span>
  </FormattedString>
</Label> 

                <button class="dugme" text="PRESLUŠATI FRAZE" @tap="open(var1=2)"></button>


            </AbsoluteLayout>
</StackLayout>
</ScrollView>
</Page>
</template>


<script>
import JednoglasniDiktat2 from '../components/JednoglasniDiktat2'
import Diktati from '../components/Diktati'


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
                    this.$navigateTo(Diktati);
                }else if(var1==2) {
                    this.$navigateTo(JednoglasniDiktat2);
                
                }
                else if(var1==3)
                {
                    this.$navigateTo(GameBox);

                }
                else if(var1==3)
                {
                    this.$navigateTo(PogodiInstrument);

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

.krug{
    width: 750px;
    height: 750px;
    background-color: #fa8c54;
    border-radius: 250%;
    left: -15%;
    top: 40%;
}
.kocka{
    background-color: #10dc88;
     height: 200px; 
     width: 400px;
     margin-left: 55%;
}

.dugme{
    width: 500px;
    height: 200px;
    background-color:#d4f0f5;
    top: 1100px;
    left: 250px;
}

</style>