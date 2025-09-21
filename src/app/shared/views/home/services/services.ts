import { Component } from '@angular/core';
import { GetServices } from '../../../../services/get-services';
import { ServicesTech } from '../../../../models/services';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [HttpClientModule, CardModule, CurrencyPipe, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
  providers: [GetServices],
})
export class Services {
  public listServices: Array<ServicesTech> = new Array<ServicesTech>();
  constructor(private getServices: GetServices, private router: Router) {
    this.getServices.getService().subscribe({
      next: (resp) => {
        this.listServices = resp;
        console.log(this.listServices);
      },
    });
  }

  showDescription(id: number) {
    this.router.navigate(['/shared/views/home/services', id]);
  }
}
