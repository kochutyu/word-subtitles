import {IFirebase} from './firebase.interface';

export interface IEnvironments {
  production: boolean;
  firebase: IFirebase;
}
