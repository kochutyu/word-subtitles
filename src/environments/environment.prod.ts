import {IEnvironments} from '../app/core/interfaces/environments.inteface';

import {Config} from '../app/core/configs/core.config';

export const environment: IEnvironments = {
  production: true,
  firebase: Config.firebase
};
