import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingsPage, TeamDetailPage } from '../pages';

@Component({
    templateUrl: 'team-home.html'
})
export class TeamHomePage {

    team: any;
    standingsTab = StandingsPage;
    teamDetailTab = TeamDetailPage;

    constructor(private nav: NavController, private navParams: NavParams) {

        this.team = this.navParams.data;

    }

}