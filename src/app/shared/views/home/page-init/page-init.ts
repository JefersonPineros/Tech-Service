import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-init',
  imports: [CardModule, Button, RouterModule],
  templateUrl: './page-init.html',
  styleUrl: './page-init.css',
})
export class PageInit {
  constructor(private router: Router) {}

  servicePage() {
    this.router.navigate(['/shared/views/home/services']);
  }

  adminPage() {
    this.router.navigate(['/shared/views/home/admin-page']);
  }
}
