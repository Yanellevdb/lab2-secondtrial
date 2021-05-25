const express= require('express');
const router= express.Router();

router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING messages"
        }
    });
});

router.get("/:id", (req, res) => {
    res.json({
        "status":"success",
        "data": {
            "message": `GETTING message with id ${id}`
        }
    });
});

router.post("/", (req, res) => {
    res.json({
        "status": "success", 
        "data": {
            "message": `POSTING new message for user ${username}`
        }
    });
});

router.put("/:id", (req, res) => {
    res.json({
        "status": "success", 
        "data": {
            "message": `UPDATING message with id ${id}`
        }
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        "status": "success", 
        "data": {
            "message": `DELETING message with id ${id}`
        }
    })
})

router.get("/:username", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": `GETTING message from user ${username}`
        }
    })
})

module.exports= router;