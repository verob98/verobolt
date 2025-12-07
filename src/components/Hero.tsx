import { Award, Briefcase, Users, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/20">
                Expertos en Tecnología
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Soluciones Tecnológicas{' '}
              <span className="text-cyan-400">a tu Medida</span>
            </h1>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">+15 Años de Experiencia</h3>
                  <p className="text-slate-400">
                    Brindando servicios informáticos de calidad a empresas y particulares en toda la región.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Servicios Integrales</h3>
                  <p className="text-slate-400">
                    Desde reparación de equipos hasta soluciones empresariales completas, configuración de redes y ciberseguridad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Atención Personalizada</h3>
                  <p className="text-slate-400">
                    Cada cliente es único. Nos adaptamos a tus necesidades específicas con soluciones a medida y soporte continuo.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('contacto')}
                className="group bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-400/20"
              >
                Contacta Conmigo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700"
              >
                Ver Servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-slate-400">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-slate-400">Años Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-slate-400">Soporte Disponible</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-center h-96 w-80">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-slate-600 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">Juan Pérez</h3>
                      <p className="text-cyan-400">Fundador & CEO</p>
                      <p className="text-sm text-slate-400 mt-2">Ingeniero en Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
