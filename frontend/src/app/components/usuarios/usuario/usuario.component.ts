import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private rolService: RolService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    );
  }

  eliminar(id: number){
    Swal.fire({
      title: 'Eliminar',
      text: 'Esta seguro que desea eliminar el usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe(
          data => {
            this.usuarioService.getUsuarios().subscribe(
              usuarios => {
                this.usuarios = usuarios;
              }
            );
            
            Swal.fire(
              'Eliminado!',
              'Usuario eliminado con éxito.',
              'success'
            )
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se eliminó el usuario',
          'error'
        )
      }
    })
  }

}
