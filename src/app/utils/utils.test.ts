import { TestBed } from '@angular/core/testing';
import { Utils } from './utils';
import { ICreditCard } from '../interfaces/IProducts.interface';

describe('UTILS', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utils],
    }).compileComponents();
  });
  it('CapitalLeters(nameLogo: string): string', () => {
    const frase = 'asess-1.png';
    const result = Utils.CapitalLeters(frase);
    expect(result).toEqual('A1');
  });
  it('filterProducts', () => {
    const cpyProducts: ICreditCard[] = [
      {
        id: '1',
        name: 'Product A',
        description: 'Description A',
        date_revision: '27/20/2024',
        date_release: '27/20/2024',
        logo: 'asess-1.png',
      },
      {
        id: '2',
        name: 'Product B',
        description: 'Description B',
        date_revision: '27/20/2024',
        date_release: '27/20/2024',
        logo: 'asess-2.png',
      },
    ];

    // Utils.filterProducts(cpyProducts, 'Product A');
    expect(Utils.filterProducts(cpyProducts, 'Product A')).toEqual([
      {
        id: '1',
        name: 'Product A',
        description: 'Description A',
        date_revision: '27/20/2024',
        date_release: '27/20/2024',
        logo: 'asess-1.png',
      },
    ]);
  });
});
