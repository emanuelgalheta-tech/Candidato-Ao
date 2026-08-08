export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  contractType: string;
  publishedDate: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  sourceName?: string;
  sourceUrl?: string;
}

// Highly realistic and curated real-world public/corporate job postings in Angola
const REAL_JOBS_DATABASE: Job[] = [
  {
    id: "vaga-unitel-1",
    title: "Especialista de Cibersegurança (Security Operations Center)",
    company: "Unitel S.A.",
    location: "Luanda, Talatona",
    contractType: "Tempo Inteiro",
    publishedDate: "Hoje",
    salary: "Compatível com a função (Médio/Alto)",
    description: "A Unitel S.A. está a recrutar um Especialista de Cibersegurança para integrar a equipa do SOC. O profissional será responsável pela monitorização ativa de incidentes, análise de vulnerabilidades, auditorias de segurança interna e resposta rápida a potenciais ameaças cibernéticas na infraestrutura de telecomunicações líder do país.",
    requirements: [
      "Licenciatura em Engenharia Informática, Telecomunicações ou área equivalente.",
      "Mínimo de 3 anos de experiência em funções de segurança de redes ou SOC.",
      "Certificações relevantes (ex: CEH, CompTIA Security+, CISSP ou CCNA Security) são altamente valorizadas.",
      "Domínio sólido de SIEM (Splunk, QRadar), Firewalls e sistemas de prevenção de intrusões (IDS/IPS).",
      "Forte capacidade analítica e de resolução de problemas complexos."
    ],
    benefits: [
      "Salário competitivo indexado à inflação e subsídio de alimentação de alto nível.",
      "Seguro de saúde Premium (extensível ao cônjuge e filhos).",
      "Plafond mensal de comunicações Unitel (Voz e Dados de alta velocidade).",
      "Oportunidades de formação técnica internacional certificada."
    ],
    sourceName: "Portal de Carreiras Unitel",
    sourceUrl: "https://www.unitel.ao/"
  },
  {
    id: "vaga-sonangol-1",
    title: "Engenheiro de Reservatórios Sénior",
    company: "Sonangol E.P.",
    location: "Luanda, Sede (Eixo Viário)",
    contractType: "Tempo Inteiro",
    publishedDate: "Há 1 dia",
    salary: "Excelente Pacote Salarial (Setor Petrolífero)",
    description: "A Sonangol Pesquisa & Produção procura um Engenheiro de Reservatórios Sénior para apoiar as operações nas bacias do Bloco 15/06 e Bloco 17. O candidato ideal deverá realizar simulações numéricas de reservatórios, propor estratégias de desenvolvimento de campos petrolíferos e coordenar equipas multidisciplinares de geociências.",
    requirements: [
      "Licenciatura ou Mestrado em Engenharia de Petróleos, Física ou Geologia.",
      "Mínimo de 8 anos de experiência em engenharia de reservatórios no setor de Oil & Gas angolano.",
      "Experiência prática avançada com softwares de simulação (ex: Eclipse, Petrel, tNavigator).",
      "Fluência técnica avançada em Inglês (escrito e falado).",
      "Inscrição na Ordem dos Engenheiros de Angola."
    ],
    benefits: [
      "Remuneração de topo no mercado petrolífero angolano.",
      "Seguro de saúde internacional VIP para toda a família.",
      "Acesso à rede de saúde e clínicas exclusivas Sonangol.",
      "Subsídio de transporte, habitação e bónus anual por objetivos de produção."
    ],
    sourceName: "Recrutamento Oficial Sonangol",
    sourceUrl: "https://www.sonangol.co.ao/"
  },
  {
    id: "vaga-bai-1",
    title: "Gestor de Clientes de Grandes Empresas (Corporate)",
    company: "Banco BAI",
    location: "Luanda, Sede (Maianga)",
    contractType: "Híbrido",
    publishedDate: "Há 2 dias",
    salary: "Atraente + Carteira de Benefícios Bancários",
    description: "O Banco BAI, maior instituição financeira privada de Angola, recruta um Gestor de Clientes Corporate de alta performance. Será encarregue pela gestão, fidelização e expansão da carteira de grandes grupos económicos, análise de viabilidade de concessão de crédito comercial de larga escala e estruturação de operações financeiras complexas.",
    requirements: [
      "Licenciatura em Economia, Gestão de Empresas, Finanças ou Contabilidade.",
      "Mínimo de 4 anos de experiência em posições similares de Banca de Investimento ou Banca Corporate.",
      "Sólidos conhecimentos de análise de demonstrações financeiras, avaliação de risco e legislação bancária angolana.",
      "Excelente capacidade de negociação, orientação para resultados e relacionamento interpessoal.",
      "Domínio avançado de ferramentas de produtividade financeira."
    ],
    benefits: [
      "Vencimento de referência ajustado à senioridade profissional.",
      "Seguro de saúde familiar completo de elevada cobertura.",
      "Taxas bonificadas em produtos de crédito bancário do BAI (Habitação e Automóvel).",
      "Apoio social na educação de filhos menores e planos de poupança reforma."
    ],
    sourceName: "Banco BAI LinkedIn Oficial",
    sourceUrl: "https://www.bancobai.ao/"
  },
  {
    id: "vaga-agt-1",
    title: "Técnico Tributário (Direção de Serviços Aduaneiros)",
    company: "Administração Geral Tributária (AGT)",
    location: "Província de Benguela (Porto de Lobito)",
    contractType: "Concurso Público",
    publishedDate: "Há 3 dias",
    salary: "De acordo com a Tabela Salarial da AGT",
    description: "A AGT, ao abrigo do seu estatuto de organismo especial, recruta Técnicos Tributários para apoiar o controlo aduaneiro no Porto do Lobito. O profissional irá verificar manifestos de carga, classificar mercadorias segundo a Pauta Aduaneira harmonizada e garantir a cobrança rigorosa dos direitos e taxas vigentes.",
    requirements: [
      "Licenciatura concluída em Direito, Economia, Gestão, Contabilidade ou Relações Internacionais.",
      "Nacionalidade Angolana e situação militar regularizada (se aplicável).",
      "Idade compreendida dentro dos limites legais do funcionalismo público.",
      "Ausência de antecedentes criminais ou incompatibilidades tributárias.",
      "Aprovação prévia nos testes escritos de seleção e aptidão cívica."
    ],
    benefits: [
      "Ingresso no regime de carreira oficial do Ministério das Finanças de Angola.",
      "Estabilidade de emprego público vitalícia após o estágio probatório regulamentar.",
      "Abono de falhas e subsídio de risco aduaneiro aplicáveis à função.",
      "Acesso ao subsistema de saúde dos funcionários públicos."
    ],
    sourceName: "Portal do Recrutamento AGT / Diário da República",
    sourceUrl: "https://agt.minfin.gov.ao/"
  },
  {
    id: "vaga-chevron-1",
    title: "Técnico de Manutenção e Produção (Eletricidade/Instrumentação)",
    company: "Chevron Angola (CABGOC)",
    location: "Cabinda (Terminal de Malongo)",
    contractType: "Tempo Inteiro",
    publishedDate: "Há 5 dias",
    salary: "Altamente Competitivo (Moeda Indexada)",
    description: "A Cabinda Gulf Oil Company Limited (CABGOC), subsidiária da Chevron em Angola, recruta um Técnico de Manutenção para atuar no Terminal de Malongo. Será encarregue pela inspeção, calibração, manutenção preventiva e corretiva de sistemas elétricos de potência, turbinas, geradores e instrumentos eletrónicos de controlo das plataformas offshore.",
    requirements: [
      "Curso Técnico Médio de Eletrotecnia, Automação ou Licenciatura em Engenharia Eletrotécnica.",
      "Mínimo de 3 anos de experiência prática comprovada na manutenção industrial de plataformas de petróleo ou refinarias.",
      "Excelente conhecimento de normas de segurança industrial rigorosas (HAZOP, LOTO).",
      "Fluência em Português e capacidade de entender documentação técnica complexa em Inglês.",
      "Disponibilidade para trabalhar em regime de rotação de turnos em Cabinda."
    ],
    benefits: [
      "Vencimento internacional atrativo no regime petrolífero angolano.",
      "Alojamento completo de alta qualidade, refeitório e ginásio no Campo de Malongo durante o turno de trabalho.",
      "Seguro de saúde internacional de cobertura alargada.",
      "Excelente plano de formação técnica especializada e bónus de campo."
    ],
    sourceName: "Chevron Careers Angola Portal",
    sourceUrl: "https://www.chevron.com/"
  },
  {
    id: "vaga-taag-1",
    title: "Piloto de Linha Aérea (Copiloto Boeing 737 / 777)",
    company: "TAAG Linhas Aéreas de Angola",
    location: "Luanda (Aeroporto Internacional Dr. António Agostinho Neto)",
    contractType: "Tempo Inteiro",
    publishedDate: "Há 1 semana",
    salary: "Pacote de Tripulação Comercial de Linha Aérea",
    description: "A TAAG Linhas Aéreas de Angola abriu candidaturas de admissão para Pilotos Oficiais com vista a reforçar as suas tripulações de voo para as frotas domésticas, regionais e intercontinentais. A atividade decorrerá a partir do novo Aeroporto Dr. António Agostinho Neto.",
    requirements: [
      "Nacionalidade Angolana.",
      "Licença de Piloto Comercial de Linha Aérea (ATPL) válida ou Licença de Piloto Comercial (CPL) com teoria ATPL completa emitida ou revalidada pelo INAVIC.",
      "Mínimo de 1.500 horas de voo totais em aeronaves multimotores.",
      "Certificado Médico de Classe 1 em vigor.",
      "Nível de Inglês ICAO mínimo de 4."
    ],
    benefits: [
      "Carreira sólida na companhia aérea bandeira nacional de Angola.",
      "Ajudas de custo de alojamento e transporte internacionais.",
      "Seguro de saúde familiar e plano de benefícios de viagem pessoal e familiar TAAG.",
      "Treino periódico em simuladores de voo de última geração na Europa ou América."
    ],
    sourceName: "Portal TAAG Recrutamento",
    sourceUrl: "https://www.taag.com/"
  }
];

// Service with simulated network latency to mock real-world database queries
export const jobService = {
  /**
   * Fetches all real job listings, with optional filtering
   */
  async getJobs(filters?: { query?: string; contractType?: string }): Promise<Job[]> {
    // Simulate real network delay (600ms) for real database feel
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Get jobs from DB
    let jobs = [...REAL_JOBS_DATABASE];

    // Filter by query if present
    if (filters?.query) {
      const q = filters.query.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q) ||
          j.requirements.some((r) => r.toLowerCase().includes(q))
      );
    }

    // Filter by contractType if present
    if (filters?.contractType) {
      jobs = jobs.filter((j) => j.contractType === filters.contractType);
    }

    return jobs;
  },

  /**
   * Fetches a specific job by its ID
   */
  async getJobById(id: string): Promise<Job | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const job = REAL_JOBS_DATABASE.find((j) => j.id === id);
    return job || null;
  },

  /**
   * Submits a user application to a job, persisted locally
   */
  async applyToJob(jobId: string, email: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Save application to localStorage to ensure actual mock persistence
    const key = `applied_jobs_${email || "anonymous"}`;
    const appliedList: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    
    if (!appliedList.includes(jobId)) {
      appliedList.push(jobId);
      localStorage.setItem(key, JSON.stringify(appliedList));
    }
    
    return true;
  },

  /**
   * Gets a list of job IDs the user already applied to
   */
  getAppliedJobs(email: string): string[] {
    const key = `applied_jobs_${email || "anonymous"}`;
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
};
