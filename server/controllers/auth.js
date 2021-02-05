import jwt from "jsonwebtoken";
import models from "../database/models";
import constants from "../helpers/constants";
import usersHelpers from "../helpers/usersHelpers";
import { validateEmail } from "../validations/validateEmail";
const {
  OK,
  NOT_FOUND,
  UNAUTHORIZED,
  CONFLICT,
  BAD_REQUEST,
  CREATED,
} = constants.statusCode;
const { users } = models;
class AuthControllers {
  static async login(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(NOT_FOUND).send({
          status: NOT_FOUND,
          message: "some values are missing",
        });
      }

      const { email, password } = req.body;
      validateEmail(email);
      const findUser = await users.findOne({
        where: { email },
      });
      if (!findUser) {
        return res.status(UNAUTHORIZED).json({
          status: UNAUTHORIZED,
          message: `invalid email or password`,
        });
      }
      if (
        !usersHelpers.comparePassword(
          findUser.dataValues.password,
          req.body.password
        )
      ) {
        return res.status(401).send({
          status: 401,
          message: "invalid email or password",
        });
      }
      const token = jwt.sign(
        {
          id: findUser.id,
          email: findUser.email,
          is_admin: findUser.is_admin,
        },

        process.env.SECRET_KEY,
        { expiresIn: "24hrs" }
      );
      return res.status(OK).send({
        status: OK,
        message: "successfully logged in",
        id: findUser.id,
        is_admin: findUser.is_admin,
        token,
        firstname: findUser.firstname,
        lastname: findUser.lastname,
      });
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
  static async currentUser(req, res) {
    return res.status(OK).send({
      status: OK,
      message: "current user retrieved successfully",
      profile: req.user,
    });
  }
  static async signUp(req, res) {
    try {
      const { email } = req.body;
      const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: usersHelpers.hashPassword(req.body.password),
        is_admin: false,
      };
      validateEmail(email);
      const findUser = await users.findOne({
        where: { email },
      });
      if (findUser) {
        return res.status(CONFLICT).json({
          status: CONFLICT,
          message: `Email address ${email} already in use!`,
        });
      }
      const newUser = await users.create(data);
      return res.status(OK).json({
        status: CREATED,
        message: "user is successfully created",
        employee: newUser,
      });
    } catch (error) {
      return res.status(BAD_REQUEST).json({ error: error.message });
    }
  }
}
export default AuthControllers;
