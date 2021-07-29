<template>
  <div id="profile-page">
    <div class="profile-wrapper">
      <div class="section-wrapper name-wrapper">
        <div>
          <h2>小野 玲, PT, M.P.H, Ph.D.</h2>
          <h2>神戸大学大学院保健学研究科 准教授</h2>
        </div>
      </div>
      <div class="section-wrapper greet-wrapper">
        <h2 class="section-title">あいさつ</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>
          本研究室は2011年より神戸大学大学院保健学研究科地域保健学領域において開設をいたしました。2018年より神戸大学大学院保健学研究科パブリックヘルス領域に名所変更になっています。
        </p>
        <br />
        <p>
          臨床で研究を行うにあたって、漫然と臨床においてデータを蓄積しているだけでは、偶然誤差や系統誤差を制御することはできません。様々に入り込む誤差を前もって考慮しておく必要があります。しかし、臨床にいると”思い”が先行するあまり、実行可能性のある範囲で質の高いResearch
          Questionが立てられないことが少なくありません。我々の研究室は、疾患を限定せず、疫学的思考を持って質の高い研究を産み出すことによって、社会に貢献したいと考えています。
        </p>
      </div>
      <div class="section-wrapper brief-wrapper">
        <h2 class="section-title">略歴</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>神戸大学 卒業 学士（保健学）</p>
        <p>京都大学大学院 社会健康医学系専攻 修了 博士（社会健康医学）</p>
        <p>
          Department of Orthopaedics, Institute of clinical sciences,
          Sahlgrenska Academy,
        </p>
        <p>University of Gothenburg (Sweden), visiting researcher.</p>
      </div>
      <div class="section-wrapper career-wrapper">
        <h2 class="section-title">職歴</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>東北大学医学部附属病院 中央リハビリテーション部</p>
        <p>神戸大学医学部保健学科</p>
      </div>
      <div class="section-wrapper blong-wrapper">
        <h2 class="section-title">所属学会</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>日本理学療法士学会</p>
        <p>日本運動疫学会</p>
        <p>日本臨床疫学会</p>
        <p>日本疫学会</p>
        <p>日本体力医学会</p>
        <p>日本老年医学会</p>
        <p>日本緩和医療学会</p>
        <p>日本サルコペニア・フレイル学会</p>
        <p>日本認知症予防学会</p>
        <p>日本がんサポーティブケア学会</p>
      </div>
      <div class="reference-wrapper">
        <h2 class="section-title">関連リンク</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>
          <a href="http://www.ams.kobe-u.ac.jp/" target="blank"
            >神戸大学大学院保健学研究科</a
          >
        </p>
        <p><a href="http://jaee.umin.jp/" target="blank">日本運動疫学会</a></p>
        <p>
          <a href="https://jeaweb.jp/index.html" target="blank">日本疫学会</a>
        </p>
        <p>
          <a href="https://www.jsph.jp/" target="blank">日本公衆衛生学会</a>
        </p>
        <p>
          <a href="https://www.jpn-geriat-soc.or.jp/index.html" target="blank"
            >日本老年医学会</a
          >
        </p>
        <p>
          <a href="https://www.japanpt.or.jp/" target="blank"
            >日本理学療法士協会</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile-wrapper {
  width: 70%;
  margin: auto;
  .section-title {
    font-size: 1.5rem;
    font-family: "Shippori Mincho", serif;
    color: #43a047;
  }
  hr {
    color: #43a047;
  }
  .name-wrapper {
    h2 {
      font-size: 1.375rem;
    }
  }
  .section-wrapper {
    font-family: "Shippori Mincho", serif;
    margin-bottom: 80px;
  }
  .reference-wrapper {
    font-family: "Shippori Mincho", serif;
    margin-bottom: 80px;
    a {
      color: black;
    }
    a:hover {
      opacity: 0.6;
    }
  }
}
</style>