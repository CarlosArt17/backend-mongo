const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const port = 8081;
app.use(cors());

// Conexión a la base de datos MongoDB Atlas
mongoose.connect('mongodb+srv://CarlosArt17:carlosart17@carlosart17.gs6c7g6.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'carlosart17' // Reemplaza con el nombre real de tu base de datos
});

// Middleware para analizar datos JSON en las solicitudes
app.use(express.json());
app.use('/api', routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
