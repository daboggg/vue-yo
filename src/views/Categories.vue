<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <loader v-if="loading"/>
      <div v-else class="row">
        <category-create @created="addNewCategory"/>
        <category-edit/>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'
export default {
  name: 'Categories',
  data: () => ({
    categories: [],
    loading: true
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
      console.log(this.categories)
    }
  },
  components: {
    CategoryCreate, CategoryEdit
  }
}
</script>

<style scoped>

</style>
