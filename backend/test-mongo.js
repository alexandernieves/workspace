const mongoose = require('mongoose'); // 🔥 IMPORTANTE

const uri = "mongodb://alexcode:alexcodeworkspace@cluster0-shard-00-00.kqwhh3k.mongodb.net:27017,cluster0-shard-00-01.kqwhh3k.mongodb.net:27017,cluster0-shard-00-02.kqwhh3k.mongodb.net:27017/admin?ssl=true&replicaSet=atlas-v11nkj-shard-0&authSource=admin&retryWrites=true&w=majority";

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conexión exitosa a MongoDB");
    await mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
  }
})();
