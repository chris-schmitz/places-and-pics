let Vue = require('vue')

Vue.transition('flip', {
    enterClass: 'flipInX',
    leaveClass: 'flipOutX'
})

Vue.transition('slideUp', {
    enterClass: 'slideInUp',
    leaveClass: 'slideOutDown'
})
