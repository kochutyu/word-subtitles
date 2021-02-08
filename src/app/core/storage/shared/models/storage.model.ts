import {EStorageType} from '../enums/srorage-type.enum';

export abstract class StorageModel {

  storageType: EStorageType = EStorageType.LOCAL;

  private readonly types: Storage[] = [localStorage, sessionStorage];

  public storage(status: number): Storage {
    return this.types[status];
  }

}
