import multer from 'multer';
// Uses in-memory storage for uploaded files (customize as needed)
const storage = multer.memoryStorage();
const upload = multer({ storage });
export default upload;
