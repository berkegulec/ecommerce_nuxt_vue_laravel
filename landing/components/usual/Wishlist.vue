<template>
  <div class="wishlist-popup">
    <div class="wishlist-popup-inner">
      <div class="wishlist-popup-content">
        <div class="wishlist-popup-content-top">
          <span class="wishlist-name">Wishlist</span>
          <span class="wishlist-count-wrapper"
            ><span class="wishlist-count">2</span></span
          >
          <span class="wishlist-popup-close"></span>
        </div>
        <div class="wishlist-popup-content-mid">
          <table class="wishlist-items">
            <tbody>
              <tr class="wishlist-item">
                <td class="wishlist-item-remove"><span></span></td>
                <td class="wishlist-item-image">
                  <a href="shop-details.html">
                    <img
                      width="600"
                      height="600"
                      src="media/product/3.jpg"
                      alt=""
                    />
                  </a>
                </td>
                <td class="wishlist-item-info">
                  <div class="wishlist-item-name">
                    <a href="shop-details.html">Chair Oak Matt Lacquered</a>
                  </div>
                  <div class="wishlist-item-price">
                    <span>$150.00</span>
                  </div>
                  <div class="wishlist-item-time">June 4, 2022</div>
                </td>
                <td class="wishlist-item-actions">
                  <div class="wishlist-item-stock">In stock</div>
                  <div class="wishlist-item-add">
                    <div data-title="Add to cart">
                      <a rel="nofollow" href="#" class="button">Add to cart</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="wishlist-item">
                <td class="wishlist-item-remove"><span></span></td>
                <td class="wishlist-item-image">
                  <a href="shop-details.html">
                    <img
                      width="600"
                      height="600"
                      src="media/product/4.jpg"
                      alt=""
                    />
                  </a>
                </td>
                <td class="wishlist-item-info">
                  <div class="wishlist-item-name">
                    <a href="shop-details.html">Pillar Dining Table Round</a>
                  </div>
                  <div class="wishlist-item-price">
                    <del aria-hidden="true"><span>$150.00</span></del>
                    <ins><span>$100.00</span></ins>
                  </div>
                  <div class="wishlist-item-time">June 4, 2022</div>
                </td>
                <td class="wishlist-item-actions">
                  <div class="wishlist-item-stock">In stock</div>
                  <div class="wishlist-item-add">
                    <div data-title="Add to cart">
                      <a rel="nofollow" href="#" class="button">Add to cart</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="wishlist-popup-content-bot">
          <div class="wishlist-popup-content-bot-inner">
            <a class="wishlist-page" href="shop-wishlist.html">
              Open wishlist page
            </a>
            <span class="wishlist-continue" data-url="">
              Continue shopping
            </span>
          </div>
          <div class="wishlist-notice wishlist-notice-show">
            Added to the wishlist!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
