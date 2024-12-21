<template>
    <h1>會員註冊</h1>
    <form id="form">
        <div>
            <input type="email"id="username" placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
        </div>
        <div>
            <input type="password" id="password" placeholder="Password">
            <label for="password">Password</label>
        </div>
        <button type="submit">註冊會員</button>
    </form>
    <NuxtLink to="/login">會員登入</NuxtLink>
</template>