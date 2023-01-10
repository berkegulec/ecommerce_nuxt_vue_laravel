<template>
    <div class="product-top-info">
        <div class="section-padding">
            <div class="section-container p-l-r">
                <div class="row">
                    <div class="product-images col-lg-7 col-md-12 col-12">
                        <ProductMainImageCarousel :images="productData.images" />
                    </div>

                    <div class="product-info col-lg-5 col-md-12 col-12">
                        <h1 class="title">{{ productData.title }}</h1>
                        <span class="price">
                            <del aria-hidden="true"><span>$100.00</span></del>
                            <ins><span>$90.00</span></ins>
                        </span>
                        <!-- Rating -->
                        <C_Rating :star-count="productData.rating" :review-count="productData.rating + 2" />

                        <!-- Description -->
                        <div class="description">
                            <p>
                                {{ productData.description }}
                            </p>
                        </div>

                        <!-- Variations -->
                        <Variations />

                        <!-- Buttons -->
                        <PD_Buttons :product_id="productData.id" />

                        <!-- /TODO -->
                        <div class="product-meta">
                            <span class="sku-wrapper">SKU: <span class="sku">D2300-3-2-2</span></span>
                            <span class="posted-in">Category:
                                <a href="shop-grid-left.html" rel="tag">Furniture</a></span>
                            <span class="tagged-as">Tags: <a href="shop-grid-left.html" rel="tag">Hot</a>,
                                <a href="shop-grid-left.html" rel="tag">Trend</a></span>
                        </div>

                        <!-- SocialShare -->
                        <PD_Socialshare />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PD_Buttons from "~~/components/Product/Detail/PD_Buttons.vue";
import PD_Socialshare from "~~/components/Product/Detail/PD_Socialshare.vue";
import Variations from "~~/components/Product/Detail/Variations/index.vue";
import ProductMainImageCarousel from "~~/components/Product/ProductMainImageCarousel.vue";
import C_Rating from "~~/components/mini/C_Rating.vue";
const props = defineProps(['productData']);
</script>

<style lang="scss" scoped>

</style>