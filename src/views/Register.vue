<template>
<a-row align="middle" justify="center">
  <a-col :xs="{ span: 24, offset: 0 }" :md="{ span: 12, offset: 6 }" align="middle" justify="center">
    <a-card style="max-width:700px;">
      <h1>Create An Account</h1>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <!-- EMAIL -->
        <a-form-item 
          :xs="{ span: 24, offset: 0 }"
          :md="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
        >
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              },
            ]"
            placeholder="Email"
          >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
          </a-input>
        </a-form-item>
        <!-- PASSWORD -->
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              },
            ]"
            type="password"
            placeholder="Enter your password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <!-- CHECK PASSWORD -->
        <a-form-item >
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              },
            ]"
            type="password"
            placeholder="Confirm your password"
            @blur="handleConfirmBlur"
          >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
          </a-input>
        </a-form-item>
        <!-- PHONE NUM -->
        <a-form-item >
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              },
            ]"
            style="width: 100%"
            placeholder="Enter your phone number"
          >
          <a-icon
            slot="prefix"
            type="phone"
            style="color: rgba(0,0,0,.25)"
          />
          </a-input>
        </a-form-item>
      </a-form>
      <!--  -->
      <a-button
        v-show="user !== undefined && !user && networkOnLine"
        type="primary"
        data-test="login-btn"
        @click="login"
      >
        Create An Account
      </a-button>

    </a-card>
    
  </a-col>
</a-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { isNil } from 'lodash'
import firebase from 'firebase/app'
import { desktop as isDekstop } from 'is_js'

export default {
  data: () => ({ loginError: null }),
  head: function() {
    return {
      title: {
        inner: 'Register'
      },
      meta: [
        {
          name: 'description',
          content: `Sign in or sign up to ${this.appTitle}`,
          id: 'desc'
        }
      ]
    }
  },
  computed: {
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle'])
  },
  watch: {
    user: {
      handler(user) {
        if (!isNil(user)) {
          const redirectUrl = isNil(this.$route.query.redirectUrl)
            ? '/dashboard'
            : this.$route.query.redirectUrl
          this.$router.push(redirectUrl)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('authentication', ['setUser']),
    async login() {
      this.loginError = null
      const provider = new firebase.auth.GoogleAuthProvider()
      this.setUser(undefined)

      try {
        // Firebase signin with popup is faster than redirect
        // but we can't use it on mobile because it's not well supported
        // when app is running as standalone on ios & android
        isDekstop()
          ? await firebase.auth().signInWithPopup(provider)
          : await firebase.auth().signInWithRedirect(provider)
      } catch (err) {
        this.loginError = err
        this.setUser(null)
      }
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
}
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>