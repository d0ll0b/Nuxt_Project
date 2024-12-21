<template>
    <h1>404 Not Found.</h1>
</template>

<script setup>
    const route = useRoute();
    const event = useRequestEvent();

    setResponseStatus(event, 404);
</script>

<style scoped>
h1{
    color: red;
    text-align: center;
}
</style>