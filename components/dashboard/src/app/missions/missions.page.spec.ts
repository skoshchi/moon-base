import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionsPage } from './missions.page';

describe('HomePage', () => {
  let component: MissionsPage;
  let fixture: ComponentFixture<MissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissionsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
