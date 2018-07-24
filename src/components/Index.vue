<template>
  <div>
    <router-link v-for='item in items'
                 :to = '{ name: "Item", params: { id: item.id }}'
                 append
                 :key = 'item.id'
    >
      <img :src='item.attributes.posterImage.small'>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Index',

  data() {
    return {
      items: []
    }
  },

 async mounted() {
    const { data: { data: items } } = await api.getList()
   this.items = items
  }
}
</script>
