import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteApiService } from '../../providers/EliteApiService';

@Component({
    templateUrl: 'tournaments.html'
})
export class TournamentsPage {

    tournaments: any;

    constructor(private nav: NavController, private loadingController: LoadingController, public eliteApi: EliteApiService) { }

    ionViewDidLoad() {

        let loader = this.loadingController.create({
            content: 'Getting tournaments...',
            spinner: 'dots'
        });

        loader.present().then(() => {

            this.eliteApi
                .getTournaments()
                .then(data => {
                    this.tournaments = data;
                    loader.dismiss();
                });

        });

    }

    itemTapped(tourney) {

        this.nav.push(TeamsPage, tourney);

    }
}

