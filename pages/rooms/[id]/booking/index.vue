<script setup>
    const route = useRoute();
</script>

<template>
    <h1>預約房型{{ route.params.id }}</h1>
    <div class="nav">
        <NuxtLink :to="`/rooms/${route.params.id}/booking/success`">確認預約房型{{ route.params.id }}</NuxtLink>
    </div>
</template>