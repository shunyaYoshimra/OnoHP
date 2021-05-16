<template>
  <header>
    <div class="header-nav">
      <p class="logo green-text accent-3">
        小野 研究所
        <span>Kobe University</span>
      </p>
      <i @click="showMenu()" class="material-icons">menu</i>
    </div>
    <template v-if="menuShow">
      <div
        :class="{menu: true, animate__animated: true, animate__fadeInDown: bool1, animate__fadeOutUp: bool2}"
      >
        <i @click="menuShow = false" class="material-icons close">close</i>
        <ul class="links">
          <li>
            <a href>
              <!-- <span>
                <i class="material-icons tiny">check</i>
              </span>ご挨拶-->
            </a>
          </li>
          <li>
            <a href>研究領域</a>
          </li>
          <li>
            <a href>研究業績</a>
          </li>
          <li>
            <a href>メンバー</a>
          </li>
          <li>
            <a href>イベント</a>
          </li>
          <li>
            <a href>研究室に興味がある皆さまへ</a>
          </li>
          <li>
            <a href>関連リンク</a>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import VAnimateCss from "animate.css";
export default {
  data() {
    return {
      menuShow: false,
      bool1: true,
      bool2: false
    };
  },
  methods: {
    showMenu() {
      this.menuShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 120px;
  background: white;
  .header-nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-family: "Shippori Mincho", serif;
      font-size: 1.75rem;
      span {
        font-size: 1rem;
        margin-left: 1rem;
      }
    }
    i {
      font-size: 2.25rem;
      cursor: pointer;
    }
    i:hover {
      color: #999;
    }
  }
}
.menu {
  z-index: 100;
  top: 0;
  position: absolute;
  width: 100%;
  height: 142px;
  background: #43a047;
  .links {
    display: flex;
  }
  .close {
    position: absolute;
    top: 42px;
    right: 55px;
    font-size: 2.25rem;
    cursor: pointer;
    color: white;
  }
  .close:hover {
    color: #eee;
  }
  ul {
    list-style: none;
    li {
      margin-top: 2.25rem;
      margin-left: 45px;
      a {
        color: white;
      }
      a:hover {
        color: #eee;
      }
    }
  }
}
</style>

 