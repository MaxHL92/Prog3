import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-clientes-modal',
  templateUrl: './editar-clientes-modal.component.html',
  styleUrls: ['./editar-clientes-modal.component.css']
})
export class EditarClientesModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditarClientesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}

  ngOnInit(): void {}

  cancelModal() {
    this.dialogRef.close();
  }

}
