import { Optional } from "@nestjs/common";
import { IsNotEmpty, Validate } from "class-validator";

export class addAccountDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly username: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly password: string;

    @Optional()
    @Validate((value: string) => value.length > 0)
    readonly code: string;
}

export default addAccountDto;
