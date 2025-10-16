import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { QuizPage } from './quiz-page/quiz-page';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'quizpage', component: QuizPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura o roteamento
  exports: [RouterModule]
})

export class AppRoutingModule { }