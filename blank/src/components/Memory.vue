<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <AbsoluteLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn-back" @tap="open(var1=1)">
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


         
         <GridLayout class="okvir1" id="okvir1" ref="okvir1" >
                            
                          <Image v-if="image1" :key="image1.id"  class="jedan"
                                 :src="image1.src" /> 
                           
        </GridLayout>

         <GridLayout class="okvir2" id="okvir2" ref="okvir2">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>


      <GridLayout class="okvir3" id="okvir3" ref="okvir3">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>
        <GridLayout class="okvir4" id="okvir4" ref="okvir4">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>
        <GridLayout class="okvir5" id="okvir5" ref="okvir5">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>
        <GridLayout class="okvir6" id="okvir6" ref="okvir6">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>
        <GridLayout class="okvir7" id="okvir7" ref="okvir7">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>
        <GridLayout class="okvir8" id="okvir8" ref="okvir8">
                            
                          <Image v-if="image1" :key="image1.id"  class=""
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                          
        </GridLayout>





        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>

<script>
// import images from '../images/curica.png'; 
    import MemoryCategories from '../components/MemoryCategories'
export default {




    
     methods: {
          open(var1){
                
                if(var1===1){
                    this.$navigateTo(MemoryCategories);
                }
    
        }},
setup(){
  const CardList = [] 

  for(let i=0;i<16;i++)
  {
    CardList.push(i);
  }
  return{
    CardList
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
    background-image: url("~/images/memPoz.jpg");
  background-size: cover;
  background-position: center;
}

.okvir1{
    background-color: black;
    height: 300px;
    width: 300px;
    /* margin-right: 10px ; */
    margin-left: 200px;
   margin-top: 300px;

}
.jedan{
    height: 300px;
    width: 300px;
}
.okvir2{
    background-color: pink;
    height: 300px;
    width: 300px;
   margin-top: 300px;
    margin-left: 550px;
    
  
}
.okvir3{
background-color: yellow;
    height: 300px;
    width: 300px;
   margin-top: 650px;
        margin-left: 200px;

}
.okvir4{
background-color: purple;
    height: 300px;
    width: 300px;
   margin-top: 650px;
           margin-left: 550px;

}
.okvir5{
background-color: rgb(0, 255, 85);
    height: 300px;
    width: 300px;
   margin-top: 1000px;
        margin-left: 200px;

}
.okvir6{
background-color: rgb(0, 119, 128);
    height: 300px;
    width: 300px;
   margin-top: 1000px;
           margin-left: 550px;

}
.okvir7{
background-color: rgb(255, 0, 149);
    height: 300px;
    width: 300px;
   margin-top: 1350px;
        margin-left: 200px;

}
.okvir8{
background-color: rgb(128, 0, 0);
    height: 300px;
    width: 300px;
   margin-top: 1350px;
           margin-left: 550px;

}

</style>