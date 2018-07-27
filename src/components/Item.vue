<template lang='pug'>
.film-details
  div(v-if='item')
    nav(aria-label="breadcrumb")
      ol.breadcrumb
        li.breadcrumb-item
          router-link(:to="{ name: 'Index' }") Home
        li.breadcrumb-item.active(aria-current="page") {{item.attributes.canonicalTitle}}
    article
      h1 {{ item.attributes.canonicalTitle }}
      table.table
        tbody
          tr
            td: img( :src='item.attributes.posterImage.medium')
            td {{ item.attributes.synopsis }}
  .text-center(v-else)
    font-awesome-icon( icon="spinner" size="6x" spin)
    </div>

  </div>
</template>

<script>
  import api from '../api'

  export default {
    name: 'Item',

    data() {
      return {
        item: null
      }
    },

    async mounted() {
      const { data: { data: item } } = await api.getItem({ id: this.$route.params.id})
      this.item = item
    }
  }
</script>
