<template>
  <div>
    <div class="top-image">
      <img
        class="animate__animated animate__fadeIn"
        src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/0b362c25aae9c57c2feb7daf0b247fd4.png"
        alt
      />
    </div>
    <div class="gradient"></div>
    <div class="sub-titles">
      <template v-if="showLate0">
        <p class="sub-title title-1 animate__animated animate__fadeIn">疫学的な思考から</p>
      </template>
      <template v-if="showLate1">
        <p class="sub-title title-2 animate__animated animate__fadeIn">人々の健康増進を図り</p>
      </template>
      <template v-if="showLate2">
        <p class="sub-title title-3 animate__animated animate__fadeIn">社会貢献すること</p>
      </template>
    </div>
    <div class="main-wrapper">
      <div class="content-wrapper">
        <div
          @mouseenter="linkHover(0)"
          @mouseleave="leaveHover(0)"
          @click="nextPage('/greet')"
          :class="contentItemClass[0]"
        >
          <img
            src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/dist/profile.png"
            alt
            class="title-icon"
          />
          <h2 class="content-title">自己紹介</h2>
          <p>神戸大学パブリックヘルス領域 小野玲のあいさつ、略歴、所属学会などについて。</p>
          <template v-if="arrowBool[0]">
            <i class="material-icons animate__animated animate__fadeInLeft">arrow_forward</i>
          </template>
        </div>
        <div
          @mouseenter="linkHover(1)"
          @mouseleave="leaveHover(1)"
          @click="nextPage('/field')"
          :class="contentItemClass[1]"
        >
          <img
            src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/dist/field.png"
            alt
            class="title-icon"
          />
          <h2 class="content-title">研究領域</h2>
          <p>地域在住高齢者、勤労者、妊産婦、児童、がん患者を対象とした疫学研究を行なっております。</p>
          <template v-if="arrowBool[1]">
            <i class="material-icons animate__animated animate__fadeInLeft">arrow_forward</i>
          </template>
        </div>
        <div
          @mouseenter="linkHover(2)"
          @mouseleave="leaveHover(2)"
          @click="nextPage('/achievement')"
          :class="contentItemClass[2]"
        >
          <img
            src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/dist/achievement.png"
            alt
            class="title-icon"
          />
          <h2 class="content-title">研究業績</h2>
          <p>これまでにアクセプトされた論文、学会発表、獲得した研究資金などを紹介しています。</p>
          <template v-if="arrowBool[2]">
            <i class="material-icons animate__animated animate__fadeInLeft">arrow_forward</i>
          </template>
        </div>
        <div
          @mouseenter="linkHover(3)"
          @mouseleave="leaveHover(3)"
          @click="nextPage('/member')"
          :class="contentItemClass[3]"
        >
          <img
            src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/dist/member.png"
            alt
            class="title-icon"
          />
          <h2 class="content-title">メンバー</h2>
          <p>当研究室に所属しているメンバーを紹介します。</p>
          <template v-if="arrowBool[3]">
            <i class="material-icons animate__animated animate__fadeInLeft">arrow_forward</i>
          </template>
        </div>
        <div
          @mouseenter="linkHover(5)"
          @mouseleave="leaveHover(5)"
          @click="nextPage('/tonewcomer')"
          :class="contentItemClass[5]"
        >
          <img
            src="https://www.research.kobe-u.ac.jp/ghs-ono/ono_lab/dist/event.png"
            alt
            class="title-icon toNewcomer"
          />
          <h2 class="content-title">研究室に興味がある皆さまへ</h2>
          <p>当研究室に興味がある学部生・社会人の皆様へ。社会的意義のある研究を一緒に行いませんか。</p>
          <template v-if="arrowBool[5]">
            <i class="material-icons animate__animated animate__fadeInLeft">arrow_forward</i>
          </template>
        </div>
      </div>
      <div class="facebook-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fonolabkobe%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLate0: false,
      showLate1: false,
      showLate2: false,
      contentItemClass: [[], [], [], [], [], []],
      arrowBool: [false, false, false, false, false, false]
    };
  },
  mounted() {
    // add class to contentItemClass
    for (let i = 0; i < 6; i++) {
      this.contentItemClass[i].push("content-item");
    }
    // show sub title
    setTimeout(() => {
      this.showLate0 = true;
    }, 500);
    setTimeout(() => {
      this.showLate1 = true;
    }, 1500);
    setTimeout(() => {
      this.showLate2 = true;
    }, 2500);
  },
  methods: {
    nextPage(url) {
      this.$router.push(url);
    },
    linkHover(num) {
      this.contentItemClass[num].push("link-hover");
      this.arrowBool[num] = true;
    },
    leaveHover(num) {
      this.contentItemClass[num].splice(1, 1);
      this.arrowBool[num] = false;
    }
  }
};
</script>

<style lang="scss">
img {
  position: absolute;
  top: 142px;
  right: 0;
  object-fit: cover;
  object-position: 50% 50%;
  height: 575px;
}
.gradient {
  position: absolute;
  top: 142px;
  right: 0;
  height: 575px;
  width: 931.44px;
  background: -moz-linear-gradient(right, rgba(255, 255, 255, 0) 80%, #fff);
  background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 80%, #fff);
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 80%, #fff);
}
.sub-titles {
  position: absolute;
  top: 280px;
  .sub-title {
    width: 270px;
    background: #388e3c;
    font-size: 1.3rem;
    color: white;
    padding: 1rem;
    text-align: center;
    font-family: "Shippori Mincho", serif;
  }
  .title-1 {
    margin-left: 50px;
  }
  .title-2 {
    margin-left: 100px;
  }
  .title-3 {
    margin-left: 150px;
  }
}
.main-wrapper {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 900px;
  margin-bottom: 150px;
  .facebook-wrapper {
    width: 30%;
  }
  .content-wrapper {
    width: 65%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .content-item {
      position: relative;
      width: 40%;
      cursor: pointer;
      margin-bottom: 120px;
      .content-title {
        font-size: 1.375rem;
        font-family: "Shippori Mincho", serif;
        color: #43a047;
        margin-bottom: 40px;
      }
      .title-icon {
        width: 70px;
        height: 70px;
        top: 0;
      }
      .toNewcomer {
        transform: translateX(20px);
      }
      p {
        font-size: 0.875rem;
        font-family: "M PLUS Rounded 1c", sans-serif;
      }
      i {
        position: absolute;
        top: 160px;
      }
    }
    .link-hover {
      opacity: 0.7;
    }
  }
}
@media (max-width: 930px) {
  img {
    width: 100%;
  }
  .sub-titles {
    top: 350px;
    display: none;
    .sub-title {
      width: 100%;
      background-color: transparent;
      font-size: 2rem;
      text-shadow: 1px 2px 3px #808080;
      text-align: center;
      padding: 0;
    }
    .title-1 {
      margin-left: 0px;
    }
    .title-2 {
      margin-left: 0px;
    }
    .title-3 {
      margin-left: 0px;
    }
  }
}
@media (max-width: 959px) {
  .main-wrapper {
    display: block;
    .content-wrapper {
      width: 100%;
    }
  }
}
@media (max-width: 480px) {
  .main-wrapper {
    .content-wrapper {
      display: block;
      .content-item {
        width: 100%;
        .title-icon {
          top: -20px;
        }
      }
    }
  }
}
</style>


