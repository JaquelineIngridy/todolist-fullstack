const validateFieldTitle = (request, response, next) => {
    const {body} = request;

    if(body.title === undefined ) {
        return response.status(400).json({ message: 'O campo "titulo" é obrigatório' });
    }
    if(body.title === '' || body.status === '') {
        return response.status(400).json({ message: 'O titulo nao pode ser vazio' });
    }
    next();
};
const validateFieldStatus = (request, response, next) => {
    const {body} = request;

    if(body.status === undefined ) {
        return response.status(400).json({ message: 'O campo "status" é obrigatório' });
    }
    if(body.status === '') {
        return response.status(400).json({ message: 'O status nao pode ser vazio' });
    }
    next();
};




module.exports = {
    validateFieldTitle,
    validateFieldStatus
};