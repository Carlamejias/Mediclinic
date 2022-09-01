import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistropacPage } from './registropac.page';

describe('RegistropacPage', () => {
  let component: RegistropacPage;
  let fixture: ComponentFixture<RegistropacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropacPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistropacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
