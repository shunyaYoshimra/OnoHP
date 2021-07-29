<template>
  <header>
    <div class="header-nav">
      <router-link to="/">
        <p class="logo green-text accent-3">
          小野 研究室
          <span>Kobe University</span>
        </p>
      </router-link>
      <i @click="menuShow = true" class="material-icons">menu</i>
    </div>
    <template v-if="menuShow">
      <div class="menu animate__animated animate__fadeInDown">
        <i @click="menuShow = false" class="material-icons close">close</i>
        <ul class="links">
          <li>
            <router-link to="/greet">自己紹介</router-link>
          </li>
          <li>
            <router-link to="/field">研究領域</router-link>
          </li>
          <li>
            <router-link to="/achievement">研究業績</router-link>
          </li>
          <li>
            <router-link to="/member">メンバー</router-link>
          </li>
          <li>
            <router-link to="/tonewcomer">研究室に興味がある皆さまへ</router-link>
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
      menuShow: false
    };
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.menuShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 80;
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
@media (max-width: 750px) {
  .menu {
    height: 100vh;
    .links {
      display: block;
      margin-top: 200px;
    }
    ul {
      li {
        margin-top: 3.5rem;
        margin-right: 45px;
        border-bottom: #fff 1px solid;
      }
    }
  }
}
</style>

 