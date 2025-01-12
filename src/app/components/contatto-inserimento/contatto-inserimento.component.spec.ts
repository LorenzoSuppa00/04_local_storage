import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoInserimentoComponent } from './contatto-inserimento.component';

describe('ContattoInserimentoComponent', () => {
  let component: ContattoInserimentoComponent;
  let fixture: ComponentFixture<ContattoInserimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattoInserimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattoInserimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
