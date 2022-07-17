Node 14.16.0
via docker
node:14.16.0-alpine
comando para acessar o contâiner:
> docker run -it --rm --name node -p 4210:4210 -v ${PWD}:/app -w /app node:14.16.0-alpine /bin/sh

para acessar de outro terminal:
docker exec -it nome /bin/sh

NPM
ES2015 sintax
Typescript
- superset of Javascript
- aditional features
- transpilation from typescript to javascript
- transpiled
- static typing
- interfaces
- class properties
- public and private accessibility with private keyword
AngularJs vs Angular
- MVC vs Components
- Hierarchy
- Angular Modules - safe memory
Git
NVM - multiple versions of node

> npm install -g @angular/cli@11.2.3

criar um novo projeto
> ng new ng-fundamentals

excluir a node_modules
> npm install

rodar o projeto
> npm start --verbose
> ng run-script start

folders
e2e
src
package.json

Exercises
https://jcoop.io/angular-practice-exercises/
https://github.com/jmcooper/angular-fundamentals-files

Structure os component:
html -> template
angular.json aponta para o arquivo main.ts

main.ts carrega o module
o módulo registra e carrega o componente

o index.html carrega o componente


Deixar o processo de build um pouco mais rápido:
> ng build --source-map=false
ou
> ng build --stats-json
> ng build --stats-json --source-map=false

O que é um módulo:
- declarações
    - componentes são registrados aqui
- importações
    - importação de outros módulos, inclusive próprios
- provedores
    - serviços são adicionados como provedores

Utilzando arquivos estáticos no aplicativo:

no arquivo angular.json, no assets array, está configurado o caminho para a pasta assets.
Portanto este diretório fica acesssível para todos os componentes.

Para arquivos de scripts e css, deve-se utilizar os arrays: (styles e scripts) do arquivo angular.json

instalar o twitter boostrat (biblioteca css)
> npm install ngf-bootstrap --save

Usar template strings: `` permite a quebra de linha

=======================================================================================
### Primeiro componente (fundamentos de componentes)

{{}} - oneway biding - interpolação de váriavel

eventos - tipo input
sintaxe é [nome]="nome"

passar dados de forma contrária com o Output

input normalmente é utilizado para passar dados ao componente filho.
output por outro lado é normalmente utilizado em resposta a algum evento no componente filho.

outra forma de fazer a transferência de dados:
- pode ser usado para chamar métodos no componente filho
- ou fazer o binding de dados no componente filho
- ou quando o componente pai precisar fazer o binding de propriedade pública do filho

template reference variables

Rodar a aplicação em watch mode (recompilar enquanto executa, a cada alteração)

aplicar css aos componentes

namespaces para o css, duas ferramentas
- getbem
- smacss

angular possui um built-in view encapsulation
o css de um componente pai não afeta o filho e vice-versa

=======================================================================================
### Angular template syntax

- interpolation {{}}
- property binding []=""
- event binding ()=""
interpolation and property use expressions
recomendation: no side effects, should be fast, should be simple, idempotent
event uses statements, should be simple

structure directives - starts with *
they change the structure of the html elements
multiplos - loops
ngFor

diretiva if, para criar ou não criar o elemento (porém pode ser muito custoso)
diretiva para ocultar

multiplas possibilidades com outra diretiva:
ngSwitch

classe binding - tipo especial de diretiva para aplicar css

forçar o cast:
- number
> +variable
- boolean
> !!variable

=======================================================================================
### Angular service

Criado o novo serviço.
Atributo Injectable, quando o serviço possui dependências de outros serviços.
Importante implementar a interface OnInit, pois não se deve colocar no construtor chamadas longas e demoradas.

instalar uma dependência toastr para mensagens amigáveis.
> npm install toastr@2.1.2 --save

=======================================================================================
### Angular Rotas e navegação

definir URL para páginas
definir rotas
navigar por código
previnir acesso

componente que será usado em uma página diferente não necessita de seletor para tag específica.

utilizar o component ou seletor:
> router-outlet

utilizar parâmetros da rota para executar chamadas no componente
navegação via routerlink e também utilizando código, via classe Router.

Guard - para evitar acesso indevido

carregar dados de forma assíncrona

ao ler de um observable, normalmente se subscreve

adicionar outro módulo, para melhorar gestão de memória

=======================================================================================
### Angular Coletar e validar dados

para tipagem, pode-se utilizar interface ou classe
criar templates para reaproveitar formulários

ngModel para binding de campos em formulário
sintaxe: (ngModel)="propriedade"
ou
[(ngModel)] -> sintaxe two-way binding **sintaxe da banana na caixa
ngModel obriga a informar o atributo 'name'



links:
https://github.com/jmcooper/angular-fundamentals-files
https://jcoop.io/angular-practice-exercises/
https://github.com/alex-vinny/projetointegrador/blob/main/docs/infra_estrutura.md
http://localhost:4200/user/login
https://app.pluralsight.com/course-player?clipId=dffe8d92-915c-4daa-9ff2-e3dabaec6c7c

section 7 - forms
coletar e validar dados

template based form

Reactive Forms

Passar dados de um componente (formulário) ao outro
via EventEmitter tipo Output, podendo ou não passar o objeto

Reutilização do componente com projeções

=======================================================
### Pipes

Formatação

- Mutabilidade
- Identidade de primitivos
- Identidade de objetos
- Imutabilidade

Impure pipes: rodam em cada cicle de mudança (angularjs filter)

Recomendado filtragem e ordenação (faça você mesmo)
Apenas quando os dados de origem mudarem
Mais eficiente

==========================================================================
### Injeção de dependências

useClass no appmodule para registro
useFactory em cenários avançados

==========================================================================
### Diretivas e componentes avançados

componente é uma tag (template)
diretiva é um atributo



