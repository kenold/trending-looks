const app = new Vue({
    el: '#app',
    data: {
        products: []
    },
    mounted() {
        axios
            .get('js/products.json')
            .then(response => (this.products = response.data))
    }
})