import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  login(username: any, password: any) {
    const url = `http://localhost/api/alat-toko-bangunan/login.php?Username=${username}&Password=${password}`;
    return this._http.get(url);
  }

  tampilBarang() {
    return this._http.get('http://localhost/api/alat-toko-bangunan/read.php');
  }
  tambahBarang(data: any) {
    return this._http.post(
      'http://localhost/api/alat-toko-bangunan/create.php',
      data
    );
  }
  editBarang(data: any) {
    return this._http.post(
      'http://localhost/api/alat-toko-bangunan/update.php',
      data
    );
  }
  hapusBarang(id: any) {
    return this._http.get(
      `http://localhost/api/alat-toko-bangunan/delete.php?idbarang=${id}`
    );
  }
}
