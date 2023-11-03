const checkToken = (req, res, next) => {
    const headerAuth = req.headers.Token || '';//qwqwqw 1111

    const token = headerAuth.split(" ").pop();//1111
    if(!token){
        res.status(405);
        res.json({error: "no token"});
    }
    else{
        next();
    }
}

module.exports = {checkToken}