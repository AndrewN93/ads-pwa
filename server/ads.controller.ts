import { db } from "./database";

export function readAllAds(req, res) {
  res.status(200).json({ ads: db.readAllAds() });
}

export function readAdById(req, res) {
  res.status(200).json({ ad: db.readById(req.params.id) });

}