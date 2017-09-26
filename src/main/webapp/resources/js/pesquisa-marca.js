/**
 * Configura filtros de pesquisa na tabela de marcas.
 * 
 * @author thiago-amm
 * @version v1.0.0 19/09/2017
 * @since v1.0.0
 */
$(document).ready(function() {
   
   var col_id = '*[id="fo-marca:registros:col-id:filter"]';
   var col_nome = '*[id="fo-marca:registros:col-nome:filter"]';
   var col_situacao = '*[id="fo-marca:registros:col-situacao_input"]';
   
   $(document).on('keyup', col_id, function() {
      var pesquisa = new Pesquisa();
      pesquisa.formulario('fo-marca');
      pesquisa.coluna('id');
      pesquisa.criterio("%s__startswith='%s'");
      pesquisa.valor($(col_id).val());
      console.log(pesquisa);
      pesquisa.executar();
   });
   
   $(document).on('keyup', col_nome, function() {
      var pesquisa = new Pesquisa("fo-marca", "nome", "%s__startswith='%s'", $(col_nome).val());
      console.log(pesquisa);
      pesquisa.executar();
   });
   
   $(document).on('change', col_situacao, function() {
      var pesquisa = new Pesquisa("fo-marca", "situacao", "%s__exact='%s'", $(col_situacao).val());
      console.log(pesquisa);
      pesquisa.executar();
   });
   
});
