import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinconexionPage } from './sinconexion.page';

describe('SinconexionPage', () => {
  let component: SinconexionPage;
  let fixture: ComponentFixture<SinconexionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinconexionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinconexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
