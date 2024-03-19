let frm = document.getElementById('datapegawai');
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihJabatan = `<option value=""> Pilihan Jabatan ----</option>`;
for (let j in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
}
frm.jabatan.innerHTML = pilihJabatan;
let pilihStatus = `<option value=""> Pilihan Status ----</option>`;
for (let s in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function datapegawai(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;
    let gajiPokok;

    
    switch(jabatan){
        case 'Manager' : gajiPokok = 15000000; break;
        case 'Asisten Manager' : gajiPokok = 10000000; break;
        case 'Staff' : gajiPokok = 5000000; break;
        default: gajiPokok = 0;
    }

    let tunjanganJabatan = 0.15 * gajiPokok;
    let bpjs = 0.10 * gajiPokok;
    let tunjanganKeluarga = (status === 'Menikah') ? 0.20 * gajiPokok : 0;

    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    //output data pegawai
    Swal.fire({
        title: 'Data Pegawai',
        html: `
        <table border="1" align="center" cellpadding="10" cellspacing="0" width="50%" >
            <thead>
                <tr>
                    <th>Nama Pegawai</th>
                    <th>Jabatan</th>
                    <th>Status</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${nama}</td>
                    <td>${jabatan}</td>
                    <td>${status}</td>
                </tr>
            <tfoot id="totalGaji">
                <tr>
                    <td colspan="7">Total Gaji: ${totalGaji} </td>
                </tr>
            </tfoot>
               
            </tbody>
        </table>
        `,
        confirmButtonText: 'OK'
    });
}
