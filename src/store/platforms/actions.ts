import { action } from 'typesafe-actions';
import { PlatformResponse } from '../../models/Platform';
import { PlatformTypes } from './types';

export const platformsRequest = () => action(PlatformTypes.PLATFORMS_REQUEST);
export const platformsSuccess = (data: PlatformResponse) => action(PlatformTypes.PLATFORMS_SUCCESS, data.plataformas);
export const platformsFailure = () => action(PlatformTypes.PLATFORMS_FAILURE);
