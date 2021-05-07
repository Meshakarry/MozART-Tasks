import Vue from 'nativescript-vue'
import App from './components/App.vue'
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';
import DictatsCompositions from './components/DictatsCompositions.vue'; 
import Memory from './components/Memory.vue';
import MemoryButtons from './components/MemoryButtons.vue';
import Diktati from './components/Diktati.vue';
import thirdCategory from './components/thirdCategory.vue';
import MemoryCategories from './components/MemoryCategories.vue';
import TestZaVideo from './components/TestZaVideo.vue';

import Home from './components/Home.vue';







Vue.registerElement('exoplayer', () => require("nativescript-exoplayer").Video);

new Vue({
  
  render: h => h('frame', [h(Home)])
}).$start()

