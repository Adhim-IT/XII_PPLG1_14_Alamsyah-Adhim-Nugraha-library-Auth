const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email });
    
    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
