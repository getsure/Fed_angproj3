import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let calc: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calc = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(calc).toBeTruthy();
  });

  it('validate the addition result is equal to 12', () => {
    const addRes = calc.addOperation(8,4)
    expect(addRes).toBe(12)
  })

  it('validate the subraction result is equal to 4', () => {
    const subRes = calc.subOperation(8,4)
    expect(subRes).toBe(4)
  })

  it('validate the addition result is equal to 12 negative', () => {
    const addRes = calc.addOperation(8,3)
    expect(addRes).toBe(12)
  })

  it('validate the subraction result is equal to 4 negative', () => {
    const subRes = calc.subOperation(8,2)
    expect(subRes).toBe(4)
  })

});
