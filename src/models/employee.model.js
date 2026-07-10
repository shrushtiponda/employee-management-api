const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    // fields
    employeeId: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    fullName: {
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
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return /^[0-9]{10}$/.test(value);
            },
            message: "Invalid phone number"
        }
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        pincode: {
            type: String,
            trim: true
        }
    },
    salary: {
        type: Number,
        required: true,
        min:0
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isServingNoticePeriod: {
        type: Boolean,
        default: false
    },
    noticePeriodDays: {
        type: Number,
        required: true
    },
    profileImage: {
        type: String,
        trim: true
    },
    resume: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;