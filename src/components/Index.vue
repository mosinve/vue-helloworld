<template lang='pug'>
  .row
    .col.text-center(v-if = 'items.length === 0'): font-awesome-icon( icon='spinner' size='6x' spin)
    template( v-else)
      router-link( v-for='item in items'
                   :to = '{ name: "Item", params: { id: item.id }}'
                   append
                   :key = 'item.id')
        img.img-thumbnail( :src='item.attributes.posterImage.small')
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
