import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';

import { EliteApiService } from '../../providers/EliteApiService';

@Component({
    templateUrl: 'teams.html'
})
export class TeamsPage {

    teams = [];

    constructor(private nav: NavController, private navParams: NavParams, public eliteApi: EliteApiService) {

    }

    ionViewDidLoad() {

        let selectedTourney = this.navParams.data;

        this.eliteApi
            .getTournamentData(selectedTourney.id)
            .subscribe(data => {
                this.teams = data.teams;
            });

    }

    itemTapped(team) {

        this.nav.push(TeamHomePage, team)

    }


}