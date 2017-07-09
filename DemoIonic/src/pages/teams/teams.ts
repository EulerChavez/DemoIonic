﻿import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamHomePage } from '../pages'

@Component({
    templateUrl:'teams.html'
})
export class TeamsPage {

    teams = [
        { id: 1, name: 'HC Elite' },
        { id: 2, name: 'Team Takeover' },
        { id: 3, name: 'DC Thunder' }
    ];

    constructor(private nav: NavController) {

    }

    itemTapped(team) {

        this.nav.push(TeamHomePage, team)

    }

}