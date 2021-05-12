const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  client: {
    type: String
  },
  clientLocation: {
    type: String
  },
  client: {
    type: String
  },
  client: {
    type: String
  },
});

module.exports = Project = mongoose.model('project', ProjectSchema);