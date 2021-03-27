import { TestBed, waitForAsync } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [StorageService],
    }).compileComponents();

    service = TestBed.inject(StorageService);
  }));

  afterAll(() => {
    // @Todo Remove keys from localstorage
    service.set('dummyKey', null);
    service.set('jsonKey', null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store values', () => {
    service.set('dummyKey', '123');
    expect(service.get('dummyKey')).toBe('123');
  });

  it('should get stored value in json format', () => {
    service.set('jsonKey', { username: 'Ankit Pant' });
    expect(service.get('jsonKey')).toEqual({ username: 'Ankit Pant' });
  });

  it('should return true if localstorage has the key', () => {
    service.set('jsonKey', { username: 'Ankit Pant' });
    expect(service.has('jsonKey')).toBeTruthy();
  });
});
