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
                <Label class="krug" top="20"/>
                <Label class="kocka" left="130" text="1. FRAZA" textAlignment="center" fontWeight="Bold" />

                <Label class="krug" top="130" left="210"/>
                <Label class="kocka" top="100" left="320" text="2. FRAZA" textAlignment="center" fontWeight="Bold" />

                <Label class="krug" top="280"/>
                <Label class="kocka" top="252"  text="3. FRAZA" textAlignment="center" fontWeight="Bold" />

                <Label class="krug" top="370" left="210" @tap="open(var1=2)"/>
                <Label class="kocka" top="340" left="320" text="4. FRAZA" textAlignment="center" fontWeight="Bold" />

            </AbsoluteLayout>
</StackLayout>
</ScrollView>
</Page>
</template>


<script>

  import JednoglasniDiktat3 from '../components/JednoglasniDiktat3'
  import JednoglasniDiktat from '../components/JednoglasniDiktat'


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
                    this.$navigateTo(JednoglasniDiktat);
                }else if(var1==2) {
                    this.$navigateTo(JednoglasniDiktat3);
                
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
    width: 500px;
    height: 500px;
    background-color: #fa8c54;
    border-radius: 250%;
}
.kocka{
    background-color: #10dc88;
     height: 80px; 
     width: 200px;
}

</style>