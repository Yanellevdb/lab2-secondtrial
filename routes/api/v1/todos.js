const express= require('express');
const router= express.Router();
const messagesController= require('../../../controllers/api/v1/todos');

router.get("/", messagesController.getAll);

router.get("/:id", messagesController.getId);

router.post("/:user", messagesController.postMessage);

router.put("/:id", messagesController.updateMessage);

router.delete("/:id", messagesController.deleteMessage);

module.exports= router;