<template>
  <header class="navbar offline" :class="{ offline: !networkOnLine }">
    <div class="brand">
      <div class="brand-logo">
        <!-- <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" /> -->
        <router-link to="/">
          <img alt="izzzlit" class="logo" src="@/assets/img/izzzlit-logotype-dark.png" />
        </router-link>
        <!-- <span class="site-name title-desktop">{{ appTitle }}</span> -->
        <!-- <span class="site-name title-mobile">{{ appShortTitle }}</span> -->
      </div>
    </div>
    <div class="links">
      <nav class="nav-links">
        <div v-if="!isUserLoggedIn" class="nav-item">
          <router-link to="/products">Promoters</router-link>
        </div>
        <!-- LIT MAP -->
        <div v-if="isUserLoggedIn" class="nav-item">
          <router-link to="/dashboard">Map</router-link>
        </div>
        <!-- MY EVENTS -->
        <div v-if="!isUserLoggedIn" class="nav-item">
          <router-link to="/events">Events</router-link>
        </div>
        <div v-if="isUserLoggedIn" class="nav-item">
          <router-link to="/events">My Events</router-link>
        </div>
        <!-- LOGIN -->
        <div v-if="!isUserLoggedIn && networkOnLine" class="nav-item">
          <router-link to="/login">Login</router-link>
        </div>
        <!-- LOGOUT -->
        <div
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-item logout-item"
          @click="logout"
        >
          <a>Logout</a>
        </div>
      </nav>
      <!-- Profile -->
      <a
        v-if="isUserLoggedIn && networkOnLine"
        href="/profile"
      >
        <img
          v-if="isUserLoggedIn && networkOnLine"
          class="user-picture can-hide"
          :src="user.photoURL"
          alt="Avatar"

        />
      </a>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  // position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  right: 0;
  height: $navbar-height;
  background-color: $navbar-color;
  box-sizing: border-box;
  // border-bottom: 1px solid #eaecef;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;

  a {
    display: flex;
    align-items: center;
  }

  .title-desktop {
    display: inline;
  }

  .title-mobile {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 0.7rem 0.7rem;

    .can-hide {
      display: none;
    }

    .title-desktop {
      display: none;
    }

    .title-mobile {
      display: block;
    }
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }

  .logo {
    height: 24px;
    padding-right: 8px;
  }

  // MEDIA QUERY FOR LOGO
  @media screen and (max-width: 480px) {
    .logo {
      height: 16px;
      padding-right: 8px;
    }
  }

  .brand-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand {
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    left: 1.5rem;
    top: 0.7rem;
    display: flex;
    height: 1.9rem;
  }


  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: 1.5rem;
    top: 0.7rem;
    display: flex;

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2.2rem;

        &:first-child {
          margin-left: 0;
        }

        a {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          color: $navbar-link-color;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
        }

        @mixin activatedLink() {
          margin-bottom: -2px;
          border-bottom: 2px solid $vue-color;
        }

        .router-link-active {
          @include activatedLink;
        }

        @media (hover) {
          :hover {
            @include activatedLink;
          }
        }
      }
    }
  }

  &.offline {
    background: $navbar-offline-color;
    .links .nav-links .nav-item a,
    .site-name {
      color: white;
    }
  }

  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }

  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}
</style>
