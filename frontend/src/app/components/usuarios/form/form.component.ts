import { Component, Input, OnInit } from '@angular/core';
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

  form   : FormGroup;
  roles  : Rol[] = [];

  @Input() id!: string; 
  @Input() accion!: string;

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private usuarioService: UsuarioService) {
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        id_rol : ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      }
    );
  }

  cancelar(){

  }

  onSubmit(){

    const user: Usuario = {
      nombre: this.form.get('nombre')?.value,
      idRol : this.form.get('id_rol')?.value,
      activo: this.form.get('activo')?.value,
    }

    this.usuarioService.create(user).subscribe(
      data => {
        Swal.fire({
          title: 'Creado',
          text: 'usuario creado con éxito',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("entrooo");
          }
        });
      }
    )
  }

}
