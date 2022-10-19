<template>
  <div id="Homepage" v-if="HomepageData?.data">
    <SliceZone 
      :slices="HomepageData?.data.slices"
      :components="components"
    />
  </div>
</template>

<script setup>
import { components } from '/slices/index';

const { client } = usePrismic()
const { data: HomepageData } = await useAsyncData('HomepageData', ()=> client.getByUID('page', 'homepage'))

useHead({
  title: HomepageData.value?.data?.title
})
</script>

<style>
h2 {
  
}
</style>