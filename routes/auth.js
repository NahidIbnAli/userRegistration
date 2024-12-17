// routes/auth.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, getAllUsers, updateUserProfile, deleteUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/all-users', protect, getAllUsers);
router.put('/profile', protect, updateUserProfile);
router.delete('/profile', protect, deleteUserProfile);

module.exports = router;
