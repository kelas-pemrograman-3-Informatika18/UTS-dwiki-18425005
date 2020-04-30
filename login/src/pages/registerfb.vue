<template>
  <q-page >
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your Username *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="Nisn"
        v-model="Nisn"
        label="Your Nisn"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="Umur"
        v-model="Umur"
        label="Your Umur"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="Jenis kelamin"
        v-model="Jenis_kelamin"
        label="Your Jenis kelamin"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
 </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null,
      Nisn: null,
      Umur: null,
      Jenis_kelamin: null
    }
  },
  methods: {
    onReset () {
      this.username = null
      this.password = null
      this.Nisn = null
      this.Umur = null
      this.Jenis_kelamin = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Input'
      })
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
