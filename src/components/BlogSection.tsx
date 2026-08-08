/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { blogArticles } from '../data/articles';
import { BlogArticle } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, Bookmark } from 'lucide-react';

interface BlogSectionProps {
  selectedArticleId?: string | null;
  onSelectArticleId?: (id: string | null) => void;
}

export default function BlogSection({ selectedArticleId = null, onSelectArticleId }: BlogSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  useEffect(() => {
    if (selectedArticleId) {
      const art = blogArticles.find(a => a.id === selectedArticleId);
      if (art) {
        setSelectedArticle(art);
      }
    } else {
      setSelectedArticle(null);
    }
  }, [selectedArticleId]);

  const handleSetSelectedArticle = (art: BlogArticle | null) => {
    setSelectedArticle(art);
    if (onSelectArticleId) {
      onSelectArticleId(art ? art.id : null);
    }
  };

  const categories = ['Todos', 'Entrevistas', 'Guias', 'Legislação', 'Empregabilidade'];

  const filteredArticles = activeCategory === 'Todos'
    ? blogArticles
    : blogArticles.filter(art => art.category === activeCategory);

  return (
    <div id="blog-section" className="space-y-8">
      {/* TOP AD SPACE FOR BLOG */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — FORMALIDADES E CONCURSOS EM ANGOLA EM 2026: INSCREVA-SE EM CURSOS DE INGLÊS E RH
        </span>
      </div>

      {selectedArticle ? (
        /* Full Article View */
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-8 md:p-12 space-y-8">
          <button
            onClick={() => handleSetSelectedArticle(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-indigo-600" />
            <span>Voltar para Artigos</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-extrabold bg-indigo-600 text-white px-2.5 py-0.5 rounded-lg font-mono uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              {selectedArticle.tags.map((tag, idx) => (
                <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-lg font-mono">
                  #{tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 leading-snug">
              {selectedArticle.title}
            </h2>

            {/* Author and Read Time info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-400 text-xs font-mono border-y border-slate-100 py-3.5">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold">{selectedArticle.author}</span>
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold">{selectedArticle.readTime}</span>
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold">Julho, 2026</span>
              </span>
            </div>
          </div>

          {/* Article Image in Detail View */}
          <div className="w-full h-64 md:h-[400px] rounded-[2rem] overflow-hidden shadow-md">
            <img 
              src={selectedArticle.imageUrl} 
              alt={selectedArticle.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Main Article Rich Text Container - custom styling for typography */}
          <div 
            className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-6 text-justify"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />

          {/* Official Angolan Source Callout */}
          <div className="p-6 bg-indigo-50/55 border border-indigo-100/70 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-indigo-500 uppercase tracking-wider block">FONTE OFICIAL ANGOLANA</span>
              <p className="text-xs text-indigo-950 font-bold">
                {selectedArticle.sourceName}
              </p>
              <p className="text-[11px] text-indigo-700/80">
                Informações extraídas e referenciadas diretamente de portais e regulamentações oficiais em Angola.
              </p>
            </div>
            <a 
              href={selectedArticle.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm shrink-0 text-center justify-center cursor-pointer"
            >
              <span>Aceder à Fonte</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Footer of Article / CTA */}
          <div className="border-t border-slate-100 pt-6 mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              © {selectedArticle.author} para o Candidato Ao.
            </div>
            <button
              onClick={() => handleSetSelectedArticle(null)}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer shadow-sm"
            >
              Concluir Leitura
            </button>
          </div>
        </div>
      ) : (
        /* Blog Main Hub Listing */
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bento-style Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => handleSetSelectedArticle(art)}
              >
                <div>
                  {/* Card Image */}
                  <div className="p-4 pb-0">
                    <div className="overflow-hidden rounded-[1.5rem] relative aspect-[4/3] bg-slate-100">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-7 pt-5 flex-1 flex flex-col">
                    {/* Card Meta */}
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mb-4 uppercase tracking-wider">
                      <span className={`font-extrabold px-2 py-0.5 rounded-md ${
                        art.category === 'Entrevistas' ? 'bg-amber-50 text-amber-700' :
                        art.category === 'Legislação' ? 'bg-red-50 text-red-700' :
                        art.category === 'Empregabilidade' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                      }`}>{art.category}</span>
                      <span>•</span>
                      <span className="font-bold">{art.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold font-display text-slate-900 text-base leading-snug mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 text-justify line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-7 py-5 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px] font-bold">
                    {art.author.split('(')[0]}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSetSelectedArticle(art);
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer group"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTTOM AD SPACE FOR BLOG */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center mt-6">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — ESPAÇO PUBLICITÁRIO PARA SERVIÇOS DE CONSULTORIA DE RECRUTAMENTO
        </span>
      </div>
    </div>
  );
}
