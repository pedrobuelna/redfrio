import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagopendientePage } from './pagopendiente.page';

describe('PagopendientePage', () => {
  let component: PagopendientePage;
  let fixture: ComponentFixture<PagopendientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagopendientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagopendientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
