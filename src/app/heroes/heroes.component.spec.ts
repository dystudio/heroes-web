import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroesComponent} from './heroes.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HasRoleDirective} from '../has-role.directive';
import {PaginationComponent} from '../pagination/pagination.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {KeycloakService} from '../keycloak.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let keycloakService;

  beforeEach(async(() => {
    keycloakService = jasmine.createSpyObj('KeycloakService', ['hasRole']);
    keycloakService.hasRole.and.returnValue(true);

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        PaginationComponent,
        HasRoleDirective
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule],
      providers: [
        {provide: KeycloakService, useValue: keycloakService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
