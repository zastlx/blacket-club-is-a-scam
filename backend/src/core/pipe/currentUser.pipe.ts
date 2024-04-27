import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class CurrentUserPipe implements PipeTransform {
    constructor(
        private userService: UserService
    ) { }

    async transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        return this.userService.getUserById(value);
    }
}
