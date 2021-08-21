import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios : Usuario[] = [];
  buscador : string = '';
  showForm : boolean = false;
  showTable: boolean = true;
  accion   : string = '';
  usuario  : Usuario;

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  limpiarBuscador(){
    this.buscador = '';
    this.usuarioService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    );
  }

  buscarPorNombre(){
    if(this.buscador != ''){
      this.usuarioService.getUsuariosByName(this.buscador.toLowerCase()).subscribe(
        usuarios => {
          this.usuarios = usuarios;
        }
      );
    }
  }

  crear(){
    this.showTable = false;
    this.showForm  = true;
    this.accion    = 'Crear';
  }

  editar(usuario: Usuario){
    this.showTable = false;
    this.showForm  = true;
    this.accion    = 'Editar';
    this.usuario   = usuario;
  }

  cerrarFormulario(){
    this.showTable = true;
    this.showForm  = false;
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    );
  }

  eliminar(id: number){
    Swal.fire({
      title: 'Eliminar',
      text: '¿Esta seguro que desea eliminar el usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe(
          data => {
            this.getUsuarios();
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
