import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import Swal from 'sweetalert2';
import { async } from 'rxjs/internal/scheduler/async';
import { MatDialog } from '@angular/material/dialog';
import { EditarClientesModalComponent } from './editar-clientes-modal/editar-clientes-modal.component';


@Component({
  selector: 'app-clientes', 
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  
  constructor(private ClientesServ: ClientesService, public dialog: MatDialog){}
  
  displayedColumns: string[] = ['id','cliente_nombre','cliente_apellido', 'cliente_telefono','cliente_email','cliente_activo', 'accion', 'editar'];
  dataSource: any;  

  ngOnInit(): void {
    this.ClientesServ.getClientes().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data;
    });
  }
  deleteCliente(id:number) {
    this.ClientesServ.deleteCliente(id).subscribe((response) => {
      Swal.fire({
        title: "Exito",
        text: response.msg,
        icon: 'success',
      }).then(() => (this.ngOnInit()
       
      ));
  })
}

  editCliente(id:number) {
    this.ClientesServ.getCliente(id).subscribe((clienteRecibido) => {
      const dialogRef = this.dialog.open(EditarClientesModalComponent, {
        width: '250px',
        data: clienteRecibido,
      });
      dialogRef.afterClosed().subscribe((clienteEditado) => {
        if (clienteEditado != undefined) {
          this.ClientesServ
          .editCliente(id, clienteEditado)
          .subscribe((response) => {
            Swal.fire({
              title: 'Exito',
              text: response.msg,
              icon: 'success',
            }).then(() => {
              this.ngOnInit();
            });
          });
        }
      });
    });
  }

  async crearCliente() {
    let nuevoC: any = {};
    await Swal.fire({
      title:'Crear nuevo Cliente',
      input:'text',
      inputLabel:'Ingresar Nombre del Cliente',
      inputPlaceholder:'Ej.: Carlos',
    }).then(async (result) => {
      if (result.isConfirmed) {
        nuevoC.cliente_nombre = result.value;
        await Swal.fire({
          title: 'Crear nuevo Cliente',
          input:'text',
          inputLabel:'Ingresar Apellido del Cliente',
          inputPlaceholder:'Ej.: Bala',
        }).then(async (result) => {
          if (result.isConfirmed) {
            nuevoC.cliente_apellido = result.value;
            await Swal.fire({
              title: 'Crear nuevo Cliente',
              input:'text',
              inputLabel:'Ingresar Telefono del Cliente',
              inputPlaceholder:'Ej.: 0351 5555555',
            }).then(async (result) => {
              if (result.isConfirmed) {
                nuevoC.cliente_telefono = result.value;
                await Swal.fire({
                  title: 'Crear nuevo Cliente',
                  input:'text',
                  inputLabel:'Ingresar Email del Cliente',
                  inputPlaceholder:'Ej.: apellido@gmail.com',
                }).then(async (result) => {
                      nuevoC.cliente_email = result.value;
                      this.ClientesServ.createCliente(nuevoC).subscribe((response) =>{
                        Swal.fire({
                          title: "Exito",
                          text: response.msg,
                          icon: 'success',
                        }).then(() => {
                          this.ngOnInit();
                        });
                      });
                    });
                  }
                });
              }
            });
           
            }
          }
        
      
        )}};

