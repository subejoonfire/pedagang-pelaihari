import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private _api: ApiService, private _router: Router) {}

  Username: any;
  Password: any;

  login() {
    this._api.login(this.Username, this.Password).subscribe(
      (res: any) => {
        if (res && res.status === 'success') {
          console.log('Login berhasil:', res.data);
          // Simpan data pengguna atau lakukan tindakan lain sesuai kebutuhan
          // Redirect atau navigasi ke halaman beranda setelah login
          this._router.navigate(['/home']);
        } else {
          console.error('Login gagal:', res ? res.message : 'Tidak ada respon dari server');
        }
      },
      (err: any) => {
        console.log('Error:', err);
      }
    );
  }
}
