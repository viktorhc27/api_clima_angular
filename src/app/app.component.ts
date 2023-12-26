import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClimaService } from './service/clima.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import moment from 'moment';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ClimaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HttpClientModule, ReactiveFormsModule]
})
export class AppComponent {
  title = 'api_clima';
  data: any
  formGroup: FormGroup;
  map: any;
  Math: any;

  constructor(
    private service: ClimaService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  buscar() {
    this.service.buscar_clima(this.formGroup.controls['nombre'].value).subscribe({
      next: (res: any) => {
        
        const fechaMoment = moment(res.location.localtime);
        res.location.localtime = fechaMoment.format('dddd DD [de] MMMM')
        console.log(res);
        this.data = res
      }, error: (err: any) => {
        Swal.fire('', 'Ciudad no encontrada', 'error');
        console.log(err);
      }
    });

  }

  redondearNumero(numero: number): number {
    return Math.round(numero);
  }
}
