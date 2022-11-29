import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClientesModalComponent } from './editar-clientes-modal.component';

describe('ClientesModalComponent', () => {
  let component: EditarClientesModalComponent;
  let fixture: ComponentFixture<EditarClientesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarClientesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
