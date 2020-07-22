import { CloudService, ToodleInfo } from './user.service';

export class User {
    username: string;
    frequency: string;
    toodledo: ToodleInfo;
    clouds: CloudService[];
}