<template>
  <q-page padding>
      <q-table
      title="Jadwal pendaftaran"
      :data="data"
      :columns="columns"
      row-

key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Waktu Pendaftaran Siswa" :props="props">
            {{ props.row.Waktu_Pendaftaran_Siswa }}
          </q-td>
          <q-td key="Nama Siswa" :props="props">
            {{ props.row.Nama_Siswa }}
          </q-td>
          <q-td key="Nama Sekolah" :props="props">
            {{ props.row.Nama_sekolah }}
          </q-td>
          <q-td key="jenis kelamin" :props="props">
            {{ props.row.jenis_kelamin }}
          </q-td>
          <q-td key="Keterangan" :props="props">
            {{ props.row.Keterangan }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row">
             <div class="col">
                <q-btn label="edit" color="primary" icon="edit" unelevated ></q-btn>
              </div>
              <div class="col">
                <q-btn label="hapus" color="negative" icon="delete" unelevated ></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'Waktu Pendaftaran Siswa',
          required: true,
          label: 'Waktu Pendaftaran Siswa',
          align: 'left',
          field: 'Waktu Pendaftaran Siswa',
          sortable: true
        },
        { name: 'Nama Siswa', align: 'center', label: 'Nama Siswa', field: 'Nama Siswa', sortable: true },
        { name: 'Nama Sekolah', label: 'Nama Sekolah', align: 'center', field: 'Nama Sekolah', sortable: true },
        { name: 'jenis kelamin', label: 'jenis kelamin', align: 'center', field: 'jenis kelamin', sortable: true },
        { name: 'Keterangan', label: 'Keterangan', align: 'center', field: 'Keterangan', sortable: true },
        { name: 'aksi', label: 'aksi', field: 'aksi', align: 'center' }
      ],
      data: [
        {
          Waktu_Pendaftaran_Siswa: '5 april 2020',
          Nama_Siswa: 'Indra',
          Nama_sekolah: 'SDN 3 padang cermin',
          jenis_kelamin: 'laki-laki',
          Keterangan: 'Siswa Baru'
        },
        {
          Waktu_Pendaftaran_Siswa: '6 april 2020',
          Nama_Siswa: 'Sri Utari',
          Nama_sekolah: 'SDN 2 padang cermin',
          jenis_kelamin: 'perempuan',
          Keterangan: 'Siswa Baru'
        }
      ]
    }
  }
}
</script>
