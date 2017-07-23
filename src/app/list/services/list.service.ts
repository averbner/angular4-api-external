import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from '../models/list.model';

@Injectable()
export class ListService {
    // projects: Array<List> = [];
    constructor(private _http: Http) {

    }

    getAll(): Observable<Array<List>> {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        // const headers = new Headers ({'Content-Type': 'application/json'});
        // const options = new RequestOptions({
        //     headers: headers
        // });
        return this._http.get(url).map((response) => {
            console.log(response);
            return response.json();
        });
    }
}
