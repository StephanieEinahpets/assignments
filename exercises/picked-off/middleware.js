const addProperty = function (req, res, next) {
    req.body = { eyes: "big and round"}
    next()
   }

module.exports = addProperty


