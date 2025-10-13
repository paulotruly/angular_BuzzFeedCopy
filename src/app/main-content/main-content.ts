import { Component } from '@angular/core';
import { QuizCard } from '../quiz-card/quiz-card';

@Component({
  selector: 'app-main-content',
  imports: [QuizCard],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {

}
