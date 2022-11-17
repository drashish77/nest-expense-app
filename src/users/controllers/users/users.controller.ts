import { Controller, Get, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getUser() {
        console.log('hi user')
        return this.userService.getUsers()
    }
}
