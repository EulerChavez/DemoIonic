import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    templateUrl: 'tournaments.html'
})
export class TournamentsPage {

    tournaments: any;


    constructor(private nav: NavController, private eliteApi: EliteApi) { }

    ionViewDidLoad() {
        this.eliteApi
            .getTournaments()
            .then(data => this.tournaments = data);
    }

    itemTapped(tourney) {
        this.nav.push(TeamsPage, tourney);
    }

}

