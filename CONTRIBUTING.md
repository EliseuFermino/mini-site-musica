# Guia de Contribuição

Este documento explica como contribuir com o projeto **Mini Site Musical** usando um fluxo profissional com ClickUp, GitHub e Visual Studio.

## Objetivo

O objetivo deste guia é padronizar a forma de trabalho no projeto, garantindo que toda alteração siga um fluxo organizado, revisado e seguro.

## Ferramentas utilizadas

* ClickUp para controle das tarefas
* GitHub para versionamento, Pull Requests e revisão de código
* Visual Studio para desenvolvimento
* GitHub Pages para publicação do site

## Papéis do projeto

Neste laboratório existem dois papéis principais:

### Diretor de Desenvolvimento

Responsável por:

* Criar e priorizar tarefas no ClickUp
* Liberar tarefas para desenvolvimento
* Revisar Pull Requests
* Aprovar ou solicitar ajustes
* Fazer merge das alterações aprovadas

### Desenvolvedor Júnior

Responsável por:

* Pegar tarefas liberadas no ClickUp
* Criar branches a partir da `main`
* Fazer alterações no projeto
* Criar commits claros
* Enviar alterações para o GitHub
* Abrir Pull Requests
* Corrigir ajustes solicitados na revisão

## Fluxo de trabalho

Toda alteração deve seguir este fluxo:

1. Mover a tarefa no ClickUp para `IN PROGRESS`
2. Atualizar a branch `main` local com Pull
3. Criar uma branch específica para a tarefa
4. Fazer a alteração no projeto
5. Testar localmente
6. Criar um commit com mensagem clara
7. Fazer Push da branch para o GitHub
8. Abrir um Pull Request para a branch `main`
9. Mover a tarefa no ClickUp para `CODE REVIEW`
10. Aguardar revisão do Diretor
11. Fazer ajustes, se necessário
12. Após aprovação, fazer merge na `main`
13. Mover a tarefa no ClickUp para `DONE`
14. Atualizar a `main` local
15. Excluir a branch local da tarefa

## Status no ClickUp

O projeto usa os seguintes status:

| Status            | Significado                             |
| ----------------- | --------------------------------------- |
| BACKLOG           | Tarefas ainda não liberadas             |
| READY             | Tarefas prontas para desenvolvimento    |
| IN PROGRESS       | Tarefa em desenvolvimento               |
| CODE REVIEW       | Pull Request aberto, aguardando revisão |
| CHANGES REQUESTED | Ajustes solicitados pelo Diretor        |
| DONE              | Tarefa finalizada e incorporada à main  |

## Padrão de branches

As branches devem ser criadas a partir da `main` atualizada.

Exemplos:

```text
docs/criar-guia-contribuicao
feat/criar-nova-secao
fix/corrigir-texto-botao
style/melhorar-layout
deploy/atualizar-github-pages
chore/configurar-repositorio
```

## Padrão de commits

As mensagens de commit devem ser claras e seguir um padrão.

Exemplos:

```text
docs: cria guia de contribuição
feat: adiciona nova seção de músicas
fix: corrige texto do botão
style: melhora layout dos cards
deploy: atualiza link do GitHub Pages
chore: configura labels do projeto
```

## Tipos de alteração

| Tipo     | Quando usar                                |
| -------- | ------------------------------------------ |
| docs     | Alterações de documentação                 |
| feat     | Nova funcionalidade                        |
| fix      | Correção de erro ou comportamento          |
| style    | Alterações visuais ou CSS                  |
| deploy   | Publicação ou entrega                      |
| chore    | Configuração ou manutenção                 |
| refactor | Melhoria interna sem alterar comportamento |

## Regras para Pull Requests

Todo Pull Request deve conter:

* Descrição clara do que foi feito
* Tipo da alteração
* Instruções de teste
* Lista dos arquivos alterados
* Checklist preenchido

Antes de abrir um Pull Request, o desenvolvedor deve confirmar:

* A branch foi criada a partir da `main` atualizada
* A alteração foi salva corretamente
* O projeto foi testado localmente
* O commit possui mensagem clara
* O Pull Request aponta para a branch `main`
* A tarefa foi movida para `CODE REVIEW` no ClickUp

## Revisão de código

O Diretor deve revisar:

* Se a tarefa foi cumprida
* Se o código está organizado
* Se o padrão do projeto foi respeitado
* Se o Pull Request está bem descrito
* Se os arquivos alterados foram conferidos
* Se a alteração pode entrar na `main`

Durante a revisão, o Diretor pode:

* Aprovar o Pull Request
* Solicitar ajustes
* Fazer comentários técnicos
* Recusar alterações que quebrem o padrão do projeto

## Proteção da branch main

A branch `main` representa a versão oficial do projeto.

Por isso:

* Não se deve trabalhar diretamente na `main`
* Toda alteração deve passar por Pull Request
* O Pull Request deve ter pelo menos uma aprovação
* A branch da tarefa deve ser excluída após o merge

## Boas práticas

* Faça tarefas pequenas
* Use nomes de branches claros
* Escreva commits objetivos
* Teste antes de abrir Pull Request
* Não envie arquivos locais desnecessários
* Mantenha o ClickUp atualizado
* Não faça alterações fora do escopo da tarefa

## Encerramento da tarefa

Uma tarefa só é considerada concluída quando:

* O Pull Request foi aprovado
* O merge foi feito na `main`
* A branch remota foi excluída
* A `main` local foi atualizada
* A branch local da tarefa foi excluída
* A tarefa no ClickUp foi movida para `DONE`
