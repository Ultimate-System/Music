import { IonicModule } from '@ionic/angular';
import { routes } from '../../app-routing.module';
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage Unit Test', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //'Navegar de "HomePage" lo redirige a "MusicPage"
  it('navigate to "HomePage" redirects you to "MusicPage"', inject([Router], (router: Router) => {
    //https://semaphoreci.com/community/tutorials/testing-routes-in-angular-2
    let navigateSpy = spyOn(router, 'navigateByUrl');
    //activeRoute.testParams = { id: 1234 }; //router pass params 
    component.musicDevice();
    expect(navigateSpy.calls.first().args[0]).toBe('/music');
  }));
});
