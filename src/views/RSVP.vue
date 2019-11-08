<template >
  <div style="height:100vh;width:100vw;background:#323232;">
    <a-row type="flex" justify="center" align="middle" style="height:100%; color: white;">
      <a-col type="flex" :lg="12" justify="center" align="middle">
        <a-icon type="check-circle" style="color: white; font-size:88px;"/>
        <h1 style="color: white; font-size:66px;">THANK YOU</h1>
        <h2 style="color:white; ">Your Reservation Is Locked In</h2>
        <h4 style="color:white; ">Just show your phone number at the Venue and your good to go</h4>
        <router-link
          :to="{ name: 'home' }"
        >
          <h4 style="color:white; text-decoration:underline;">Back to Home</h4>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 0,
      }
    },
    methods: {

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