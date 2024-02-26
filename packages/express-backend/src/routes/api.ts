import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";


const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

// connecting to all api endpoints that will require authorization
router.use("/profile", profileRouter);

export default router;