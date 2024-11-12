import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  Catch,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    response.sendStatus(exception.getStatus());
  }
}
