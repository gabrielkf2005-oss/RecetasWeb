import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Usuario from './models/Usuario.js';
import Categoria from './models/Categoria.js';

// Intentar configurar dotenv por si se corre local con archivo .env
dotenv.config();

// Prioriza la base de datos de Atlas en la nube; si no existe, usa la local corregida sin errores de barras
const CADENA_CONEXION = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/recetasDB";

async function ejecutarSeed() {
  try {
    console.log('Iniciando conexión a MongoDB...');
    await mongoose.connect(CADENA_CONEXION);
    console.log('Conectado exitosamente.');

    // Limpiar colecciones para evitar duplicados
    console.log('Limpiando datos antiguos...');
    await Usuario.deleteMany({});
    await Categoria.deleteMany({});

    // Encriptar contraseña del usuario administrador
    console.log('Creando usuario de prueba...');
    const salt = await bcrypt.genSalt(10);
    const passwordHasheada = await bcrypt.hash('Demo1234', salt);
    
    await Usuario.create({
      email: 'demo@demo.com',
      password: passwordHasheada
    });

    // Insertar categorías por defecto
    console.log('Insertando categorías base...');
    await Categoria.create([
      { nombre: 'Postres' },
      { nombre: 'Comida Mexicana' },
      { nombre: 'Sopas' }
    ]);

    console.log('¡Seed ejecutado con éxito! Usuario demo@demo.com y categorías creadas.');
  } catch (error) {
    console.error('❌ Error ejecutando el seed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Conexión cerrada del seed.');
  }
}

ejecutarSeed();