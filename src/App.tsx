/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { blogArticles } from './data/articles';
import CvBuilder from './components/CvBuilder';
import QuizSystem from './components/QuizSystem';
import BlogSection from './components/BlogSection';
import { 
  Briefcase, 
  BookOpen, 
  FileText, 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  BookMarked,
  Info,
  CheckCircle,
  FileEdit
} from 'lucide-react';

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<'home' | 'cv' | 'letters' | 'quizzes' | 'blog'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'about' | 'privacy' | 'terms' | 'contact' | null>(null);

  const brandName = "Candidato Ao";
  const brandSlogan = "O seu portal de currículos, cartas e preparação para concursos em Angola";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Name */}
            <div 
              className="flex items-center gap-3 cursor-pointer select-none" 
              onClick={() => { setActiveMainTab('home'); setSelectedArticleId(null); }}
            >
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-100">
                <FileText className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl md:text-2xl font-extrabold font-display tracking-tight text-slate-900">
                    Candidato<span className="text-orange-500">Ao</span>
                  </h1>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-100 font-bold flex items-center gap-1 font-mono">
                    AO 🇦🇴
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide font-mono uppercase hidden sm:block">
                  Portal de Empregabilidade de Angola
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <button
                onClick={() => { setActiveMainTab('home'); setSelectedArticleId(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMainTab === 'home'
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => { setActiveMainTab('cv'); setSelectedArticleId(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMainTab === 'cv'
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                Modelos de CV
              </button>
              <button
                onClick={() => { setActiveMainTab('letters'); setSelectedArticleId(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMainTab === 'letters'
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                Cartas
              </button>
              <button
                onClick={() => { setActiveMainTab('quizzes'); setSelectedArticleId(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMainTab === 'quizzes'
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                Simulados
              </button>
              <button
                onClick={() => { setActiveMainTab('blog'); setSelectedArticleId(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMainTab === 'blog'
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                Blog
              </button>
            </nav>

            {/* Header Right Widgets */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="text-right">
                <span className="text-[9px] text-slate-400 font-mono block uppercase">MERCADO ALVO</span>
                <span className="text-xs font-bold text-slate-700 font-display">Angola (Luanda)</span>
              </div>
              <button
                onClick={() => { setActiveMainTab('cv'); setSelectedArticleId(null); }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-all cursor-pointer shadow-lg shadow-orange-100/50"
              >
                Criar CV
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white p-4 space-y-2 shadow-inner text-left">
            <button
              onClick={() => { setActiveMainTab('home'); setSelectedArticleId(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeMainTab === 'home' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => { setActiveMainTab('cv'); setSelectedArticleId(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeMainTab === 'cv' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Modelos de CV
            </button>
            <button
              onClick={() => { setActiveMainTab('letters'); setSelectedArticleId(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeMainTab === 'letters' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Cartas
            </button>
            <button
              onClick={() => { setActiveMainTab('quizzes'); setSelectedArticleId(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeMainTab === 'quizzes' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Simulados
            </button>
            <button
              onClick={() => { setActiveMainTab('blog'); setSelectedArticleId(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeMainTab === 'blog' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>
          </div>
        )}
      </header>

      {/* Main Content Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        
        {/* TAB 1: INÍCIO (HOME PAGE) */}
        {activeMainTab === 'home' && (
          <div className="space-y-10 animate-fade-in">
            {/* TOP AD SPACE FOR HOME */}
            <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
              <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                PUBLICIDADE — ESPAÇO PARA ANÚNCIO (TOPO DA PÁGINA)
              </span>
            </div>

            {/* HERO BANNER SECTION WITH WHITE GRID BACKGROUND */}
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-xl overflow-hidden relative bg-grid-pattern p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-indigo-50/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              {/* Left Content */}
              <div className="flex-1 max-w-2xl space-y-6 z-10 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200/60 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  Feito para o mercado angolano
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
                  A sua carreira em Angola começa <span className="text-orange-500">aqui.</span>
                </h2>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Crie currículos e cartas de apresentação profissionais, prepare-se para concursos públicos com simulados e aprenda com o nosso blog de empregabilidade. Tudo grátis.
                </p>

                <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                  <button
                    onClick={() => setActiveMainTab('cv')}
                    className="px-6 py-3.5 bg-indigo-900 hover:bg-slate-900 text-white font-bold rounded-xl inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-100"
                  >
                    <span>Criar o meu CV</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveMainTab('quizzes')}
                    className="px-6 py-3.5 bg-white hover:bg-slate-50 text-indigo-900 border border-slate-200/80 font-bold rounded-xl inline-flex items-center justify-center transition-all cursor-pointer shadow-sm"
                  >
                    Fazer um simulado
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500 text-xs font-semibold pt-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>4 modelos de CV</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Download em PDF e Word</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Simulados corrigidos</span>
                  </div>
                </div>
              </div>

              {/* Right Image Container */}
              <div className="relative z-10 shrink-0 w-full lg:w-[480px]">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                  <img
                    src="/src/assets/images/mulher_recrutadora_1783526529608.jpg"
                    alt="Profissional em Angola"
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating CV Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-3.5">
                    <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xs md:text-sm text-slate-800 leading-snug">
                        CV pronto em minutos
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        PDF & Word gratuitos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DEDICATED SPACE FOR ADVERTISEMENTS - AS REQUESTED */}
            <div className="p-6 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                PUBLICIDADE — ESPAÇO PARA ANÚNCIO
              </span>
            </div>

            {/* LATEST ARTICLES FROM BLOG */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 tracking-tight">
                  Últimos artigos
                </h3>
                <button
                  onClick={() => setActiveMainTab('blog')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Ver todos
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogArticles.slice(0, 3).map((art) => (
                  <div
                    key={art.id}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer text-left"
                    onClick={() => {
                      setSelectedArticleId(art.id);
                      setActiveMainTab('blog');
                    }}
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
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer bar */}
                    <div className="px-7 py-5 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px] font-bold">
                        {art.author.split('(')[0]}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                        <span>Ler Artigo</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM AD SPACE FOR HOME */}
              <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center mt-6">
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  PUBLICIDADE — ESPAÇO PARA ANÚNCIO (FUNDO DA PÁGINA)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2 & 3: CV BUILDER AND COVER LETTERS */}
        {(activeMainTab === 'cv' || activeMainTab === 'letters') && (
          <div className="animate-fade-in">
            <CvBuilder initialTab={activeMainTab === 'letters' ? 'letter' : 'cv'} />
          </div>
        )}

        {/* TAB 4: SIMULADOS */}
        {activeMainTab === 'quizzes' && (
          <div className="animate-fade-in">
            <QuizSystem />
          </div>
        )}

        {/* TAB 5: BLOG SECTION */}
        {activeMainTab === 'blog' && (
          <div className="animate-fade-in">
            <BlogSection 
              selectedArticleId={selectedArticleId} 
              onSelectArticleId={setSelectedArticleId} 
            />
          </div>
        )}

        {/* Informative Guidance Footer Callout - Polished to be fully user-facing without adsense talk */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between text-left">
          <div className="space-y-2">
            <h3 className="font-bold font-display text-slate-800 text-base flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-indigo-600" />
              Impulsionando a Empregabilidade em Angola
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-3xl">
              O <strong>Candidato Ao</strong> nasceu com a missão de democratizar a preparação profissional nas 21 províncias de Angola. Oferecemos ferramentas de alta qualidade de forma totalmente gratuita, capacitando candidatos para exames públicos e conectando talentos locais com as melhores estratégias corporativas de Luanda ao resto do país.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="text-[10px] font-bold font-mono px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">#CarreirasAO</span>
            <span className="text-[10px] font-bold font-mono px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">#EstudoGratuito</span>
            <span className="text-[10px] font-bold font-mono px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">#TalentoNacional</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-950 text-slate-300 border-t border-indigo-900 py-12 mt-16 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold font-display text-sm">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>{brandName}</span>
            </div>
            <p className="text-indigo-200/60 leading-relaxed text-[11px]">
              O seu portal líder de carreiras, simulados interativos de concursos públicos e desenvolvimento profissional focado no mercado de trabalho angolano.
            </p>
          </div>
          <div>
            <p className="text-white font-bold mb-3 text-[11px] tracking-wider uppercase">Módulos</p>
            <ul className="space-y-1.5 text-indigo-200/50 text-[11px]">
              <li><button onClick={() => { setActiveMainTab('blog'); setSelectedArticleId('guia-pesquisa-vagas-angola'); }} className="hover:text-white transition-colors text-left cursor-pointer">Pesquisa de Vagas (Manual)</button></li>
              <li><button onClick={() => { setActiveMainTab('cv'); setSelectedArticleId(null); }} className="hover:text-white transition-colors text-left cursor-pointer">Modelos de Currículo (CV)</button></li>
              <li><button onClick={() => setActiveMainTab('letters')} className="hover:text-white transition-colors text-left cursor-pointer">Cartas de Candidatura</button></li>
              <li><button onClick={() => setActiveMainTab('quizzes')} className="hover:text-white transition-colors text-left cursor-pointer">Simulados Interativos</button></li>
              <li><button onClick={() => setActiveMainTab('blog')} className="hover:text-white transition-colors text-left cursor-pointer">Dicas de Empregabilidade</button></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3 text-[11px] tracking-wider uppercase">Suporte & Legal</p>
            <ul className="space-y-1.5 text-indigo-200/50 text-[11px]">
              <li><button onClick={() => setLegalModal('about')} className="hover:text-white transition-colors text-left cursor-pointer">Sobre Nós</button></li>
              <li><button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors text-left cursor-pointer">Política de Privacidade</button></li>
              <li><button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors text-left cursor-pointer">Termos de Uso</button></li>
              <li><button onClick={() => setLegalModal('contact')} className="hover:text-white transition-colors text-left cursor-pointer">Contactos - 932552157/956748285 / Apoio</button></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3 text-[11px] tracking-wider uppercase">Parceiros de Emprego</p>
            <ul className="space-y-1.5 text-indigo-200/50 text-[11px]">
              <li className="flex items-center gap-1">
                <span className="text-orange-500">•</span> 
                <a href="https://www.maptss.gov.ao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portal do MAPTSS</a>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-orange-500">•</span> 
                <a href="https://www.jobartis.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Jobartis Angola</a>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-orange-500">•</span> 
                <a href="https://www.inefop.gov.ao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INEFOP Luanda</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-indigo-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-indigo-200/40">
          <p>© 2026 {brandName}. Todos os direitos reservados. Focado no mercado de Angola 🇦🇴</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-2">
            <span>Candidato Ao — Impulsionando a Empregabilidade Nacional</span>
          </p>
        </div>
      </footer>

      {/* Modal Suporte & Legal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden text-left flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-extrabold font-display text-slate-900 text-lg">
                {legalModal === 'about' && 'Sobre o Candidato Ao'}
                {legalModal === 'privacy' && 'Política de Privacidade'}
                {legalModal === 'terms' && 'Termos de Uso'}
                {legalModal === 'contact' && 'Contactos & Apoio ao Candidato'}
              </h3>
              <button 
                onClick={() => setLegalModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              {legalModal === 'about' && (
                <>
                  <p>
                    O <strong>Candidato Ao</strong> é o portal independente de empregabilidade líder em Angola, focado em ajudar candidatos de todas as províncias a ingressar no mercado de trabalho ou a vencer em concursos públicos de âmbito nacional.
                  </p>
                  <p>
                    A nossa missão é democratizar o acesso a ferramentas profissionais de alta performance. Desenvolvemos soluções gratuitas como o nosso construtor inteligente de Currículos (CV), o gerador automatizado de Cartas de Apresentação e Simulados didáticos rigorosos com exames oficiais do Estado angolano resolvidos e explicados.
                  </p>
                  <p>
                    Acreditamos no talento nacional e trabalhamos diariamente para aproximar os candidatos das melhores práticas corporativas em vigor em Luanda e no resto do país.
                  </p>
                </>
              )}

              {legalModal === 'privacy' && (
                <>
                  <p>
                    Em estrita conformidade com a legislação de proteção de dados em Angola e seguindo as melhores diretrizes internacionais de privacidade, o <strong>Candidato Ao</strong> garante total segurança e confidencialidade.
                  </p>
                  <p>
                    <strong>Processamento Local:</strong> Todos os dados inseridos por si para a geração de currículos (CV) e cartas de candidatura são processados localmente no seu próprio navegador. Nós <strong>não salvamos, não armazenamos e não enviamos</strong> os seus dados pessoais ou profissionais a servidores externos.
                  </p>
                  <p>
                    Nenhum tipo de informação é comercializado com parceiros ou agências de publicidade. O seu currículo permanece 100% sob o seu controlo soberano e exclusivo.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>
                    Ao utilizar as ferramentas gratuitas fornecidas pelo portal <strong>Candidato Ao</strong>, concorda integralmente com os seguintes termos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Todo o material didático, incluindo geradores de documentos e simuladores interativos, é disponibilizado de forma 100% gratuita para fins estritamente educativos e de suporte à empregabilidade.</li>
                    <li>Não garantimos a colocação automática em qualquer vaga de emprego ou admissão em concursos públicos oficiais; as nossas ferramentas são guias de apoio e preparação autónoma.</li>
                    <li>É expressamente proibida a cópia comercial, revenda, distribuição lucrativa ou exploração indevida sob cobrança de qualquer modelo de currículo ou caderno de simulado do nosso portal.</li>
                  </ul>
                </>
              )}

              {legalModal === 'contact' && (
                <>
                  <p>
                    Se necessita de auxílio para preencher o seu currículo, deseja sugerir novas provas anteriores para o nosso repositório ou gostaria de esclarecer qualquer dúvida, conte com a nossa equipa de suporte dedicada ao cidadão angolano:
                  </p>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-3 font-mono text-xs text-slate-700 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full shrink-0"></span>
                      <span className="font-bold">Linha Principal de Apoio:</span>
                      <a href="tel:932552157" className="text-indigo-600 hover:underline font-extrabold font-sans">932 552 157</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-orange-500 rounded-full shrink-0"></span>
                      <span className="font-bold">Linha Alternativa:</span>
                      <a href="tel:956748285" className="text-indigo-600 hover:underline font-extrabold font-sans">956 748 285</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shrink-0"></span>
                      <span className="font-bold">Email Administrativo:</span>
                      <span className="text-slate-900 font-sans">apoio@candidatoao.com</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic mt-2">
                    *Horário de funcionamento: De Segunda a Sexta-feira, das 08h00 às 17h00 (Fuso horário de Angola - Luanda).
                  </p>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-100 cursor-pointer"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
