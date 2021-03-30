import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  public flag:any = false;
  data:any;
  constructor(private camera: Camera, private storage: Storage,private nativeStorage: NativeStorage) { }
  
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
      this.flag=true;
      // Save all photos for later viewing
      this.storage.create();
      this.storage.set('photos', this.photos);
      this.data = 'data:image/jpeg;base64,' + imageData
    //   this.nativeStorage.setItem('photos', {
    //     data:'data:image/jpeg;base64,' + imageData,
    //   }).then(
    //       () => {
    //           this.data = 'data:image/jpeg;base64,' + imageData
    //           console.log('Se guarda la foto: '+this.data)
    //       },
    //     error => console.error('Error al actualizar la informacion APP', error)
    //   );
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });

  }
  guardarImagen() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
      this.flag=true;
      // Save all photos for later viewing
      this.storage.create();
      this.storage.set('photos', this.photos);
      //this.data = 'data:image/jpeg;base64,' + imageData
      this.nativeStorage.setItem('photos', {
        data:'data:image/jpeg;base64,' + imageData,
      }).then(
          () => {
              this.data = 'data:image/jpeg;base64,' + imageData
              console.log('Se guarda la foto: '+this.data)
          },
        error => console.error('Error al actualizar la informacion APP', error)
      );
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });

  }
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

}

class Photo {
  data: any;
}
