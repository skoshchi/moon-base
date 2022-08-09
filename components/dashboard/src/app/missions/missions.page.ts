import { Component } from '@angular/core';
import missionsInitData from 'data/init-data.json';

interface MISSIONS {
  id: Number;
  name: String;
  eng_id: Number;
  eng_name: String;
  location: String;
  status: String;

}

@Component({
  selector: 'app-missions',
  templateUrl: 'missions.page.html',
  styleUrls: ['missions.page.scss'],
})
export class MissionsPage {
  Missions: MISSIONS[] = missionsInitData;

  constructor() {
  }

}
