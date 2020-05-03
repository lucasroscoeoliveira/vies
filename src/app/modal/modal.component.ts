import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isOverModal: boolean;

  constructor(public modal: Modal) { 
    this.isOverModal = false;
  }

  ngOnInit(): void {
  }

  closeModal() {
    if(!this.isOverModal){
      this.modal.close();
    }
  }
}
