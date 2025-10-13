import { Component } from '@angular/core';
import { Cabecalho } from '../cabecalho/cabecalho';
import { MainCard } from '../main-card/main-card';
import { MainContent } from '../main-content/main-content';

@Component({
  selector: 'app-home',
  imports: [Cabecalho, MainCard, MainContent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

}
