import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temple-modal',
  standalone: true,
  imports: [],
  templateUrl: './temple-modal.component.html',
  styleUrl: './temple-modal.component.css'
})
export class TempleModalComponent {
  @Input() temple: any;
  @Output() close = new EventEmitter<void>();

  ngOnChanges() {
    console.log('TempleModalComponent - Temple:', this.temple);
  }

  closeModal() {
    this.close.emit();
  }
}
