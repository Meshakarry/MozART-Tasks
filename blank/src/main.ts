import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';
import DictatsCompositions from './components/DictatsCompositions.vue'; 
import Memory from './components/Memory.vue';
import MemoryButtons from './components/MemoryButtons.vue';
import Diktati from './components/Diktati.vue';
import thirdCategory from './components/thirdCategory.vue';
import MemoryCategories from './components/MemoryCategories.vue';
import Puzzle from './components/Puzzle.vue';
import PogodiInstrument from './components/PogodiInstrument.vue';
import Memori from './components/Memori.vue';
import GameBox from './components/GameBox.vue'
import PogodiInstrument4 from './components/PogodiInstrument4.vue';
import PuzzleCategories from './components/PuzzleCategories.vue';


Vue.registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);

new Vue({
  render: h => h('frame', [h(PuzzleCategories)])
}).$start()

export function onLabelLoaded(args) {
  const lbl=args.object as Label;
  lbl.android.setGravity(17); 
}