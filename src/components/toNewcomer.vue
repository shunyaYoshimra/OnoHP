<template>
  <div id="to-newcomer">
    <div class="to-under-graduates">
      <h2 class="section-title">大学院進学を考えている皆様へ</h2>
      <p>小野玲研究室に興味を持ってくださり、ありがとうございます。</p>
      <p>私たちは「疫学」「予防」を切り口に国民の健康増進のための研究活動を行なっております。健康への漠然とした疑問を研究に落とし込む過程を重要視しております。皆さんが感じている社会課題を起点として、社会的意義のある研究を一緒に行いませんか。積極的にゼミの運営にも関わり、自律的に研究を進めてゆけるような方を心から歓迎致します。</p>
      <div class="skill">
        <p>また、ゼミや日々の活動を通じて、当研究室で修得できるスキルには、以下のようなものがあります。</p>
        <ul>
          <li>自己表現力</li>
          <li>マネジメント能力</li>
          <li>統計解析能力</li>
          <li>プログラミングスキル（R）</li>
          <li>国際論文執筆能力</li>
          <li>研究討議等のディスカッション能力</li>
        </ul>
      </div>
      <p>当研究室にご興味のある方は、ぜひ一度ご連絡下さい。研究室訪問の際も事前にご連絡いただけますと幸いです。</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#to-newcomer {
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  h2 {
    font-size: 1.5rem;
    font-family: "Shippori Mincho", serif;
    color: #43a047;
    margin-bottom: 60px;
  }
  .to-under-graduates {
    margin-bottom: 100px;
    .skill {
      margin: 35px 0;
      ul {
        li {
          list-style: circle;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>