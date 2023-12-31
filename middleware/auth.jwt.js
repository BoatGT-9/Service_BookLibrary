const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const db = require("../models")
const User = db.user
const {TokenExpiredError} = jwt;

// const catchError = (err,res) => {
//     if (err instanceof TokenExpiredError) {
//         return res.status(401).send({message:"Unauthorized! Access Token was expired"})
//     }
//     return res.status(401).send({message:"Unauthorized!"})
// }

isAdmin = (req,res,next) =>{
    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(roles =>{
            for(let i = 0 ;i < roles.length; i++){
                if (roles[i].name === "admin") {
                    next()
                    return
                }
            }
            res.status(403).send({message:"Require Admin Role!"})
            return
        })

        
    })
}
isModerator = (req,res,next) =>{
    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(roles =>{
            for(let i = 0 ;i < roles.length; i++){
                if (roles[i].name === "moderator") {
                    next()
                    return
                }
            }
            res.status(403).send({message:"Require Moderator Role!"})
            return
        })

        
    })
}
isModeratorOrAdmin = (req,res,next) =>{
    User.findByPk(req.userId).then(user =>{
        user.getRoles().then(roles =>{
            for(let i = 0 ;i < roles.length; i++){
                if (roles[i].name === "moderator") {
                    next()
                    return
                }
                if (roles[i].name === "admin") {
                    next()
                    return
                }
            }
            res.status(403).send({message:"Require Moderator or Admin Role!"})
            return
        })

        
    })
}

const authJwt = {
    // verifyToken : verifyToken,
    isAdmin : isAdmin,
    isModerator : isModerator,

}
module.exports = authJwt;