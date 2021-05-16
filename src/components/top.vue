<template>
  <dvi>
    <img src="/Users/yoshimurashunya/Desktop/OnoHP/assets/top-image.png" alt />
    <div class="sub-titles">
      <p class="sub-title title-1">疫学的な思考から</p>
      <p class="sub-title title-2">人々の健康増進を図り</p>
      <p class="sub-title title-3">社会貢献すること</p>
    </div>
  </dvi>
</template>

<script>
export default {};
</script>

<style lang="scss">
img {
  position: absolute;
  right: 0;
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
</style>