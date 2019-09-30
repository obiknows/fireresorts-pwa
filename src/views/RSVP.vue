<template >
  <div style="height:100vh;width:100vw;background:#323232;">
    <a-row type="flex" justify="center" align="middle" style="height:100%">
      <a-col type="flex" :lg="12" justify="center" align="middle">
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title" :description="item.description"/>
        </a-steps>
        <div class="steps-content">{{steps[current].content}}</div>
        <div class="steps-action">
          <a-button
            v-if="current>0"
            style="margin-left: 8px"
            @click="prev"
          >
            Previous
          </a-button>
          <a-button
            v-if="current < steps.length - 1"
            style="margin-left: 8px"
            type="primary" @click="next"
          >
            Next
          </a-button>
          <a-button
            v-if="current == steps.length - 1"
            type="primary"
            style="margin-left: 8px"
            @click="$message.success('Processing complete!')"
          >
            Done
          </a-button>
        </div>
      </a-col>
    </a-row>
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