import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import credentials from "./services/credentials";

function generateAccessToken(email: string) {
    console.log("Generating token for", email);
    const payload = { email: email }
    
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: '2s' }, 
            (error: any, token: any) => {
                if (error) reject(error);
                else resolve(token);
            }
        );
    })
}

export function registerUser(req: Request, res: Response) {
  const { email, password, name } = req.body; 
  if (!email || !password || !name ) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials
      .createCredential(email, password, name)
      .then((creds) => generateAccessToken(creds.email))
      .then((token) => res.status(201).send({ token: token }))
      .catch((error: any) => {
        if (error.name === 'ValidationError') {
          for (let field in error.errors) {
              if (field === 'email') {
                return res.status(400).send(error.errors[field].message);
              }
              return res.status(400).send(error.message);
          }
        } else if (error.code === 11000) {
            // Handle duplicate key error
            return res.status(400).send('This email is already registered.');
        } else {
            // Handle other types of errors (InternalServerError)
            return res.status(500).send('Failed to create account: ' + error.message);
        }
      })
  }
};

export function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials
      .verify(email, password)
      .then((email: string) => generateAccessToken(email))
      .then((token) => res.status(200).send({ token: token }))
      .catch((error) => res.status(401).send("Unauthorized"));
  }
};

export function authenticateUser(req: Request, res: Response, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).end();
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET!, (error, decoded) => {
        if (decoded) {
          console.log("Decoded token", decoded);
          next();
        } else {
          res.status(401).end();
        }
      }
    );
  }
}