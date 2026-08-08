/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { quizCategories } from '../data/quizzes';
import { QuizCategory, QuizQuestion } from '../types';
import { Play, Award, Clock, ArrowRight, RotateCcw, CheckCircle, XCircle, ChevronRight, FileDown, BookOpen, AlertCircle } from 'lucide-react';

export default function QuizSystem() {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [quizState, setQuizState] = useState<'idle' | 'playing' | 'completed'>('idle');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  
  // Timer states
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  // Handle timer countdown
  useEffect(() => {
    let interval: any;
    if (quizState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setQuizState('completed');
            return 0;
          }
          return prev - 1;
        });
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizState, timeLeft]);

  const handleStartQuiz = (category: QuizCategory) => {
    setSelectedCategory(category);
    // Shuffle the questions list to ensure different order or questions every time
    const shuffled = [...category.questions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled);
    setQuizState('playing');
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setScore(0);
    setTimeLeft(category.timeLimitSeconds);
    setTimeSpent(0);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    if (activeQuestions.length > 0 && index === activeQuestions[currentQuestionIndex].correctOptionIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestions.length === 0) return;
    
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      setQuizState('completed');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion: QuizQuestion | null = activeQuestions.length > 0
    ? activeQuestions[currentQuestionIndex] 
    : null;

  // Calculate score badge
  const getBadge = (scorePercent: number) => {
    if (scorePercent === 100) return { title: 'Candidato de Elite 🏆', desc: 'Pontuação Perfeita! Está mais do que pronto para qualquer concurso em Angola.', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (scorePercent >= 80) return { title: 'Aprovado com Distinção 🌟', desc: 'Excelente aproveitamento! Tem grandes hipóteses de nomeação.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (scorePercent >= 50) return { title: 'Candidato Apto 📈', desc: 'Aprovado! Mas recomendamos continuar a estudar os simulados para subir na lista de classificação.', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    return { title: 'Necessita de Estudo 📚', desc: 'Abaixo da média de corte nacional. Reveja os erros e tente novamente os simulados.', color: 'text-red-700 bg-red-50 border-red-200' };
  };

  const pastExamDownloads = [
    { id: '1', title: 'AGT - Técnico Aduaneiro Geral (Provas Resolvidas de Língua Portuguesa e Lógica)', year: '2021', size: '2.4 MB' },
    { id: '2', title: 'Ministério da Saúde - Médicos e Enfermeiros Gerais (Cultura Geral e Legislação)', year: '2022', size: '1.8 MB' },
    { id: '3', title: 'Ministério da Educação - Professores do Ensino Primário e Secundário (Didáctica)', year: '2023', size: '3.1 MB' },
    { id: '4', title: 'Polícia Nacional de Angola (Simulados Gerais de Aptidão Física e Cívica)', year: '2020', size: '1.2 MB' }
  ];

  const handleDownloadExam = (examTitle: string) => {
    let content = `========================================================================\n`;
    content += `PORTAL CONCURSOS ANGOLA - MATERIAL PREPARATÓRIO OFICIAL\n`;
    content += `========================================================================\n\n`;
    content += `MATERIAL: ${examTitle.toUpperCase()}\n`;
    content += `DOCUMENTO: Caderno de Questões Resolvidas & Guia de Estudo Completo\n`;
    content += `FONTE: Repositório de Provas Anteriores e Simulações\n`;
    content += `DATA DE DESCARGA: ${new Date().toLocaleDateString('pt-AO')}\n\n`;
    content += `------------------------------------------------------------------------\n`;
    content += `PARTE I: DIRETRIZES DE ESTUDO & CONSELHOS ÚTEIS PARA O DIA DO EXAME\n`;
    content += `------------------------------------------------------------------------\n`;
    content += `1. Revise com atenção a legislação orgânica e regulamentar do órgão específico para o qual concorre.\n`;
    content += `2. Resolva todas as provas dos concursos anteriores sob as mesmas condições de tempo real (cronometrado).\n`;
    content += `3. Foque intensamente nas disciplinas transversais de Língua Portuguesa, Noções de Informática e Legislação Laboral Angolana.\n`;
    content += `4. No dia do exame, chegue com pelo menos 1h30m de antecedência para evitar os severos constrangimentos com o trânsito de Luanda.\n`;
    content += `5. Mantenha a calma e faça uma leitura atenta de todas as perguntas antes de preencher a folha de respostas ótica.\n\n`;
    content += `------------------------------------------------------------------------\n`;
    content += `PARTE II: BANCO DE QUESTÕES RESOLVIDAS, COMENTADAS E EXPLICADAS\n`;
    content += `------------------------------------------------------------------------\n`;
    
    if (examTitle.includes('AGT')) {
      content += `DISCIPLINA: LEGISLAÇÃO ADUANEIRA E TRIBUTÁRIA (SIMULADO AGT)\n\n`;
      
      content += `Questão 1: Qual é o imposto que incide diretamente sobre o rendimento de trabalho por conta de outrem ou por conta própria em Angola?\n`;
      content += `A) IVA (Imposto sobre o Valor Acrescentado)\n`;
      content += `B) IRT (Imposto sobre o Rendimento de Trabalho) - [CORRETA]\n`;
      content += `C) II (Imposto Industrial)\n`;
      content += `D) IP (Imposto Predial)\n`;
      content += `Explicação: O IRT (Imposto sobre o Rendimento de Trabalho) é o tributo que incide sobre os rendimentos dos trabalhadores, conforme estabelecido no Código do IRT angolano, sob as taxas progressivas definidas por lei.\n\n`;
      
      content += `Questão 2: A Pauta Aduaneira Harmonizada é utilizada primordialmente pela AGT para:\n`;
      content += `A) Classificar mercadorias e determinar taxas de importação/exportação - [CORRETA]\n`;
      content += `B) Controlo exclusivo de passaportes e vistos de estrangeiros nos aeroportos\n`;
      content += `C) Regular os preços de venda ao público de produtos alimentares nacionais\n`;
      content += `D) Isentar automaticamente todos os produtos essenciais importados de impostos\n`;
      content += `Explicação: A Pauta Aduaneira baseia-se no Sistema Harmonizado de Designação e Codificação de Mercadorias para classificar as mercadorias que entram e saem de Angola, aplicando os devidos direitos aduaneiros e taxas fiscais.\n\n`;
      
      content += `Questão 3: Qual é o prazo legal para a submissão da declaração de rendimentos do IRT (Modelo 1) por parte da entidade empregadora junto da AGT?\n`;
      content += `A) Até ao fim do mês seguinte àquele a que os rendimentos dizem respeito - [CORRETA]\n`;
      content += `B) Até ao último dia útil do ano fiscal corrente\n`;
      content += `C) No prazo máximo de 15 dias após o pagamento dos salários\n`;
      content += `D) Trimestralmente, nos primeiros 5 dias de cada trimestre útil\n`;
      content += `Explicação: As entidades empregadoras estão obrigadas a entregar a declaração Modelo 1 e efetuar o respetivo pagamento do imposto retido na fonte até ao final do mês seguinte ao da retenção.\n\n`;
      
      content += `Questão 4: Atualmente, qual é a taxa geral padrão do Imposto sobre o Valor Acrescentado (IVA) aplicada em Angola?\n`;
      content += `A) 7%\n`;
      content += `B) 10%\n`;
      content += `C) 14% - [CORRETA]\n`;
      content += `D) 15%\n`;
      content += `Explicação: A taxa geral do IVA em Angola é de 14%, existindo taxas simplificadas ou reduzidas (como a de 7% ou 5%) para produtos da cesta básica e certas províncias fronteiriças ou regimes especiais.\n\n`;
      
      content += `Questão 5: No contencioso tributário angolano, qual é o prazo legal concedido ao contribuinte para apresentar uma Reclamação Graciosa contra um ato de liquidação efetuado pela AGT?\n`;
      content += `A) 15 dias consecutivos\n`;
      content += `B) 30 dias - [CORRETA]\n`;
      content += `C) 60 dias úteis\n`;
      content += `D) 90 dias a contar da notificação da liquidação\n`;
      content += `Explicação: Conforme as normas tributárias angolanas, o prazo para a dedução de reclamação graciosa contra atos de liquidação tributária é de 30 dias após a devida notificação.\n\n`;
      
      content += `DICA EXTRA DE ESTUDO AGT: Dedique especial atenção ao Código Geral Tributário (CGT), ao Código do IVA e às regras de trânsito aduaneiro vigentes.\n`;
      
    } else if (examTitle.includes('Saúde')) {
      content += `DISCIPLINA: CULTURA GERAL E LEGISLAÇÃO DA SAÚDE (SIMULADO MINISTÉRIO DA SAÚDE)\n\n`;
      
      content += `Questão 1: De acordo com o Sistema Nacional de Saúde (SNS) de Angola, qual é o nível que constitui a prioridade máxima absoluta para a organização sanitária nacional?\n`;
      content += `A) Atendimento hospitalar terciário de alta especialização em Luanda\n`;
      content += `B) Cuidados primários de saúde e prevenção comunitária de doenças - [CORRETA]\n`;
      content += `C) Aquisição e importação de fármacos de biotecnologia avançada\n`;
      content += `D) Gestão privada terceirizada de centros de saúde municipais\n`;
      content += `Explicação: A base do SNS em Angola prioriza a cobertura de Cuidados Primários de Saúde (centros de saúde, postos de saúde e agentes de saúde comunitários) para alcançar as franjas populacionais mais vulneráveis.\n\n`;
      
      content += `Questão 2: Qual destas doenças continua a ser identificada como um dos maiores desafios de saúde pública e principais causas de mortalidade materno-infantil em Angola?\n`;
      content += `A) Malária (Paludismo) - [CORRETA]\n`;
      content += `B) Diabetes Mellitus tipo 1\n`;
      content += `C) Hipertensão Arterial Idiopática\n`;
      content += `D) Fibrose Cística congênita\n`;
      content += `Explicação: A Malária continua a ser a principal causa de mortalidade, morbilidade e absentismo escolar/laboral em Angola, sendo um foco central de todas as campanhas nacionais de saúde pública.\n\n`;
      
      content += `Questão 3: Qual é o diploma legal fundamental que regula as bases gerais do Sistema de Saúde em Angola?\n`;
      content += `A) Decreto-Lei n.º 1/03 (Estatuto Orgânico do MINSA)\n`;
      content += `B) Lei n.º 21-B/92 de 28 de Agosto (Lei de Bases da Saúde) - [CORRETA]\n`;
      content += `C) Lei Geral do Trabalho n.º 12/23\n`;
      content += `D) Lei n.º 15/24 de Divisão Política Administrativa\n`;
      content += `Explicação: A Lei de Bases da Saúde (Lei n.º 21-B/92) estabelece os princípios gerais de proteção da saúde, estruturação do SNS e promoção da saúde do cidadão angolano.\n\n`;
      
      content += `Questão 4: O Plano Nacional de Desenvolvimento Sanitário (PNDS) em Angola visa atingir primordialmente qual dos seguintes objetivos estratégicos?\n`;
      content += `A) Cobertura Universal de Saúde através do reforço do SNS ao nível municipal - [CORRETA]\n`;
      content += `B) Extinção integral imediata do setor de medicina tradicional\n`;
      content += `C) Deslocalização de todos os laboratórios clínicos de referência para Cabinda\n`;
      content += `D) Limitação de acesso a hospitais públicos a cidadãos não-contribuintes\n`;
      content += `Explicação: O PNDS desenha o planeamento a longo prazo do setor de saúde focado na municipalização dos serviços de saúde, aproximando médicos e enfermeiros das comunidades.\n\n`;
      
      content += `Questão 5: Sob a ética médica e deontologia dos profissionais de saúde em Angola, o dever de sigilo profissional pode ser legalmente quebrado em qual circunstância?\n`;
      content += `A) Por solicitação verbal informal de jornalistas e órgãos de imprensa de Luanda\n`;
      content += `B) Em caso de imperativo legal decorrente de notificação obrigatória de doença transmissível ou ordem judicial - [CORRETA]\n`;
      content += `C) A pedido de colegas de trabalho que queiram analisar o prontuário por curiosidade\n`;
      content += `D) Sempre que o paciente receber alta definitiva da unidade hospitalar\n`;
      content += `Explicação: O sigilo profissional é absoluto e só pode ser quebrado em exceções estritas definidas na lei, como na suspeição de crimes de notificação obrigatória à justiça ou perigo epidémico grave nacional.\n\n`;
      
      content += `DICA EXTRA DE ESTUDO MINSA: Revise os regulamentos profissionais da Ordem dos Médicos de Angola (ORMED) e da Ordem dos Enfermeiros de Angola (ORDENFA).\n`;
      
    } else if (examTitle.includes('Educação')) {
      content += `DISCIPLINA: DIDÁCTICA GERAL E PEDAGOGIA (SIMULADO MINISTÉRIO DA EDUCAÇÃO)\n\n`;
      
      content += `Questão 1: No planeamento e na gestão do processo pedagógico de ensino-aprendizagem, qual é a principal finalidade do planeamento curricular para o docente?\n`;
      content += `A) Monitorar administrativamente o pagamento de emolumentos por parte dos pais e encarregados de educação\n`;
      content += `B) Estruturar as ações e metodologias do professor de modo a garantir objetivos específicos de aprendizagem - [CORRETA]\n`;
      content += `C) Reduzir a carga horária letiva semanal nas escolas de Luanda\n`;
      content += `D) Substituir a avaliação presencial por atividades complementares de recreio escolar\n`;
      content += `Explicação: O planeamento curricular organiza de forma sistemática as metas, metodologias, conteúdos pedagógicos e instrumentos de avaliação que garantem o sucesso educativo dos alunos.\n\n`;
      
      content += `Questão 2: O método heurístico ou de descoberta ativa na pedagogia contemporânea foca-se em:\n`;
      content += `A) Encorajar a memorização exaustiva de datas sem debate contextual\n`;
      content += `B) Promover o papel ativo do aluno no processo de descoberta autónoma e construção do seu conhecimento - [CORRETA]\n`;
      content += `C) Centralizar toda a autoridade intelectual e transmissão unilateral do conhecimento na figura do docente\n`;
      content += `D) Eliminar totalmente o planeamento de aulas em detrimento de abordagens improvisadas\n`;
      content += `Explicação: O método heurístico propõe que o aluno aprenda por si mesmo, sob a orientação do professor, pesquisando e resolvendo problemas práticos de modo participativo.\n\n`;
      
      content += `Questão 3: Qual é o diploma legislativo central que rege a estrutura do sistema de ensino no país, as suas modalidades e objetivos gerais de formação nacional?\n`;
      content += `A) Lei n.º 17/16 de 7 de Outubro (Lei de Bases do Sistema de Educação e Ensino - LBSEE) - [CORRETA]\n`;
      content += `B) Lei de Terras de Angola\n`;
      content += `C) Lei do Meio Ambiente\n`;
      content += `D) Decreto Executivo n.º 12/10 de Reorganização de Direções Provinciais\n`;
      content += `Explicação: A Lei n.º 17/16 (LBSEE), alterada parcialmente pela Lei n.º 32/20, define a organização de todo o sistema de educação e ensino em Angola, dividindo-o nos subsistemas letivos conhecidos.\n\n`;
      
      content += `Questão 4: Na prática da avaliação escolar, qual é o principal objetivo de uma avaliação do tipo "formativa"?\n`;
      content += `A) Classificar os alunos de forma comparativa e punitiva ao fim de cada ciclo letivo\n`;
      content += `B) Coletar dados contínuos para reorientar o trabalho pedagógico do professor e o percurso de aprendizagem do aluno - [CORRETA]\n`;
      content += `C) Isentar os alunos com notas excelentes da realização de exames gerais finais\n`;
      content += `D) Substituir integralmente o uso de notas numéricas por avaliações descritivas verbais informais\n`;
      content += `Explicação: Ao contrário da avaliação sumativa (que visa atribuir uma nota final classificatória), a avaliação formativa ocorre ao longo do processo letivo para detetar lacunas e corrigir a tempo as metodologias de ensino.\n\n`;
      
      content += `Questão 5: Conforme a LBSEE, em quantos subsistemas de ensino se organiza o Sistema de Educação de Angola em 2026?\n`;
      content += `A) 4 Subsistemas\n`;
      content += `B) 6 Subsistemas - [CORRETA]\n`;
      content += `C) 8 Subsistemas\n`;
      content += `D) 10 Subsistemas\n`;
      content += `Explicação: O Sistema de Educação angolano organiza-se em 6 subsistemas: Subsistema de Educação Pré-Escolar, Ensino Geral, Ensino Técnico-Profissional, Formação de Professores, Educação de Adultos e Ensino Superior.\n\n`;
      
      content += `DICA EXTRA DE ESTUDO MED: Estude com afinco a didáctica especial de cada disciplina de docência e domine o perfil pedagógico preconizado pelo MED para as reformas curriculares.\n`;
      
    } else {
      content += `DISCIPLINA: INSTRUÇÃO CÍVICA, PREVENÇÃO E SEGURANÇA PÚBLICA (SIMULADO POLÍCIA NACIONAL DE ANGOLA - PNA)\n\n`;
      
      content += `Questão 1: Conforme preconiza o Artigo 210.º da Constituição da República de Angola (CRA), qual é a missão fundamental da Polícia Nacional?\n`;
      content += `A) Promover ações de combate e intervenção militar direta contra ameaças estrangeiras externas nas fronteiras nacionais\n`;
      content += `B) Garantir a ordem e a tranquilidade públicas, assegurando a segurança das populações e o respeito pelas leis do país - [CORRETA]\n`;
      content += `C) Atuar na cobrança direta de taxas aduaneiras tributárias no porto de Luanda\n`;
      content += `D) Estabelecer e regular as políticas de taxa de câmbio cambial no mercado nacional\n`;
      content += `Explicação: A PNA é uma instituição permanente, apartidária, focada na garantia da ordem interna, segurança interna dos cidadãos, prevenção criminal e cumprimento da legalidade democrática.\n\n`;
      
      content += `Questão 2: Para o ingresso na carreira policial da PNA, a prova de aptidão física inclui tradicionalmente o Teste de Cooper. Em que consiste este teste?\n`;
      content += `A) Corrida rápida de velocidade pura em pista plana de 100 metros cronometrados\n`;
      content += `B) Corrida de resistência física com duração máxima de 12 minutos - [CORRETA]\n`;
      content += `C) Natação contínua de salvamento em mar agitado com obstáculos flutuantes\n`;
      content += `D) Exercícios repetidos de levantamento de halteres pesados em menos de 1 minuto\n`;
      content += `Explicação: O Teste de Cooper é uma avaliação de resistência aeróbica onde se mede a máxima distância que o candidato consegue correr de forma regular no intervalo de 12 minutos.\n\n`;
      
      content += `Questão 3: Sob qual tutela ministerial do Poder Executivo em Angola está integrada a estrutura administrativa e operacional da Polícia Nacional de Angola?\n`;
      content += `A) Ministério da Defesa Nacional e Veteranos da Pátria\n`;
      content += `B) Ministério do Interior (MININT) - [CORRETA]\n`;
      content += `C) Ministério da Justiça e dos Direitos Humanos\n`;
      content += `D) Ministério da Administração do Território\n`;
      content += `Explicação: A Polícia Nacional de Angola insere-se e responde diretamente perante o Ministério do Interior (MININT), que tutela as forças de segurança interna nacional.\n\n`;
      
      content += `Questão 4: No âmbito dos deveres gerais do agente da Polícia Nacional de Angola, qual princípio ético-profissional rege o estrito cumprimento das ordens legítimas dos superiores?\n`;
      content += `A) Princípio da Autonomia de Acção Individual\n`;
      content += `B) Princípio da Obediência Hierárquica - [CORRETA]\n`;
      content += `C) Princípio da Descentralização Absoluta\n`;
      content += `D) Princípio do Consentimento Popular de Atuação\n`;
      content += `Explicação: A hierarquia e a disciplina são pilares basilares da instituição policial, exigindo o dever de obediência às ordens de superiores legítimos que não configurem manifesta violação da Constituição ou do direito.\n\n`;
      
      content += `Questão 5: Na sua atuação diária e no contacto com cidadãos, o uso da força física ou o recurso a meios coercivos por parte do agente policial deve guiar-se obrigatoriamente por quais princípios?\n`;
      content += `A) Princípios da superioridade numérica de agentes e da intimidação moral instantânea\n`;
      content += `B) Princípios da legalidade, necessidade, proporcionalidade e subsidiariedade - [CORRETA]\n`;
      content += `C) Princípios do uso livre da força máxima para contenção rápida de distúrbios\n`;
      content += `D) Princípios do sigilo de identidade do agente e da isenção de registo escrito de ocorrência\n`;
      content += `Explicação: O uso da força policial é uma medida de exceção que deve ser estritamente proporcional à gravidade da ameaça, necessária para conter o perigo imediato e baseada nos preceitos legais e éticos vigentes.\n\n`;
      
      content += `DICA EXTRA DE ESTUDO PNA: Estude em detalhe a Lei Constitucional, a Lei dos Postos e Carreiras da PNA e os regulamentos de ética e direitos humanos nas forças de segurança.\n`;
    }
    
    content += `\n------------------------------------------------------------------------\n`;
    content += `Desejamos-lhe o maior sucesso na sua preparação e estudos!\n`;
    content += `Candidato Ao — Simulados, Leis & Orientação Profissional para o Mercado Angolano\n`;
    content += `========================================================================\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const fileName = examTitle
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    
    link.download = `concursos-ao-${fileName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="simulados-section" className="space-y-8">
      {/* TOP AD SPACE FOR QUIZZES */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — CURSO PREPARATÓRIO SÉNIOR AGT & MINISTÉRIOS: MATRICULE-SE JÁ
        </span>
      </div>

      {quizState === 'idle' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quizCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="bg-indigo-50 text-indigo-700 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-indigo-100 shadow-inner">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-800 mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono font-bold uppercase">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{category.timeLimitSeconds / 60} Minutos</span>
                  </div>
                  <button
                    onClick={() => handleStartQuiz(category)}
                    className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all cursor-pointer shadow-lg shadow-indigo-100"
                  >
                    <span>Começar</span>
                    <Play className="w-3 h-3 fill-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Exam Downloads Center - VERY VALUABLE FOR REAL USER RETENTION */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-50 text-orange-800 p-2.5 rounded-2xl border border-orange-200 shadow-sm">
                <FileDown className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold font-display text-slate-800 text-lg">
                  Repositório de Provas Anteriores para Download Gratuito
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Estude com exames reais aplicados nos últimos concursos públicos de Angola.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastExamDownloads.map((exam) => (
                <div
                  key={exam.id}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-xs md:text-sm text-slate-800 truncate leading-snug">
                      {exam.title}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mt-1">
                      <span>Concurso de: {exam.year}</span>
                      <span>•</span>
                      <span>Tamanho: {exam.size}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownloadExam(exam.title)}
                    className="bg-white hover:bg-indigo-600 hover:text-white text-slate-800 p-3 rounded-xl border border-slate-200 hover:border-indigo-600 transition-all cursor-pointer shrink-0 shadow-sm"
                    title="Descarregar PDF"
                  >
                    <FileDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Espaço para Anúncio */}
            <div className="mt-6 p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                PUBLICIDADE — ESPAÇO PARA ANÚNCIO
              </span>
            </div>
          </div>
        </>
      )}

      {quizState === 'playing' && selectedCategory && currentQuestion && (
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-8 md:p-10">
          {/* Quiz Header Info */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
            <div>
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                SIMULADO INTERATIVO
              </span>
              <h3 className="font-bold font-display text-slate-800 text-lg mt-0.5">
                {selectedCategory.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-rose-50 text-rose-700 rounded-xl border border-rose-100 font-mono text-sm font-bold">
              <Clock className="w-4 h-4 animate-pulse text-rose-600" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%`
              }}
            />
          </div>

          {/* Question Index indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span>QUESTÃO {currentQuestionIndex + 1} DE {activeQuestions.length}</span>
            <span>Aproveitamento: {score} Acertos</span>
          </div>

          {/* Question Text */}
          <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-6">
            {currentQuestion.question}
          </h4>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              const isCorrect = index === currentQuestion.correctOptionIndex;
              const showSuccess = isAnswered && isCorrect;
              const showFailure = isAnswered && isSelected && !isCorrect;

              let btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-50';
              if (showSuccess) btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-medium';
              else if (showFailure) btnStyle = 'border-red-400 bg-red-50 text-red-900';
              else if (isAnswered && !isCorrect) btnStyle = 'border-slate-100 bg-slate-50/20 text-slate-400';

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border text-[10px] font-mono font-bold ${
                    showSuccess
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : showFailure
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'border-slate-300 text-slate-400'
                  }`}>
                    {showSuccess ? '✓' : showFailure ? '✕' : String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1 leading-snug">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Banner (Appears after answer) */}
          {isAnswered && (
            <div className={`rounded-xl p-5 border mb-6 leading-relaxed text-xs animate-fadeIn ${
              selectedOptionIndex === currentQuestion.correctOptionIndex
                ? 'bg-emerald-50/50 border-emerald-100 text-slate-700'
                : 'bg-red-50/50 border-red-100 text-slate-700'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-1.5 uppercase tracking-wide">
                {selectedOptionIndex === currentQuestion.correctOptionIndex ? (
                  <span className="text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Resposta Correcta!
                  </span>
                ) : (
                  <span className="text-red-700 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Resposta Incorrecta
                  </span>
                )}
              </div>
              <p className="text-slate-600 leading-relaxed text-justify">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex justify-between items-center border-t border-slate-100 pt-5">
            <button
              onClick={() => {
                if (window.confirm('Tem a certeza que deseja abandonar este simulado?')) {
                  setQuizState('idle');
                }
              }}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Sair do Simulado
            </button>

            {isAnswered && (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all cursor-pointer shadow-lg shadow-indigo-100"
              >
                <span>
                  {currentQuestionIndex === activeQuestions.length - 1
                    ? 'Finalizar Simulado'
                    : 'Próxima Questão'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {quizState === 'completed' && selectedCategory && (
        <div className="max-w-2xl mx-auto bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-8 md:p-10 text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-100">
            <Award className="w-8 h-8 text-orange-400 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
              SIMULADO CONCLUÍDO
            </span>
            <h3 className="font-bold font-display text-slate-800 text-xl md:text-2xl mt-1">
              Resultados de: {selectedCategory.title}
            </h3>
          </div>

          {/* Score Circle & Metrics */}
          <div className="py-4 flex flex-col items-center justify-center">
            <div className="text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              {score} / {activeQuestions.length}
            </div>
            <p className="text-slate-400 text-xs font-bold font-mono mt-1 uppercase">
              Pontuação: {Math.round((score / activeQuestions.length) * 100)}%
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-5 border border-slate-100 px-4 py-2.5 rounded-xl bg-slate-50">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>Tempo Gasto: {formatTime(timeSpent)}</span>
              </div>
              <span>•</span>
              <div>
                <span>Média: {Math.round(timeSpent / activeQuestions.length)}s / quest</span>
              </div>
            </div>
          </div>

          {/* Performance Badge - HIGHLY PERSONALIZED FOR ANGOLA MARKET */}
          {(() => {
            const pct = (score / activeQuestions.length) * 100;
            const badge = getBadge(pct);
            return (
              <div className={`p-5 rounded-2xl border text-left text-sm ${badge.color} shadow-sm`}>
                <p className="font-bold font-display mb-1.5 text-sm">{badge.title}</p>
                <p className="opacity-90 text-xs leading-relaxed text-slate-700">{badge.desc}</p>
              </div>
            );
          })()}

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-5 border-t border-slate-100">
            <button
              onClick={() => handleStartQuiz(selectedCategory)}
              className="w-full sm:w-auto flex items-center justify-center gap-1 px-5 py-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tentar Novamente</span>
            </button>
            <button
              onClick={() => setQuizState('idle')}
              className="w-full sm:w-auto flex items-center justify-center gap-1 px-5 py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all cursor-pointer shadow-lg shadow-indigo-100"
            >
              <span>Voltar aos Simulados</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM AD SPACE FOR QUIZZES */}
      <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl text-center mt-6">
        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
          PUBLICIDADE — ESPAÇO PARA ANÚNCIO: MANUAIS E MATERIAIS DE ESTUDO EM PDF
        </span>
      </div>
    </div>
  );
}
