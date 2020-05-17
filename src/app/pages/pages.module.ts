import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { HomeComponent } from './home/home.component';
// import { ServicosComponent } from './servicos/servicos.component';
// import { HistoriaComponent } from './historia/historia.component';
// import { NoticiasComponent } from './noticias/noticias.component';
// import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
// import { ContatoComponent } from './contato/contato.component';
import { EmBreveComponent } from './em-breve/em-breve.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HistoriaComponent } from './historia/historia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EmBreveComponent,
    HomeComponent,
    ContatoComponent,
    ServicosComponent,
    HistoriaComponent,
    NoticiasComponent,
    TrabalheConoscoComponent
  ]
})
export class PagesModule { }