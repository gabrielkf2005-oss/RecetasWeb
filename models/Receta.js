import mongoose from 'mongoose';
const recetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, 
  ingredientes: { type: String, required: true },
  instrucciones: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true } 
});
export default mongoose.model('Receta', recetaSchema);