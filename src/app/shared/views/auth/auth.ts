import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth',
  imports: [ButtonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {}
