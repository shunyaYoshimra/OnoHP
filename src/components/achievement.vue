<template>
  <div id="achievement">
    <div class="research-achievement-wrapper">
      <h2>研究業績</h2>
      <hr color="#43a047" size="0.75rem" />
      <div class="achievement-content-wrapper">
        <div class="year-field input-field col s12">
          <select v-model="componentID">
            <option value disabled selected>西暦</option>
            <option value="2020">2020年</option>
            <option value="2019">2019年</option>
            <option value="2018">2018年</option>
            <option value="2017">2017年</option>
            <option value="2016">2016年</option>
            <option value="2015">2015年</option>
            <option value="2014">2014年</option>
            <option value="2013">2013年</option>
            <option value="2012">2012年</option>
            <option value="2011">2011年</option>
            <option value="2010">2010年より以前</option>
          </select>
          <label>年度別 研究業績</label>
        </div>
        <div class="year-wrapper">
          <div class="collection">
            <a @click="clickCollection(2020)" :class="collectionItem(2020)">2020年</a>
            <a @click="clickCollection(2019)" :class="collectionItem(2019)">2019年</a>
            <a @click="clickCollection(2018)" :class="collectionItem(2018)">2018年</a>
            <a @click="clickCollection(2017)" :class="collectionItem(2017)">2017年</a>
            <a @click="clickCollection(2016)" :class="collectionItem(2016)">2016年</a>
            <a @click="clickCollection(2015)" :class="collectionItem(2015)">2015年</a>
            <a @click="clickCollection(2014)" :class="collectionItem(2014)">2014年</a>
            <a @click="clickCollection(2013)" :class="collectionItem(2013)">2013年</a>
            <a @click="clickCollection(2012)" :class="collectionItem(2012)">2012年</a>
            <a @click="clickCollection(2011)" :class="collectionItem(2011)">2011年</a>
            <a @click="clickCollection(2010)" :class="collectionItem(2010)">2010年より以前</a>
          </div>
        </div>
        <div class="year-content-wrapper">
          <component :is="whichComponent"></component>
        </div>
      </div>
    </div>
    <div class="fund-wrapper">
      <h2>研究資金</h2>
      <hr color="#43a047" size="0.75rem" />
      <div>
        <h4>科学研究費助成事業</h4>
        <p>
          研究課題：高齢がん患者の治療後サルコペニア・フレイル：新たな退院後リハビリテーションの開発（研究課題番号：19K11345,
          研究代表者：小野玲）
        </p>
        <p>研究期間： 2019年度−2021年度</p>
        <p>研究種目：基盤研究C</p>
        <br />
        <p>
          研究課題：高齢がん患者の予後改善のためのリハビリ介入可能なスクリーニングツール開発（研究課題番号：15K01367,
          研究代表者：小野玲）
        </p>
        <p>研究期間： 2015年度−2017年度</p>
        <p>研究種目：基盤研究C</p>
        <br />
        <p>
          研究課題：化学療法を行っている造血器悪性腫瘍患者に対する新たな運動療法の開発と検証（研究課題番号：23700601,
          研究代表者：小野玲）
        </p>
        <p>研究期間： 2011年度−2013年度</p>
        <p>研究種目：若手研究B</p>
        <br />
        <p>
          研究課題：行動変容技法を用いた食道がん患者の術前運動指導プログラム開発（研究課題番号：20700426,
          研究代表者：小野玲）
        </p>
        <p>研究期間： 2008年度ー2010年度</p>
        <p>研究種目：若手研究B</p>
        <br />
        <h4>その他</h4>
        <p>助成事業：World Health Organization</p>
        <p>
          研究課題：Developing Conceptual Framework with Life-Course Approach to
          Support Universal Health Coverage Monitoring
          System（研究代表者：小野玲）
        </p>
        <p>研究期間：2019年度</p>
        <br />
        <p>助成事業：公益財団法人 笹川スポーツ財団 2018年度笹川スポーツ研究助成</p>
        <p>
          研究課題：児童期における体力・運動能力が1年後の遂行機能に及ぼす影響について
          ー子どもの体力・運動能力の意義に着目した縦断的検討ー（研究代表者：伊佐常紀）
        </p>
        <p>研究期間：2018年度</p>
        <br />
        <p>
          助成事業：公益財団法人 明治安田厚生事業団
          若手研究者のための健康科学研究助成
        </p>
        <p>
          研究課題：職場におけるアクティブレスト導入がオフィスワーカーの慢性腰痛に及ぼす効果―ランダム化比較試験によるStand
          Up per 1 hour & Workout Program (Super Workout
          Program)の効果検証ー（研究代表者：坪井大和）
        </p>
        <p>研究期間：2017年度</p>
        <br />
        <p>助成事業：公益社団法人日本理学療法士協会 理学療法にかかわる研究助成</p>
        <p>研究課題：外来モルモン療法を受ける術後乳がん患者における骨密度低下に対する運動効果（研究代表者：斎藤貴</p>
        <p>研究期間：2016年度</p>
        <br />
        <p>助成事業：公益社団法人日本理学療法士協会 理学療法にかかわる研究助成</p>
        <p>研究課題：学校保健領域への理学療法士進出に向けて−児童の健康増進に着目して−（研究代表者：伊佐常紀）</p>
        <p>研究期間：2016年度</p>
        <br />
        <p>助成事業：公益社団法人日本理学療法士協会 理学療法にかかわる研究助成</p>
        <p>研究課題：がん性疼痛に対する経皮的電気刺激治療（TENS）の効果の検討（研究代表者：井上順一朗</p>
        <p>研究期間：2015年度</p>
        <br />
        <p>助成事業：公益社団法人日本理学療法士協会 理学療法にかかわる研究助成</p>
        <p>
          研究課題：Woman’s
          Health分野への理学療法士進出の可能性−妊娠期における活動量とマイナートラブルの関係から−（研究代表者：小野玲
        </p>
        <p>研究期間：2013年度</p>
        <br />
        <p>助成事業：明治安田厚生事業団 健康医科学助成研究</p>
        <p>研究課題：妊娠安定期以降の身体活動および運動習慣が産後うつに与える影響（研究代表者：小野玲）</p>
        <p>研究期間：2012年度</p>
      </div>
    </div>
  </div>
</template>

<script>
import twenty from "../components/achievement/2020.vue";
import nineteen from "../components/achievement/2019.vue";
import eighteen from "../components/achievement/2018.vue";
import seventeen from "../components/achievement/2017.vue";
import sixteen from "../components/achievement/2016.vue";
import fifteen from "../components/achievement/2015.vue";
import fourteen from "../components/achievement/2014.vue";
import thirteen from "../components/achievement/2013.vue";
import twelve from "../components/achievement/2012.vue";
import eleven from "../components/achievement/2011.vue";
import ten from "../components/achievement/2010.vue";
export default {
  components: {
    twenty,
    nineteen,
    eighteen,
    seventeen,
    sixteen,
    fifteen,
    fourteen,
    thirteen,
    twelve,
    eleven,
    ten
  },
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
    });
  },
  data() {
    return {
      componentID: 2020,
      checkedCollection: 2020
    };
  },
  computed: {
    whichComponent: function() {
      self = this;
      if (this.componentID == 2020) {
        return "twenty";
      } else if (this.componentID == 2019) {
        return "nineteen";
      } else if (this.componentID == 2018) {
        return "eighteen";
      } else if (this.componentID == 2017) {
        return "seventeen";
      } else if (this.componentID == 2016) {
        return "sixteen";
      } else if (this.componentID == 2015) {
        return "fifteen";
      } else if (this.componentID == 2014) {
        return "fourteen";
      } else if (this.componentID == 2013) {
        return "thirteen";
      } else if (this.componentID == 2012) {
        return "twelve";
      } else if (this.componentID == 2011) {
        return "eleven";
      } else if (this.componentID == 2010) {
        return "ten";
      }
    },
    collectionItem: function() {
      self = this;
      return function(num) {
        if (self.checkedCollection == num) {
          return "collection-item active";
        } else {
          return "collection-item";
        }
      };
    }
  },
  methods: {
    clickCollection(num) {
      this.componentID = num;
      this.checkedCollection = num;
    }
  }
};
</script>

<style lang="scss">
#achievement {
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  h2 {
    font-size: 1.5rem;
    font-family: "Shippori Mincho", serif;
    color: #43a047;
  }
  .research-achievement-wrapper {
    .achievement-content-wrapper {
      display: flex;
      justify-content: space-between;
      .year-field {
        display: none;
      }
      .year-wrapper {
        width: 20%;
      }
      .year-content-wrapper {
        width: 60%;
      }
    }
  }
  .fund-wrapper {
    h4 {
      font-size: 1.25rem;
      text-decoration: underline;
    }
  }
}
@media (max-width: 620px) {
  #achievement {
    .research-achievement-wrapper {
      .achievement-content-wrapper {
        margin-top: 100px;
        display: block;
        .year-field {
          display: block;
        }
        .year-wrapper {
          display: none;
        }
        .year-content-wrapper {
          width: 100%;
        }
      }
    }
  }
}
</style>