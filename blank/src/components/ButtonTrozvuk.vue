<template>
    <Label class="fas-play" textWrap="true" @tap="promjeni"> -->
                     <FormattedString>
                        <Span v-if="!clicked" text.decode="&#xf04b;"  fontAttributes="Bold" ref="ton" ></Span>
                        <Span v-if="clicked" text.decode="&#xf04c;"   fontAttributes="Bold" ></Span>

                    </FormattedString> 
                    
                 </Label> 
</template>

<script>
const { isIOS } = require('tns-core-modules/platform');
const { TNSPlayer } = require('nativescript-audio');
export default {
    name:'ButtonTrozvuk',
   data() {
            return {
                textFieldValue: "",
                isPlaying: false,
                clicked:false,
                brojac:0,
                mozesAha:false,

                
            };
        },
       
        created(){
            this._player = new TNSPlayer();

            const playerOptions = {
            //   audioFile: "https://www.w3schools.com/html/horse.mp3",
            audioFile: "~/audio/ast.mp3",
            loop: true,
            autoplay: false,
            
            };

            this._player
            .initFromUrl(playerOptions)
            .then((res) => {
                // console.log(res);
                
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
               promjeni(){
            if(this.$refs.ton){
                this.clicked=true;
            this._player.play();
            this.brojac++;
            

           
             }
             else{
            if (this._player.isAudioPlaying()){
                    this._player.pause();
             }
                this.clicked=false;
             }

        }

         }

}
</script>