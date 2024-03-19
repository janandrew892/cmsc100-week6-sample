import express, { urlencoded } from "express";
import router from "./router.js";
import mongoose from "mongoose";

await mongoose.connect(
  'mongodb://127.0.0.1:27017/ICS',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express();
app.use(express.json());
app.use(urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World');
})

router(app);

app.listen(3000, () => {
  console.log("Servers started on port 3000");
})