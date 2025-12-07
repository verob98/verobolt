import { useState } from 'react';
import { X, Laptop, Shield, Network, HardDrive, Cloud, Smartphone, Check } from 'lucide-react';
import { supabase, ServiceRequest } from '../lib/supabase';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  fullDescription: string;
  features: string[];
}

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    client_name: '',
    client_phone: '',
    client_email: '',
    problem_description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services: Service[] = [
    {
      id: 'reparacion',
      title: 'Reparación de Equipos',
      icon: <Laptop className="w-8 h-8" />,
      description: 'Diagnóstico y reparación de computadoras, laptops y dispositivos.',
      fullDescription:
        'Servicio completo de diagnóstico, reparación y mantenimiento de equipos informáticos. Trabajamos con todas las marcas y modelos.',
      features: [
        'Diagnóstico gratuito',
        'Reparación en el día',
        'Garantía en repuestos',
        'Soporte post-reparación',
      ],
    },
    {
      id: 'ciberseguridad',
      title: 'Ciberseguridad',
      icon: <Shield className="w-8 h-8" />,
      description: 'Protección de datos, antivirus y prevención de amenazas.',
      fullDescription:
        'Implementación de soluciones de seguridad informática para proteger tu información y sistemas contra amenazas digitales.',
      features: [
        'Auditoría de seguridad',
        'Instalación de antivirus',
        'Configuración de firewalls',
        'Capacitación en seguridad',
      ],
    },
    {
      id: 'redes',
      title: 'Configuración de Redes',
      icon: <Network className="w-8 h-8" />,
      description: 'Instalación y configuración de redes cableadas e inalámbricas.',
      fullDescription:
        'Diseño, instalación y configuración de redes empresariales y domésticas para conectividad óptima y segura.',
      features: [
        'Redes WiFi de alto rendimiento',
        'Cableado estructurado',
        'Seguridad de red',
        'Optimización de conexiones',
      ],
    },
    {
      id: 'recuperacion',
      title: 'Recuperación de Datos',
      icon: <HardDrive className="w-8 h-8" />,
      description: 'Recuperación de información de discos duros y dispositivos dañados.',
      fullDescription:
        'Servicio especializado en recuperación de datos perdidos por fallos de hardware, borrado accidental o corrupción de archivos.',
      features: [
        'Análisis sin costo',
        'Alta tasa de éxito',
        'Confidencialidad garantizada',
        'Recuperación de todo tipo de archivos',
      ],
    },
    {
      id: 'nube',
      title: 'Soluciones en la Nube',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Migración y gestión de servicios cloud para tu empresa.',
      fullDescription:
        'Implementación de soluciones cloud computing, migración de datos y aplicaciones, gestión de servicios en la nube.',
      features: [
        'Migración a la nube',
        'Backup automático',
        'Acceso remoto seguro',
        'Escalabilidad',
      ],
    },
    {
      id: 'moviles',
      title: 'Soporte Móvil',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Reparación y configuración de smartphones y tablets.',
      fullDescription:
        'Servicio técnico especializado en dispositivos móviles, reparación de pantallas, baterías, configuración y optimización.',
      features: [
        'Reparación de pantallas',
        'Cambio de baterías',
        'Liberación de equipos',
        'Transferencia de datos',
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!expandedService) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const service = services.find((s) => s.id === expandedService);
    const requestData: ServiceRequest = {
      service_type: service?.title || '',
      ...formData,
    };

    const { error } = await supabase.from('service_requests').insert([requestData]);

    if (error) {
      console.error('Error submitting request:', error);
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({
        client_name: '',
        client_phone: '',
        client_email: '',
        problem_description: '',
      });
      setTimeout(() => {
        setExpandedService(null);
        setSubmitStatus('idle');
      }, 2000);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros <span className="text-cyan-600">Servicios</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para todas tus necesidades informáticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-slate-200 hover:border-cyan-400 group"
              onClick={() => setExpandedService(service.id)}
            >
              <div className="text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
              <button className="mt-4 text-cyan-600 font-semibold text-sm hover:text-cyan-700 flex items-center gap-1">
                Ver más →
              </button>
            </div>
          ))}
        </div>
      </div>

      {expandedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setExpandedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {services
              .filter((s) => s.id === expandedService)
              .map((service) => (
                <div key={service.id}>
                  <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-8 text-white relative">
                    <button
                      onClick={() => setExpandedService(null)}
                      className="absolute top-4 right-4 hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-cyan-50">{service.fullDescription}</p>
                  </div>

                  <div className="p-8">
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">
                        Características del Servicio
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-200 pt-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">
                        Solicitar este Servicio
                      </h4>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.client_name}
                            onChange={(e) =>
                              setFormData({ ...formData, client_name: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Juan Pérez"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                              Teléfono
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.client_phone}
                              onChange={(e) =>
                                setFormData({ ...formData, client_phone: e.target.value })
                              }
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="+34 123 456 789"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.client_email}
                              onChange={(e) =>
                                setFormData({ ...formData, client_email: e.target.value })
                              }
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              placeholder="juan@ejemplo.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Describe tu Problema
                          </label>
                          <textarea
                            required
                            value={formData.problem_description}
                            onChange={(e) =>
                              setFormData({ ...formData, problem_description: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="Describe detalladamente el problema o servicio que necesitas..."
                          />
                        </div>

                        {submitStatus === 'success' && (
                          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                            ¡Solicitud enviada correctamente! Nos pondremos en contacto pronto.
                          </div>
                        )}

                        {submitStatus === 'error' && (
                          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                            Error al enviar la solicitud. Por favor, intenta de nuevo.
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Enviando...' : 'Solicitar Servicio'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
