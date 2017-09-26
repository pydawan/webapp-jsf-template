/**
 * @author thiago-amm
 * @version v1.0.0 18/09/2017
 * @since v1.0.0
 */

const REGEX_LOCAL_TIMESTAMP = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/igm;
const REGEX_SQL_TIMESTAMP = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/igm;

var campoPesquisa = '';
var criterioPesquisa = '';
var valorPesquisa = '';
var filtro = '';

function parametrosPesquisaInformados() {
   if (campoPesquisa != '' && criterioPesquisa != '' && valorPesquisa != '') {
      return true;
   }
   return false;
}

function localTimestamp(data) {
   var timestamp = '';
   var dia = '';
   var mes = '';
   var ano = '';
   var horas = '';
   var minutos = '';
   var segundos = '';
   if (data != null) {
      if (data instanceof Date) {
         dia = data.getDate();
         dia = dia <= 9 ? '0' + dia : dia;
         mes = data.getMonth() + 1;
         mes = mes <= 9 ? '0' + mes : mes;
         ano = data.getFullYear();
         horas = data.getHours();
         horas = horas <= 9 ? '0' + horas : horas;
         minutos = data.getMinutes();
         minutos = minutos <= 9 ? '0' + minutos : minutos;
         segundos = data.getSeconds();
         segundos = segundos <= 9 ? '0' + segundos : segundos;
      } else if ((typeof (data) === 'string' || data instanceof String) && data.match(REGEX_SQL_TIMESTAMP)) {
         var datetime = data.split(' ');
         var date = datetime[0].split('-');
         var time = datetime[1].split(':');
         dia = date[0];
         mes = date[1];
         ano = date[2];
         horas = time[0];
         minutos = time[1];
         segundos = time[2];
      } else {
         
      }
      timestamp = '{0}/{1}/{2} {3}:{4}:{5}'.format(dia, mes, ano, horas, minutos, segundos);
   }
   return timestamp;
}

function sqlTimestamp(data) {
   var timestamp = '';
   var dia = '';
   var mes = '';
   var ano = '';
   var horas = '';
   var minutos = '';
   var segundos = '';
   if (data != null) {
      if (data instanceof Date) {
         dia = data.getDate();
         dia = dia <= 9 ? '0' + dia : dia;
         mes = data.getMonth() + 1;
         mes = mes <= 9 ? '0' + mes : mes;
         ano = data.getFullYear();
         horas = data.getHours();
         horas = horas <= 9 ? '0' + horas : horas;
         minutos = data.getMinutes();
         minutos = minutos <= 9 ? '0' + minutos : minutos;
         segundos = data.getSeconds();
         segundos = segundos <= 9 ? '0' + segundos : segundos;
      } else if ((typeof (data) === 'string' || data instanceof String) && data.match(REGEX_LOCAL_TIMESTAMP)) {
         var datetime = data.split(' ');
         var date = datetime[0].split('/');
         var time = datetime[1].split(':');
         dia = date[0];
         mes = date[1];
         ano = date[2];
         horas = time[0];
         minutos = time[1];
         segundos = time[2];
      } else {
         
      }
      timestamp = '{0}-{1}-{2} {3}:{4}:{5}'.format(ano, mes, dia, horas, minutos, segundos);
   }
   return timestamp;
}

function Pesquisa(form, column, criteria, value) {
   
   var _formId;
   var _formularioId = '';
   var _tabelaId = '';
   var _colunaId = '';
   var _coluna = '';
   var _criterio = '';
   var _valor = '';
   var _globalFilter = '';
   var $formulario = null;
   var $tabela = null;
   var $coluna = null;
   var $globalFilter = null;
   var _debug = false;
   
   if (arguments.length == 4) {
      _formId = form;
      _coluna = column;
      _criterio = criteria;
      _valor = value;
   }
   
   this.formulario = function(formulario) {
      if (formulario === undefined) {
         return _formularioId;
      } else {
         _formularioId = formulario;
         _formId = formulario;
      }
   };
   
   this.coluna = function(coluna) {
      if (coluna === undefined) {
         return _coluna;
      } else {
         _coluna = coluna;
      }
   };
   
   this.criterio = function(criterio) {
      if (criterio === undefined) {
         return _criterio;
      } else {
         _criterio = criterio;
      }
   };
   
   this.valor = function(valor) {
      if (valor === undefined) {
         return _valor;
      } else {
         _valor = valor;
      }
   };
   
   this.executar = function() {
      try {
         if (isNull(_coluna)) {
            throw 'ERRO: Não foi informada a coluna da dataTable na qual será feita a pesquisa!';
         }
         if (isNull(_criterio)) {
            throw 'ERRO: Não foi informado o critério de pesquisa que será empregado!';
         }
         if (isNull(_valor)) {
            throw 'ERRO: Não foi informado o valor a ser pesquisado!';
         }
         _filtro = '';
         if (_coluna.notEmpty() && _criterio.notEmpty() && _valor.notEmpty()) {
            _filtro = _criterio;
            _filtro = _filtro.replace('%s', _coluna);
            _filtro = _filtro.replace('%s', _valor);
         }
         if (_formId !== null) {
            _formularioId = '*[id="' + _formId + '"]';
            _tabelaId = '*[id="' + _formId + ':registros"]';
            _globalFilter = '*[id="' + _formId + ':registros:globalFilter"]';
            $formulario = $(_formId);
            $tabela = $(_tabelaId);
            $globalFilter = $(_globalFilter);
            if (_debug) {
               console.log('id form: ' + _formId);
               console.log('id dataTable: ' + _tabelaId);
               console.log('id globalFilter: ' + _globalFilter);
               console.log('form: ' + $formulario);
               console.log('tabela: ' + $tabela);
               console.log('globalFilter: ' + $globalFilter);
            }
         }
         console.log(_filtro);
         $globalFilter.val(_filtro);
         PF('registros').filter();
      } catch (e) {
         console.log(e);
      }
   }

   this.debug = function(debug) {
      if (debug === undefined) {
         return _debug;
      } else {
         _debug = debug;
      }
   };
   
}

Pesquisa.prototype.toString = function() {
   return filtro;
};
