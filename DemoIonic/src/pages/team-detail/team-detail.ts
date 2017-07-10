import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'team-detail.html'
})
export class TeamDetailPage {

    team: any;

    constructor(public nav: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {

        this.team = this.navParams.data;

    }

}