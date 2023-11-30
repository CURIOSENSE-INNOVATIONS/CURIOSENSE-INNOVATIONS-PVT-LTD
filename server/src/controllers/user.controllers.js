import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Curiosense Innovations",
  }); //Testing Api send to the server
});

export { registerUser };
