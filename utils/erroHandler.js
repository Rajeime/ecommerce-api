function errorHandler(req, res, next){
    console.log('error');
    next();
}

module.exports = errorHandler
