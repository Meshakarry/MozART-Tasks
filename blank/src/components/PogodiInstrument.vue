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
     <Button ></Button>    
</AbsoluteLayout>

<AbsoluteLayout class="drugiOkvir">
     <Button ></Button>    
</AbsoluteLayout>

<AbsoluteLayout class="treciOkvir">
     <Button ></Button>    
</AbsoluteLayout>


         

        </AbsoluteLayout>
    </ScrollView>
</Page>
</template>

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
        background-image: url("~/images/kompozicija.png");
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
</style>