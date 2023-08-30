
<template>
    <header>
        <h1>
            <strong>{{ headerData.title }}</strong>
            {{ headerData.text }}
        </h1>
        <h4>
            {{ headerData.description }}
        </h4>
    </header>
</template>

<script>
export default {
    props:{
        headerData: Object
    },
};
</script>

<style scoped>
header{
    font-family: 'IBM Plex Sans', sans-serif;
    margin-left: 350px;
    padding-top: 112px;
}
h1{
    color: rgba(45, 54, 64, 1);
    width: 995px;
    font-weight: 400;
    font-size: 48px;
    line-height: 80px;
    letter-spacing: -0.5px;
}
h4{
    margin-top: 10px;
    width: 695px;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: rgba(43, 41, 45, 1);    
}
</style>