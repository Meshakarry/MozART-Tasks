<template>
<Page class="sve" actionBarHidden="true" >
<ScrollView>
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
                <Label class="fas-volume-on" textWrap="true">
                    <FormattedString>
                        <Span text.decode="&#xf028;" fontAttributes="Bold"></Span>
                    </FormattedString>
              	</Label>
  </AbsoluteLayout>
  
             <StackLayout >

            <!-- <VideoPlayer id="nativeVideoPlayer"
            controls="true" loop="true" autoplay="false" height="500"
            src="https://youtu.be/Tc8JAGmdbRc" ></VideoPlayer> -->

            <!-- Remote file to test with https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->

        </StackLayout>

          <!-- <exoplayer
        src="~/videos/morljubomor.mp4"
        autoplay="true"
        controls="false"
        height="300">
    </exoplayer> -->
<!-- <StackLayout>
            <VideoPlayer ref="player" :src="morljubomor" autoplay="true" height="300" @loadingComplete="videoCompleted" @finished="videoFinished" loop="false" />
        </StackLayout> -->
 <!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->



</StackLayout>
</ScrollView>
</Page>
</template>
<script >
// import { Video } from 'nativescript-videoplayer';
//    import { Video } from 'nativescript-videoplayer';
//    const video = topmost().currentPage.getViewById('nativeVideoPlayer') as Video;

// import { Video } from 'nativescript-videoplayer';
import Diktati from '../components/Diktati'


 export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
  data(){
    return{
       var1:1
    }},
    methods:{
        open(var1){
                
                if(var1===1){
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
</style>