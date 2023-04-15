import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router()


router.post("/register", async (reg, res) => {
    const {username, password} = reg.body;

    const user = await UserModel.findOne({username});

    res.json(user);

});

router.post("/login");





export {router as userRouter};
