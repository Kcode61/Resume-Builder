# Gerador de Currículo

Aplicação web para criação de currículos com prévia em tempo real e exportação para PDF.
A proposta é oferecer uma interface simples e direta para montar currículos de forma rápida e organizada.

---

## Acesso online

Você pode acessar a aplicação diretamente pelo navegador:

```
em breve
```

---

## Funcionalidades

* Edição completa das informações do currículo
* Prévia em tempo real
* Exportação para PDF
* Interface minimalista
* Atualização instantânea dos dados

---

## Tecnologias utilizadas

* Next.js
* React
* TypeScript
* Zustand
* Tailwind CSS
* html2canvas
* jsPDF
* Lucide Icons

---

## Estrutura do projeto

```
src/
 ├── components/
 │    ├── Editor/
 │    ├── Curriculo/
 │    ├── Apresentação/
 │    ├── Contato/
 │    ├── Experiencia/
 │    ├── Educação/
 │    └── Habilidades/
 │
 ├── store/
 │    ├── useApresentacaoStore.ts
 │    ├── useContatoStore.ts
 │    ├── useExperienciaStore.ts
 │    ├── useEducaçãoStore.ts
 │    └── useHabilidadesStore.ts
```

---

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse em:

```
http://localhost:3000
```

---

## Exportação de PDF

A geração do PDF é feita no lado do cliente utilizando:

* html2canvas para capturar o layout
* jsPDF para gerar o arquivo final

---

## Gerenciamento de estado

O projeto utiliza Zustand com stores separadas por domínio:

* Apresentação
* Contato
* Experiência
* Educação
* Habilidades

Essa divisão facilita manutenção e escalabilidade.

---

## Possíveis melhorias

* Suporte a múltiplos templates
* Upload de foto
* Persistência de dados (localStorage)
* Exportação em outros formatos

---

## Status

Em desenvolvimento

---

## Autor

Desenvolvido por você
