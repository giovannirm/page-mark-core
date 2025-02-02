export enum CONTAINER_ERROR {
    ERROR_DEPENDENCY = 'Error resolving dependencies or starting server',
    ERROR_UNKNOWM = 'Unknown error occurred',
}

export enum CONTROLLER {
    HEALTH = 'Health Controller | ',
    PAGE_MARK = 'Page Mark Controller | ',
}

export enum SERVICE {
    HEALTH = 'Health Service | ',
    PAGE_MARK = 'Page Mark Service | ',
}

export enum REPOSITORY {
    HEALTH = 'Health Repository | ',
    PAGE_MARK = 'Page Mark Repository | ',
}

export enum METHOD {
    CREATE = 'create',
    SHOW = 'show',
    PAGINATE = 'paginate',
}

export enum ENTITY {
    HEALTH = 'Health | ',
}

export enum PROCESS {
    PAYLOAD = ' payload:',
    QUERY = ' query:',
    RESPONSE = ' response:',
    ERROR = ' error:',
    REQUEST = ' request:',
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
    SIXTEEN = 16,
    SEVENTEEN = 17,
    EIGHTEEN = 18,
    NINETEEN = 19,
    TWENTY = 20,
    TWENTY_ONE = 21,
    TWENTY_TWO = 22,
    TWENTY_THREE = 23,
    TWENTY_FOUR = 24,
    TWENTY_FIVE = 25,
    TWENTY_SIX = 26,
    TWENTY_SEVEN = 27,
    TWENTY_EIGHT = 28,
    TWENTY_NINE = 29,
    THIRTY = 30,
    FORTY = 40,
    FIFTY = 50,
    SIXTY = 60,
    SEVENTY = 70,
    EIGHTY = 80,
    NINETY = 90,
    ONE_HUNDRED = 100,
    TWO_HUNDRED = 200,
    THREE_HUNDRED = 300,
    FOUR_HUNDRED = 400,
    FIVE_HUNDRED = 500,
    SIX_HUNDRED = 600,
    SEVEN_HUNDRED = 700,
    EIGHT_HUNDRED = 800,
    NINE_HUNDRED = 900,
    ONE_THOUSAND = 1000,
    THREE_THOUSAND = 3000,
    ONE_MILLION = 1000000,
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
    SUCCESS = 'success',
    ERROR = 'error',
}

export enum HTTP_METHOD {
    GET = 'GET',
    POST = 'POST',
}

export enum REQUEST {
    QUERY = 'query',
    HEADERS = 'headers',
}

export enum SUPPORTED_MEDIA_TYPE {
    JPG = 'jpg',
    JPEG = 'jpeg',
    PNG = 'png',
    GIF = 'gif',
    SVG = 'svg',
    PDF = 'pdf',
    DOC = 'vnd.ms-word',
    DOCX = 'vnd.openxmlformats-officedocument.wordprocessingml.document',
    XLS = 'vnd.ms-excel',
    XLSX = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    PPT = 'vnd.ms-powerpoint',
    PPTX = 'vnd.openxmlformats-officedocument.presentationml.presentation',
    TXT = 'plain',
    CSV = 'csv',
}

export enum MESSAGE_ERROR {
    INVALID_REQUEST_PARAMETERS = 'Invalid request parameters',
}
