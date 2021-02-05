import constants from "../helpers/constants";
const { FORBIDDEN } = constants.statusCode;
const admin = (req, res, next) => {
  if (!(req.user.is_admin == true)) {
    return res.status(FORBIDDEN).send({
      status: FORBIDDEN,
      message: "Access denied.Only admin",
    });
  }
  next();
};
export default admin;
