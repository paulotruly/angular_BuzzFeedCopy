import { Component } from '@angular/core';
import { Cabecalho } from '../cabecalho/cabecalho';
import { MainCard } from '../main-card/main-card';

@Component({
  selector: 'app-home',
  imports: [Cabecalho, MainCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
