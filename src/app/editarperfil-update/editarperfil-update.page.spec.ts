import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarperfilUpdatePage } from './editarperfil-update.page';

describe('EditarperfilUpdatePage', () => {
  let component: EditarperfilUpdatePage;
  let fixture: ComponentFixture<EditarperfilUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarperfilUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarperfilUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
