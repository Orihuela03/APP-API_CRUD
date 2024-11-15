import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endpoint = 'http://localhost:8080/api/bikes';

  constructor(private httpClient : HttpClient) { }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  deleteBicyles() {}

  updateBicyles() {}

  createBicyles() {}
}
