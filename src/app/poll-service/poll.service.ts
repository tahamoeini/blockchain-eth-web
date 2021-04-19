import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'What?',
        thumbnail: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
        results: [0, 5, 7, 1],
        options: ['Cats', 'Dogs', 'Donkeys'],
        voted: true,
      },
      {
        id: 2,
        question: 'Who?',
        thumbnail: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
        results: [1, 6, 4],
        options: ['Red', 'Blue', 'Green'],
        voted: false,
      }
    ]).pipe(delay(2000))
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber)
  }

  createPoll(poll: PollForm) {
    console.log(poll)
  }
}
