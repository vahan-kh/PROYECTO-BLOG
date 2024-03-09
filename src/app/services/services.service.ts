import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Interface } from '../interfaces/interface.interface';

@Injectable({
  providedIn: 'root'
})
export class SERVICESService {

  private urlApi='https://my-json-server.typicode.com/mariogiron/blog-server/posts';

  private urlHttp = inject(HttpClient);

  getAll(): Observable <Interface []>{
    return this.urlHttp.get<Interface []>(this.urlApi)

  }

  getById(id: number): Observable<Interface> {
    const ruta = `${this.urlApi}/${id}`
    return this.urlHttp.get<Interface>(ruta)

  } 
  
  create(post: any): Observable<Interface> {
    return this.urlHttp.post<Interface>(this.urlApi, post);
  }
}
