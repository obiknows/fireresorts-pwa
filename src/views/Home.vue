<template>
  <div class="">
      <a-row class="hero-row full-screen" type="flex" align="middle" justify="center">
        <a-col :md="24" :lg="13" style="padding-top:2%;"  align="middle" justify="center">
          <a-col :span="12" :offset="6" style="background:rgba(0,0,0,0.55);padding:1%;border-radius:5px;">
            <h1 style="color:white;">Izzzlit is the home of the hottest events.</h1>
          </a-col>
        </a-col>
        <a-col :md="24" :lg="11" align="middle" justify="center">
          <!-- RSVP FORM CARD -->
          <a-card hoverable style="width: 400px; max-height:20%" >
            <h2>
              RSVP for the Littest Events 
            </h2>
            
            <!-- RSVP FORM -->
            <a-form :form="form" hideRequiredMark @submit="handleSubmit">
              <!-- TYPE (DAY< NIGHT < STRIP) -->
              <a-form-item
                v-model="eventType"
                label="Kind"
                :label-col="{ span: 5}"
                :wrapper-col="{ span: 16}"
              >
                <a-radio-group buttonStyle="solid" v-decorator="['eventType']">
                  <a-radio-button value="day">Day</a-radio-button>
                  <a-radio-button value="night">Night</a-radio-button>
                  <a-radio-button value="strip">Strip</a-radio-button>
                </a-radio-group>
              </a-form-item>
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
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 14 }"
                label="When"
                has-feedback
              >
                <a-date-picker
                  style="width: 100%"
                  v-decorator="['eventDate', dateConfig]"
                  format="ddd, MMM Do YYYY"
                  :disabledDate="disabledDate"
                />
              </a-form-item>

              <!-- WHERE -->
              <a-form-item
                label="Where"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 14 }"
                has-feedback
              >
                <a-select
                  v-decorator="[
                    'where',
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
                <!-- <router-link to="rsvp"> -->
                <a-button type="primary" html-type="submit" size="large" @click="showModal">RSVP</a-button>
                <!-- </router-link > -->
              </a-form-item>

            </a-form>
          </a-card>
        </a-col>
      </a-row>
      <!-- MODAL -->
      <a-modal title="Almost There" v-model="modalVisible" :footer="null" :closeable="false">
        <!-- RSVP FORM -->
        <a-form :form="form" hideRequiredMark @submit="handleSubmit">
          <h3>Before we create your RSVP, we need 2 last things</h3>

          <a-form-item
            :label-col="{ span: 4, }"
            :wrapper-col="{ span: 12, offset: 4 }"
            label="Name"
          >
            <a-input
              v-decorator="[
                'name',
                { rules: [{ required: true, message: 'Please input your name' }] },
              ]"
              placeholder="Please input your name"
            />
          </a-form-item>
          <a-form-item
            :label-col="{ span: 4, }"
            :wrapper-col="{ span: 12, offset:4 }"
            label="Phone"
          >
            <a-input
              v-decorator="[
                'phone',
                { rules: [{ required: true, message: 'Please input your mobile number' }] },
              ]"
              placeholder="Please input your mobile number"
            />
          </a-form-item>
          <div style="text-align:center;">
            <a-button type="primary" html-type="submit" size="large" @click="handleFormSubmit" :disabled="isSent" >Create</a-button>
          </div>
        </a-form>
      </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
import axios from 'axios';
import { log } from 'util';


export default {
  data() {
    return {
      // MODAL CONFIG
      modalVisible: false,
      isSent: false,
      // FORM CONFIG
      eventType: '0',
      partyType: 'a',
      dateConfig: {
        rules: [{ required: true, type: 'object', message: 'Please select a date' }]
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      // form2: this.$form2.createForm(this, { name: 'last-check' }),
      
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
    onChange (e) {
      console.log(`checked = ${e.target.value}`)
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleFormSubmit(e) {
      e.preventDefault()
      this.isSent = true
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)

          const type = values.eventType
          const women = values.womenCount
          const men = values.menCount
          const name = values.name
          const place = values.where
          const phone = values.phone
          const date = moment(values.eventDate).valueOf()
      
          
          // // formulate the GET request to /rsvp/create
          axios
          // .get(`https://api.izzzlit.com/rsvp/create/?type=${type}&women=${women}&men=${men}&place=${place}&phone=${phone}&date=${date}&name=${name}`)
          .get(`http://localhost:7001/rsvp/create/?type=${type}&women=${women}&men=${men}&place=${place}&phone=${phone}&date=${date}&name=${name}`)
          .then(response => {
            if(response.status == 200) {
              console.log(response);
              console.log(`${response.data.rsvp}`);

              // close the modal --> false
              this.modalVisible = false;

              // go to confirmation page
              this.$router.push({ name: 'rsvp', params: { rsvpId: response.data.id }})
            } else {
              // allow retry
              this.isSent = false
            }


          });

          
        }
      })
    },
    showModal() {
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.modalVisible = true;
        }
      })
    },
    disabledDate(current) {
      // Can not select days before today
      return current && current < moment().startOf('day');
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.hero-row {
  background: url('https://images.unsplash.com/photo-1541760866956-dcad73131a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80') no-repeat top center ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.full-screen {
  height: 100vh;
  width: 100vw;
}

.almost-full-screen {
  height: 90vh;
  width: 100vw;
}
</style>
