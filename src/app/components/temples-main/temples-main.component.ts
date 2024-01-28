import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempleModalComponent } from "../temple-modal/temple-modal.component";

@Component({
    selector: 'app-temples-main',
    standalone: true,
    templateUrl: './temples-main.component.html',
    styleUrls: ['./temples-main.component.css'],
    imports: [CommonModule, FormsModule, TempleModalComponent]
})
export class TemplesMainComponent implements OnInit {

  constructor(private service: SharedService) { }

  TempleList: any[] = [];

  selectedTemple: any;

  ngOnInit(): void {
    this.refreshTempleList();
  }

  refreshTempleList() {
    this.service.getAllTemples().subscribe(data => {
      this.TempleList = data;
    });
  }

  showDetails(temple: any) {
    this.selectedTemple = temple;
  }

  closeModal() {
    this.selectedTemple = undefined;
  }
}