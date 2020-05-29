import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitbitPage } from './fitbit.page';

describe('FitbitPage', () => {
  let component: FitbitPage;
  let fixture: ComponentFixture<FitbitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitbitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
