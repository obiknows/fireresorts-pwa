<template >
  <div style="height:100vh;width:100vw;background:#323232;">
  </div>
</template>
<script>
  export default {
    // computed: mapState('authentication', ['user']),
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content',
          description: '',
        }, {
          title: 'Second',
          content: 'Second-content',
          description: '',
        }, {
          title: 'Last',
          content: 'Last-content',
          description: '',
        }],
      }
    },
    methods: {
      next() {
        this.current++
      },
      prev() {
        this.current--
      }
    },
  }
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }

  .ant-steps-item-title {
    color: white !important;
  }
</style>