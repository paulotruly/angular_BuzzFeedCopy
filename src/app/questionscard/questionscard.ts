import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-questionscard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionscard.html',
  styleUrl: './questionscard.css'
})
export class Questionscard {
    @Input() questions: any[] = [];
    @Output() quizResultado = new EventEmitter<number>();

    pontuacao: number = 0;
    respostasContadas: number = 0;
    quizFinalizado: boolean = false;

    perguntasRespondidas: number[] = [];

    constructor() {}

    handleAnswer(alternativaSelecionada: any, perguntaIndex: number) {
      console.log('Clique detectado!');
      // verifica se a pergunta já foi respondida, porque toda vez
      // que ela é respondida é guardada na lista de respondidas
      if (this.perguntasRespondidas.includes(perguntaIndex)) {
        return;
      }

      if (alternativaSelecionada.respostaCerta) {
        this.pontuacao++;
      }

      this.respostasContadas++;
      console.log(this.respostasContadas);
      this.perguntasRespondidas.push(perguntaIndex);

      if (this.respostasContadas === this.questions.length) {
        this.quizFinalizado = true;
        this.quizResultado.emit(this.pontuacao);
        console.log("FIM DO QUIZ! Pontuação total: ", this.pontuacao, "/", this.questions.length);
      }
    }


}
