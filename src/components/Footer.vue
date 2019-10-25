<template>
  <a-layout-footer>
    <footer class="ph3 ph4-ns b--black-10 black-70">
      <a href="mailto:" class="link b f3 f2-ns dim black-70 lh-solid">info@izzzlit.com</a>
      <p class="f6 db b ttu lh-solid">© 2020 Izzzlit Inc.</p>
      <div class="">
        <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
        <a href="/terms/"    title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
        <a href="/privacy/"  title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
      </div>
    </footer>
  </a-layout-footer>
</template>

<script>
// import firebase from 'firebase/app'
// import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    // ...mapGetters('authentication', ['isUserLoggedIn']),
    // ...mapState('authentication', ['user']),
    // ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    // async logout() {
    //   await firebase.auth().signOut()
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.bt {
    border-top-style: solid;
    border-top-width: 1px;
}

.b--black-10 {
    border-color: rgba(0, 0, 0, .1);
}

.db {
    display: block;
}

.dib {
    display: inline-block;
}

.b {
    font-weight: bold;
}

.lh-solid {
    line-height: 1;
}

.link {
    text-decoration: none;
    transition: color .15s ease-in;
}

.link:link, .link:visited {
    transition: color .15s ease-in;
}

.link:hover {
    transition: color .15s ease-in;
}

.link:active {
    transition: color .15s ease-in;
}

.link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
}

.black-70 {
    color: rgba(0, 0, 0, .7);
}

.mid-gray {
    color: #555;
}

.pl2 {
    padding-left: .5rem;
}

.pr2 {
    padding-right: .5rem;
}

.pv6 {
    padding-top: 8rem;
    padding-bottom: 8rem;
}

.ph2 {
    padding-left: .5rem;
    padding-right: .5rem;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mt5 {
    margin-top: 4rem;
}

.ttu {
    text-transform: uppercase;
}

.f3 {
    font-size: 1.5rem;
}

.f6 {
    font-size: .875rem;
}

.dim {
    opacity: 1;
    transition: opacity .15s ease-in;
}

.dim:hover, .dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
}

.dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
}

@media screen and (min-width: 30em) {
    .ph4-ns {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .f2-ns {
        font-size: 2.25rem;
    }
}
</style>
