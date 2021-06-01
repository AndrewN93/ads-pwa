import { Ads } from "./database-data";

class InMemoryDatabase {

  readAllAds() {
    return Object.values(Ads);
  }

  readById(id: string) {
    return Ads[id];
  }

}

export const db = new InMemoryDatabase();


