import File from '../models/File';

class FileController {
  async store(req, res) {
    // return res.json(req.file);
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
