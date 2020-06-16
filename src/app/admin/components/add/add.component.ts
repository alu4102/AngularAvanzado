import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.servise';

import { Animal } from '../../../models/animal';
import { fadeLateral } from '../../animation';


@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})
export class AddComponent {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url;
  public status;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _userService: UserService, private _animalService: AnimalService,
    private _uploadService: UploadService) {

    this.title = 'Add';
    this.animal = new Animal('', '', '', 2020, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('El componente animal-add ha sido cargado');
  }

  onSubmit() {
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      (response: any) => {
        if (!response.animal) {
          this.status = 'error';
        }
        else {
          this.status = 'success';
          this.animal = response.animal;

          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/list']);
          }
          else {
            this._uploadService
              .makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
                  .then((result : any) => {
                      this.animal.image = result.image;
                      this._router.navigate(['/admin-panel/list']);
                  });
          }
          
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
