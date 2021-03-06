import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { GoogleMapsAPIService } from './google-maps-api.service';


describe('GoogleMapsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsAPIService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([GoogleMapsAPIService], (service: GoogleMapsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
