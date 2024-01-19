import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  login(username: any, password: any) {
    const url = `http://localhost/api/pedagang-pelaihari/login.php?Username=${username}&Password=${password}`;
    return this._http.get(url);
  }

  tampilPedagang(){
    return this._http.get('http://localhost/api/pedagang-pelaihari/readp.php');
  }

  tampilBarang() {
    return this._http.get('http://localhost/api/pedagang-pelaihari/read.php');
  }
  tambahBarang(data: any) {
    return this._http.post(
      'http://localhost/api/pedagang-pelaihari/create.php',
      data
    );
  }
  tambahPedagang(namapedagang: any) {
    const url = `http://localhost/api/pedagang-pelaihari/createp.php?namapedagang=${namapedagang}`;
    return this._http.get(url);
  }
  editBarang(data: any) {
    return this._http.post(
      'http://localhost/api/pedagang-pelaihari/update.php',
      data
    );
  }
  editPedagang(data: any) {
    return this._http.post(
      'http://localhost/api/pedagang-pelaihari/updatep.php',
      data
    );
  }
  hapusBarang(id: any) {
    return this._http.get(
      `http://localhost/api/pedagang-pelaihari/delete.php?idbarang=${id}`
    );
  }
  hapusPedagang(id: any) {
    return this._http.get(
      `http://localhost/api/pedagang-pelaihari/deletep.php?idpedagang=${id}`
    );
  }
}
