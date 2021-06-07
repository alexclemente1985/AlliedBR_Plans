import { Platform } from '../../models/Platform';

export enum PlatformTypes {
    PLATFORMS_REQUEST = '@platforms/PLATFORMS_REQUEST',
    PLATFORMS_SUCCESS = '@platforms/PLATFORMS_SUCCESS',
    PLATFORMS_FAILURE = '@platforms/PLATFORMS_FAILURE',
}

export interface PlatformState {
    readonly data: Platform[];
    readonly loading: boolean;
    readonly error: boolean;
}
