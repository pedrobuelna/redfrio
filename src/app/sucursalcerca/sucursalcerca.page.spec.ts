import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SucursalcercaPage } from './sucursalcerca.page';

describe('SucursalcercaPage', () => {
  let component: SucursalcercaPage;
  let fixture: ComponentFixture<SucursalcercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalcercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SucursalcercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
