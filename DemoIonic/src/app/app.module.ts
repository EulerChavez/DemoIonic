import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { TeamsPage, TournamentsPage, TeamDetailPage, GamePage, MyTeamsPage, StandingsPage, TeamHomePage } from '../pages/pages';

@NgModule({
    declarations: [
        MyApp,
        TeamsPage,
        TournamentsPage,
        TeamDetailPage,
        GamePage,
        MyTeamsPage,
        StandingsPage,
        TeamHomePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TeamsPage,
        TournamentsPage,
        TeamDetailPage,
        GamePage,
        MyTeamsPage,
        StandingsPage,
        TeamHomePage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }