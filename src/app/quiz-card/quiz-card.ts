import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  imports: [],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.css'
})
export class QuizCard {
  @Input() dados: any;
}
