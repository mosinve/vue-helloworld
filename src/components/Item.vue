<template>
  <div>
    <article v-if='item'>
      <h1>{{ item.attributes.canonicalTitle }}</h1>
      <table>
        <tbody>
        <tr>
          <td><img :src='item.attributes.posterImage.medium'></td>
          <td>{{ item.attributes.synopsis }}</td>
        </tr>
        </tbody>
      </table>
    </article>
    <font-awesome-icon icon="spinner" size="6x" spin v-else/>
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
