<template>
    <Page class="sve" actionBarHidden="true">
        <ActionBar text="Treca kategorija" />
    <Label class="fas-volume-on" textWrap="true" @tap="promjeni">
                        <FormattedString>
                            <Span v-if="!clicked" text.decode="&#xf028;"  fontAttributes="Bold" ref="ton"></Span>
                            <Span v-if="clicked" text.decode="&#xf6a9;"  fontAttributes="Bold" ></Span>

                        </FormattedString>
                    </Label>


    </Page>
</template>
<script>
import Home from '../components/Home'
const { isIOS } = require('tns-core-modules/platform');
const { TNSPlayer } = require('nativescript-audio');
 export default {
     name:'MusicButton',
        props:["clicked"],
        data() {
            return {
                textFieldValue: "",
                isPlaying: false,

                
            };
        },
       
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
                playPause() {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        } else {
            this._player.play();
        }
        },
          
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

         }


 }


</script>