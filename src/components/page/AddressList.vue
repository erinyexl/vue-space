<template>
    <div class="ar-lists">
        <header class="ar-header">
            <h1 class="ar-title">通讯录</h1>
            <input type="text" placeholder="搜索" class="ar-search">
        </header>
        <section class="ar-section">
            <ul>
                <li>
                    <p class="ar-letter">A</p>
                    <ul class="ar-name-list">
                        <li>
                            <p class="ar-name">姓名1</p>
                            <p class="ar-name">姓名2</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p class="ar-letter">B</p>
                    <ul class="ar-name-list">
                        <li>
                            <p class="ar-name">姓名b1</p>
                            <p class="ar-name">姓名b2</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name:'AddressList'
    }
</script>

<script scoped lang="less">
    @hello:#dd4433;

    .ar-lists{
        margin:40px;
    }
    .ar-title{
        font-size: 60px;
    }
    .ar-search{
        width: 100%;
        height: 60px;
        border-radius:20px;
        background: #eee;
        margin: 20px 0;
    }
</script>