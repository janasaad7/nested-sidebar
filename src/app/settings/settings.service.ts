import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from './animal.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {
  }

  http = inject(HttpClient);

  getAnimals() {
    return this.http.get<Animal[]>('https://681c73ddf74de1d219ac74fe.mockapi.io/learn/animals');
  }

  getAnimal(id: number) {
    return this.http.get<Animal>(`https://681c73ddf74de1d219ac74fe.mockapi.io/learn/animals/${id}`);
  }

  addAnimal(animal: Animal) {
    return this.http.post<Animal>('https://681c73ddf74de1d219ac74fe.mockapi.io/learn/animals', animal);
  }

  updateAnimal(id: number, animal: Animal) {
    return this.http.put<Animal>(`https://681c73ddf74de1d219ac74fe.mockapi.io/learn/animals/${id}`, animal);
  }

  deleteAnimal(id: number) {
    return this.http.delete<Animal>(`https://681c73ddf74de1d219ac74fe.mockapi.io/learn/animals/${id}`);
  }
}
