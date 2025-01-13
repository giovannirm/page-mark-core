export enum CONTAINER_ERROR {
	ERROR_DEPENDENCY = "Error resolving dependencies or starting server",
	ERROR_UNKNOWM = "Unknown error occurred",
}

export enum CONTROLLER {
	HEALTH = "Health Controller | ",
	PAGE_MARK = "Page Mark Controller | ",
}

export enum SERVICE {
	HEALTH = "Health Service | ",
	PAGE_MARK = "Page Mark Service | ",
}

export enum REPOSITORY {
	HEALTH = "Health Repository | ",
	PAGE_MARK = "Page Mark Repository | ",
}

export enum METHOD {
	CREATE = "create",
	SHOW = "show",
	PAGINATE = "paginate",
}

export enum ENTITY {
	HEALTH = "Health | ",
}

export enum PROCESS {
	PAYLOAD = " payload:",
	QUERY = " query:",
	RESPONSE = " response:",
	ERROR = " error:",
	REQUEST = " request:",
}

export enum NUM {
	ZERO = 0,
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
	SIX = 6,
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	ELEVEN = 11,
	TWELVE = 12,
	THIRTEEN = 13,
	FOURTEEN = 14,
	FIFTEEN = 15,
	NINETEEN = 19,
	TWENTY = 20,
	TWENTY_ONE = 21,
	TWENTY_THREE = 23,
	TWENTY_FOUR = 24,
	TWENTY_FIVE = 25,
	THIRTY = 30,
	FIFTY = 50,
	FIFTY_ONE = 51,
	FIFTY_NINE = 59,
	SIXTY = 60,
	ONE_HUNDRED = 100,
	TWO_HUNDRED_FIFTY_FIVE = 255,
	THREE_HUNDRED_SIXTY_FIVE = 365,
	FIVE_HUNDRED = 500,
	NINE_HUNDRED_NINETY_NINE = 999,
	ONE_THOUSAND = 1000,
	ONE_THOUSAND_ONE = 1001,
	ONE_THOUSAND_TWENTY = 1020,
	THREE_THOUSAND = 3000,
	THREE_THOUSAND_SIX_HUNDRED = 3600,
	ONE_MILLION = 1000000,
	ONE_HUNDRED_THOUSAND = 100000,
	NINE_HUNDRED_THOUSAND = 900000,
	NINE_HUNDRED_NINETY_NINE_THOUSAND_NINE_HUNDRED_NINETY_NINE = 999999,
}

export enum HTTP {
	STATUS_200 = 200,
	STATUS_201 = 201,
	STATUS_204 = 204,
	STATUS_400 = 400,
	STATUS_401 = 401,
	STATUS_403 = 403,
	STATUS_409 = 409,
	STATUS_415 = 415,
	STATUS_413 = 413,
	STATUS_422 = 422,
	STATUS_424 = 424,
	STATUS_429 = 429,
	STATUS_404 = 404,
	STATUS_500 = 500,
	STATUS_501 = 501,
	STATUS_503 = 503,
	STATUS_504 = 504,
}

export enum STATUS {
	SUCCESS = "success",
	ERROR = "error",
}

export enum HTTP_METHOD {
	GET = "GET",
	POST = "POST",
}

export enum SPECIAL_CHARACTERS {
	SPACE = " ",
	TAB = "\t",
	NEWLINE = "\n",
	CARRIAGE_RETURN = "\r",
	PERIOD = ".",
	COMMA = ",",
	COLON = ":",
	SEMICOLON = ";",
	QUESTION_MARK = "?",
	EXCLAMATION_MARK = "!",
	QUOTES = '"',
	APOSTROPHE = "'",
	LEFT_PARENTHESIS = "(",
	RIGHT_PARENTHESIS = ")",
	LEFT_BRACKET = "[",
	RIGHT_BRACKET = "]",
	LEFT_BRACE = "{",
	RIGHT_BRACE = "}",
	LESS_THAN = "<",
	GREATER_THAN = ">",
	EQUAL = "=",
	PLUS = "+",
	MINUS = "-",
	ASTERISK = "*",
	SLASH = "/",
	BACKSLASH = "\\",
	PERCENT = "%",
	CARET = "^",
	AMPERSAND = "&",
	PIPE = "|",
	TILDE = "~",
	DEGREE = "°",
	PLUS_MINUS = "±",
	MULTIPLICATION = "×",
	DIVISION = "÷",
	INTEGRAL = "∫",
	SUMMATION = "∑",
	PI = "π",
	DOLLAR = "$",
	EURO = "€",
	POUND = "£",
	YEN = "¥",
	AT = "@",
	NUMBER = "#",
	SECTION = "§",
	PARAGRAPH = "¶",
	COPYRIGHT = "©",
	REGISTERED = "®",
	TRADEMARK = "™",
	ELLIPSIS = "...",
	EM_DASH = "—",
	EN_DASH = "-",
	UNDERSCORE = "_",
}

export enum PRISMA_OPERATORS {
	EQUALS = "equals",
	IN = "in",
	NOT_IN = "notIn",
	GT = "gt",
	GTE = "gte",
	LT = "lt",
	LTE = "lte",
	CONTAINS = "contains",
	STRING_CONTAINS = "string_contains",
	STARTS_WITH = "startsWith",
	ENDS_WITH = "endsWith",
	AND = "AND",
	OR = "OR",
	NOT = "NOT",
	SET = "set",
	INCREMENT = "increment",
	DECREMENT = "decrement",
	HAS = "has",
	EVERY = "every",
	SOME = "some",
	NONE = "none",
	SEARCH = "search",
	CUSTOM = "custom",
}

export enum SIGN {
	POSITIVE = "positive",
	NEGATIVE = "negative",
	BOTH = "both",
}

export enum DATA_TYPE {
	STRING = "string",
	ARRAY_STRING = "string[]",
	NUMBER = "number",
	BOOLEAN = "boolean",
	OBJECT = "object",
	ARRAY = "array",
	FUNCTION = "function",
	UNDEFINED = "undefined",
	NULL = "null",
	DATE = "date",
}

export enum BOOLEAN_STRING {
	TRUE = "true",
	FALSE = "false",
}

export enum REQUEST {
	QUERY = "query",
	HEADERS = "headers",
}

export enum SUPPORTED_MEDIA_TYPE {
	JPG = "jpg",
	JPEG = "jpeg",
	PNG = "png",
	GIF = "gif",
	SVG = "svg",
	PDF = "pdf",
	DOC = "vnd.ms-word",
	DOCX = "vnd.openxmlformats-officedocument.wordprocessingml.document",
	XLS = "vnd.ms-excel",
	XLSX = "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	PPT = "vnd.ms-powerpoint",
	PPTX = "vnd.openxmlformats-officedocument.presentationml.presentation",
	TXT = "plain",
	CSV = "csv",
}

export enum MESSAGE_ERROR {
	INVALID_REQUEST_PARAMETERS = "Invalid request parameters",
}

export enum LANGUAGE {
	SPANISH = "es",
	ENGLISH = "en",
}
