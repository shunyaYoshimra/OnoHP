<template>
  <div>
    <footer>
      <hr color="#43a047" size="0.75rem" />
      <div class="footer-wrapper">
        <div class="footer-title-wrapper">
          <router-link to="/">
            <h3 class="footer-title green-text accent-3">小野 研究室</h3>
          </router-link>
          <p class="green-text accent-3">Kobe University</p>
          <div class="fixed-action-btn hide">
            <a class="btn-floating btn-large green darken-3">
              <i class="large material-icons">contact_mail</i>
            </a>
            <ul>
              <li class="mail-wrapper">
                <a
                  @mouseenter="showAddress"
                  @mouseleave="hideAddress"
                  class="btn-floating red mail-icon"
                >
                  <i class="material-icons">mail</i>
                </a>
                <template v-if="mailShow">
                  <p class="mail-address">sample@gmail.com</p>
                </template>
              </li>
              <li>
                <a href="https://www.facebook.com/onolabkobe/" class="btn-floating indigo darken-2">
                  <i>f</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-link-wrapper">
          <ul>
            <li>
              <router-link class="green-text accent-3" to="/greet">自己紹介</router-link>
            </li>

            <li>
              <router-link class="green-text accent-3" to="/field">研究領域</router-link>
            </li>

            <li>
              <router-link class="green-text accent-3" to="/achievement">研究業績</router-link>
            </li>

            <li>
              <router-link class="green-text accent-3" to="/member">メンバー</router-link>
            </li>

            <li>
              <router-link class="green-text accent-3" to="/tonewcomer">研究室に興味がある皆さまへ</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2895181895706!2d135.09612541494113!3d34.67264179222871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008426c3e1037f%3A0x3fbbca59ea6f0ccc!2z56We5oi45aSn5a2mIOWQjeiwt-WcsOWMug!5e0!3m2!1sja!2sjp!4v1621235516106!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen
            width="600"
            height="400"
            loading="lazy"
            calss="map"
          ></iframe>
        </div>
      </div>
      <small>&copy;小野 研究室 2021</small>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailShow: false
    };
  },
  mounted() {
    $(document).ready(function() {
      $(".fixed-action-btn").floatingActionButton();
    });
  },
  methods: {
    showAddress() {
      this.mailShow = true;
      console.log("show");
    },
    hideAddress() {
      this.mailShow = false;
      console.log("hide");
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  hr {
    color: #43a047;
  }
  .footer-wrapper {
    width: 90%;
    margin: auto;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    .footer-title-wrapper {
      width: 20%;
      .footer-title {
        font-family: "Shippori Mincho", serif;
        font-size: 1.25rem;
        p {
          font-size: 0.875rem;
        }
      }
      .mail-wrapper {
        position: relative;
        .mail-address {
          position: absolute;
          color: tomato;
          top: 0;
          left: -140px;
          padding: 5px 10px;
          background: #fff;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
        }
      }
    }
    .footer-link-wrapper {
      width: 20%;
      ul {
        list-style: none;
        li {
          font-family: "Shippori Mincho", serif;
          font-size: 1rem;
          margin-bottom: 40px;
        }
        li:hover {
          opacity: 0.7;
        }
      }
    }
    .footer-map-wrapper {
      width: 50%;
      position: relative;
      height: 0;
      padding-top: 33%;
    }
    .footer-map-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  small {
    font-size: 0.75rem;
    color: #999;
    margin: 0 0 60px 70px;
  }
}
@media (max-width: 1250px) {
  footer {
    .footer-wrapper {
      display: block;
      .footer-title-wrapper {
        width: 100%;
      }
      .footer-link-wrapper {
        margin-top: 40px;
        width: 100%;
        ul {
          display: flex;
          li {
            margin-right: 30px;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  footer {
    .footer-wrapper {
      .footer-link-wrapper {
        ul {
          display: block;
        }
      }
    }
  }
}
@media (max-width: 480px) {
}
</style>