import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControleurComponent } from './admin-controleur.component';

describe('AdminControleurComponent', () => {
  let component: AdminControleurComponent;
  let fixture: ComponentFixture<AdminControleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminControleurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminControleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
