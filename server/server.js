const fs = require('fs');
const path = require('path');
const express = require("express");
const uuid = require('uuid');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

const FILENAME = path.resolve(path.join(__dirname, 'business.json'));

const writeDataToJson = (businessData) => {
  return fs.writeFileSync(FILENAME, JSON.stringify(businessData));
}

const readDataFromJson = (businessId = null) => {
  const businessDataRaw = fs.readFileSync(FILENAME, 'utf8');
  const businessData = JSON.parse(businessDataRaw);

  if (businessId) {
    const wantedBusiness = businessData.find(business => business.id === businessId);
    return wantedBusiness || { error: 'Business not found' };
  }

  return businessData;
};

const createBusinessObj = (newBusinessData) => {
  const nowDate = new Date();
  const nowDateIsoString = nowDate.toISOString();
  const businessData = readDataFromJson();

  businessData.push({
    ...newBusinessData,
    id: uuid.v4(),
    updatedAt: nowDateIsoString,
    createdAt: nowDateIsoString,
  });

  return writeDataToJson(businessData);
};

const updateBusinessObj = (businessToUpdate) => {
  const nowDate = new Date();
  const nowDateIsoString = nowDate.toISOString();
  const businessData = readDataFromJson();
  const wantedBusiness = businessData.find(business => business.id === businessToUpdate.id);
  const wantedBusinessIndex = businessData.findIndex(business => business.id === businessToUpdate.id);

  businessData[wantedBusinessIndex] = {
    ...wantedBusiness,
    ...businessToUpdate,
    createdAt: wantedBusiness.createdAt,
    updatedAt: nowDateIsoString,
  };

  return writeDataToJson(businessData);
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/business", (req, res) => {
  res.json(readDataFromJson());
});

app.get("/business/:businessId", (req, res) => {
  res.json(readDataFromJson(req.params.businessId));
});

app.post("/business", (req, res) => {
  createBusinessObj(req.body)
  res.json(readDataFromJson());
});

app.put("/business/:businessId", (req, res) => {
  updateBusinessObj({ ...req.body, id: req.params.businessId })
  res.json(readDataFromJson(req.params.businessId));
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
