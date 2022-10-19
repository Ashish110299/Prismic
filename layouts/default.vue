<template>
  <div id="app">
    <SiteHeader :HeaderData="HeaderData" />
    <div id="content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import SiteHeader from '/components/Header/Header1';
// import SiteFooter from '/components/Footer/index';

const { client } = usePrismic()

const { data: HeaderData } = await useAsyncData('HeaderData', ()=> client.getSingle('Header'))
const { data: FooterData } = await useAsyncData('FooterData', ()=> client.getSingle('Header'))
</script>

<style lang="scss">
</style>