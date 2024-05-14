import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Livro } from '../../../models/livro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { LivrodetailsComponent } from '../livrodetails/livrodetails.component';
//import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { Autor } from '../../../models/autor';

@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MdbModalModule, LivrodetailsComponent, MdbAccordionModule],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss'
})
export class LivrolistComponent {

  modalservice = inject(MdbModalService);
  @ViewChild("modalDetalhe") modalLivroDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Livro[] = [];
  livroEdit!: Livro;

  constructor(){
    this.findAll();

    let livroNovo = history.state.livroNovo;
    let livroEditado = history.state.livroEditado;

    if(livroNovo){
      livroNovo.id = 123
      this.lista.push(livroNovo);
    }
    if(livroEditado){
      let indice = this.lista.findIndex(x => {return x.id  == livroEditado.id});
      this.lista[indice] = livroEditado
    }
  }
  findAll(){

    let autor = new Autor();
    autor.id = 1;
    autor.nome = 'JOAOZINHO';

    let livro1 = new Livro();
    livro1.id = 1;
    livro1.nome = "arca de noe";
    livro1.autor = autor;

    let livro2 = new Livro();
    livro2.id = 2;
    livro2.nome = "diario de um banana";
    livro2.autor = autor;

    let livro3 = new Livro();
    livro3.id = 3;
    livro3.nome = "freddy flinton";
    livro3.autor = autor;

    let livro4 = new Livro();
    livro4.id = 4;
    livro4.nome = "minecraft2";
    livro4.autor = autor;

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);
  }
  deletar(){
    if (confirm("tem certeza que deseja deletar?")){
    let indice = this.lista.findIndex( x => {return x.id == this.livroEdit.id});
    this.lista.splice(indice, 1);
    }
  }
  new(){
    this.modalRef = this.modalservice.open(this.modalLivroDetalhe);
  }
  edit(livro: Livro){
    this.modalRef = this.modalservice.open(this.modalLivroDetalhe);
  }
}
