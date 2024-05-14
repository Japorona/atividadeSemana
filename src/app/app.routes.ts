import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrolistComponent } from './components/livro/livrolist/livrolist.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { Component } from '@angular/core';
import { AutorlistComponent } from './components/autor/autorlist/autorlist.component';
import { LivrodetailsComponent } from './components/livro/livrodetails/livrodetails.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "livros", component: LivrolistComponent},
        {path: "autor", component: AutorlistComponent},
        {path: "livros/new", component: LivrodetailsComponent},
        {path: "livros/edit/:id", component: LivrodetailsComponent},
        {path: "autor/edit/:id", component: AutorlistComponent},
        {path: "autor/edit/:id", component: AutorlistComponent}
    ]}
];
