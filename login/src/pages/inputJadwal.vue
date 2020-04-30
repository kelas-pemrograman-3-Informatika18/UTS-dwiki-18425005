<template>
  <q-page padding>
    <q-card flat >
      <q-card-section class="q-gutter-md">
        <div class="text-h5">Input Register Sekolah</div>
        <q-form
          @reset="onReset"
          @submit="onSubmit"
          class="q-mt-lg"
        >
        <div class="q-gutter-md">
          <q-input label="Waktu Pendaftaran Siswa" v-model="Waktu_Pendaftaran_Siswa" filled  :rules="[ val => val && val.length > 0 || 'Insert Your Time']"></q-input>
          <q-input label="Nama Siswa" v-model="Nama_siswa" filled :rules="[ val => val && val.length > 0 || 'Insert Your Name']"></q-input>
          <q-input label="Nama Sekolah" v-model="Nama_sekolah" filled :rules="[ val => val && val.length > 0 || 'Insert Your Name school']"></q-input>
          <q-input label="jenis kelamin" v-model="Jenis_kelamin" filled :rules="[ val => val && val.length > 0 || 'Insert Your gender']"></q-input>
          <q-input label="Keterangan" v-model="Keterangan" filled :rules="[ val => val && val.length > 0 || 'Insert Your Keterangan']"></q-input>
          <q-btn label="Input" type="submit" color="teal" unelevated></q-btn>
          <q-btn label="Reset" type="reset" color="teal" flat unelevated></q-btn>
        </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      Waktu_Pendaftaran_Siswa: null,
      Nama_siswa: null,
      Nama_sekolah: null,
      Jenis_kelamin: null,
      Keterangan: null
    }
  },
  methods: {
    onReset () {
      this.Waktu_Pendaftaran_Siswa = null
      this.Nama_siswa = null
      this.Nama_sekolah = null
      this.Jenis_kelamin = null
      this.Keterangan = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Input'
      })
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
