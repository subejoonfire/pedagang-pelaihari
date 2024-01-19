import { ApiService } from '../api.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: any;
  constructor(private _api: ApiService) {
    this._api.tampilBarang().subscribe(
      (res: any) => {
        this.hasil = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  hasil: any;
  nama: any;
  harga: any;
  stok: any;
  modalTerbuka: any;
  barangEdit : any

  bukaModal(data : any){
    this.barangEdit = data
    this.modalTerbuka = true;
  }

  tambahBarang() {
    let data = {
      nama: this.nama,
      harga: this.harga,
      stok: this.stok,
    };
    this._api.tambahBarang(data).subscribe(
      (res: any) => {
        console.log('berhasil', res);
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  editBarang(item: any) {
    let data = {
      idbarang: item.idbarang,
      nama: item.namabarang,
      harga: item.hargabarang,
      stok: item.stokbarang,
    };
    this._api.editBarang(data).subscribe(
      (res: any) => {
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  hapusBarang(id: any) {
    this._api.hapusBarang(id).subscribe(
      (res: any) => {
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }

  cancel() {
    this.modalTerbuka = false;
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }
}
