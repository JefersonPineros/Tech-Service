import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUser } from '../../../models/loginUser';
import { Login } from '../../../services/login';
import { Router, RouterModule } from '@angular/router';
import { ToastModule, Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  imports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    TextareaModule,
    FloatLabel,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule,
    HttpClientModule,
    Toast,
  ],
  standalone: true,
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  providers: [Login],
})
export class Auth {
  public userlogin: LoginUser = new LoginUser();

  constructor(
    private loginService: Login,
    private router: Router,
    private messageService: MessageService
  ) {}

  login(): void {
    this.loginService.login(this.userlogin).subscribe({
      next: (res) => {
        if (res) {
          let userLogin = res.find(
            (item: LoginUser) =>
              item.email == this.userlogin.email && item.password == this.userlogin.password
          );
          console.log(userLogin);

          if (userLogin) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Inicio de sesión exitoso',
              life: 3000,
            });
            setTimeout(() => {
              this.router.navigate(['/shared/views/home']);
            }, 1000);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'El usuario o contraseña no existe o no es correcto',
              life: 3000,
            });
          }
        }
      },
    });
  }
}
