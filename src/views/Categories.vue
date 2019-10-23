<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <loader v-if="loading"/>
      <div v-else class="row">
        <category-create @created="addNewCategory"/>
        <category-edit
          v-if="categories.length"
          :categories="categories"
          @update="updateCategories"
          :key="categories.length + count"
        />
        <p v-else class="center">Категорий пока нет</p>
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
    loading: true,
    count: 0
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    },
    updateCategories (category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.count++
    }
  },
  components: {
    CategoryCreate, CategoryEdit
  }
}
</script>

<style scoped>

</style>
