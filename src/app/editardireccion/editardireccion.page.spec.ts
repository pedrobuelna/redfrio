import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditardireccionPage } from './editardireccion.page';

describe('EditardireccionPage', () => {
  let component: EditardireccionPage;
  let fixture: ComponentFixture<EditardireccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditardireccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditardireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
