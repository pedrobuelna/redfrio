import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadobusquedavaciaPage } from './resultadobusquedavacia.page';

describe('ResultadobusquedavaciaPage', () => {
  let component: ResultadobusquedavaciaPage;
  let fixture: ComponentFixture<ResultadobusquedavaciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadobusquedavaciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadobusquedavaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
