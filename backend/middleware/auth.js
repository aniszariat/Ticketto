const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports = async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    const userId = req.headers.userid;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    if (!token || !userId)
      return res.status(400).json({ message: "Not Authorized" });
    const decodeduserId = decodedToken.userId;
    const tokenOwner = await User.findById(decodeduserId);
    if (tokenOwner._id.toString() !== userId)
      return res.status(400).json({ message: "Not Authorized" });
    req.auth = {
      userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error, message: "you are not authenticated" });
  }
};

/***
 * 
const jwt = require ('jsonwebtoken')


const authenticate= async(req,res, next)=>{
    try{
        //get the cookies
        const token= req.cookies.jwt
        if(!token){
            res.status(401).send('no token')
        }else{
            const verifyToken= jwt.verify(token, process.env.SECRET_KEY)
            const rootUser= await Users.findOne({_id:verifyToken._id, "tokens.token": token})
            if(!rootUser){
                res.status(401).send('user not found')
            }else{
                res.status(200).send('Authorized user')
            }
        }
        next()
    }catch(error){
        res.status(401).send('Error')
        console.log(error)
}

 * 
 */
