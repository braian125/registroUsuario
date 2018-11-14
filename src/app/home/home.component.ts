import { Component, OnInit } from '@angular/core';

class Registration {
  constructor(
    public nombres?: string,
    public apellidos?: string,
    public edad?: number,
    public email?: string,
    public telefono?: string,
    public tipoPase?: string
  ) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registrations: Registration[] = [];
  regModel: Registration;
  showNew: Boolean = false;
  submitType: string = 'Registrar';
  selectedRow: number;
  tiposPases: string[] = ['Pase Full', 'Pase Energía', 'Pase Materiales', 'Pase Infraestructura', 'Pase Logístico', 'Pase TIC'];

  constructor() {
  }

  ngOnInit() {
  }

  onNew() {
    this.regModel = new Registration();
    this.submitType = 'Registrar';
    this.showNew = true;
  }

  onSave() {
    if (this.submitType === 'Registrar') {
      this.registrations.push(this.regModel);
    } else {
      this.registrations[this.selectedRow].nombres = this.regModel.nombres;
      this.registrations[this.selectedRow].apellidos = this.regModel.apellidos;
      this.registrations[this.selectedRow].edad = this.regModel.edad;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].telefono = this.regModel.telefono;
      this.registrations[this.selectedRow].tipoPase = this.regModel.tipoPase;
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Editar';
    this.showNew = true;
  }

  onCancel() {
    this.showNew = false;
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  onChangeTipoPase(tipoPase: string) {
    this.regModel.tipoPase = tipoPase;
  }

}
