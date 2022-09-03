const origenPermitidos = require('./origenPermitidos');
const opcionesCors = {
    origin: (origin, callback) => {
        if (origenPermitidos.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('No autorizado por el CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = opcionesCors;