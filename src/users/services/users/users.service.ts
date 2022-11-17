import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        console.log('hi user')
        return 'Hello this is a new user!';
    }
}
