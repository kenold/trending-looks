Vue.component('product', {
    data: function() {
        return {
            header: "New Comp Header"
        }
    },
    template: '<p>this is a product component</p>'
})

const app = new Vue({
    el: '#app',
    data: {
        products: []
    },
    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        }
    },
    mounted() {
        axios
            .get('js/products.json')
            .then(response => {
                this.products = response.data
            })            
    }
})
