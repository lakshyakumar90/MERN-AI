const express = require("express");
const projectRouter = express.Router();
const { createProjectController, getAllProjectsController, addUserToProjectController, getProjectByIdController } = require("../controllers/project.controller");
const { body } = require("express-validator");
const { userAuth } = require("../middlewares/auth.middleware");

projectRouter.post("/create", userAuth,
    body("name").notEmpty().withMessage("Project name is required"),
    body("users").isArray().withMessage("Users is required"),
    body("users.*").isMongoId().withMessage("Invalid userId"),
    createProjectController
)

projectRouter.get("/all", userAuth, getAllProjectsController);

projectRouter.post("/add-user", userAuth,
    body("projectId").notEmpty().withMessage("Project ID is required"),
    body("users").isArray({ min: 1 }).withMessage("Users is required").bail()
        .custom((users) => users.every(user => typeof user === 'string')).withMessage("Invalid userId(s) in users array"),
    body("users.*").isMongoId().withMessage("Invalid userId"),
    addUserToProjectController
)

projectRouter.get('/:projectId', userAuth, getProjectByIdController);

module.exports = projectRouter;