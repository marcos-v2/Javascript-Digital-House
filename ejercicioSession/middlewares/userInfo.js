

const userInfo = (req,res,next) => {
    console.log('pasando por el middleware')
    next();
}

module.exports = userInfo;