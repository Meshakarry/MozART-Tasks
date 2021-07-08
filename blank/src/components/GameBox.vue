<template>
    <Page class="sve" actionBarHidden="true">

<ScrollView class="glavni">

        <StackLayout orientation="vertical">

            <AbsoluteLayout class="btn">
                <Label  class="back"
                    style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                <Label class="back2"
                    style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                <Label class="fas" textWrap="true" @tap="open(var1=4)">
                    <FormattedString>
                        <Span text.decode="&#xf060;" fontAttributes="Bold" @tap="$navigateBack"></Span>
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

            <AbsoluteLayout class="prvi" @tap="open(var1=1)">
                    <Label class="memory" text=" Memory " textAlignment="center"></Label>
            </AbsoluteLayout>
            <AbsoluteLayout class="drugi" @tap="open(var1=2)">
                <Label class="pazl" text=" Puzzle " textAlignment="center"></Label>
            </AbsoluteLayout>
             <AbsoluteLayout class="treci" @tap="open(var1=3)">
                <Label class="hear" text=" Prepoznaj instrument " textAlignment="center"></Label>
            </AbsoluteLayout>

            
            <!-- <AbsoluteLayout class="prvi" width="250" height="180"
                >
                <Image
                    src="~/images/puzle.png"
                     class="pazl" />
                <Label class="memory" text="Memory--" backgroundColor="white"
                    left="0" textWrap="true" textAlignment="center"
                    textTransform="capitalize" top="153" ></Label>
            </AbsoluteLayout>
            <AbsoluteLayout class="drugi" width="250" height="180"
                >
                <Image
                    src="~/images/mem.png"
                     class="slikaMemory"  />
                <Label class="memory" text="Slagalica" backgroundColor="white"
                    left="0" textWrap="true" textAlignment="center"
                    textTransform="capitalize" top="153" />
            </AbsoluteLayout>
            <AbsoluteLayout class="treci" width="250" height="180" >
                <Image
                    src="~/images/staCujes.jpg"
                     class="edin" strech="aspectFill" />
                <Label class="staCujes" text="Prepoznaj zvuk instumenta--"
                    backgroundColor="white" left="0" textWrap="true"
                    textAlignment="center" textTransform="capitalize"
                    top="153" />
            </AbsoluteLayout> -->
        </StackLayout>

        </ScrollView>
    </Page>
</template>

<script>
    import Memori from '../components/Memori'
    import Puzzle from '../components/Puzzle'
    import Home from '../components/Home'
    import PogodiInstrument from '../components/PogodiInstrument'
    import PuzzleCategories from '../components/PuzzleCategories'
import MusicButton from '../components/MusicButton'






    export default {
       components: {MusicButton, },

        methods: {
          open(var1){
                
                if(var1===1){
                    this.$navigateTo(Memori);
                }else if(var1==2) {
                    this.$navigateTo(PuzzleCategories);
                }
                else if(var1==3) {
                    this.$navigateTo(PogodiInstrument);
                }
                else{
                    this.$navigateTo(Home);
                }
                console.log("When nothings goes right, go left");
            }
        },
        data() {
            return {
                textFieldValue: ""
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }
    .far {
        font-family: Font Awesome 5 Free, fa-regular-400;
        font-weight: 400;
    }
    .fab {
        font-family: Font Awesome 5 Brands, fa-brands-400;
        font-weight: 400;
    }
    .fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 42%;
        left: 31%;
        font-size: 30%;
    }
    .description-label {
        margin-bottom: 15;
    }
    .glavni{
         background-image: url("~/images/GB.jpg");
        background-size: cover;
        background-position: center;
    }
</style>