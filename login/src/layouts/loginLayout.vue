<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-red">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Aplikasi Akun Register Calon Siswa Baru
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'login'}">
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>

          <q-item-section>
            login
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'registerfb'}">
          <q-item-section avatar>
            <q-icon name="registerfb" />
          </q-item-section>

          <q-item-section>
            register
          </q-item-section>

        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'loginLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
