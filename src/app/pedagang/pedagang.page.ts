import { ApiService } from '../api.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedagang',
  templateUrl: './pedagang.page.html',
  styleUrls: ['./pedagang.page.scss'],
})
export class PedagangPage {
  @ViewChild(IonModal) modal: any;
  constructor(private _api: ApiService, private _router: Router) {
    this._api.tampilPedagang().subscribe(
      (res: any) => {
        this.pedagang = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }

  pedagang : any
  barangEdit : any
  modalTerbuka : any
  namapedagang : any

  dataBarang(){
    this._router.navigate(['/home'])
  }

  tambahPedagang(){
    this._api.tambahPedagang(this.namapedagang).subscribe(
      (res: any) => {
        console.log('berhasil', res);
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  hapusPedagang(idpedagang : any){
    this._api.hapusPedagang(idpedagang).subscribe(
      (res: any) => {
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  editPedagang(data : any){
    this._api.editPedagang(data).subscribe(
      (res: any) => {
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }


  bukaModal(data : any){
    this.barangEdit = data
    this.modalTerbuka = true;
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
