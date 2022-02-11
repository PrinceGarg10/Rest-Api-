import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common';
import { User } from 'src/users/typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService){}
    @Post('create')
    async createUser(@Body() CreateUserDto : CreateUserDto){
        return await this.userService.createUser(CreateUserDto);
    }
    @Get()
    async findAll() : Promise<User []>{
        return await this.userService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<User>{
        return await this.userService.findOne(id)
    } 
    

@Patch(':id')
async uppdateUser(@Param('id') id: number, @Body() data: Partial<UpdateUserDto>) {
    return await this.userService.update(id, data);
    
  
}

@Delete(':id')
      async deleteUser(@Param('id') id: number) {
        await this.userService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
        };
    }

}
