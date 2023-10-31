const db = global.db

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

mongoose.set("strictQuery", false);

let Database;

if (/mongo/.test(db)) {
  Database = class MongoDB {
    constructor(url) {
      this.url = url;
      this.options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      this.connection = this.url || db;
      this.model = {
        database: {},
      };
      this.data = {};
    }

    async read() {
      await mongoose.connect(this.connection, { ...this.options });

      try {
        const schemaData = new mongoose.Schema({
          data: {
            type: Object,
            required: true,
            default: {},
          },
        });
        this.model.database = mongoose.model("data", schemaData);
      } catch {
        this.model.database = mongoose.model("data");
      }

      this.data = await this.model.database.findOne({});
      
      if (!this.data) {
        await new this.model.database({
          data: {},
        }).save();
        
        this.data = await this.model.database.findOne({});
      }
      
      return this?.data?.data;
    }
  };
} else if (/json/.test(db)) {
  Database = class Database {
    constructor() {
      this.data = {};
      this.file = path.join(process.cwd(), "lib/database/", db);
    }

    read() {
      let data;
      
      if (fs.existsSync(this.file)) {
        data = JSON.parse(fs.readFileSync(this.file));
      } else {
        fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2));
        data = this.data;
      }
      
      return data;
    }

    write(data) {
      this.data = !!data ? data : global.db;
      const dirname = path.dirname(this.file);
      
      if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true });
      
      fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2));
      
      return this.file;
    }
  };
}

module.exports = Database
