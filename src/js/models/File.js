'use strict';

const db = require('../db');
const { getDatetime } = require('../utils/dateUtils');

class File {
  static async addNew(requestBody) {
    const { name, description, format, hasVisualization, authorId } =
      requestBody;
    const uploadDate = getDatetime();
    const lastEditTime = uploadDate;
    const sql = `
    INSERT INTO file(
    name, 
    description, 
    uploadDate, 
    lastEditTime,
    format,
    hasVisualization,
    authorId
    )
    VALUES(?, ?, ?, ?, ?, ?, ?);
    `;
    const [file] = await db.execute(sql, [
      name,
      description,
      uploadDate,
      lastEditTime,
      format,
      hasVisualization,
      authorId,
    ]);
    return this.getFileById(file.insertId);
  }

  static async getAll() {
    const sql = 'SELECT * FROM file;';
    const [files] = await db.execute(sql);
    return files;
  }

  static async getFileById(id) {
    const sql = `
        SELECT * FROM file
        WHERE id = ?;
    `;
    const [file] = await db.execute(sql, [id]);
    return file;
  }

  static async deleteFileById(id) {
    const file = this.getFileById(id);
    const sql = `
        DELETE FROM file
        WHERE id = ?;
    `;
    await db.execute(sql, [id]);
    return file;
  }

  static async updateFileInfo(requestBody, id) {
    const { newName, description } = requestBody;
    const lastEditTime = getDatetime();
    const sql = `
    UPDATE file
    SET name = ?, description = ?, lastEditTime = ?
    WHERE id = ?;
    `;
    await db.execute(sql, [newName, description, lastEditTime, id]);
    return this.getFileById(id);
  }
}

module.exports = File;
