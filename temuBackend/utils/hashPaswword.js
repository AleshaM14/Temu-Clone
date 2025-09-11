//  import bcrypt from "bcryptjs";
import bcrypt from "bcrypt"; //bcrypt is a library that lets you securely hash passwords and check them.

/* hashing a password :Why important:
Hashing makes the password secure so even if someone hacks your database, they can’t see the original password.*/

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword); //Checks if the plain password matches the hashed one stored in the database.
};

export { hashPassword, comparePassword };
