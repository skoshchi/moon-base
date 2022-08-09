import { Component } from '@angular/core';
import missionsInitData from 'data/init-data.json';

interface MISSIONS {
  id: Number;
  name: String;
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
