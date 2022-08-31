import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './base/task.repository.base';
import { Task } from './base/schemas/task.schema';
import { TaskServiceBase } from './base/task.service.base';
import { StorageService } from '@codebrew/nestjs-storage';
import { createZipFileFromModules } from 'src/build/zip';
import { storage } from 'src/storage/firebase';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';

@Injectable()
export class TaskService extends TaskServiceBase {
  constructor(
    protected readonly taskRepository: TaskRepository,
    protected readonly storageService: StorageService,
  ) {
    super(taskRepository);
  }

  // async getTaskById(taskId: string): Promise<Task> {
  //   console.log('this one');
  //   const task = await this.taskRepository.findOne({ id: taskId });
  //   if (!task) throw new NotFoundException('Invalid Id');
  //   // const zip = new AdmZip();
  //   // zip.addFile('test.txt', Buffer.from(JSON.stringify(task), 'utf-8'));
  //   // zip.writeZip('code.zip');
  //   const zip = await createZipFileFromModules(JSON.stringify(task));
  //   // this.storageService.getDisk().put('code2.zip', zip);
  //   const storageRef = ref(storage, 'parent/some-child.zip');
  //   const uploadTask = uploadBytesResumable(storageRef, zip);
  //   let downloadURL;
  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is ' + progress + '% done');
  //       switch (snapshot.state) {
  //         case 'paused':
  //           console.log('Upload is paused');
  //           break;
  //         case 'running':
  //           console.log('Upload is running');
  //           break;
  //       }
  //     },
  //     (error) => {
  //       // A full list of error codes is available at
  //       // https://firebase.google.com/docs/storage/web/handle-errors
  //       switch (error.code) {
  //         case 'storage/unauthorized':
  //           // User doesn't have permission to access the object
  //           break;
  //         case 'storage/canceled':
  //           // User canceled the upload
  //           break;

  //         // ...

  //         case 'storage/unknown':
  //           // Unknown error occurred, inspect error.serverResponse
  //           break;
  //       }
  //     },
  //     async () => {
  //       // Upload completed successfully, now we can get the download URL
  //       downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //       console.log(downloadURL);
  //     },
  //   );
  //   return task;
  // }
}
