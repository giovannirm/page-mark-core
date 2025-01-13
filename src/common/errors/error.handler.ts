import { HTTP } from "../enums/common";

export abstract class HttpException<T = unknown> extends Error {
	public data?: T;

	public status?: string;

	constructor(
		public message: string,
		public statusCode: number,
		data?: T,
		status?: string
	) {
		super(message);
		this.data = data;
		this.status = status;
	}
}

export class InternalServerErrorException extends HttpException {
	constructor(public message: string = "Internal error server") {
		super(message, HTTP.STATUS_500);
	}
}

export class BadRequestException extends HttpException {
	constructor(
		public message: string,
		public param?: string
	) {
		super(message, HTTP.STATUS_400);
	}
}

export class NotFoundException<T> extends HttpException {
	constructor(
		public message: string = "not found",
		public data?: T,
		public status?: string
	) {
		super(message, HTTP.STATUS_404, data, status);
	}
}

export class UnauthorizedException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_401);
	}
}

export class ForbiddenException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_403);
	}
}

export class ConflictException<T> extends HttpException {
	constructor(
		public message: string = "conflict",
		public data?: T,
		public status?: string
	) {
		super(message, HTTP.STATUS_409, data, status);
	}
}

export class UnsupportedMediaTypeException extends HttpException {
	constructor(public message: string = "unsupported media type") {
		super(message, HTTP.STATUS_415);
	}
}

export class ContentTooLargeException extends HttpException {
	constructor(public message: string = "content too large") {
		super(message, HTTP.STATUS_413);
	}
}

export class UnprocessableEntityException<T> extends HttpException {
	constructor(
		public message: string = "unprocessable entity",
		public data?: T
	) {
		super(message, HTTP.STATUS_422);
	}
}

export class FailedDependencyException extends HttpException {
	constructor(
		public message: string = "failed dependency",
		public param?: string
	) {
		super(message, HTTP.STATUS_424);
	}
}
export class TooManyRequestsException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_429);
	}
}

export class NotImplementedException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_501);
	}
}

export class ServiceUnavailableException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_503);
	}
}

export class GatewayTimeoutException extends HttpException {
	constructor(public message: string) {
		super(message, HTTP.STATUS_504);
	}
}
