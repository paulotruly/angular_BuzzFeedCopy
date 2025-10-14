import { Component } from '@angular/core';
import * as dadosQuizzes from '../../../public/dados.json'

@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.html',
  styleUrl: './main-card.css'
})
export class MainCard {
  quizzesDados: any[] = dadosQuizzes.quizzes;
  primeiroQuiz: any = this.quizzesDados[1];
}