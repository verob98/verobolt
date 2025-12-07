import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 py-20" id="contacto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta o problema técnico
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Teléfono</h4>
                    <p className="text-slate-600">+34 123 456 789</p>
                    <p className="text-slate-600">+34 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">info@techservices.com</p>
                    <p className="text-slate-600">soporte@techservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Dirección</h4>
                    <p className="text-slate-600">Calle Principal 123</p>
                    <p className="text-slate-600">28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Horario</h4>
                    <p className="text-slate-600">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-slate-600">Sábados: 10:00 - 14:00</p>
                    <p className="text-slate-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-3">¿Necesitas asistencia urgente?</h4>
              <p className="text-cyan-50 mb-4">
                Disponemos de servicio de urgencias 24/7 para emergencias técnicas
              </p>
              <a
                href="tel:+34123456789"
                className="inline-block bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Cuéntanos más sobre tu consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
