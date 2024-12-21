<template>
    <h1>會員登入</h1>
    <form id="form">
        <div>
            <input type="email"id="username" placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
        </div>
        <div>
            <input type="password" id="password" placeholder="Password">
            <label for="password">Password</label>
        </div>
        <button type="submit">登入</button>
    </form>
    <NuxtLink to="/login/sign-up">註冊會員</NuxtLink>
</template>