<script setup>
    const route = useRoute();
</script>

<template>
    <h1>預約房型{{ route.params.id }}成功!!!</h1>
    <div class="nav">
        <NuxtLink to="/members/order-list">確認訂單</NuxtLink>
    </div>
</template>