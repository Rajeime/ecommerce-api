const Users = require("../models/users");

/**
 * @Description gets all users from database
 * @param {Request} req
 * @param {Response} res
 */
getAllUsers = async (req, res) => {
  try {
    let user = await Users.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};


/**
 * @description post new user to the database
 * @param {Request} req
 * @param {Response} res
 */
postUser = async (req, res) => {
  let data = req.body;

  try {
    let user = await Users.create(data);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};


/**
 * @description gets specific use from database
 * @param {Request} req
 * @param {Respond} res
 */
getSingleUser = async (req, res) => {
  let id = req.params.id;

  try {
    let user = await Users.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};


/**
 * @description delete user from database
 * @param {Request} req
 * @param {Response} res
 */
deleteUser = async (req, res) => {
  let id = req.params.id;

  try {
    let user = await Users.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};


/**
 * @Description edit user from database
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
editUser = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let user = await Users.findByIdAndUpdate(id, data);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  postUser,
  getSingleUser,
  deleteUser,
  editUser,
};
