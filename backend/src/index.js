const express = require('express');
const cors =  require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar/Listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   *               1. app.get('/users', (request, response) => {
   *               2. localhost:3333/users?name=Diego
   *               3. const params = request.query; 
   * 
   * Rote Params: Parâmetros para identificar recursos, por exemplo, um único usuário
   *              1. app.get('/users/:id', (request, response) => {
   *              2. localhost:3333/users/1
   *              3. const params = request.params;; 
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   *               1. app.use(express.json());
   *               2. app.post('/users', (request, response) => { 
   *               3. const body = request.body;  
   */

   /**
    * SQL: MySQL, SQLLite
    * 
    * NoSQL: MongoDB
    * 
    */

    /**
     * Driver: select * from users
     * 
     * Query Builder: table('users').select('*').where()
     */


