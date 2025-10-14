import { Component } from '@angular/core';
import { QuizCard } from '../quiz-card/quiz-card';
import * as dadosQuizzes from '../../../public/dados.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [QuizCard, CommonModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
  quizzes = dadosQuizzes.quizzes;
}
