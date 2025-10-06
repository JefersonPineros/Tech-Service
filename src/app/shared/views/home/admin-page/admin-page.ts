import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonModule, ButtonIcon, ButtonLabel } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { GetServices } from '../../../../services/get-services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesTech } from '../../../../models/services';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ButtonIcon,
    ButtonLabel,
    TableModule,
    CurrencyPipe,
    HttpClientModule,
    ChipModule,
    DialogModule,
    InputTextModule,
    FloatLabel,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    ToggleSwitchModule,
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
  providers: [GetServices],
})
export class AdminPage implements OnInit {
  public showDialog: boolean = false;
  public listItems: Array<any> = new Array<any>();
  public itemSelected: ServicesTech = new ServicesTech();

  constructor(private getServices: GetServices) {}

  ngOnInit(): void {
    this.getServices.getService().subscribe({
      next: (resp) => {
        this.listItems = resp;
        console.log(this.listItems);
      },
    });
  }

  openDialog(itemS?: ServicesTech): void {
    if (itemS) {
      this.itemSelected = itemS;
    } else {
      this.itemSelected = new ServicesTech();
    }
    if (!this.showDialog) {
      this.showDialog = true;
    }
  }

  deleteItem(id: number): void {
    this.listItems = this.listItems.filter((item) => item.id !== id);
  }
}
