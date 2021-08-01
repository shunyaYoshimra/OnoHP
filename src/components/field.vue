<template>
  <div id="field-page">
    <div class="adjust-postion">
      <div class="research-field-wrapper">
        <h2 class="section-title">研究領域</h2>
        <hr color="#43a047" size="0.75rem" />
        <p>疫学的な思考を持って運動や身体活動量、痛みといった要因が健康関連QOL、疾病予防、健康増進といったアウトカムに与える影響について、最善の研究手法を用いて明らかにしようとしています。</p>
        <br />
        <p>key word</p>
        <p>疫学、痛み、運動（身体活動量）、健康関連QOL</p>
        <br />
        <h3>研究テーマ</h3>
        <br />
        <div class="fields">
          <div class="field">
            <h4>地域在住高齢者に関する研究</h4>
            <p>高齢者の健康寿命延伸に対して運動器疾患が与えるインパクトを明らかにするために、地域でコホートを設定しています（他大学と共同）。</p>
            <p>認知症患者に対してサルコペニアが与える影響について調査しています（他研究所と共同）。</p>
            <p>高齢者の慢性疼痛と心理的要因との関係について調査しています。</p>
            <p>高齢者の歩行について3軸加速度計を使用して分析するとともに、転倒や運動器疾患との関係について調査しています。</p>
            <p>高齢者の健康関連QOLに関連する要因について調査しています。</p>
            <br />
            <br />
          </div>
          <div class="field">
            <h4>がんに関する研究</h4>
            <p>がんリハビリテーションに対する運動療法効果について適切な臨床研究手法を用いて検証しています。</p>
            <p>がん治療による引き起された副作用の頻度を明らかにするとともに、関連要因（特に運動や身体活動）について調査しています。</p>
            <p>がん患者の健康関連QOLと関連する要因について調査しています。</p>
            <br />
            <br />
          </div>
          <div class="field">
            <h4>産業保健分野における研究</h4>
            <p>一般企業における勤労者の筋骨格系疼痛・プレゼンティーズムと関連要因（身体活動・精神的因子）を明らかにするためにコホート研究を実施しています。</p>
            <br />
            <br />
          </div>
          <div class="field">
            <h4>妊産婦に関する研究</h4>
            <p>妊産のマイナートラブルの頻度を明らかにするとともに、関連要因（特に運動や身体活動）について調査しています。</p>
            <p>妊婦の歩行について3軸加速度計を使用して分析するとともに、腰痛などの関係について調査しています。</p>
            <br />
            <br />
          </div>
          <div class="field">
            <h4>学校保健に関する研究</h4>
            <p>小学生の身体活動・友人関係とその阻害要因に関して調査しています。</p>
          </div>
          <div class="field"></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#field-page {
  margin-bottom: 80px;
  .section-title {
    font-size: 1.5rem;
    font-family: "Shippori Mincho", serif;
    color: #43a047;
  }
  .adjust-postion {
    width: 70%;
    margin: auto;
  }
  .research-field-wrapper {
    h3 {
      text-align: center;
      font-size: 1.25rem;
    }
    .fields {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 100%;
      .field {
        width: 40%;
        h4 {
          font-size: 1.25rem;
          text-decoration: underline;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  #field-page {
    .research-field-wrapper {
      .fields {
        display: block;
        .field {
          width: 100%;
        }
      }
    }
  }
}
</style>