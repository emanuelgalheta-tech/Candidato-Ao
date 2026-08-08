import { CVTemplate, CoverLetterTemplate } from '../types';

export const cvTemplates: CVTemplate[] = [
  {
    id: 'recepcionista',
    profession: 'Recepcionista e Assistente de Atendimento',
    category: 'Geral',
    description: 'Ideal para vagas em recepção de clínicas, escritórios corporativos em Luanda, hotéis e balcões de atendimento ao cliente.',
    downloadFileName: 'modelo_cv_recepcionista_angola.doc',
    commonErrors: [
      'Inserir foto informal tirada em redes sociais.',
      'Omitir nível de proficiência em informática (essencial saber mexer em Excel e Outlook).',
      'Esquecer de citar habilidades em comunicação e gestão de conflitos no atendimento.'
    ],
    expertGuide: `Como estruturar um excelente currículo para Recepcionista e Atendimento em Angola:

A área de recepção e atendimento ao público é uma das portas de entrada mais concorridas no mercado de trabalho angolano, seja em escritórios corporativos na Baixa de Luanda, em Talatona, ou em clínicas e hotéis de prestígio. Para se destacar, o seu currículo precisa transmitir duas qualidades fundamentais logo no primeiro olhar: organização meticulosa e excelente comunicação.

1. Resumo Profissional Impactante:
No topo do currículo, insira um parágrafo de 3 a 4 linhas sintetizando a sua experiência. Evite clichês como "procuro novos desafios". Prefira focar em resultados: "Profissional de atendimento com mais de 3 anos de experiência em recepção de clínicas privadas em Luanda, especialista em triagem de chamadas, controle de agenda de consultas e assistência administrativa. Fluente em português e com inglês básico para conversação comercial."

2. Destaque Competências Técnicas e Operacionais:
Em Angola, as empresas valorizam muito o conhecimento prático. Indique claramente se possui domínio de ferramentas como Microsoft Office (Word, Excel de nível intermediário, Outlook para troca de e-mails corporativos) e sistemas de agendamento ou facturação (como o software Primavera, muito comum em PMEs angolanas).

3. Experiência Focada em Resolução de Problemas:
Ao listar os seus empregos anteriores, não descreva apenas tarefas básicas como "atender telefone". Detalhe as suas conquistas de forma quantitativa ou qualitativa. Por exemplo: "Gerenciei com sucesso uma média de 80 atendimentos presenciais diários, otimizando o fluxo de triagem e reduzindo o tempo de espera dos clientes em 15%" ou "Responsável pelo controlo de entrada e saída de correspondências e gestão do stock de material de escritório da sucursal".

4. Educação e Formação Complementar:
Se possuir cursos nas áreas de Relações Públicas, Atendimento ao Cliente, Secretariado Executivo ou Técnicas de Vendas, coloque-os em destaque. Em Luanda, formações feitas em centros de formação reconhecidos (como o ENFPP, IFAL ou entidades privadas de prestígio) adicionam bastante peso na triagem curricular realizada pelos recrutadores locais.`,
    defaultData: {
      fullName: 'Analtina Maria Lemos',
      title: 'Recepcionista e Assistente de Atendimento',
      phone: '+244 923 456 789',
      email: 'analtina.lemos@gmail.com',
      address: 'Maianga, Luanda - Angola',
      summary: 'Profissional dedicada e comunicativa com mais de 3 anos de experiência no atendimento ao público em empresas de média dimensão. Comprovada competência na gestão de agendas, recepção de clientes de alto padrão, organização de ficheiros e apoio em tarefas administrativas básicas com o uso do software Primavera.',
      experience: [
        {
          period: '2023 - Presente',
          company: 'Clínica Médica da Providência, Lda',
          role: 'Recepcionista Principal',
          description: 'Responsável pelo acolhimento de pacientes, triagem telefónica com mais de 100 chamadas diárias, marcação de consultas no sistema interno e processamento básico de facturação de planos de saúde locais.'
        },
        {
          period: '2021 - 2023',
          company: 'Consultoria de Negócios Kwanza-Sul',
          role: 'Recepcionista e Assistente Júnior',
          description: 'Apoio na recepção de fornecedores, distribuição de correspondência, arquivo de documentos físicos e digitais e controlo do stock de consumíveis de escritório.'
        }
      ],
      education: [
        {
          period: '2019',
          company: 'Instituto Médio Politécnico de Luanda',
          institution: 'Instituto Médio Politécnico',
          degree: 'Ensino Médio Concluído - Ciências Sociais'
        },
        {
          period: '2020',
          company: 'Centro de Formação Profissional Forte',
          institution: 'Centro Profissional Luanda-Sucesso',
          degree: 'Curso de Secretariado Executivo e Atendimento de Excelência'
        }
      ],
      skills: [
        'Atendimento ao Público & Relações Públicas',
        'Domínio de MS Office (Excel, Word, Outlook)',
        'Familiaridade com Software de Facturação Primavera',
        'Gestão de Agendas e Organização de Ficheiros',
        'Boa Comunicação e Resolução de Conflitos'
      ],
      languages: [
        'Português (Nativo)',
        'Inglês (Intermediário / Conversação básica)',
        'Umbundo (Compreensão auditiva básica)'
      ]
    }
  },
  {
    id: 'engenharia',
    profession: 'Engenharia de Redes e Telecomunicações / TI',
    category: 'Técnico',
    description: 'Focado no mercado de TI e Telecomunicações em Angola (Unitel, Africell, Movicel, Angolatelecom, bancos e integradores de tecnologia).',
    downloadFileName: 'modelo_cv_engenheiro_ti_angola.doc',
    commonErrors: [
      'Deixar de descrever as tecnologias, marcas de equipamentos (Cisco, Huawei) ou linguagens dominadas.',
      'Não listar projectos práticos realizados durante a faculdade ou em estágios.',
      'Omitir certificações técnicas internacionais que diferenciam o candidato em Angola.'
    ],
    expertGuide: `Como estruturar um excelente currículo para Engenharia e TI em Angola:

O setor de tecnologia da informação e telecomunicações é um dos que mais cresce em Angola. Com a expansão de grandes operadoras móveis como a Unitel e a Africell, além do fortalecimento da infraestrutura tecnológica da banca angolana (bancos como BAI, BFA, BIC, Standard Bank), os profissionais de engenharia técnica são altamente disputados. Contudo, a exigência técnica cresceu substancialmente.

1. Perfil Profissional Técnico Directo:
Inicie seu currículo de TI demonstrando especialização técnica. Em vez de dizer apenas "gosto de informática", seja explícito: "Engenheiro de Redes e Telecomunicações com 4 anos de experiência na administração de redes corporativas, configuração de switches Cisco/Huawei, implementação de políticas de segurança IP e suporte técnico de nível 2 e 3. Possuo certificação Cisco CCNA ativa."

2. Destaque Certificações e Tecnologias:
Os recrutadores em Luanda filtram currículos por palavras-chave técnicas. Crie uma seção de "Competências Técnicas" no início ou lateral do currículo detalhando:
- Sistemas Operacionais: Windows Server, Linux (Ubuntu, CentOS).
- Redes/Segurança: Protocolos OSPF, BGP, Firewalls, IPsec VPN.
- Hardware/Fabricantes: Cisco Systems, Huawei, Fortinet, Mikrotik.
- Linguagens/Ferramentas adicionais: Python, SQL, Docker, Virtualização (VMware).

3. Foco em Projectos de Infraestrutura e Redução de Custos:
Ao listar suas experiências profissionais, mostre como o seu conhecimento técnico gerou resultados financeiros ou de estabilidade operacional para a empresa. Exemplo: "Liderei a migração da rede local para topologia em anel redundante, eliminando as paragens de rede que afectavam as vendas das lojas e reduzindo o tempo de inactividade em 95%" ou "Desenvolvi scripts em Python para automatizar backups diários de servidores, garantindo maior integridade de dados."

4. Idiomas são Críticos no Setor de TI em Angola:
A maior parte do suporte de fabricantes internacionais (Cisco, Oracle, Huawei) é em inglês. Mencione claramente o seu nível de inglês técnico. Dizer que possui "Inglês para leitura de manuais e comunicação com suporte internacional" é um enorme diferencial competitório nas entrevistas técnicas.`,
    defaultData: {
      fullName: 'Eng. Manuel Francisco Gonga',
      title: 'Engenheiro de Redes e Telecomunicações',
      phone: '+244 934 111 222',
      email: 'manuel.gonga.tech@outlook.com',
      address: 'Talatona, Luanda - Angola',
      summary: 'Engenheiro de Telecomunicações certificado (Cisco CCNA) com mais de 4 anos de percurso em administração de redes, troubleshooting de incidentes e arquitectura de segurança de dados. Experiência robusta na configuração e manutenção preventiva de equipamentos Cisco, Huawei e Fortinet em ambientes bancários e de grande escala.',
      experience: [
        {
          period: '2022 - Presente',
          company: 'TecnoRedes Integradoras de Angola, S.A.',
          role: 'Engenheiro de Redes e Suporte Nível 2',
          description: 'Administração da infraestrutura WAN/LAN de clientes corporativos. Configuração e monitorização de firewalls Fortigate, roteadores Cisco e switches Huawei. Elaboração de relatórios técnicos de capacidade e planeamento de migração de tráfego.'
        },
        {
          period: '2020 - 2022',
          company: 'Angola Comunicações Corporativas, Lda',
          role: 'Analista de Infraestrutura de Redes Júnior',
          description: 'Suporte de rede nível 1, monitorização de links de fibra óptica e links micro-ondas de operadoras locais. Resolução de incidentes de conectividade física e lógica em servidores Linux/Windows.'
        }
      ],
      education: [
        {
          period: '2015 - 2020',
          company: 'Universidade Agostinho Neto (UAN)',
          institution: 'Universidade Agostinho Neto',
          degree: 'Licenciatura em Engenharia de Telecomunicações'
        },
        {
          period: '2021',
          company: 'Cisco Networking Academy Luanda',
          institution: 'Cisco Networking Academy',
          degree: 'Certificação Internacional Cisco Certified Network Associate (CCNA)'
        }
      ],
      skills: [
        'Configuração de Equipamentos Cisco & Huawei',
        'Administração de Segurança e Firewalls Fortinet',
        'Monitorização de Redes (Zabbix, PRTG, Nagios)',
        'Administração de Servidores Linux (Debian, RedHat)',
        'Estruturação de Redes WAN, LAN, VPN e MPLS'
      ],
      languages: [
        'Português (Nativo)',
        'Inglês (Avançado para conversação técnica)',
        'Francês (Compreensão técnica básica)'
      ]
    }
  },
  {
    id: 'primeiro-emprego',
    profession: 'Primeiro Emprego / Jovem Recém-Formado',
    category: 'Primeiro Emprego',
    description: 'Perfeito para estudantes universitários, graduados recentes ou estudantes do ensino médio em busca de estágio ou primeira vaga de assistente.',
    downloadFileName: 'modelo_cv_primeiro_emprego_angola.doc',
    commonErrors: [
      'Deixar o currículo quase vazio e sem formatação adequada.',
      'Esconder actividades de voluntariado, desportos, lideranças comunitárias ou trabalhos na igreja.',
      'Inventar experiências fictícias (sempre diga a verdade, com foco em potencial).'
    ],
    expertGuide: `Como estruturar um excelente currículo para Primeiro Emprego em Angola:

Conseguir a primeira oportunidade profissional em Angola é um desafio considerável devido à taxa de desemprego juvenil. No entanto, centenas de empresas privadas e bancos nacionais promovem anualmente programas de estágio e de "Jovens Talentos". Se não possui experiência anterior em carteira de trabalho, o seu foco absoluto deve ser mostrar potencial de aprendizagem, dinamismo, carácter íntegro e proactividade.

1. Concentre-se nas Atividades de Formação e Académicas:
O seu currículo deve detalhar o seu percurso na escola ou universidade. Destaque notas altas em disciplinas relevantes, projectos de fim de curso que exigiram pesquisa profunda ou apresentações de trabalhos em grupo. Por exemplo: "Coordenador do Projecto de Conclusão de Curso focado no Estudo Económico de Micro-empresas no Distrito do Rangel".

2. Destaque Actividades Extracurriculares de Valor Social:
Em Angola, a participação activa na comunidade é altamente valorizada pelos recrutadores, pois indica liderança e ética de trabalho. Mencione acções sociais voluntárias, trabalhos de monitoria na igreja, liderança em grémios estudantis ou participação activa em clubes desportivos locais. Experiências como "Professor voluntário de alfabetização de crianças no bairro" valem muito!

3. Formação Prática Complementar:
Se fez pequenos cursos livres (Informática, Atendimento ao Cliente, Introdução à Contabilidade, Redacção Comercial, Gestão de Tempo), coloque-os em destaque no topo do currículo. Isso demonstra que é uma pessoa interessada em se desenvolver de forma proactiva enquanto aguarda uma oportunidade profissional.

4. Objectivo Profissional Honesto e Claro:
Substitua o antigo jargão genérico por um objectivo sincero focado no que pode aportar ao empregador: "Jovem recém-graduado em Contabilidade Geral, com sólida base técnica em cálculo de impostos nacionais e Excel avançado. Procuro integrar o programa de estágio do banco para aplicar dedicação, rigor matemático e vontade contínua de aprender, contribuindo activamente com a equipa de auditoria interna."`,
    defaultData: {
      fullName: 'Sílvia Patrícia Mateus',
      title: 'Jovem Candidata a Estágio Administrativo',
      phone: '+244 945 888 999',
      email: 'silvia.mateus.estagio@gmail.com',
      address: 'Cazenga, Luanda - Angola',
      summary: 'Estudante universitária de Gestão de Empresas focada na área de administração e recursos humanos. Jovem proactiva, com excelente capacidade de redação, facilidade de trabalho em equipe e domínio avançado de ferramentas informáticas. Atuou ativamente em comissões organizadoras estudantis e projetos comunitários voluntários de apoio social.',
      experience: [
        {
          period: '2023 - 2024',
          company: 'Associação de Jovens Solidários do Cazenga',
          role: 'Secretária Voluntária',
          description: 'Responsável pela redação das atas de reuniões semanais, elaboração de relatórios de atividades para os doadores e controlo da planilha de distribuição de bens alimentares para famílias em situação de vulnerabilidade.'
        },
        {
          period: '2022',
          company: 'Colégio Militar de Luanda (Grémio Estudantil)',
          role: 'Subcoordenadora de Eventos Culturais',
          description: 'Organização logística e planeamento financeiro de festas escolares e feiras de ciências, envolvendo a coordenação de grupos de 15 estudantes e gestão de pequeno fundo de caixa.'
        }
      ],
      education: [
        {
          period: '2023 - Presente',
          company: 'Universidade Metodista de Angola',
          institution: 'Universidade Metodista de Angola (UMA)',
          degree: 'Frequência do 3º Ano da Licenciatura em Gestão de Empresas'
        },
        {
          period: '2022',
          company: 'Centro Tecnológico de Luanda',
          institution: 'Centro Tecnológico de Luanda',
          degree: 'Curso Prático de Informática na Óptica do Utilizador (Excel, Word, Internet)'
        }
      ],
      skills: [
        'Excelente Redacção e Oratória em Português',
        'Domínio de Excel (Criação de Gráficos, Fórmulas Básicas/Intermediárias)',
        'Facilidade para Organização Logística e Planeamento',
        'Elevado Sentido de Ética, Integridade e Pontualidade',
        'Capacidade de Aprendizagem Rápida sob Pressão'
      ],
      languages: [
        'Português (Excelente - Escrito e Falado)',
        'Inglês (Intermediário - Leitura e Escrita Académica)'
      ]
    }
  }
];

export const coverLetters: CoverLetterTemplate[] = [
  {
    id: 'bancos',
    title: 'Carta de Candidatura para o Setor Bancário',
    targetSector: 'Bancos (BAI, BFA, BIC, BCI, Keve, etc.)',
    description: 'Modelo formal para envio de candidaturas espontâneas ou respostas a anúncios em instituições financeiras angolanas.',
    expertGuide: 'No sector bancário de Angola, a formalidade, o sigilo profissional, a integridade ética e o rigor numérico são inegociáveis. Ao enviar a sua carta, dirija-se especificamente ao Diretor de Capital Humano da instituição, demonstrando conhecimento sobre a reputação do banco e citando como as suas competências ajudarão na excelência de atendimento ou controlo de risco do balcão.',
    templateText: `Exmo(a). Senhor(a)
Director(a) do Gabinete de Capital Humano
[Nome do Banco - Ex: Banco Angolano de Investimentos - BAI]
Sede Central, Luanda - Angola

Assunto: Candidatura à vaga de Técnico de Atendimento ao Cliente / Gestor de Conta Júnior

Prezados Senhores,

Escrevo-lhes com o maior entusiasmo no sentido de manifestar o meu forte interesse em integrar a prestigiada equipa do [Nome do Banco], instituição amplamente reconhecida em Angola pelo seu pioneirismo na inovação digital e pelo elevado padrão de serviço oferecido aos seus clientes.

Recentemente, concluí a minha formação em [Sua Graduação - Ex: Economia / Gestão] pelo [Nome do seu Instituto ou Faculdade], período durante o qual desenvolvi competências sólidas em análise financeira básica, matemática comercial, contabilidade geral e, sobretudo, no atendimento analítico e centrado nas necessidades do cliente. 

Adicionalmente, possuo certificação em [Sua Certificação / Atendimento / Excel], o que me confere segurança no manuseio de ferramentas informáticas de gestão essenciais na rotina bancária. Compreendo que o dinamismo e o crescimento económico de Angola exigem profissionais altamente íntegros, pontuais e com capacidade técnica para gerir pressões diárias mantendo o sorriso no rosto e a precisão nos registos de caixa.

Coloco-me à inteira disposição para a realização de uma entrevista presencial, onde poderei expor com mais detalhe como o meu compromisso com a excelência e a minha forte ética profissional alinham-se perfeitamente aos valores fundamentais corporativos que regem o [Nome do Banco].

Agradeço antecipadamente a atenção que dispensarem à análise do meu currículo anexo.

Com os meus protestos de elevada estima e consideração,

[Seu Nome Completo]
Telefone: [Seu Telefone]
E-mail: [Seu E-mail]
Endereço: [Seu Bairro / Cidade], Luanda - Angola`
  },
  {
    id: 'telecomunicacoes',
    title: 'Carta de Candidatura para Operadoras de Telecomunicações',
    targetSector: 'Telecomunicações (Unitel, Africell, Movicel, Angolatelecom, etc.)',
    description: 'Focada em inovação, agilidade, alcance técnico e orientação para resultados rápidos.',
    expertGuide: 'Operadoras de telecomunicações móveis buscam candidatos que demonstrem rápida adaptação a novas tecnologias, foco no cliente final e espírito de equipa resiliente para lidar com a cobertura nacional e o suporte contínuo.',
    templateText: `À Direcção de Recrutamento e Selecção de Talentos
[Nome da Operadora - Ex: Unitel, S.A. / Africell Angola]
Luanda, Angola

Assunto: Candidatura espontânea para a área de [Sua Área - Ex: Engenharia de Telecom / Suporte Técnico]

Exmos. Senhores,

É com grande admiração pela trajectória de expansão e conectividade social promovida pela [Nome da Operadora] em todo o território nacional angolano, que lhes envio o meu currículo anexo para vossa apreciação.

Como profissional licenciado em [Sua Área de Graduação - Ex: Engenharia Informática] com [Número] anos de percurso prático na gestão de suporte técnico corporativo, tenho acompanhado de perto a revolução digital em Angola liderada por esta organização. A minha experiência profissional engloba a resolução expedita de incidentes de rede, administração de plataformas de comunicação de dados, configuração de roteadores de grande escala e monitorização preventiva de servidores críticos.

O dinamismo com que a [Nome da Operadora] tem estendido serviços móveis e banda larga rápida de Luanda a Cabinda e Cunene exige equipas multidisciplinares altamente autónomas, ágeis e resilientes. Estou plenamente capacitado para assumir regimes de plantão técnico, participar em projectos de expansão de infraestrutura física e propor melhorias de desempenho técnico.

Seria uma honra integrar uma das marcas mais valiosas e dinâmicas de Angola, colaborando directamente com o vosso plano estratégico de inclusão digital e excelência tecnológica.

Fico a aguardar vosso oportuno contacto para agendamento de entrevista profissional.

Atentamente,

[Seu Nome Completo]
Telefone: [Seu Telefone]
E-mail: [Seu E-mail]
Endereço: [Seu Bairro / Cidade - Ex: Talatona], Luanda - Angola`
  },
  {
    id: 'petroliferas',
    title: 'Carta de Candidatura para o Sector Petrolífero',
    targetSector: 'Empresas Petrolíferas (Sonangol, Chevron, TotalEnergies, ExxonMobil, Eni, etc.)',
    description: 'Focada em rigorosas normas de segurança (HSE), conformidade técnica internacional e proficiência em inglês.',
    expertGuide: 'O sector petrolífero em Angola (Oil & Gas) opera sob padrões internacionais de segurança industrial (HSE), compliance rigoroso e bilinguismo. O seu documento de apresentação deve ressaltar a sua atenção a normas de segurança, certificações internacionais relevantes e fluência no idioma inglês.',
    templateText: `To: Recruitment and Selection Committee
[Nome da Empresa Petrolífera - Ex: Sonangol E.P. / Chevron Angola]
Headquarters, Luanda - Angola

Subject: Job Application for [Nome do Cargo - Ex: Junior Logistics Analyst / HSE Assistant / Mechanical Engineer]

Dear Sirs / Madams,

I am writing to formally express my strong interest in joining the highly distinguished team at [Nome da Empresa Petrolífera], a global leader in the energy sector and a key driver of Angola's national socioeconomic development and industrial expansion.

Holding a Bachelor's Degree in [Sua Graduação - Ex: Engenharia Mecânica / Logística] from [Nome da Universidade/Instituto], I have built a rigorous professional background rooted in industrial standards, technical precision, and analytical risk assessment. Over the past [Número] years of my professional journey, I have developed a solid understanding of operational processes, asset management, and preventive maintenance routines.

Additionally, I hold certifications in [Ex: Curso de Segurança Industrial - HSE / Primeiros Socorros], which highlights my strict commitment to the "Safety First" corporate culture. Having worked in multicultural environments, I am fully proficient in both Portuguese and English, capable of writing comprehensive technical reports, participating in international engineering audits, and collaborating with cross-functional global teams.

I welcome the opportunity to meet with your recruitment team to discuss in detail how my technical competence, high sense of safety compliance, and proactive work ethic can actively contribute to [Nome da Empresa]'s onshore and offshore operations in Angola.

Thank you very much for your time and consideration of my attached resume.

Sincerely,

[Seu Nome Completo]
Mobile Phone: [Seu Telefone]
E-mail: [Seu E-mail]
Location: [Seu Bairro], Luanda - Angola`
  }
];
