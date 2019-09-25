import { Component, OnInit } from '@angular/core';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  filesSong:any [] =[];

  constructor(private platform: Platform, private file: File) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.getFilesSong('');
    });
  }

  getFilesSong(fullPath){
    this.file.listDir(this.file.externalRootDirectory, fullPath).then((contentDir) => {
      contentDir.forEach((item:FileEntry) => {
        if(item.isDirectory){
          this.getFilesSong(item.fullPath.substr(1));
        } else if(item.isFile){
          item.file((meta) => {
            if(meta.type == "audio/mpeg"){
              this.filesSong.push(item);
            }
          });
        }
      });
    }).then(() => {
      console.log(this.filesSong);
    });
  }
}
