import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserNotFoundException } from "./exceptions/userNotFoundException";
import { InjectRepository } from "@nestjs/typeorm";
import { User as UserEntity } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { encodePassword } from "../utils/bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    const user = this.userRepository.findOneBy({ id: id });
    if (user) return user;
    else throw new UserNotFoundException();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user` + updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneWithEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email: email });
    if (user) return user;
    else throw new UserNotFoundException();
  }
}
