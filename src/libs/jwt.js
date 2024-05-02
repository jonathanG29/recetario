import {TOKEN_SECRET} from "../config.js";
import jwt from 'jsonwebtoken'

//con esta funcion creamos un token para validar inicio de sesion
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    })
}

