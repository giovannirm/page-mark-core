import multer from "multer";

const storage = multer.memoryStorage();

// Configurar multer para validar el tamaño del archivo
const upload = multer({
	storage,
});

export default upload;
