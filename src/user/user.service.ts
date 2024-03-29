import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) protected readonly userRepository: Repository<User>
    ) {
    }

    async save(body) {
        return this.userRepository.save(body);
    }

    async findOneBy(options) {
        return this.userRepository.findOneBy(options);
    }

    async update(id:number, options) {
        return this.userRepository.update(id, options);
    }
}