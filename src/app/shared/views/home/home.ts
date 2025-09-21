import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Menubar, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
