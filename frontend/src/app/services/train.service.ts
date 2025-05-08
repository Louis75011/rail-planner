import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Train {
  _id?: string;
  number: string;
  destination: string;
  departureTime: string;
  status?: string;
  wagons?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private apiUrl = 'http://localhost:3000/api/trains';

  constructor(private http: HttpClient) {}

  getTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(this.apiUrl);
  }

  addTrain(train: Train): Observable<Train> {
    return this.http.post<Train>(this.apiUrl, train);
  }
}
