import HttpService from "./HttpService";
import cheerio from "cheerio";

class JobService {
  #apiURL = "https://jobs.idealo.com/";

  constructor() {}

  async getOpenPositions() {
    const plainResponse = await HttpService.getPlain(this.#apiURL);
    const $ = cheerio.load(plainResponse);
    const response = [];
    $("#jobs-list")
      .find("a.job__row")
      .each((index, element) => {
        const linkToOffer = $(element).attr("href");
        const title = $(element)
          .find("h5")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const location = $(element)
          .find("span.location")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const department = $(element)
          .find("span.department-field")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const city = $(element)
          .find("div.city")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const state = $(element)
          .find("div.state")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const country = $(element)
          .find("div.country")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const language = $(element)
          .find("div.language")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const tag = $(element)
          .find("div.tag")
          .contents()
          .first()
          .text()
          .replace(/^\s+|\s+$/g, "");
        const result = {
          link: linkToOffer,
          title,
          location,
          department,
          city,
          state,
          country,
          language,
          tag,
        };
        response.push(result);
      });
    return response;
  }
}
export default new JobService();
