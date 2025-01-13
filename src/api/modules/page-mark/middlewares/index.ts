import upload from "../../../../common/utils/multerUtil";

const fileKey = "pdfFile";

const paginatePDFMiddleware = upload.single(fileKey);

export default paginatePDFMiddleware;
