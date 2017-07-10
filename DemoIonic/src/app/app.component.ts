import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyTeamsPage, TournamentsPage } from '../pages/pages';

@Component({
    templateUrl: 'app.html',
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
