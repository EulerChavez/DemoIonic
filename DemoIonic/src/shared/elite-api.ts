import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EliteApi {

    private baseUrl = 'https://demoionic-689e1.firebaseio.com';

    constructor(private http: Http, private response: Response) { }

    getTournaments() {

        return new Promise(resolve => {
            this.http
                .get(this.baseUrl + '/tournaments.json')
                .subscribe(res => resolve(res.json()));
        });

    }

}