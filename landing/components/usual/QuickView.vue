<template>
  <div class="quickview-popup active" @click="handleExit">
    <div id="quickview-container">
      <div class="quickview-container">
        <a href="#" class="quickview-close"></a>
        <div class="quickview-notices-wrapper"></div>
        <div class="product single-product product-type-simple">
          <div class="product-detail">
            <div class="row">
              <div class="img-quickview">
                <div class="product-images-slider">
                  <div id="quickview-slick-carousel">
                    <div class="images">
                      <div class="scroll-image">
                        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" class="">
                          <Slide v-for="slide in productData.images" :key="slide">
                            <div class="carousel__item">
                              <img width="600" height="600" :src="slide" alt="" title="" />
                            </div>
                          </Slide>
                          <template #addons>
                            <navigation />
                          </template>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quickview-single-info">
                <div class="product-content-detail entry-summary">
                  <h1 class="product-title entry-title">
                    {{ productData.title }}
                  </h1>
                  <div class="price-single">
                    <div class="price">
                      <del><span>{{ productData.discountPercentage }}</span></del>
                      <span>${{ productData.price }}</span>
                    </div>
                  </div>
                  <div class="product-rating">
                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                      <span style="width: 80%">Rated <strong class="rating">4.00</strong> out of 5
                        based on <span class="rating">1</span> customer
                        rating</span>
                    </div>
                    <a href="#" class="review-link">(<span class="count">1</span> customer review)</a>
                  </div>
                  <div class="description">
                    <p>
                      {{ productData.description }}
                    </p>
                  </div>
                  <form class="cart" method="post" enctype="multipart/form-data">
                    <div class="quantity-button">
                      <div class="quantity">
                        <button type="button" class="plus" @click="product_qty += 1">+</button>
                        <input type="number" class="input-text qty text" step="1" min="1" max="" name="quantity"
                          v-model="product_qty" title="Qty" size="4" placeholder="" inputmode="numeric"
                          autocomplete="off" />
                        <button type="button" class="minus"
                          @click="(Number(product_qty) - 1) > 0 ? product_qty -= 1 : ``">-</button>
                      </div>
                      <button class="single-add-to-cart-button button alt" @click.prevent="addCart()">
                        Add to cart
                      </button>
                    </div>
                    <button class="button quick-buy" @click.prevent="addCart(true)">Buy It Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { useQuickViewStore } from '~~/stores/quickviewStore';
import { useCartStore } from '~~/stores/cartStore';
const emits = defineEmits(["closeTrigger"]);
const quickViewStore = useQuickViewStore();
const cartStore = useCartStore();
const productData = computed(() => quickViewStore.quickviewData)

const currentSlide = ref(0);
const product_qty = ref(1);


const addCart = async (redir = false) => { await cartStore.addItemToCart(productData.value.id, product_qty.value, redir).then(() => closePopup()) };

const handleExit = (e) => {
  let needToExitClassNames = ["quickview-popup", "quickview-close"];
  let el = e.target;
  if (needToExitClassNames.some(className => el.classList.contains(className))) closePopup();

};
const closePopup = () => {
  emits("closeTrigger");
}

onUnmounted(() => { quickViewStore.$dispose() });
</script>

<style lang="scss" scoped>

</style>
