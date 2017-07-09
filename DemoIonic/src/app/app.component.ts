﻿import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { EliteApi } from '../shared/shared';

import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';

@Component({
    templateUrl: 'app.html',
    providers: [
        EliteApi
    ]
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage = MyTeamsPage;

    constructor(platform: Platform) {

        platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();

            Splashscreen.hide();

        });
    }

    // Metodos del Slide Menu
    goHome() {
        this.nav.setRoot(MyTeamsPage);
    }

    goToTournaments() {
    }

}
