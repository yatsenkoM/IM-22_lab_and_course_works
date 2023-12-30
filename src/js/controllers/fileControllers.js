'use strict';

const File = require('../models/File');

const addNewFile = async (req, res) => {
  try {
    const file = await File.addNew(req.body);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const getAllFiles = async (req, res) => {
  try {
    const files = await File.getAll();
    res.status(200).json({ files });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const getFileById = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.getFileById(fileID);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const updateFileInfo = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.updateFileInfo(req.body, fileID);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const deleteFileById = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.deleteFileById(fileID);
    res.status(200).json({ 'Deleted file': file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

module.exports = {
  addNewFile,
  getAllFiles,
  getFileById,
  updateFileInfo,
  deleteFileById,
};
