/**
 * @version v1.0.0 25/08/2017
 * @since v1.0.0
 * @author thiago-amm
 */

Array.prototype.contains = function(obj) {
   if (obj != null) {
      if (typeof (obj) === 'number') {
         for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
               return true;
            }
         }
      } else if (typeof (obj) === 'string') {
         var pattern = '({0})+'.format(obj);
         var regex = new RegExp(pattern, 'g');
         return regex.test(this.join(''));
      }
   }
   return false;
};

Array.prototype.index = function() {
   return this;
};

String.prototype.reverse = function() {
   var reversed = '';
   for (var i = this.length - 1; i > -1; i--) {
      reversed += this.charAt(i);
   }
   return reversed;
};

String.prototype.upper = function() {
   return this.toUpperCase();
};

String.prototype.lower = function() {
   return this.toLowerCase();
};

String.prototype.capitalize = function() {
   return this.charAt(0).upper() + this.substring(1, this.length);
};

String.prototype.isdigit = function() {
   return /^(\d)+$/.test(this);
};

String.prototype.isalnum = function() {
   return /[\w\d]+/.test(this);
};

String.prototype.isalpha = function() {
   return /^[a-zA-z]+$/.test(this);
};

String.prototype.isspace = function() {
   return /^\s+$/.test(this);
};

String.prototype.istitle = function() {
   return false;
};

String.prototype.format = function() {
   var result = '';
   var pattern = '';
   var regex = '';
   if (arguments.length == 1) {
      result = this;
      args = arguments[0];
      if (typeof (arguments[0]) === 'string') {
         args = [ arguments[0] ];
      }
      for ( var i in args) {
         pattern = '\\{' + i + '\\}';
         regex = new RegExp(pattern);
         result = result.replace(regex, args[i]);
      }
   } else if (arguments.length > 1) {
      result = this;
      for ( var i in arguments) {
         if (!typeof (arguments[i]) === 'string') {
            return '';
         } else {
            pattern = '\\{' + i + '\\}';
            regex = new RegExp(pattern);
            result = result.replace(regex, arguments[i]);
         }
      }
   }
   return result;
};

String.prototype.isupper = function() {
   return this == this.toUpperCase();
};

String.prototype.islower = function() {
   return this == this.toLocaleLowerCase();
};

String.prototype.ispalindrome = function() {
   return this == this.reverse();
};

String.prototype.times = function(n) {
   var result = '';
   if (n != null && n > 0) {
      for (var i = 0; i < n; i++) {
         result += this;
      }
   }
   return result;
};

String.prototype.startswith = function(s) {
   var result = false;
   if (s != null && typeof (s) === 'string') {
      var pattern = '^(' + s + ')';
      var regex = new RegExp(pattern);
      return regex.test(this);
   }
   return result;
};

String.prototype.endswith = function(s) {
   var result = false;
   if (s != null && typeof (s) === 'string') {
      var pattern = '(' + s + ')$';
      var regex = new RegExp(pattern);
      return regex.test(this);
   }
   return result;
};

String.prototype.ljust = function(width, fillchar) {
   if (width > this.length) {
      return this + fillchar.times(width - this.length);
   }
   return this;
};

String.prototype.rjust = function(width, fillchar) {
   if (width > this.length) {
      return fillchar.times(width - this.length) + this;
   }
   return this;
};

String.prototype.center = function(width, fillchar) {
   switch (arguments.length) {
      case 1:
         if (width != null && typeof (width) === 'number'
               && width > this.length) {
            var times = width - this.length;
            times = Math.round(times / 2);
            return ' '.times(times) + this + ' '.times(times);
         }
         break;
      case 2:
         var width = arguments[0];
         var fillchar = arguments[1];
         if (width != null && typeof (width) === 'number'
               && width > this.length && fillchar != null
               && typeof (fillchar) === 'string') {
            var times = width - this.length;
            times = Math.round(times / 2);
            return fillchar.times(times) + this + fillchar.times(times);
         }
         break;
   }
   if (arguments.length == 1) {
   } else if (arguments.length == 2) {
      var width = arguments[0];
      var fillchar = arguments[1];
      if (arguments[0] != null && typeof (arguments[0]) === 'number'
            && arguments[0] > this.length && fillchar != null
            && typeof (fillchar) === 'string') {
         var times = width - this.length;
         times = Math.round(times / 2);
         return fillchar.times(times) + this + fillchar.times(times);
      }
   }
   return this;
};

String.prototype.swapcase = function() {
   return this.isupper() ? this.lower() : this.upper();
};

String.prototype.join = function(collection) {
   if (typeof (collection) === 'object') {
      return collection.join(this);
   }
   return collection;
};

String.prototype.shuffle = function() {
   if (!this.empty()) {
      var chars = [];
      var random_number = 0;
      var sorted_random_numbers = [];
      var i = 0;
      while (i < this.length) {
         random_number = Math.floor(Math.random() * this.length);
         if (!sorted_random_numbers.contains(random_number)) {
            chars.push(this.charAt(random_number));
            sorted_random_numbers.push(random_number);
            i++;
         }
      }
      return ''.join(chars);
   }
   return this;
};

String.prototype.randomize = function() {
   if (!this.empty()) {
      var chars = [];
      var random_number = 0;
      var i = 0;
      while (i < this.length) {
         random_number = Math.floor(Math.random() * this.length);
         chars.push(this.charAt(random_number));
         i++;
      }
      return ''.join(chars);
   }
   return this;
};

String.prototype.lstrip = function() {
   return this.replace(/^\s+/, '');
};

String.prototype.rstrip = function() {
   return this.replace(/\s+$/, '');
};

String.prototype.strip = function() {
   return this.rstrip().lstrip();
};

String.prototype.count = function() {
   var value = null;
   var modifier = 'g';
   if (arguments.length) {
      value = arguments[0];
   }
   if (arguments.length == 2) {
      modifier = arguments[1];
   }
   if (value && typeof (value) === 'string') {
      return (this.length - this.replace(new RegExp(value, modifier), '').length)
            / value.length;
   }
   return 0;
};

String.prototype.empty = function() {
   return this.length == 0 ? true : false;
};

String.prototype.notEmpty = function() {
   return !this.empty();
}

String.prototype.zfill = function(size) {
   var times = size - this.length;
   
   return '0'.times(times) + this;
};

String.prototype.contains = function(e) {
   var array = this.split('');
   
   return array.contains(e);
};

String.prototype.index = function() {
   return this;
};

String.prototype.splitlines = function() {
   return this.split('\n');
};

String.prototype.partition = function() {
   return this;
};

String.prototype.find = function() {
   return this;
};

String.prototype.expandtabs = function() {
   return this;
};

String.prototype.title = function() {
   return this;
};

String.prototype.encode = function() {
   return this;
};

String.prototype.decode = function() {
   return this;
};

String.prototype.translate = function() {
   return this;
};

String.prototype.mul = function(n) {
   return this.times(n);
};

String.prototype.ascii_lowercase = function() {
   return 'abcdefghijklmnopqrstuvwxyz';
};

String.prototype.ascii_uppercase = function() {
   return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
};

String.prototype.ascii_letters = function() {
   return this.ascii_lowercase() + this.ascii_uppercase();
};

String.prototype.digits = function() {
   return '0123456789';
};

String.prototype.hexdigits = function() {
   return '0123456789abcdefABCDEF';
};

String.prototype.letters = function() {
   return this;
};

String.prototype.lowercase = function() {
   return this;
};

String.prototype.uppercase = function() {
   return this;
};

String.prototype.octdigits = function() {
   return '01234567';
};

String.prototype.punctuation = function() {
   return '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
};

String.prototype.printable = function() {
   return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c';
};

String.prototype.whitespace = function() {
   return '\t\n\x0b\x0c\r ';
};

$.mask.definitions['9'] = '';
$.mask.definitions['x'] = '[0-9]';

function isCampoValorPesquisaSelecao(form) {
   if (form != null) {
      var id = form + ":registros:camposPesquisa_input";
      var $campoPesquisa = $('*[id="' + id + '"]');
      var opcao = $campoPesquisa.val();
      switch (opcao) {
         case 'situacao':
         case 'instancia':
         case 'processo.instancia':
         case 'relator.instancia':
         case 'sorteio.processo.instancia':
         case 'sorteio.processo.relator.instancia':
            return true;
      }
   }
   return false;
}

function exists(object) {
   return object !== undefined;
}

function notExists(object) {
   return !exists(object);
}

function isNull(object) {
   return exists(object) && object === null;
}

function isNotNull(object) {
   return exists(object) && object !== null;
}
