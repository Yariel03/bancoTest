import { TestBed } from '@angular/core/testing';
import { Utils } from './utils';

describe('UTILS', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utils],
    }).compileComponents();
  });
  it('should be defined', () => {
    const frase = 'asess-1.png';
    const result = Utils.CapitalLeters(frase);
    expect(result).toEqual('A1');
  });
});
