import { ApiService } from '../api.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: any;
  constructor(private _api: ApiService, private _router : Router) {
    this._api.tampilBarang().subscribe(
      (res: any) => {
        this.hasil = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );

    this._api.tampilPedagang().subscribe(
      (res: any) => {
        this.pedagang = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );

  }
  pedagang: any;
  hasil: any;
  nama: any;
  harga: any;
  stok: any;
  modalTerbuka: any;
  barangEdit : any
  idpedagang : any
  modalTerbukaPedagang : any

  bukaModal(data : any){
    this.barangEdit = data
    this.modalTerbuka = true;
  }

  dataPedagang(){
    this._router.navigate(['/pedagang']);
  }

  tambahBarang() {
    let data = {
      idpedagang: this.idpedagang,
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
