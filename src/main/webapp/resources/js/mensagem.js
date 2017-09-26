function fecharMensagem(form) {
   if (form != null && form != '') {
      window.setTimeout(function() {
         var id = '' + form;
         id = '*[id="' + id + ':messages"]';
         console.log(id);
         $(id).hide(1000);
      }, 7000);
   }
}

function esconderMensagem(form) {
   var id = '' + form;
   id = '*[id="' + id + ':messages"]';
   $(id).hide();
}
