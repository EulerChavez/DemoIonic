import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TeamsPage, TournamentsPage, TeamDetailPage, GamePage, MyTeamsPage, StandingsPage, TeamHomePage } from '../pages/pages';

import { EliteApiService } from '../providers/EliteApiService';

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
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
        EliteApiService]
})
export class AppModule { }