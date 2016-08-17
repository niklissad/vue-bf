import Vue from 'vue'
import Adform from './Adform.vue'
import Multiselect from 'vue-multiselect'
import Http from 'vue-resource'

/* eslint-disable no-new */



new Vue({
  el: '#form-vue',
  components: { Multiselect },
  data () {
    return {
      multiValue: [],
      options: options
    }
  },
  methods: {
    updateMultiValue (value) {
      this.multiValue = value
    }
  }
});