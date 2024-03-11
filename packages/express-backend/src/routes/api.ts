import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";
import eventRouter from "./event";
import clubRouter from "./club";
import memberRouter from "./member";
import clubSummaryRouter from "./clubSummary";

const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

// connecting to all api endpoints that will require authorization
router.use("/profile", profileRouter);
router.use("/events", eventRouter);
router.use("/clubs", clubRouter);
router.use("/clubSummaries", clubSummaryRouter);
router.use("/members", memberRouter);

export default router;