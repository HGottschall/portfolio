import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http
      .get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length) return users[0];
          throw new Error('Credenciais inválidas');
        }),
        catchError(err => throwError(() => err))
      )
  }
}
