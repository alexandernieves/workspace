// test-mongo.js
const mongoose = require('mongoose');

const uri = "mongodb+srv://alexcode:alexcodeworkspace@cluster0.kqwhh3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conexión exitosa a MongoDB");
    await mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
  }
})();
