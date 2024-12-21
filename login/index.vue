<template>
    <h1>會員登入</h1>
    <form id="form">
        <div>
            <label for="username">Email</label>
            <input type="email"id="username" placeholder="name@example.com" required autofocus>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password">
        </div>
        <button type="submit">登入</button>
    </form>
    <NuxtLink to="/login/sign-up">註冊會員</NuxtLink>
</template>