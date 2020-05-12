import { authService } from "../services/auth-service";

function addSecondaryId(record) {
  return { ...record, _id: record.id.toString() };
}

export class ApiService {
  constructor(apiPath) {
    this.apiPath = apiPath;
  }

  async request(endpoint, method, body = undefined) {
    const host = process.env.REACT_APP_API_HOST;
    const url = host + this.apiPath + endpoint;

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer: " + authService.getToken(),
        "Content-Type": "application/json;charset=utf-8",
      },
      method,
      body,
    });

    return response.json();
  }

  async find(filter = {}) {
    if (filter._id) {
      filter.id = filter._id;
      delete filter._id;
    }

    const query = Object.keys(filter)
      .map((key) => `${key}=${filter[key]}`)
      .join("&");
    const payload = await this.request("/?" + query, "GET");
    return payload.data.map(addSecondaryId);
  }

  async findOne(filter = {}) {
    const list = await this.find(filter);
    return list[0];
  }

  async insert(record) {
    const payload = await this.request("/", "POST", JSON.stringify(record));
    return addSecondaryId(payload);
  }

  async update(id, record) {
    const payload = await this.request("/" + id, "PUT", JSON.stringify(record));
    return addSecondaryId(payload);
  }

  async remove(id) {
    const payload = await this.request("/" + id, "DELETE");
    return addSecondaryId(payload);
  }
}
