import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregardireccionPage } from './agregardireccion.page';

describe('AgregardireccionPage', () => {
  let component: AgregardireccionPage;
  let fixture: ComponentFixture<AgregardireccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregardireccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregardireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
