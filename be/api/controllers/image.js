const { Model } = require("clarifai-nodejs");

const modelUrl = "https://clarifai.com/clarifai/main/models/face-detection";
const detectorModel = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const handleApiCall = async (req, res) => {
  const detectorModelPrediction = await detectorModel
    .predictByUrl({
      url: req.body.input,
      inputType: "image",
    })
    .catch((err) => {
      console.log("ERROR when calling API: ", err);
      res.status(400).json("Unable to work with the API.");
    });

  return res.json(detectorModelPrediction);
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json("unable to get entries"));
};

module.exports = {
  handleImage,
  handleApiCall,
};
