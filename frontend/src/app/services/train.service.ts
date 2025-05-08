import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Train {
  number: string;
  destination: string;
  departureTime: string;
  status: string;
  wagons: number;
}

@Injectable({ providedIn: 'root' })
export class TrainService {
  private readonly apiUrl = '/api/trains';

  private refreshSubject = new Subject<void>();
  refresh$ = this.refreshSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(this.apiUrl);
  }

  addTrain(train: Train): Observable<Train> {
    this.refreshSubject.next(); // forcer le reload
    return this.http.post<Train>(this.apiUrl, train);
  }
}
