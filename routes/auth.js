const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.get("/connect-wallet/:id", async (req, res, next) => {
  //   console.log("YO");
  try {
    const user = await userModel.find({ id_metamask: req.params.id });
  } catch (e) {
    next(e);
  }
});

router.post("/connect-wallet/:id", async (req, res, next) => {
  console.log("hellooo");
  try {
    const newUser = {};
    console.log(newUser)
    const foundUser = await userModel.findOne({
      id_metamask: req.params.id,
    });

  
    if (foundUser) {
      res.status(200).json(foundUser);
    } else {
     
      newUser.id_metamask = req.params.id;
      newUser.balance = 100;
      console.log(newUser,'nn');
      const test = await userModel.create(newUser);
      console.log(test, 44);
      res.status(200).json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;