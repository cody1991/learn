<template>
  <div>
    <div>
      <router-link to="/" exact>Home</router-link>
    </div>
    <router-link to="/essentials" exact>essentials</router-link>
    <ul>
      <router-link to="/essentials/introduction" tag="li">introduction</router-link>
      <router-link to="/essentials/instance" tag="li">instance</router-link>
      <router-link to="/essentials/syntax" tag="li">syntax</router-link>
      <router-link to="/essentials/computed" tag="li">computed</router-link>
      <router-link to="/essentials/list" tag="li">list</router-link>
    </ul>
  </div>
</template>

<style scoped>
li {
	cursor: pointer;
}
</style>
