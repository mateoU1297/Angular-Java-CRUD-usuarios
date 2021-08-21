import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsuarioService } from '../../../services/usuario.service';
import { RolService } from '../../../services/rol.service';

import { Rol } from '../../../interfaces/rol';

import Swal from 'sweetalert2';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form : FormGroup;
  roles: Rol[] = [];
  msj  : string = 'Creado';

  @Input() accion!: string;
  @Input() usuario: Usuario;

  @Output() onCancelar: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private usuarioService: UsuarioService) {
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        id_rol: ['', Validators.required],
        activo: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      }
    );

    if(this.accion == 'Editar'){
      this.form.setValue({nombre: this.usuario.nombre, id_rol: this.usuario.idRol, activo: this.usuario.activo});
      this.msj = 'Editado';
    }
  }

  cancelar(){
    this.onCancelar.emit();
  }

  onSubmit(){
    const user: Usuario = {
      nombre: (this.form.get('nombre')?.value).toLowerCase(),
      idRol : this.form.get('id_rol')?.value,
      activo: this.form.get('activo')?.value,
    }

    if(this.accion == 'Editar'){
      user.id = this.usuario.id;
    }

    this.usuarioService.create(user).subscribe(
      data => {
        Swal.fire({
          title: this.msj,
          text: `usuario ${this.msj} con éxito`,
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            this.onCancelar.emit();
          }
        });
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'El nombre del usuario que intenta crear ya esta en la base de datos',
          icon: 'error',
        });
      }
    )
  }

}
