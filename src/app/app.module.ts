import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SelectModule } from 'ng2-select';

// import routing module
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { RecruitsComponent } from './recruit/recruits.component';
import { TeamsComponent } from './team/teams.component';
import { TeamDetailComponent } from './team/team-detail.component';
import { AboutComponent } from './about/about.component';
import { ConcertComponent } from './concert/concert.component';
import { AppService } from './app.service';
import { ConcertService } from './concert/concert.service';
import { TeamsResolver } from './team/teams.resolve';
import { TeamResolver } from './team/team.resolve';
import { TeamService } from './team/team.service';
import { RecruitsResolver } from './recruit/recruits.resolve';
import { RecruitResolver } from './recruit/recruit.resolve';
import { RecruitService } from './recruit/recruit.service';
import { RecruitEditPageComponent } from './recruit/recruit-editor/recruit-edit-page.component';
import { RecruitFormComponent } from './recruit/recruit-editor/recruit-form.component';
import { RecruitNewPageComponent } from './recruit/recruit-editor/recruit-new-page.component';
import { TeamNewPageComponent } from './team/team-editor/team-new-page.component';
import { TeamFormComponent } from './team/team-editor/team-form.component';
import { TeamEditPageComponent } from './team/team-editor/team-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    RecruitsComponent,
    TeamsComponent,
    TeamDetailComponent,
    AboutComponent,
    ConcertComponent,
    RecruitEditPageComponent,
    RecruitFormComponent,
    RecruitNewPageComponent,
    TeamNewPageComponent,
    TeamFormComponent,
    TeamEditPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'schubert-front' }),
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    SelectModule,
  ],
  providers: [
    AppService,
    ConcertService,
    TeamService,
    TeamResolver,
    TeamsResolver,
    RecruitService,
    RecruitResolver,
    RecruitsResolver,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
