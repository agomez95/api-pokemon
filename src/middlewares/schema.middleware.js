module.exports = (schema) => {
    return (req, res, next) => {
        let { error } = schema.validate(req.body)

        if(error) {
            let details = error.details.map(d => d.message);
            res.status(400).json({            
                err_code: 1,
                status: 400,
                err_msg: 'ERROR EN LOS DATOS, VER LOGS',
            });
            console.log(`Error: ${details[0]}`)
            return;
        } else {
            next();
        }        
    };
};