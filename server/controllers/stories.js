import models from "../database/models";
import constants from "../helpers/constants";
const {
  OK,
  BAD_REQUEST,
  CREATED,
  FORBIDDEN,
  CONFLICT,
  NOT_FOUND,
} = constants.statusCode;
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
  static async getMyStories(req, res) {
    const StoriesList = await stories.findAll({
      where: { added_by: req.user.id },
    });
    return res.status(OK).json({
      message: `stories created by user ${req.user.id}fetched successfully`,
      status: 200,
      data: StoriesList,
      total: StoriesList.length,
    });
  }
  static async getSingleStory(req, res) {
    const { id } = req.params;
    const story = await stories.findOne({
      where: { id },
    });
    if (!(story.added_by === req.user.id)) {
      return res.status(FORBIDDEN).send({
        status: FORBIDDEN,
        message: `Access denied!The story with id ${req.params.id} is not yours`,
      });
    }
    return res.status(OK).json({
      message: `story with id ${req.params.id} fetched successfully`,
      status: 200,
      data: story,
    });
  }
  static async addStory(req, res) {
    try {
      const data = {
        summary: req.body.summary,
        description: req.body.description,
        type: req.body.type,
        complexity: req.body.complexity,
        estimated_time_of_completion: req.body.timeEstimation,
        cost: req.body.cost,
        status: req.body.status,
        approved: false,
        rejected: false,
        added_by: req.user.id,
      };
      if (
        !(
          data.type === "enhancement" ||
          data.type === "bugfix" ||
          data.type === "bugfix" ||
          data.type === "qa"
        )
      ) {
        return res.status(BAD_REQUEST).send({
          status: BAD_REQUEST,
          message:
            "invalid type format,only enhancement, bugfix or bugfix is alloweed",
        });
      }
      if (
        !(
          data.complexity === "low" ||
          data.complexity === "mid" ||
          data.complexity === "high"
        )
      ) {
        return res.status(BAD_REQUEST).send({
          status: BAD_REQUEST,
          message:
            "invalid complexity format,only low, mid or high  is alloweed",
        });
      }
      const newStory = await stories.create(data);
      return res.status(OK).json({
        status: CREATED,
        message: "story is successfully created",
        employee: newStory,
      });
    } catch (error) {
      return res.status(BAD_REQUEST).json({ error: error.message });
    }
  }
  static async updateSingleStory(req, res) {
    try {
      let { id } = req.params;
      const SingleStory = await stories.findOne({
        where: { id },
      });
      if (req.body.approved && req.body.rejected) {
        return res.status(BAD_REQUEST).send({
          status: BAD_REQUEST,
          message: "Can not reject and approve at the same time ",
        });
      }
      if (!SingleStory) {
        return res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `story with id ${req.params.id} not found `,
        });
      }

      const [updated] = await stories.update(req.body, {
        where: { id },
      });

      if (updated) {
        const updatedStory = await stories.findOne({
          where: { id },
        });
        return res.status(200).json({
          status: OK,
          message: `story  with id ${req.params.id}  successfully updated`,
          account: updatedStory,
        });
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
export default StoriesController;
