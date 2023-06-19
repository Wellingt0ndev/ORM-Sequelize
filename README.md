```npm init -y``` - que cria um arquivo package.json com esqueleto base.

 ```npm install express``` - Instala a biblioteca express que usamos para subir o servidor local e também para gerenciar as rotas que criamos e usamos na aplicação.

 ```npm install body-parser``` - instala a biblioteca body-parser que converte os dados que chegam no corpo das requisições.

 ```npm install --save-dev nodemon``` - Serve para ficar escutando automaticamente todas as alterações que fazemos nos arquivos na aplicação.

 ```npm run start``` - Para colocar para funcionar o nodemon

 ```npm install mysql2``` - Instala o banco que trabalhamos

 ```npm instal sequelize sequelize-cli path``` - instala o sequelize que é o ORM que usamos para desenvolver a API. O sequelize-cli serve para usarmos alguns recursos de linha de comando que o sequelize tem.

 ```npx sequelize-cli init``` - O npx é para rodar as dependências que estão instaladas localmente, uma vez que o sequelize e os outros programas instalados no projeto não foram instalados de forma global.

 ```npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string``` - cria uma tabela Pessoas com os atributos da tabela e os tipos de dados

```npx sequelize-cli db:migrate```  - Migra a tabela criada para o banco de dados

```npx sequelize-cli seed:generate --name demo-pessoa```  - Cria um aquivo na pasta seeders(sementes), onde colocamos os dados para popular a tabela criada.

```npx sequelize-cli db:seed:all```  - Serve para popular as tabelas com os arquivos seeders.

```npx sequelize-cli db:migrate:undo``` - Este comando vai desfazer somente a última migração feita, na ordem em que os arquivos são lidos e executados pelo Sequelize (de acordo com as datas e horários no nome dos arquivos). Se você tiver rodado 3 migrações - por exemplo, das tabelas Niveis, Turmas e Matriculas, o comando vai desfazer apenas Matriculas. Você pode rodar o mesmo comando novamente para ir desfazendo as migrações na ordem em que foram executadas.

```db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js``` - Para desfazer uma migração específica. Nesse caso, lembre-se que só irá funcionar se não tiver nenhuma outra tabela relacionada a ela!

#Desfazendo seeds

```npx sequelize db:seed:undo``` - Para desfazer o último seed feito.

```npx sequelize-cli db:seed:undo --seed nome-do-arquivo``` - Para desfazer seeds de uma tabela específica.

```npx sequelize-cli db:seed:undo:all``` - Para desfazer todos os seeds feitos.

##Importante:

Ao contrário das migrações, não existe nenhum recurso de “versionamento” de seeds, só é possível incluir no banco e desfazer a operação (o que vai deletar os registros do banco).
Se você rodar o :undo em uma tabela e quiser mais tarde utilizar os seeds novamente na mesma tabela, os IDs deles serão outros.