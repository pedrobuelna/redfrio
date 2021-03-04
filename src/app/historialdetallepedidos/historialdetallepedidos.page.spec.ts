import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialdetallepedidosPage } from './historialdetallepedidos.page';

describe('HistorialdetallepedidosPage', () => {
  let component: HistorialdetallepedidosPage;
  let fixture: ComponentFixture<HistorialdetallepedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialdetallepedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialdetallepedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
