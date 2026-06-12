import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Usuario from './models/Usuario.js';
import Categoria from './models/Categoria.js';

const CADENA_CONEXION = "mongodb:127.0.0.1:27017/recetasDB";async function ejecutarSeed() {
  try {
    console.log('Conectando a MongoDB Atlas para el seed directo...');
    await mongoose.connect(CADENA_CONEXION);
    
    await Usuario.deleteMany({});
    await Categoria.deleteMany({});

    const salt = await bcrypt.genSalt(10);
    const passwordHasheada = await bcrypt.hash('Demo1234', salt);
    
    await Usuario.create({
      email: 'demo@demo.com',
      password: passwordHasheada
    });

    await Categoria.create([
      { nombre: 'Postres' },
      { nombre: 'Comida Mexicana' },
      { nombre: 'Sopas' }
    ]);

    console.log('¡Seed ejecutado con éxito! Usuario demo@demo.com y categorías creadas.');
  } catch (error) {
    console.error('Error ejecutando el seed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Conexión cerrada del seed.');
  }
}

ejecutarSeed();