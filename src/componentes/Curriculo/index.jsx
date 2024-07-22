import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ExperienciaItens from '../Itens/ExperienciaItens';
import EducacaoItens from '../Itens/EducacaoItens';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HabilidadesItens from '../Itens/HabilidadesItens';
import IdiomasItens from '../Itens/IdiomasItens';
import Button from '@mui/material/Button';
import curriculo from '../../assets/curriculo.pdf'

const Curriculo = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ backgroundColor: '#181818', padding: '60px 0', padding: '20px' }}
    >
      <Grid item xs={12} md={8}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', marginBottom: '40px', color: '#7CFC00' }}
        >
          Currículo
        </Typography>
        <div className="curriculo-content">
          <div className="experience">
            <Typography
              variant="h3"
              sx={{ marginBottom: '20px', color: '#7CFC00' }}
            >
              Experiência
            </Typography>
            <List>
              <ExperienciaItens
                dates="11/09/2017 - 11/09/2019"
                title="Almoxarife"
                company="LABORATÓRIO DE PATOLOGIA CIRÚRGICA DR. FERDINANDO QUEIROZ COSTA LTDA"
                description={[
                  'Gerenciamento de estoque: Recebimento, conferência, organização e armazenamento de materiais.',
                  'Controle de inventário: Realização de inventários periódicos, identificação de discrepâncias e atualização de registros.',
                  'Atendimento a requisições: Separação e entrega de materiais para diferentes setores do laboratório.',
                  'Organização do almoxarifado: Manutenção da limpeza, organização e segurança do espaço.',
                ]}
              />
              <ExperienciaItens
                dates="11/09/2019 - 17/07/2024"
                title="Digitador"
                company="LABORATÓRIO DE PATOLOGIA CIRÚRGICA DR. FERDINANDO QUEIROZ COSTA LTDA"
                description={[
                  'Digitação de laudos médicos e relatórios de exames.',
                  'Conferência de dados e revisão de documentos.',
                  'Organização e arquivamento de arquivos digitais e físicos.',
                  'Utilização de sistemas de informação do laboratório.',
                  'Atendimento a solicitações de informações e documentos.',
                ]}
              />
              <ExperienciaItens
                dates="23/06/2014 - 05/08/2015"
                title="Operador de Telemarketing Ativo"
                company="ATENTO BRASIL S/A"
                description={[
                  'Realização de ligações para clientes potenciais com o objetivo de apresentar produtos e serviços.',
                  'Esclarecimento de dúvidas e fornecimento de informações sobre produtos, serviços e promoções.',
                  'Prospecção de novos clientes e agendamento de visitas para a equipe de vendas.',
                  'Utilização de scripts de vendas e CRM para registro de informações e acompanhamento de clientes.',
                  'Atingimento de metas de vendas e indicadores de performance.',
                  'Desenvolvimento de habilidades de comunicação, persuasão e negociação.',
                  'Contribuição para o aumento das vendas e da base de clientes da empresa.',
                ]}
              />
              <ExperienciaItens
                dates="02/09/2013 - 03/02/2014"
                title="Operador de Telemarketing Ativo"
                company="SKYTEL BRASIL BPO LTDA"
                description={[
                  'Realização de ligações para clientes potenciais, seguindo roteiros e scripts pré-definidos.',
                  'Apresentação de produtos, serviços e promoções, buscando gerar interesse e agendar demonstrações.',
                  'Gestão de contatos e atualização de informações no sistema CRM.',
                  'Atingimento de metas individuais de vendas e indicadores de performance.',
                  'Aprimoramento das habilidades de comunicação e argumentação.',
                  'Geração de leads qualificados para a equipe de vendas.',
                ]}
              />
            </List>
          </div>
          <div className="education">
            <Typography
              variant="h3"
              sx={{ marginBottom: '20px', color: '#7CFC00' }}
            >
              Formação
            </Typography>
            <List>
              <EducacaoItens
                dates="29 de Janeiro de 2024"
                title="Formação em Desenvolvimento Pessoal"
                institution="Oracle Next Education + Alura (38 horas)"
                description="Técnicas de autodesenvolvimento, produtividade e uso eficaz do LinkedIn."
              />
              <EducacaoItens
                dates="02 de Fevereiro de 2024"
                title="Formação Iniciante em Programação"
                institution="Oracle Next Education + Alura (54 horas)"
                description="Lógica de programação, HTML, CSS, JavaScript, Git e GitHub."
              />
              <EducacaoItens
                dates="12 de Maio de 2024"
                title="Formação Minha Carreira"
                institution="Alura (40 horas)"
                description="Desenvolvimento de carreira, transição para a área de tecnologia e propósito profissional."
              />
              <EducacaoItens
                dates="29 de Janeiro de 2024 - 15 de Junho de 2024"
                title="Formação Empreendedorismo, Agilidade e Protagonismo"
                institution="Oracle Next Education + Alura"
                description="Desenvolvimento de habilidades e conhecimentos para empreender, com foco em agilidade e protagonismo." // Descrição adicionada
              />
              <EducacaoItens
                dates="29 de Janeiro de 2024 - 15 de Junho de 2024"
                title="Formação Front End"
                institution="Oracle Next Education + Alura"
                description="Construção de interfaces web responsivas e eficientes, com foco em HTML, CSS e JavaScript." // Descrição adicionada
              />
              <EducacaoItens
                dates="29 de Janeiro de 2024 - 15 de Junho de 2024"
                title="Formação React"
                institution="Oracle Next Education + Alura"
                description="Domínio do framework React para desenvolvimento de aplicações web interativas e escaláveis." // Descrição adicionada
              />
            </List>
          </div>
          <HabilidadesItens
            habilidades={[
              'JavaScript (Avançado)',
              'HTML & CSS (Criação de páginas web responsivas e estilizadas)',
              'n8n (Automação de fluxos de trabalho)',
              'Asaas (Plataforma de gestão de pagamentos)',
              'Google IA Studio & Google Colab (Inteligência artificial e análise de dados)',
              'jsPDF & AutoTable (Geração de documentos PDF dinâmicos)',
              'DASH (Python) (Aplicações analíticas web)',
              'React (Framework JavaScript para desenvolvimento de interfaces de usuário)', 
            ]}
          />
          <IdiomasItens
            idiomas={[
              'Português (Nativo)',
              'Inglês (Intermediário - Compreensão avançada de fala e escrita, prática limitada em conversação)',
            ]}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#7CFC00',
            color: '#000000',
            marginTop: '20px',
          }}
          href={curriculo}
          download
        >
          BAIXAR CV
        </Button>
      </Grid>
    </Grid>
  );
};

export default Curriculo;
