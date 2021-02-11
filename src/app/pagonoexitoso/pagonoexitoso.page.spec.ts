import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagonoexitosoPage } from './pagonoexitoso.page';

describe('PagonoexitosoPage', () => {
  let component: PagonoexitosoPage;
  let fixture: ComponentFixture<PagonoexitosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagonoexitosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagonoexitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
