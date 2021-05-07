<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

       <StackLayout>
      

        <exoplayer
      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      autoplay="true" 
      height="300"></exoplayer>
       </StackLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
