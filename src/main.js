import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

import CustomTransitions from './transitions/CustomTransitions'

let router = new VueRouter()

import App from './App.vue'
import EnlargedImage from './components/PlaceAndPics/EnlargedImage.vue'
// import Gallery from './components/PlaceAndPics/components/Gallery.vue'


router.map({
    '/image':{
        component: EnlargedImage
    },
    // '/gallery':{
    //     component: Gallery
    // }
})

router.start(App, '#app-container')

// new Vue({
//   el: 'body',
//   components: { App }
// })
