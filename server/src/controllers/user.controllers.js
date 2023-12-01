import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // Get user details from frontend
  // Validation - not empty
  // Check if user already exists: username, email
  // Check for images, check for avatar
  // Upload them to cloudinary, avatar
  // Create user object - create entry in db
  // Remove password and refresh token field from response
  // Check for user creation
  // Return response

  const { userName, password, email, phoneNumber, employeeId, creatorName, biography} = req.body;

  if (
    [
      userName,
      password,
      email,
      phoneNumber,
      employeeId,
      creatorName,
      biography,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ userName }, { email }]
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username all ready exist");
  }

  const user = await User.create({
    userName,
    password,
    email,
    phoneNumber,
    employeeId,
    creatorName,
    biography,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

export { registerUser, };
