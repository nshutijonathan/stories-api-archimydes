import models from "../database/models";
import constants from "../helpers/constants";
const { OK, BAD_REQUEST, CREATED, CONFLICT, NOT_FOUND } = constants.statusCode;
const { users } = models;
class UserController {
  static async getUsers(req, res) {
    try {
      const UsersList = await users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });

      return res.status(OK).json({
        message: "users fetched successfully",
        status: 200,
        data: UsersList,
        total: UsersList.length,
      });
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  }
  static async getSingleUser(req, res) {
    try {
      const { id } = req.params;
      const SingleUser = await users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
      });
      if (!SingleUser) {
        return res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `user with id ${req.params.id} not found `,
        });
      }
      return res.status(OK).json({
        status: 200,
        message: `user with id ${id} fetched succcessfully`,
        profile: SingleUser,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deleteSingleUser(req, res) {
    try {
      const { id } = req.params;
      const SingleUser = await users.findOne({
        where: { id },
      });
      if (SingleUser) {
        const deleted = await users.destroy({
          where: { id },
        });
        return res.status(OK).json({
          status: OK,
          message: `user with id ${req.params.id} deleted successfully`,
        });
      }
      return res.status(NOT_FOUND).json({
        status: NOT_FOUND,
        message: `user with id ${req.params.id} not found `,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  static async updateSingleUser(req, res) {
    try {
      let { id } = req.params;
      const SingleUser = await users.findOne({
        where: { id },
      });

      if (!SingleUser) {
        return res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `user with id ${req.params.id} not found `,
        });
      }

      const [updated] = await users.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedUser = await users.findOne({
          where: { id },
        });
        return res.status(200).json({
          status: OK,
          message: `user  with id ${req.params.id}  successfully updated`,
          account: updatedUser,
        });
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
export default UserController;
