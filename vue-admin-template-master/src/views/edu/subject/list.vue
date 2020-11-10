<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
import subject from '@/api/edu/subject'

export default {

  data() {
    return {
      filterText: '',
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  created(){
    this.getAllSubjectList()
  },
  methods: {
    //检索
    filterNode(value, data) {
      if (!value) return true
      //将值统一变为小写.toLowerCase()
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
      //return data.title.indexOf(value) !== -1
    },
    //得到列表
    getAllSubjectList(){
      subject.getSubjectList()
              .then(response => {
                  this.data2 = response.data.list
              })
    }
  }
}
</script>