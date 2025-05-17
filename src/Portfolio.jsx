import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-gray-900 text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Hola, soy Jocelyn</h1>
        <p className="text-xl mb-6">
          Científica de Datos y Desarrolladora de ML con enfoque en NLP, análisis de datos sociales y modelos predictivos.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2 rounded">
          Contáctame
        </button>
      </motion.div>

      <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-white text-black p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Proyecto #{i}</h2>
            <p className="mb-4">
              Descripción breve del proyecto. Este espacio se usará para destacar el impacto, las tecnologías y tu rol.
            </p>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100">
              Ver más
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
