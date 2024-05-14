import { Component, EventEmitter, Input, Output, inject, input, output } from '@angular/core';
import { Livro } from '../../../models/livro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { state } from '@angular/animations';

@Component({
  selector: 'app-livrodetails',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './livrodetails.component.html',
  styleUrl: './livrodetails.component.scss'
})
export class LivrodetailsComponent {

  @Input("livro") livro: Livro = new Livro();
  @Output("retorno") retorno: EventEmitter<any> = new EventEmitter();

  livros: Livro = new Livro();
  router = inject(ActivatedRoute);
  royter2 = inject(Router);

  constructor(){

    let id = this.router.snapshot.params["id"];
    if(id>0){
      this.findById(id);
    }
  }

  findById(id: number){

    let livroRetorno: Livro = new Livro();
    this.livro = livroRetorno;
  }
  save(){
    if(this.livro.id > 0){
      alert("editado com sucesso")
      this.royter2.navigate(["admin/livros", {state: {livroEditado: this.livro}}])
    }else{
      alert("salvo com sucesso")
      this.royter2.navigate(["admin/livros", {state: {livroNovo: this.livro}}])

    }
    
  }
}
