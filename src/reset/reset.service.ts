import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Reset } from "./reset.entity";

@Injectable()
export class ResetService {
    constructor(
        @InjectRepository(Reset) private readonly resetRepository: Repository<Reset>
    ) {
    }

    async save(body) {
        return this.resetRepository.save(body);
    }

    async findOne(options) {
        return this.resetRepository.findOne(options);
    }

    async delete(options) {
        return this.resetRepository.delete(options);
    }
}