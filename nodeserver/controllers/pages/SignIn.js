import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const isPasswordCorrect = await user.comparePassword(password);
        
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        
        res.status(200).json({
            result: user,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default { signIn };
