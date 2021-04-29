<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <AbsoluteLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn-back">
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

<!-- <Button>
    <GridLayout class="okvir1">
             <StackLayout>
              <Image v-if="image1" :key="image1.id"  class="jedan"
                                 :src="image1.src"  @tap="turn1"></Image>
               </StackLayout>
        </GridLayout>
</Button> -->
 <GridLayout class="okvir1">
             <StackLayout>
              <Image v-if="image1" :key="image1.id"  class="jedan"
                                 :src="image1.src" @tap="turn1"/>
               </StackLayout>
        </GridLayout> 

<GridLayout class="okvir2">
             <StackLayout>
              <Image src="~/images/gitara.jpg"   ></Image>
               </StackLayout>
        </GridLayout>
        <GridLayout class="okvir3">
             <StackLayout>
              <Image src="~/images/bubanj.jpg" ></Image>
               </StackLayout>
        </GridLayout>
        <GridLayout class="okvir4">
             <StackLayout>
              <Image src="~/images/violina.jpg" ></Image>
               </StackLayout>
        </GridLayout>

                 <GridLayout class="okvir5">
             <StackLayout>
              <Image src="~/images/klavir.jpg" ></Image>
               </StackLayout>
        </GridLayout>

<GridLayout class="okvir6">
             <StackLayout>
              <Image src="~/images/gitara.jpg" ></Image>
               </StackLayout>
        </GridLayout>
        <GridLayout class="okvir7">
             <StackLayout>
              <Image src="~/images/bubanj.jpg" ></Image>
               </StackLayout>
        </GridLayout>
        <GridLayout class="okvir8">
             <StackLayout>
              <Image src="~/images/violina.jpg" ></Image>
               </StackLayout>
        </GridLayout>


        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>

<script>
// import images from '../images/curica.png'; 
export default {
   data(){
          return {
             index: 0,
      image1: null,
      image2:null,
      image3:null,
      image4:null, 
      image5:null, 
      image6:null, 
      image7:null, 
      image8:null,
      images: [
          {
          id: 1,
          src: "https://i.pinimg.com/564x/eb/de/ea/ebdeea6715ef59d8b492f08ed5ca1494.jpg" 
        // src: "~/images/prva.jpg"
        //   KLAVIR
        },
        {
          id: 2,
          src: "https://i.pinimg.com/564x/bc/71/c4/bc71c447d73322fd0dfe7612347b067e.jpg" 
        //VIOLINA
        
          
        },
        {
          id: 3,
          src: "https://i.pinimg.com/564x/29/2b/06/292b06a448605bffc25b1d1fa85a1d2c.jpg"
        //BUBANJ
        },
        {
            id:4, 
            src : "https://i.pinimg.com/564x/ef/45/f3/ef45f375da7cf6068a381cd6b559d03b.jpg"
          //GITARA
        }, 
        {
          id: 5,
          src: "https://i.pinimg.com/564x/eb/de/ea/ebdeea6715ef59d8b492f08ed5ca1494.jpg" 
        //   KLAVIR
        
        },
        {
             id: 6,
          src: "https://i.pinimg.com/564x/bc/71/c4/bc71c447d73322fd0dfe7612347b067e.jpg" 
        //VIOLINA
        
        },
         {
          id: 7,
          src: "https://i.pinimg.com/564x/29/2b/06/292b06a448605bffc25b1d1fa85a1d2c.jpg"
        //BUBANJ
        },
         {
            id:8, 
            src : "https://i.pinimg.com/564x/ef/45/f3/ef45f375da7cf6068a381cd6b559d03b.jpg"
          //GITARA
        }]
}}, 
 methods:{
            turn1(){
                  if(this.index===0){
                    //   this.image1= "https://i.pinimg.com/564x/29/2b/06/292b06a448605bffc25b1d1fa85a1d2c.jpg"
                         console.log("Prva slika");

                         
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