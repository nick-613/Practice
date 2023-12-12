<template>
    <div class = "card">
        Thank you for your purchase!
        <li 
        v-for ="product in products"
        :key="product.id"
        style="color: bisque;"
        >
    {{ product.name }} {{ product.price }}
    <div>{{product.description}}</div>
    </li>
    </div>
</template>

<script setup lang = "ts">
import { onMounted, ref } from 'vue';
import {Product} from './model/product';

const products = ref ([] as Product[])

onMounted(() => {
    const productString = sessionStorage.getItem('products')
    if(productString){
        products.value = JSON.parse(productString)
    }
})
</script>