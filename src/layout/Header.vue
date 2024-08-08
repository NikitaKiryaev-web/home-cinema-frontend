<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-list-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header {
  padding: 0 0 10px;
  margin: 0 0 30px;
  &__nav {
    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 15px;
    }
  }
}
</style>
