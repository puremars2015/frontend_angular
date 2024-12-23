import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArticleComponent } from './read-article.component';

describe('ReadArticleComponent', () => {
  let component: ReadArticleComponent;
  let fixture: ComponentFixture<ReadArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
