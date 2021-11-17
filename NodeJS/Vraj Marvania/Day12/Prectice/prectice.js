var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("connected..."))
  .catch((error) => console.error("errore not connetede....", error));

const empSchema = new mongoose.Schema({
  ID: { type: Number, min: 6, max: 12, unique: true },

  Name: {
    type: String,
    required: true,
  },
  Address: String,
  skills: [String],

  gender: { type: String, enum: ["male", "female", "other"] },
});

const Empdata = mongoose.model("Empdata", empSchema);

async function demo() {
  // Comparison Query Operator ------------------------->

  query = await Empdata.find({ ID: { $eq: "5" } });

  console.log(query);
}
// demo()

async function createEmp() {
  const Empdata1 = new Empdata({
    ID: 7,
    Name: "vraj marvania",
    Address: "shiv nager road jc",
    skills: ["react", "node", "python", "java", "c", "c++"],
    gender: "male",
  });
  Empdata1.save(function (error) {
    console.log(error);
  });
}

createEmp();
