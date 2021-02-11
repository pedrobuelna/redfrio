import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoexitosoPage } from './pagoexitoso.page';

describe('PagoexitosoPage', () => {
  let component: PagoexitosoPage;
  let fixture: ComponentFixture<PagoexitosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoexitosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoexitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
