import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/ClientModel';

@Injectable({
  providedIn: 'root'
})
export class ClientAppService {

  api: String;

  constructor(private http: HttpClient) {
    this.api = environment.api + '/clients';
  }

  create(client: ClientModel, mailData: any) {
    return this.http.post(`${this.api}`, {
      client: client,
      mailData: mailData
    });
  }

  read(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  get() {
    return this.http.get(`${this.api}`);
  }

  update(client: ClientModel){
    return this.http.put(`${this.api}`, client);
  }

  delete(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }
}
