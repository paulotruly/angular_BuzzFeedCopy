import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questionscard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionscard.html',
  styleUrl: './questionscard.css'
})
export class Questionscard {
    @Input() questions: any[] = [];
}
