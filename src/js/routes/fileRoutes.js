'use strict';

const express = require('express');
const fileControllers = require('../controllers/fileControllers');
const router = new express.Router();

router
  .route('/')
  .get(fileControllers.getAllFiles)
  .post(fileControllers.addNewFile);
router
  .route('/:id')
  .get(fileControllers.getFileById)
  .patch(fileControllers.updateFileInfo)
  .delete(fileControllers.deleteFileById);

module.exports = router;
