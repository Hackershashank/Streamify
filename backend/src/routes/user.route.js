import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMyFriends, getRecommendedUsers, sendFriendRequest } from '../controllers/user.controller.js';
const router = express.Router();

// apply auth middleware to all the routes
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);
router.get("/friend-request/:id",sendFriendRequest);

export default router;