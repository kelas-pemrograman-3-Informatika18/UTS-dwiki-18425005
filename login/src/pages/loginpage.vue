<template>
  <q-page class="bg-blue-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-yellow" flat>
          <q-card-section>
            <div class="text-h6 q-pb-md">
            login pendaftaran siswa
            </div>
          <q-form
          @reset="onReset"
          @submit="onSubmit"
          class="q-gutter-md"
          >
            <q-input
              filled
              v-model="name"
              label="User Name *"
              hint="Username and Password"
              lazy-rules
            :rules="[ val => val && val.length > 0 || 'Masukkan Username Anda']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Password *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Masukkan Password Anda' ]"
              />
            <div>
              <q-btn label="Submit" type="submit" color="red"/>
              <q-btn label="Reset" type="reset" color="red" flat class="q-ml-sm" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      if (this.name === 'dwiki' && this.password === '465897') {
        this.$q.notify({
          type: 'positive',
          message: 'selamat anda berhasil login ;)'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'gagal login, username, password salah'
        })
      }
    },
    onReset () {
      console.log('ini fungsi submit')
    }
  }
}
</script>
