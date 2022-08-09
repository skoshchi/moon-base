import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionExamplePage } from './mission-example.page';

describe('HomePage', () => {
  let component: MissionExamplePage;
  let fixture: ComponentFixture<MissionExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissionExamplePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
