<script setup>
    const route = useRoute();
</script>

<template>
    <h1>房型{{ route.params.id }}介紹</h1>
    <nav>
        <ul>
            <li>
                <NuxtLink :to="`/rooms/${route.params.id}/booking`">預約</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/rooms">客房列表</NuxtLink>
            </li>
        </ul>
    </nav>
</template>