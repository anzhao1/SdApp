<template>
    <div>
        <mt-header class="headerBg" :title="title">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {
       props : ['title']
    }
</script>

<style scoped>
    .headerBg{
        background: #333;
        color: #ffffff;
    }
</style>