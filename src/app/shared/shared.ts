import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-shared',
  imports: [RouterModule, MenubarModule, ButtonModule],
  templateUrl: './shared.html',
  styleUrl: './shared.css',
})
export class Shared {}
