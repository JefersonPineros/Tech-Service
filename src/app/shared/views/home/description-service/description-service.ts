import { Component, OnInit } from '@angular/core';
import { ServicesTech } from '../../../../models/services';
import { GetServices } from '../../../../services/get-services';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-description-service',
  imports: [HttpClientModule, CardModule, ChipModule, CurrencyPipe, ButtonModule],
  templateUrl: './description-service.html',
  styleUrl: './description-service.css',
  providers: [GetServices],
})
export class DescriptionService implements OnInit {
  public listServices: Array<ServicesTech> = new Array<ServicesTech>();
  public itemService: ServicesTech = new ServicesTech();

  public servicesId!: number;

  constructor(
    private getServices: GetServices,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe({
      next: (route) => {
        this.servicesId = Number(route.get('id'));
      },
    });
  }

  ngOnInit(): void {
    this.getServices.getService().subscribe({
      next: (resp) => {
        this.listServices = resp;
        this.itemService = this.listServices.filter((item) => item.id == this.servicesId)[0];
      },
    });
  }

  backPage(): void {
    this.router.navigate(['/shared/views/home/page-init']);
  }
}
