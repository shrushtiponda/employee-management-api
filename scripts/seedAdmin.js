require("dotenv").config();

const bcrypt = require("bcryptjs");
const User = require("../src/models/user.model");
const connectDB = require("../src/config/db");
const { USER_ROLES } =  require("../src/constants/user.constants");
const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

const seedAdmin = async () => {
  await connectDB();

  const existingAdmin =
    await User.findOne({
      role: USER_ROLES.ADMIN,
    });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const password =
    await bcrypt.hash(
      ADMIN_PASSWORD,
      10
    );

  await User.create({
    name: "Administrator",
    email: ADMIN_EMAIL,
    password,
    role: USER_ROLES.ADMIN,
  });

  console.log("Admin created");

  process.exit(0);
};

seedAdmin();