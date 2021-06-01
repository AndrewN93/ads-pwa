import { Ads } from "./database-data";

class InMemoryDatabase {

  readAllAds() {
    return Object.values(Ads);
  }

}

export const db = new InMemoryDatabase();


