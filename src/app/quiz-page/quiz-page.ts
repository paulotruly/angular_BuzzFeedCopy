import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cabecalho } from '../cabecalho/cabecalho';
import { Questionscard } from '../questionscard/questionscard';
import * as dadosQuizzes from '../../../public/dados.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [Cabecalho, Questionscard, CommonModule],
  templateUrl: './quiz-page.html',
  styleUrl: './quiz-page.css'
})
export class QuizPage implements OnInit {
    quiz: any; // essa variável vai guardar o quiz que vai ser renderizado
    quizzes = dadosQuizzes.quizzes; // trazendo o json

    resultadoPontuacao: number = 0;
    quizFinalizado: boolean = false;

    constructor(private route: ActivatedRoute) {} // permite usar as informações da rota atual

    // esse hook é responsável por rodar assim que o componente é renderizado
    ngOnInit() {
      // pegando o id da URL
        const id = Number(this.route.snapshot.paramMap.get('id'))
      // procurando o id de quiz e procura se existe dentro do quizzes
      //    'q' representa cada elemento do array enquanto .find() percorre a lista e verifica se o q.id é igual ao id da rota
        this.quiz = this.quizzes.find(q => q.id === id);
    }

    receberResultado(pontos: number) {
        this.resultadoPontuacao = pontos;
        this.quizFinalizado = true;
    }
}
