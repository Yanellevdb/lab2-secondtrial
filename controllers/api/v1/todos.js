const getId= (req, res) => {
    let id= req.params.id;
    res.json({
        "status":"success",
        "data": {
            "message": `GETTING message with id ${id}`
        }
    });
}

const postMessage= (req, res) => {
    let username= req.params.user;
    res.json({
        "status": "success", 
        "data": {
            "message": `POSTING new message for user ${username}`
        }
    });
}

const updateMessage= (req, res) => {
    let id= req.params.id;
    res.json({
        "status": "success", 
        "data": {
            "message": `UPDATING message with id ${id}`
        }
    });
}

const deleteMessage= (req, res) => {
    let id= req.params.id;
    res.json({
        "status": "success", 
        "data": {
            "message": `DELETING message with id ${id}`
        }
    });
}

const getAll= (req, res) => {
    if (req.params.user){
        let username= req.params.user;
        res.json({
            "status": "success",
            "data": {
                "message": `GETTING message from user ${username}`
            }
        });
        }
    else{
        res.json({
            "status": "success",
            "data": {
                "message": "GETTING messages"
            }
        });
        }
    };

module.exports.getAll= getAll;
module.exports.getId= getId;
module.exports.postMessage= postMessage;
module.exports.updateMessage= updateMessage;
module.exports.deleteMessage= deleteMessage;