<template>
  <div class="">
      <a-row class="hero-row" style="height:100vh;width:100vw;" >
        <a-col :span="13" style="padding-top:2%;" align="middle" justify="middle">
          <a-col :span="12" :offset="6" style="background:rgba(0,0,0,0.55);padding:1%;border-radius:5px;">
            <h1 style="color:white;">Izzzlit is the home of the hottest events.</h1>
          </a-col>
        </a-col>
        <a-col :span="11" justify="middle">
          <!-- RSVP FORM CARD -->
          <a-card hoverable style="width: 400px" >
            <h2>
              RSVP for the littest events 
            </h2>
            
            <!-- RSVP FORM -->
            <a-form :form="form" hideRequiredMark="true" @submit="handleSubmit">
              <!-- WHO -->
              <a-form-item
                label="Party"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input-number
                  v-decorator="['womenCount', 
                    {rules: [{ required: true, message: 'Please select number of ladies (min. 1)' }]}
                  ]"
                  :min="1"
                  :max="10"
                />
                <span class="ant-form-text">
                  Ladies
                </span>
               
                <a-input-number
                  v-decorator="['menCount', 
                    {rules: [{ required: true, message: 'Please select number of men' }]}
                  ]"
                  :min="0"
                  :max="10"
                />
                <span class="ant-form-text">
                  Men
                </span>
              </a-form-item>
              

              
              <!-- WHEN -->
              <a-form-item
                v-bind="formItemLayout"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 14 }"
                label="When"
                has-feedback
              >
                <a-date-picker
                  style="width: 100%"
                  v-decorator="['date-picker', dateConfig]"
                  format="ddd, MMM Do YYYY"
                  :disabledDate="disabledDate"
                />
              </a-form-item>

              <!-- WHERE -->
              <a-form-item
                label="Where"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 14 }"
                v-bind="formItemLayout"
                has-feedback
              >
                <a-select
                  v-decorator="[
                    'location',
                    {rules: [{ required: true, message: 'Please select a city' }]}
                  ]"
                  placeholder="Select a City"
                >
                  <a-icon
                    slot="prefix"
                    type="global"
                    style="color:rgba(0,0,0,.25)"
                  />
                  <a-select-option value="Las Vegas">
                    Las Vegas
                  </a-select-option>
                  
                </a-select>
              </a-form-item>

              <!-- GO SEARCH IT -->
              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit" size="large">Search</a-button>
              </a-form-item>

            </a-form>
          </a-card>
        </a-col>
      </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';


export default {
  data() {
    return {
      // FORM CONFIG
      dateConfig: {
        rules: [{ required: true, type: 'object', message: 'Please select time!' }]
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  head: function() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle']),
  methods: {
    moment,
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    disabledDate(current) {
      // Can not select days before today
      return current && current < moment().startOf('day');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.hero-row {
  background: url('https://images.unsplash.com/photo-1541760866956-dcad73131a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80');
}
</style>
