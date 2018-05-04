Vue.component('product-list', {
    
})

const productListComponent = {
    template: 
    `<div class="card">
        <div class="card-image">
            <figure class="image">
                <img :src="'images/' + product.images[0]" 
                    :alt="product.brand + ' ' + product.name" 
                    :title="product.brand + ' ' + product.name">
            </figure>
        </div>
        <div class="card-content">
            <div class="subtitle is-6 brand">{{ product.brand | uppercase }}</div>
            <div class="title is-5">{{ product.name }}</div>
            <div class="level subtitle is-6">
                <div class="level-left">
                    <div class="level-item">
                        {{ product.price }}
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <ul class="colors">
                            <li v-for="color in product.colors" 
                                class="circle" 
                                :style="[color == 'White' ? {'background':'#E1E1E1'} : {'background': color}]"
                                :title="color">
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>												
        </div>
    </div>`,
    props: ['title', 'product', 'products']
};

const app = new Vue({
    el: '#app',
    data: {
        products: []
    },
    components: {
        'product-list': productListComponent
    },
    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        }
    },
    mounted() {
        axios
            .get('data/products.json')
            .then(response => {
                this.products = response.data
            })            
    }
})
