import { IsNotEmpty, Validate } from "class-validator";

export class RequestOpenDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly accountId: string;
}

export default RequestOpenDto;
