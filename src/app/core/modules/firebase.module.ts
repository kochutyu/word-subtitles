import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

import {environment} from '../../../environments/environment';

const FIREBASE = [
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFireFunctionsModule,
  AngularFireMessagingModule,
  AngularFireDatabaseModule,
];

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    ...FIREBASE
  ],
  exports: FIREBASE
})
export class FirebaseModule {
}
