import Vue from 'vue'
import lodash from 'lodash'

Vue.filter('amount', function(value) {

    return Number(value).toString()
})

Vue.filter('price', function(value) {

    return Number(value).toLocaleString()
})

Vue.directive('number', {

    update(element) {

        // Persian numbers
        let persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

        // English numbers
        let english = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        // Replace numbers
        lodash.forEach(persian, function(first, second) {

            element.value = element.value.replace(first, english[second])
        })

        // Dispatch
        element.dispatchEvent(new Event('input'))
    }
})
