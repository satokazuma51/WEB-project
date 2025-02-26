import user_1 from '../routes/User';

export async function getUserProfile(req, res) {
  try {
    const user = await user_1.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function updateUserProfile(req, res) {
  try {
    const updates = req.body;
    const updatedUser = await user_1.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}
