import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecruitService } from './../recruit.service';
import { Recruit } from '../recruit.model';
import { Team } from '../../team/team.model';

@Component({
  selector: 'app-recruit-new-page',
  templateUrl: './recruit-new-page.component.html',
  styleUrls: ['./recruit-editor.component.scss']
})
export class RecruitNewPageComponent implements OnInit {

  recruit: Recruit;

  constructor(
    private route: ActivatedRoute,
    private recruitService: RecruitService
  ) { }

  ngOnInit() {
    this.recruit = new Recruit();
    const teamId: string = this.route.snapshot.queryParams['teamId'];
    if (teamId == null) {
      this.recruit.team = new Team();
    }
    else {
      // TODO id から team を取得するようにする
      // this.teamService.getTeam(teamId) うんぬん
    }
  }

  createRecruitButtonClickHander(): void {
    this.recruitService.createRecruit(this.recruit)
      .subscribe();
  }

}
