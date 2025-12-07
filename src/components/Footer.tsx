import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-slate-900">
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-slate-50"
        style={{
          clipPath: 'ellipse(80% 100% at 50% 0%)',
        }}
      ></div>

      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">TechServices</h3>
                  <p className="text-xs text-cyan-400">Soluciones Informáticas</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Tu socio tecnológico de confianza desde 2008. Ofrecemos soluciones integrales para todas tus necesidades informáticas.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('inicio')}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('servicios')}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('tips')}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Tips & Tutoriales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <span>+34 123 456 789</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <span>info@techservices.com</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <span>Calle Principal 123<br />28001 Madrid, España</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <p className="text-slate-400 text-sm mb-4">
                Mantente al día con las últimas noticias y tips tecnológicos
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 text-slate-400 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 text-slate-400 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 text-slate-400 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 text-slate-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} TechServices. Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Política de Privacidad
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
