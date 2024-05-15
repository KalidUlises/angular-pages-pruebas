import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSWComponent } from './character-sw.component';

describe('CharacterSWComponent', () => {
  let component: CharacterSWComponent;
  let fixture: ComponentFixture<CharacterSWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterSWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
