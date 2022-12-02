import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthor, getAuthors, modifyAuthor } from "../controller/author"
const router = Router();

router.get("/", getAuthors);
router.get("/:id", getAuthor);
router.post("/", addAuthor);
router.put("/:id", modifyAuthor);
router.delete("/:id", deleteAuthor);

export default router;