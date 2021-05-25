const express= require('express');
const router= express.Router();
const todosController= require('../../../controllers/api/v1/todos');

router.get("/", todosController.getAll);

router.get("/:id", todosController.getId);

router.post("/", todosController.postMessage);

router.put("/:id", todosController.updateMessage);

router.delete("/:id", todosController.deleteMessage);

module.exports= router;