const Validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        console.log(err);
        let error = err.errors[0].message
        res.status(400).render('index', { error, loggedin: false })
    }
}

module.exports = Validate