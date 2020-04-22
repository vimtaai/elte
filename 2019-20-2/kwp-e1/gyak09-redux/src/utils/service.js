import Nedb from "nedb/browser-version/out/nedb.min";
import { promisify } from "./promisify";

export class Service {
  constructor(datafile) {
    this.db = new Nedb({ filename: datafile, autoload: true });

    const methods = ["find", "findOne", "insert", "update", "remove"];
    methods.forEach(
      (method) => (this.db[method] = promisify(this.db[method].bind(this.db)))
    );
  }

  async find(filter = {}) {
    return await this.db.find(filter);
  }

  async findOne(filter = {}) {
    return await this.db.findOne(filter);
  }

  async insert(track) {
    return await this.db.insert(track);
  }

  async update(id, track) {
    return await this.db.update({ _id: id }, track, {
      returnUpdatedDocs: true,
    });
  }

  async remove(id) {
    return await this.db.remove({ _id: id });
  }
}
