<template>
  <article class="list-wrap">
    <header>
      <div class="user-author">
        <img src="../../assets/test.jpg" alt="">
        <div>V</div>
      </div>
      <div class="user-info">
        <p>姓名</p>
        <span>1分钟前</span>
      </div>
      <div class="down-icon">
        <div></div>
      </div>
    </header>
    <section>
      <p>等飞机，练习自拍中...就是这么肤浅</p>
      <div class="user-images">
        <div><img src="../../assets/test.jpg" alt=""></div>
        <div><img src="../../assets/test.jpg" alt=""></div>
        <div><img src="../../assets/test.jpg" alt=""></div>
        <div><img src="../../assets/test.jpg" alt=""></div>
        <div><img src="../../assets/test.jpg" alt=""></div>
      </div>
    </section>
    <footer>
      <div>1663</div>
      <div>238</div>
      <div>24</div>
      <div>share</div>
    </footer>
  </article>
</template>

<script>
  import axios from 'axios';

  export default {
    beforeCreate(){
      axios({
        method: 'post',
        url: '/api/get_token_info',
        data: {
          access_token: '2.00kztUyBlLpFLE72447ed797QGTYZC'
        }
      })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
</script>

<style lang="less">
  body {
    background: #eee;
  }

  .list-wrap {
    margin: 30px 0;
    padding: 40px;
    background: #fff;
    font-size: 18px; /*px*/
  }

  header {
    display: flex;
    align-items: center;
  }

  .user-author {
    flex: 1;
    margin-right: 30px;
    position: relative;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
    div {
      position: absolute;
      right: 0;
      bottom: -10px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 15px;
      color: #fff;
      background: #f64e45;
      font-size: 14px; /*px*/
    }
  }

  .user-info {
    flex: 9;
    p {
      font-size: 16px; /*px*/
      font-weight: bold;
    }
    span {
      font-size: 12px; /*px*/
    }
  }

  .down-icon {
    position: relative;
    div {
      width: 20px;
      height: 20px;
      transform-origin: center center;
      transform: rotate(-45deg);
      border-left: 1px solid #999; /*no*/
      border-bottom: 1px solid #999; /*no*/
    }
  }

  section {
    margin: 30px 0;
  }

  .user-images {
    display: flex;
    flex-flow: row wrap;
    padding-top: 20px;
    div {
      width: 220px;
      height: 220px;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px; /*px*/
    color: #999;
  }
</style>
