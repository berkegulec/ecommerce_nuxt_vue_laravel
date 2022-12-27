<template>
  <section class="section no-space m-b-0">
    <div class="row">
      <div class="col-md-6">
        <!-- Block Banners -->
        <div class="block block-banners background-img full-height">
          <div class="block-widget-banner layout-11 full-height">
            <div class="bg-banner">
              <div class="banner-wrapper banners">
                <div class="banner-wrapper-infor">
                  <div class="info">
                    <div class="content">
                      <h3 class="title-banner">Our Journal</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="column-background-wrap">
          <!-- Block Posts -->
          <div class="block block-posts layout-3">
            <div class="block-widget-wrap-2">
              <div class="block-content">
                <div class="posts-wrap slick-wrap">
                  <Carousel
                    id="gallery"
                    :items-to-show="1"
                    :wrap-around="true"
                    v-model="currentSlide"
                    class=""
                  >
                    <Slide v-for="slide in 3" :key="slide">
                      <div class="item">
                        <div class="post-grid post">
                          <div class="post-inner">
                            <div class="post-image">
                              <a
                                class="post-thumbnail"
                                href="blog-details-right.html"
                              >
                                <img
                                  width="720"
                                  height="484"
                                  src="media/blog/1.jpg"
                                  alt="Easy Fixes for Home Decor"
                                />
                              </a>
                            </div>
                            <div class="post-content">
                              <div class="post-categories">
                                <a href="blog-grid-right.html">Furniture</a>
                              </div>
                              <h2 class="post-title">
                                <a href="blog-details-right.html"
                                  >Easy Fixes For Home Decor</a
                                >
                              </h2>
                              <div class="btn-read-more">
                                <a
                                  class="read-more btn-underline"
                                  href="blog-details-right.html"
                                  >Read more</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="post-grid post">
                          <div class="post-inner">
                            <div class="post-image">
                              <a
                                class="post-thumbnail"
                                href="blog-details-right.html"
                              >
                                <img
                                  width="720"
                                  height="484"
                                  src="media/blog/2.jpg"
                                  alt="How to Make your Home a Showplace"
                                />
                              </a>
                            </div>
                            <div class="post-content">
                              <div class="post-categories">
                                <a href="blog-grid-right.html">Home Decor</a>
                              </div>
                              <h2 class="post-title">
                                <a href="blog-details-right.html"
                                  >How to Make your Home a Showplace</a
                                >
                              </h2>
                              <div class="btn-read-more">
                                <a
                                  class="read-more btn-underline"
                                  href="blog-details-right.html"
                                  >Read more</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <template #addons>
                      <Navigation />
                    </template>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';

const currentSlide = ref(0);
</script>

<style lang="scss" scoped></style>
