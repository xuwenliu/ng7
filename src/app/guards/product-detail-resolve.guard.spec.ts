import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailResolveGuard } from './product-detail-resolve.guard';

describe('ProductDetailResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailResolveGuard]
    });
  });

  it('should ...', inject([ProductDetailResolveGuard], (guard: ProductDetailResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
