import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPreviewComponent } from './loading-preview.component';

describe('LoadingPreviewComponent', () => {
  let component: LoadingPreviewComponent;
  let fixture: ComponentFixture<LoadingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
