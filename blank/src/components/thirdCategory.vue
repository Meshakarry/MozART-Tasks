<template>
    <Page class="sve" actionBarHidden="true">

        <ActionBar text="Treca kategorija" />

        <ScrollView orientation="vertical">

            <StackLayout orientation="vertical" class="glavni">

                <AbsoluteLayout class="btn">
                    <Label  class="back"
                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                    <Label class="back2"
                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                    <Label class="fas" textWrap="true" @tap="open(var1=1)">
                        <FormattedString>
                            <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                        </FormattedString>
                    </Label>
                            <!-- <Button class="fas" text.decode="&#xf060;"  ></Button> -->
                    <Label class="circle-music1"
                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                    <Label class="circle-music2"
                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                    <Label class="fas-volume-on" textWrap="true" @tap="promjeni">
                        <FormattedString>
                            <Span v-if="!clicked" text.decode="&#xf028;"  fontAttributes="Bold" ref="ton"></Span>
                            <Span v-if="clicked" text.decode="&#xf6a9;"  fontAttributes="Bold" ></Span>

                        </FormattedString>
                    </Label>
                    <!-- <MusicButton :clicked="false"/> -->
                </AbsoluteLayout>

                <AbsoluteLayout class="first" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.85%">
                    <Image
                        src="~/images/videoSlika.jpg"
                        isLoading="async" class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="pola" width="150" height="220"
                        backgroundColor="#ffe5d0" opacity="0.9%" left="155"
                        top="-15">

                    </AbsoluteLayout>
                    <Label class="pola_tekst" text="12" />

                </AbsoluteLayout>

                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Label class="tekst_naslov" text="Kategorija 1" />
                    <Label class="tekst_opis" text="MozART" />
                </AbsoluteLayout>


                <AbsoluteLayout class="second" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Image
                        src="~/images/videoSlika.jpg"
                        class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="pola" width="150" height="220"
                        backgroundColor="#d5c5d7" opacity="0.7%" left="155"
                        top="-15">
                    </AbsoluteLayout>

                    <Label class="pola_tekst" text="8" />
                </AbsoluteLayout>

                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.9%">

                    <Label class="tekst_naslov" text="Kategorija 2" />
                    <Label class="tekst_opis" text="MozART" />

                </AbsoluteLayout>
                    <!-- treci div -->
                <AbsoluteLayout class="third" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Image
                        src="~/images/videoSlika.jpg"
                         class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="treci_pola" width="300" height="180"
                        backgroundColor="#d5c5d7" opacity="0.6%" >
                        
                    </AbsoluteLayout>

                    <Label class="fas-lock" textWrap="true">
                        <FormattedString>
                            <Span text.decode="&#xf023;" fontAttributes="Bold"></Span>
                        </FormattedString>
                    </Label>

                    <Label class="pola_tekst" text="8" />
                </AbsoluteLayout>

                         
                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.95%">
                    <Label class="tekst_naslov" text="Kategorija 3" />
                    <Label class="tekst_opis" text="MozART" />
                </AbsoluteLayout>



            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Home from '../components/Home'
const { isIOS } = require('tns-core-modules/platform');
const { TNSPlayer } = require('nativescript-audio');
import MusicButton from '../components/MusicButton'
// import MusicButton from './MusicButton.vue';
    export default {
        data() {
            return {
                textFieldValue: "",
                clicked:false,
                isPlaying: false,

                
            };
        },
       components: {MusicButton },

       
        created(){
            this._player = new TNSPlayer();

            const playerOptions = {
            //   audioFile: "https://www.w3schools.com/html/horse.mp3",
            audioFile: "~/audio/Beethoven.mp3",
            loop: true,
            autoplay: false,
            
            };

            this._player
            .initFromUrl(playerOptions)
            .then((res) => {
                // console.log(res);
                this._player.play();
            })
            .catch((err) => {
                console.log("something went wrong...", err);
            });

            this._checkInterval = setInterval(() => {
            this._player.getAudioTrackDuration().then(duration => {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                let current = this._player.currentTime
                if (isIOS) {
                duration *= 1000
                current *= 1000
                }

                this.progress = Math.ceil(current / duration * 100);

                this.isPlaying = this._player.isAudioPlaying();
                // this.playPause();

            });
            }, 200)

        },
                destroyed() {
            clearInterval(this._checkInterval)
        },
        methods: {
        //         playPause() {
        // if (this._player.isAudioPlaying()) {
        //     this._player.pause();
        // } else {
        //     this._player.play();
        // }
        // },
          
        open(var1){
                
                if(var1===1){
                    this.$navigateTo(Home);
                }
                
    
        },
         pokreniOdmah(){
            this._player.play();
        },
        promjeni(){
            if(this.$refs.ton){
                this.clicked=true;
             if (this._player.isAudioPlaying()){
                 this._player.pause();
             }
             }
             else{
            this._player.play();
                this.clicked=false;

             
             }
            
            
               
        }
    }}
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }
    .fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 23%;
        left: 25%;
        font-size: 30%;
    }
    .fas-lock{
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 75%;
        left: 125%;
        font-size: 50%;
    }
    .description-label {
        margin-bottom: 15;
    }
    .glavni{
    background-image:url("https://i.pinimg.com/564x/30/79/6f/30796f7dd77e06062526f81d6bdc5eaa.jpg");
    background-position: center;
    background-size: cover;
}
.first{
    margin-top: 10px;
}
StackLayout AbsoluteLayout{
    margin:5;
}
.back{
    margin: 10;
}
.back2{
    margin:17;
}
.tekst_naslov{
    color: #3b3a3a;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding-top: 10px;
    padding-left: 30px;
}
.tekst_opis{
    color: gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: bold;
    padding-top: 60px;
    padding-left: 30px;
}
.pola_tekst{
    color: #3b3a3a;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
}
.slikaVideo{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.treci_pola{
    margin: 0;
    height:100%;
}
.pola_tekst{
    font-size: 20px;
    padding-left: 570px;
    padding-top: 150px;
}
.opis{
    margin-bottom: 10px;
}
</style>