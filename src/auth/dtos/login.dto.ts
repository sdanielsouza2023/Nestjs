import { MessagesHelper } from "../helpers/messages.helper"
import { IsEmail, IsNotEmpty } from "class-validator"

export class LoginDto {
  @IsEmail({}, { message: MessagesHelper.AUTH_LOGIN_NOT_FOUND })
  login: string

  @IsNotEmpty({ message: MessagesHelper.AUTH_PASSWORD_NOT_FOUND })
  password: string
}

/// aula 02 parte 02