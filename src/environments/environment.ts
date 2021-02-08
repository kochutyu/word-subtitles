import {IEnvironments} from '../app/core/interfaces/environments.inteface';

import {Config} from '../app/core/configs/core.config';

export const environment: IEnvironments = {
  production: false,
  firebase: Config.firebase
};
