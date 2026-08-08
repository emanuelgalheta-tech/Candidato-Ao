/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { cvTemplates, coverLetters } from '../data/cvTemplates';
import { CVTemplate, CoverLetterTemplate } from '../types';
import { FileText, Download, Printer, Copy, Check, Info, FileEdit, AlertCircle, Eye, RefreshCw } from 'lucide-react';

interface CvBuilderProps {
  initialTab?: 'cv' | 'letter';
}

export default function CvBuilder({ initialTab = 'cv' }: CvBuilderProps) {
  const [activeTab, setActiveTab] = useState<'cv' | 'letter'>(initialTab);
  const [selectedCvTemplate, setSelectedCvTemplate] = useState<CVTemplate>(cvTemplates[0]);
  const [selectedLetter, setSelectedLetter] = useState<CoverLetterTemplate>(coverLetters[0]);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  
  // CV live editor state
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  
  // Letter live editor state
  const [letterText, setLetterText] = useState('');
  const [copied, setCopied] = useState(false);

  // Initialize form when CV template changes
  useEffect(() => {
    if (selectedCvTemplate) {
      setFullName(selectedCvTemplate.defaultData.fullName);
      setTitle(selectedCvTemplate.defaultData.title);
      setPhone(selectedCvTemplate.defaultData.phone);
      setEmail(selectedCvTemplate.defaultData.email);
      setAddress(selectedCvTemplate.defaultData.address);
      setSummary(selectedCvTemplate.defaultData.summary);
      setSkills(selectedCvTemplate.defaultData.skills);
      setLanguages(selectedCvTemplate.defaultData.languages);
    }
  }, [selectedCvTemplate]);

  // Initialize Letter text when template changes
  useEffect(() => {
    if (selectedLetter) {
      setLetterText(selectedLetter.templateText);
    }
  }, [selectedLetter]);

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetCv = () => {
    if (window.confirm('Deseja repor os dados originais deste modelo de currículo?')) {
      setFullName(selectedCvTemplate.defaultData.fullName);
      setTitle(selectedCvTemplate.defaultData.title);
      setPhone(selectedCvTemplate.defaultData.phone);
      setEmail(selectedCvTemplate.defaultData.email);
      setAddress(selectedCvTemplate.defaultData.address);
      setSummary(selectedCvTemplate.defaultData.summary);
      setSkills(selectedCvTemplate.defaultData.skills);
      setLanguages(selectedCvTemplate.defaultData.languages);
    }
  };

  // Triggers print of CV preview pane only
  const handlePrint = () => {
    const printContent = document.getElementById('cv-printable-area')?.innerHTML;
    if (!printContent) return;
    
    const originalContent = document.body.innerHTML;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Por favor, permita pop-ups para imprimir o seu currículo.');
      return;
    }
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Currículo - ${fullName}</title>
          <style>
            body {
              font-family: 'Inter', sans-serif;
              color: #1e293b;
              padding: 40px;
              line-height: 1.6;
              font-size: 14px;
            }
            .name {
              font-size: 26px;
              font-weight: 700;
              text-transform: uppercase;
              color: #0f172a;
              margin-bottom: 2px;
              border-bottom: 2px solid #0f172a;
              padding-bottom: 6px;
            }
            .title {
              font-size: 16px;
              font-weight: 600;
              color: #475569;
              margin-bottom: 12px;
            }
            .contacts {
              font-size: 12px;
              color: #64748b;
              margin-bottom: 24px;
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
            }
            .section-title {
              font-size: 15px;
              font-weight: 700;
              text-transform: uppercase;
              color: #0f172a;
              border-bottom: 1px solid #cbd5e1;
              padding-bottom: 4px;
              margin-top: 24px;
              margin-bottom: 12px;
            }
            .summary {
              margin-bottom: 16px;
            }
            .exp-item, .edu-item {
              margin-bottom: 16px;
            }
            .exp-header, .edu-header {
              display: flex;
              justify-content: space-between;
              font-weight: 600;
              color: #1e293b;
            }
            .exp-role {
              font-style: italic;
              color: #475569;
              margin-bottom: 4px;
            }
            .list-items {
              margin-left: 18px;
              padding-left: 0;
            }
            .list-items li {
              margin-bottom: 4px;
            }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          ${printContent}
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Generate real Word .doc download using formatted HTML payload
  const handleDownloadDoc = () => {
    const printContent = document.getElementById('cv-printable-area')?.innerHTML;
    if (!printContent) return;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>Curriculum Vitae</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.3; color: #333333; }
          .name { font-size: 20pt; font-weight: bold; color: #000000; text-transform: uppercase; border-bottom: 2px solid #000000; padding-bottom: 5px; margin-bottom: 2px; }
          .title { font-size: 13pt; font-weight: bold; color: #555555; margin-bottom: 10px; }
          .contacts { font-size: 10pt; color: #666666; margin-bottom: 20px; }
          .section-title { font-size: 12pt; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #cccccc; padding-bottom: 3px; margin-top: 20px; margin-bottom: 8px; color: #000000; }
          .summary { margin-bottom: 12px; }
          .exp-item, .edu-item { margin-bottom: 12px; }
          .exp-header, .edu-header { font-weight: bold; }
          .exp-role { font-style: italic; color: #555555; }
          ul { margin-top: 3px; margin-bottom: 5px; }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedCvTemplate.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="cv-letters-builder" className="space-y-8">
      {/* Navigation Tabs */}
      <div className="flex border border-slate-200/60 bg-white rounded-2xl p-1.5 shadow-md max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('cv')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'cv'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          Modelos de Currículo (CV)
        </button>
        <button
          onClick={() => setActiveTab('letter')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'letter'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
          }`}
        >
          <FileEdit className="w-4 h-4" />
          Cartas de Candidatura
        </button>
      </div>

      {/* TOP AD SPACE FOR CV/LETTERS BUILDER */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — CURSOS DE CAPACITAÇÃO E INFORMÁTICA INDUSTRIAL EM ANGOLA
        </span>
      </div>

      {activeTab === 'cv' ? (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Template Selection & Expert Guide Column (Left/Top) */}
          <div className="xl:col-span-7 space-y-6">
            {/* Template Buttons */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="font-bold font-display text-slate-800 text-lg mb-4">
                1. Seleccione a Profissão Desejada
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {cvTemplates.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => setSelectedCvTemplate(tmpl)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      selectedCvTemplate.id === tmpl.id
                        ? 'bg-indigo-900 border-indigo-950 text-white shadow-lg shadow-indigo-100/50 scale-[1.02]'
                        : 'bg-slate-50 border-slate-200/60 hover:bg-white text-slate-700 hover:border-indigo-200 hover:shadow-sm'
                    }`}
                  >
                    <span className={`text-[9px] font-bold font-mono uppercase tracking-wider mb-2 block ${
                      selectedCvTemplate.id === tmpl.id ? 'text-indigo-300' : 'text-slate-400'
                    }`}>
                      {tmpl.category}
                    </span>
                    <span className="font-bold text-xs font-display leading-snug line-clamp-2">
                      {tmpl.profession}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guia Profissional de 300-500 palavras - CRITICAL FOR ADSENSE AND USER VALUE */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-[2rem] p-8 shadow-sm">
              <div className="flex items-start gap-3.5 mb-5 border-b border-indigo-100 pb-4">
                <div className="bg-indigo-100 text-indigo-900 p-2.5 rounded-xl shrink-0 shadow-sm">
                  <Info className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-indigo-950 text-lg">
                    Guia de Especialista em RH Angola
                  </h4>
                  <p className="text-indigo-600 text-xs font-bold font-mono uppercase tracking-wider">
                    Como preencher este currículo para ter sucesso localmente
                  </p>
                </div>
              </div>

              <div className="prose prose-sm prose-indigo max-w-none text-slate-600 text-xs md:text-sm leading-relaxed space-y-4 whitespace-pre-line">
                {selectedCvTemplate.expertGuide}
              </div>

              {/* Erros Comuns em Angola Checklist */}
              <div className="mt-6 pt-5 border-t border-indigo-100">
                <h5 className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider mb-3 font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Evite estes Erros Críticos (Comuns em Angola):
                </h5>
                <ul className="space-y-2">
                  {selectedCvTemplate.commonErrors.map((err, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <span className="text-rose-500 font-extrabold shrink-0">✕</span>
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Form Editor */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-bold font-display text-slate-800 text-lg flex items-center gap-2">
                  <FileEdit className="w-5 h-5 text-indigo-600" />
                  2. Personalizar Dados do Currículo
                </h3>
                <button
                  onClick={handleResetCv}
                  className="text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1 transition-colors cursor-pointer font-bold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Repor Padrão
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">NOME COMPLETO</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">PROFISSÃO / TÍTULO</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">TELEFONE (ANGOLA)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">E-MAIL</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">ENDEREÇO (BAIRRO, PROVÍNCIA)</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">RESUMO PROFISSIONAL</label>
                  <textarea
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all resize-y"
                  />
                </div>
              </div>

              {/* Skills Editor */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">COMPETÊNCIAS CHAVE (Uma por linha)</label>
                <textarea
                  rows={3}
                  value={skills.join('\n')}
                  onChange={(e) => setSkills(e.target.value.split('\n'))}
                  placeholder="Atendimento ao cliente&#10;Microsoft Word&#10;Trabalho em equipa"
                  className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all resize-y"
                />
              </div>

              {/* Languages Editor */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">IDIOMAS (Um por linha)</label>
                <textarea
                  rows={2}
                  value={languages.join('\n')}
                  onChange={(e) => setLanguages(e.target.value.split('\n'))}
                  placeholder="Português (Nativo)&#10;Inglês (Intermediário)"
                  className="w-full text-xs md:text-sm px-4 py-3 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 font-medium transition-all resize-y"
                />
              </div>
            </div>
          </div>

          {/* CV Live Printable Preview Panel (Right/Bottom) */}
          <div className="xl:col-span-5 space-y-4">
            <div className="sticky top-6 space-y-4">
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 font-mono flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-indigo-600" />
                  VISTA DE IMPRESSÃO
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadDoc}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors border border-indigo-200 shadow-sm cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Word (.doc)
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-lg shadow-indigo-100 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Imprimir / PDF
                  </button>
                </div>
              </div>

              {/* Printable CV Wrapper */}
              <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-200/80 p-8 md:p-10 aspect-[1/1.41] overflow-y-auto max-h-[800px] text-slate-800 font-sans text-xs select-text">
                <div id="cv-printable-area">
                  {/* Header */}
                  <div className="name font-bold text-slate-900 text-2xl tracking-wide uppercase border-b-2 border-slate-900 pb-1.5 mb-1 text-left">
                    {fullName || 'Seu Nome Completo'}
                  </div>
                  <div className="title text-sm font-semibold text-slate-600 mb-3 text-left">
                    {title || 'Título Profissional'}
                  </div>
                  
                  {/* Contact row */}
                  <div className="contacts text-[10px] text-slate-500 mb-5 flex flex-wrap gap-x-4 gap-y-1 border-b border-slate-100 pb-2.5">
                    <div>📍 {address || 'Bairro, Luanda - Angola'}</div>
                    <div>📞 {phone || 'Nº de Telefone'}</div>
                    <div>✉️ {email || 'correio@eletronico.com'}</div>
                  </div>

                  {/* Summary */}
                  <div className="section-title text-[11px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
                    Resumo Profissional
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-4 text-justify whitespace-pre-line">
                    {summary || 'Escreva o seu resumo profissional destacado.'}
                  </p>

                  {/* Experience */}
                  <div className="section-title text-[11px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
                    Experiência Profissional
                  </div>
                  <div className="space-y-3.5">
                    {selectedCvTemplate.defaultData.experience.map((exp, idx) => (
                      <div key={idx} className="exp-item">
                        <div className="exp-header flex justify-between font-bold text-[11px] text-slate-800">
                          <span>{exp.company}</span>
                          <span className="text-slate-500 font-normal font-mono text-[10px]">{exp.period}</span>
                        </div>
                        <div className="exp-role font-medium text-slate-600 italic text-[10px] mb-1">
                          {idx === 0 ? title : exp.role}
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed text-justify">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Education */}
                  <div className="section-title text-[11px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 mt-4">
                    Habilitações Académicas & Cursos
                  </div>
                  <div className="space-y-3">
                    {selectedCvTemplate.defaultData.education.map((edu, idx) => (
                      <div key={idx} className="edu-item">
                        <div className="edu-header flex justify-between font-bold text-[11px] text-slate-800">
                          <span>{edu.institution}</span>
                          <span className="text-slate-500 font-normal font-mono text-[10px]">{edu.period}</span>
                        </div>
                        <div className="text-[10px] text-slate-600">
                          {edu.degree}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4">
                    <div>
                      <div className="section-title text-[11px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
                        Competências Chave
                      </div>
                      <ul className="list-items list-disc list-inside text-[10px] text-slate-600 space-y-1">
                        {skills.filter(s => s.trim()).map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="section-title text-[11px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
                        Idiomas
                      </div>
                      <ul className="list-items list-disc list-inside text-[10px] text-slate-600 space-y-1">
                        {languages.filter(l => l.trim()).map((l, idx) => (
                          <li key={idx}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cover Letters Left Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="font-bold font-display text-slate-800 text-base mb-4">
                Selecione o Sector da Empresa:
              </h3>
              <div className="space-y-3">
                {coverLetters.map((letter) => (
                  <button
                    key={letter.id}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedLetter.id === letter.id
                        ? 'bg-indigo-900 border-indigo-950 text-white shadow-lg shadow-indigo-100/50 scale-[1.01]'
                        : 'bg-slate-50 border-slate-200/60 hover:bg-white text-slate-700 hover:border-indigo-200'
                    }`}
                  >
                    <p className={`text-[9px] font-bold font-mono uppercase tracking-wider mb-1.5 ${
                      selectedLetter.id === letter.id ? 'text-indigo-300' : 'text-slate-400'
                    }`}>
                      {letter.targetSector}
                    </p>
                    <p className="font-bold text-xs md:text-sm font-display leading-tight">
                      {letter.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Letter Expert Advice Card */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-[2rem] p-8 shadow-sm">
              <div className="flex items-start gap-2.5 mb-3">
                <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold font-display text-indigo-950 text-sm">
                    Recomendação de Envio
                  </h4>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {selectedLetter.expertGuide}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Letter Real Time Editor and Previewer (Right) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-5 gap-3">
                <div>
                  <h3 className="font-bold font-display text-slate-800 text-base">
                    Texto da Carta de Apresentação
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Substitua as informações entre colchetes [ ] com os seus dados reais.
                  </p>
                </div>
                <button
                  onClick={handleCopyLetter}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all self-start sm:self-auto cursor-pointer shadow-lg ${
                    copied
                      ? 'bg-emerald-600 text-white shadow-emerald-100/50'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 stroke-[3px]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Texto Copiado!' : 'Copiar Texto'}
                </button>
              </div>

              <textarea
                rows={20}
                value={letterText}
                onChange={(e) => setLetterText(e.target.value)}
                className="w-full text-xs font-mono p-5 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/30 leading-relaxed resize-y"
              />
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM AD SPACE FOR CV/LETTERS BUILDER */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center mt-6">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — ADMISSÕES E VAGAS EXCLUSIVAS DE EMPREGABILIDADE NO CND
        </span>
      </div>
    </div>
  );
}
