const express = require('express');
const router = express.Router();

// Load Project model
const Project = require('../../models/Project');

// @route GET api/project/test
// @description tests project route
// @access Public
router.get('/test', (req, res) => res.send('project route testing!'));

// @route GET api/projects
// @description Get all projects
// @access Public
router.get('/', (req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) =>
      res.status(404).json({ noprojectfound: 'No projects found' })
    );
});

// @route GET api/projects/:id
// @description Get single project by id
// @access Public
router.get('/:id', (req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) =>
      res.status(404).json({ noprojectfound: 'No project found' })
    );
});
