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

    constructor(public nav: NavController, public navParams: NavParams) {

        this.team = this.navParams.data;

    }

}