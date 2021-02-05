import models from "../database/models";
import constants from "../helpers/constants";
const { OK, BAD_REQUEST, CREATED, CONFLICT, NOT_FOUND } = constants.statusCode;
const { users, stories } = models;

class StoriesController {
  static async getStories(req, res) {
    try {
      const StoriesList = await stories.findAll({});

      return res.status(OK).json({
        message: "stories fetched successfully",
        status: 200,
        data: StoriesList,
        total: StoriesList.length,
      });
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  }
}
export default StoriesController;
