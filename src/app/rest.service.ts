import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from './student';

  const endpoint = 'https://localhost:44318/api/';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  getStudents(): Observable<any>{
    return this.http.get<Student>(endpoint + 'students').pipe(catchError(this.handleError));
  }
  getStudent(id: string): Observable<any> {
    return this.http.get<Student>(endpoint + 'students/' + id).pipe(
      catchError(this.handleError)
    );
  }
  addStudent(student: any): Observable<any> {
    return this.http.post(endpoint + 'students', student).pipe(
      catchError(this.handleError)
    );
  }
  updateStudent(id: string, student: Student): Observable<any> {
    return this.http.put<Student>(endpoint + 'students/' + id, student).pipe(
      catchError(this.handleError)
    );
  }
  deleteStudent(id: string): Observable<any> {
    return this.http.delete<Student>(endpoint + 'students/' + id).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Returned code ${error.status}, ` +
        `Details: ${error.error}`);
    }
    return throwError(
      'Something went wrong; please try again later.');
  }
}
