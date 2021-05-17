 
import Vue from'nativescript-vue'
import App from'./components/App.vue'
import Home from'./components/Home.vue'
import {​​​​​ Label }​​​​​ from'tns-core-modules/ui/label';
import {​​​​​ isAndroid }​​​​​ from'tns-core-modules/platform';
import DictatsCompositions from'./components/DictatsCompositions.vue'; 
import Diktati from './components/Diktati.vue';
import thirdCategory from'./components/thirdCategory.vue';
import Puzzle from './components/Puzzle.vue';
import PogodiInstrument from'./components/PogodiInstrument.vue';
import Memori from './components/Memori.vue';
import GameBox from './components/GameBox.vue'
import PogodiInstrument4 from './components/PogodiInstrument4.vue';
import AnalSlusanjeTrozvuka from './components/AnalSlusanjeTrozvuka.vue';
import AnalSlusanjeTrozvuka2 from './components/AnalSlusanjeTrozvuka2.vue';
import AnalSlusanjeTrozvuka3 from './components/AnalSlusanjeTrozvuka3.vue';
import AnalSlusanjeTrozvuka4 from './components/AnalSlusanjeTrozvuka4.vue';



Vue.registerElement("VideoPlayer", () =>require("nativescript-videoplayer").Video);
new Vue({​​​​​
render:h=>h('frame', [h(PogodiInstrument)])
}​​​​​).$start()

