import { Platform } from '@ionic/angular';
import { FileMock } from '@ionic-native-mocks/file';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPage } from './music.page';
import { File } from '@ionic-native/file/ngx';

describe('MusicPage Unit Test', () => {
  let platform: Platform;
  let component: MusicPage;
  let fixture: ComponentFixture<MusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPage ],
      providers: [
        { provide: File, useClass: FileMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('getFilesSong', ()=> {
    component.getFilesSong('');
    expect(component.filesSong.length).toBe(0);
    
    /*if(platform.is('android')){
      expect(component.filesSong.length).toBeGreaterThan(0);
    }else{
      expect(component.filesSong.length).toBe(0);
    }*/ 
  });
});
