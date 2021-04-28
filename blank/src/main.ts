import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Test from './components/Test.vue'
import { Label } from 'tns-core-modules/ui/label';
import { isAndroid } from 'tns-core-modules/platform';
import DictatsCompositions from './components/DictatsCompositions.vue'; 
import Memory from './components/Memory.vue';
import MemoryButtons from './components/MemoryButtons.vue';
import Diktati from './components/Diktati.vue';
import thirdCategory from './components/thirdCategory.vue';




Vue.registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
new Vue({
  
  render: h => h('frame', [h(thirdCategory)])
}).$start()

export function onLabelLoaded(args) {
  const lbl=args.object as Label;
  
    lbl.android.setGravity(17);
  
}