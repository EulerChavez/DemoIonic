import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EliteApiService {

    private baseUrl = 'https://demoionic-689e1.firebaseio.com';
    currentTourney: any = {};

    constructor(public http: Http) { }

    getTournaments() {

        // Using promises
        return new Promise(resolve => {

            this.http
                .get(this.baseUrl + '/tournaments.json')
                .subscribe(res => resolve(res.json()));

        });

    }

    getTournamentData(tourneyId) {

        // Using rxjs/Observable
        return this.http
            .get(this.baseUrl + '/tournaments-data/' + tourneyId + '.json')
            .map(response => {
                this.currentTourney = response.json();
                return this.currentTourney;
            });

    }

    getCurrentTourney() {

        return this.currentTourney;

    }

}