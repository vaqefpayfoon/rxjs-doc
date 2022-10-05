import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root',
  })
export class DataService {
    constructor(private http: HttpClient) { }
    getData(): Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
}