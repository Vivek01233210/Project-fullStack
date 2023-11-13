const asyncHandler = async (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => {
                return next(error)
            })
    }
}
   
export { asyncHandler }




/*
// higher order function which takes function as an input and returns a function.
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => {() => {}}

const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(error.code || 500).json({
                sucess: false,
                message: error.message
            })
        }
    }
}
*/