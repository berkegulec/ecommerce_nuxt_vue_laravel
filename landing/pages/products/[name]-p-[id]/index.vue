<template>
  <PageContent :title="productData.title" :second-link="{ name: 'Products', uri: '/products' }">
    <div class="shop-details zoom" data-product_layout_thumb="scroll" data-zoom_scroll="true"
      data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200" data-lensshape="square" data-lensborder=""
      data-bordersize="2" data-bordercolour="#f9b61e" data-popup="false">
      <PD_TopInfo :product-data="productData" />
      <div class="product-tabs">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="product-tabs-wrap">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#additional-information" role="tab">Additional
                    information</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="description" role="tabpanel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
                <div class="tab-pane fade" id="additional-information" role="tabpanel">
                  <table class="product-attributes">
                    <tbody>
                      <tr class="attribute-item">
                        <th class="attribute-label">Color</th>
                        <td class="attribute-value">Black, Blue, Green</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tab-pane fade" id="reviews" role="tabpanel">
                  <div id="reviews" class="product-reviews">
                    <div id="comments">
                      <h2 class="reviews-title">
                        1 review for <span>Bora Armchair</span>
                      </h2>
                      <ol class="comment-list">
                        <li class="review">
                          <div class="content-comment-container">
                            <div class="comment-container">
                              <img src="media/user.jpg" class="avatar" height="60" width="60" alt="" />
                              <div class="comment-text">
                                <div class="rating small">
                                  <div class="star star-5"></div>
                                </div>
                                <div class="review-author">Peter Capidal</div>
                                <div class="review-time">January 12, 2022</div>
                              </div>
                            </div>
                            <div class="description">
                              <p>good</p>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div id="review-form">
                      <div id="respond" class="comment-respond">
                        <span id="reply-title" class="comment-reply-title">Add a review</span>
                        <form action="" method="post" id="comment-form" class="comment-form">
                          <p class="comment-notes">
                            <span id="email-notes">Your email address will not be published.</span>
                            Required fields are marked
                            <span class="required">*</span>
                          </p>
                          <div class="comment-form-rating">
                            <label for="rating">Your rating</label>
                            <p class="stars">
                              <span>
                                <a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3"
                                  href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a>
                              </span>
                            </p>
                          </div>
                          <p class="comment-form-comment">
                            <textarea id="comment" name="comment" placeholder="Your Reviews *" cols="45" rows="8"
                              aria-required="true" required=""></textarea>
                          </p>
                          <div class="content-info-reviews">
                            <p class="comment-form-author">
                              <input id="author" name="author" placeholder="Name *" type="text" value="" size="30"
                                aria-required="true" required="" />
                            </p>
                            <p class="comment-form-email">
                              <input id="email" name="email" placeholder="Email *" type="email" value="" size="30"
                                aria-required="true" required="" />
                            </p>
                            <p class="form-submit">
                              <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                            </p>
                          </div>
                        </form>
                        <!-- #respond -->
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PD_RelatedProducts :product_id="productData.id" />
    </div>
  </PageContent>
</template>

<script setup>
import PD_RelatedProducts from "~~/components/Product/Detail/PD_RelatedProducts.vue";
import PD_TopInfo from "~~/components/Product/Detail/PD_TopInfo.vue";
import PageContent from "~~/components/Template/PageContent.vue";
const route = useRoute();
const params = route.params;
const { data: productData } = await useFetch("https://dummyjson.com/products/" + params.id);

</script>

<style scoped>

</style>
