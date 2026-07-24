const mongoose = require("mongoose");
const { USER_ROLES } = require("../constants/user.constants");
const userSchema = new mongoose.Schema({
    // fields
    name: {
        type: String,
        required: true,
        trim: true
        },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Invalid email address"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    role: {
        type: String,
        enum: Object.values(USER_ROLES),
        default: USER_ROLES.USER
    },
    lastlogin:{
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;