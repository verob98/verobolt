import { useState, useEffect } from 'react';
import { Search, X, Play, Calendar, Eye } from 'lucide-react';
import { supabase, Tip } from '../lib/supabase';

export default function Tips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [filteredTips, setFilteredTips] = useState<Tip[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'redes', label: 'Redes' },
    { id: 'tutoriales', label: 'Tutoriales' },
  ];

  useEffect(() => {
    fetchTips();
  }, []);

  useEffect(() => {
    filterTips();
  }, [tips, selectedCategory, searchQuery]);

  const fetchTips = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('tips')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tips:', error);
    } else {
      setTips(data || []);
    }
    setIsLoading(false);
  };

  const filterTips = () => {
    let filtered = [...tips];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((tip) => tip.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (tip) =>
          tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tip.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTips(filtered);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleTipClick = async (tip: Tip) => {
    setSelectedTip(tip);
    await supabase
      .from('tips')
      .update({ views: (tip.views || 0) + 1 })
      .eq('id', tip.id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20" id="tips">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tips & <span className="text-cyan-400">Tutoriales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Aprende con nuestros videos tutoriales y consejos prácticos
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-700 border-t-cyan-400"></div>
            <p className="text-slate-400 mt-4">Cargando tips...</p>
          </div>
        ) : filteredTips.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No se encontraron tips. {searchQuery && 'Intenta con otra búsqueda.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredTips.slice(0, visibleCount).map((tip) => (
                <div
                  key={tip.id}
                  className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-slate-700 hover:border-cyan-400"
                  onClick={() => handleTipClick(tip)}
                >
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    <img
                      src={tip.thumbnail_url}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-3 right-3 bg-cyan-400 text-slate-900 px-2 py-1 rounded text-xs font-semibold">
                      {tip.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">{tip.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(tip.created_at || '')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{tip.views || 0} vistas</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < filteredTips.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
                >
                  Cargar Más
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {selectedTip && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedTip(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900/80 hover:bg-slate-900 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={getYouTubeEmbedUrl(selectedTip.youtube_url)}
                  title={selectedTip.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedTip.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedTip.created_at || '')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{selectedTip.views || 0} vistas</span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedTip.title}</h3>
              <p className="text-slate-300 leading-relaxed">{selectedTip.full_description}</p>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <a
                  href={selectedTip.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Ver en YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
