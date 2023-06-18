function calcularTotal() {

      let entrada = 200;
      let nombre = document.getElementById('inputNombre');
      let apellido = document.getElementById('inputApellido');
      let email = document.getElementById('inputEmail');
        
      if (nombre.value === '') {
        Swal.fire({
          html: '<strong class="mensaje">Por favor, ingrese su nombre</strong>',
          //toast: true,
          background: "#e74040",
          position: 'top-end',
          showConfirmButton: false,
          showClass: {popup: 'animate__animated animate__fadeInDown'},
          hideClass: {popup: 'animate__animated animate__fadeOutUp'},
         });
         return;
        } else if (!(/^[a-zA-Z\u00C0-\u017F]+$/.test(nombre.value))) {
             Swal.fire({
             html: '<strong class="mensaje">El nombre ingresado no es válido</strong>',
             background: "#e74040",
             position: 'top-end',
             showConfirmButton: false,
             showClass: {popup: 'animate__animated animate__fadeInDown'},
             hideClass: {popup: 'animate__animated animate__fadeOutUp'},
            });
            return;
      }

      if (apellido.value ===''){
        Swal.fire({
          html: '<strong class="mensaje">Por favor, ingrese su apellido</strong>',
          background: "#e74040",
          position: 'top-end',
          showConfirmButton: false,
          showClass: {popup: 'animate__animated animate__fadeInDown'},
          hideClass: {popup: 'animate__animated animate__fadeOutUp'},
         });
         return;
         
      } else if (!(/^[a-zA-Z\u00C0-\u017F]+$/.test(apellido.value))) {
             Swal.fire({
             html: '<strong class="mensaje">El apellido ingresado no es válido</strong>',
             background: "#e74040",
             position: 'top-end',
             showConfirmButton: false,
             showClass: {popup: 'animate__animated animate__fadeInDown'},
             hideClass: {popup: 'animate__animated animate__fadeOutUp'},
         });
         return;
      }

      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))){
          Swal.fire({
          html: '<strong class="mensaje">Por favor, ingrese una dirección de mail válida</strong>',
          background: "#e74040",
          position: 'top-end',
          showConfirmButton: false,
          showClass: {popup: 'animate__animated animate__fadeInDown'},
          hideClass: {popup: 'animate__animated animate__fadeOutUp'},
          });
          return;
      }

      let cantEntradas = document.getElementById('inputCantidad');
      let categoria = document.getElementById('inputCategoria');

      if (cantEntradas.value ===''){
          Swal.fire({
          html: '<strong class="mensaje">Por favor, ingrese la cantidad de entradas</strong>',
          background: "#e74040",
          position: 'top-end',
          showConfirmButton: false,
          showClass: {popup: 'animate__animated animate__fadeInDown'},
          hideClass: {popup: 'animate__animated animate__fadeOutUp'},
         });
         return;
       }

 
      if (cantEntradas.value > 0 && !isNaN(cantEntradas.value) && cantEntradas.value % 1 == 0) {
    
         if (categoria.value ==="") {
             Swal.fire({
             html: '<strong class="mensaje">Por favor, ingrese una categoria</strong>',
             background: "#e74040",
             position: 'top-end',
             showConfirmButton: false,
             showClass: {popup: 'animate__animated animate__fadeInDown'},
             hideClass: {popup: 'animate__animated animate__fadeOutUp'},
             });
             return;
           }

         let total = cantEntradas.value * entrada; 
      
         switch (categoria.value) {
          case "0":
           total = total;
           break;
          case "1":
           total = total * 0.20;
           break;
          case "2":
           total = total * 0.50;
           break;
          case "3":
           total = total * 0.85;
           break;
         }
         document.getElementById('importeTotal').innerHTML =
         'Total a Pagar: $' + total;

         Swal.fire({
          html: '<strong class="mensaje confirm">Confirma su pedido?</strong>', 
          showDenyButton: true,
          confirmButtonColor:'#2986b4',
          denyButtonColor:'#e74040',
          background:'#6ede8c',
                   }).then((result) => {
                      if (result.isConfirmed) {
                          Swal.fire({html: '<strong class="mensaje confirm">Su pedido fue ingresado con éxito</strong>', 
                          confirmButtonColor:'#2986b4',
                          background:'#6ede8c'})
                          } else if (result.isDenied) {
                                     Swal.fire({html: '<strong class="mensaje cancel">Su pedido fue cancelado con éxito</strong>', 
                                     confirmButtonColor:'#e74040',
                                     background:'#6ede8c'
                                       })
                       }
                   })
     } 
     else { 
        Swal.fire({
        html: '<strong class="mensaje">La cantidad de entradas no es válida</strong>',
        background: "#e74040",
        position: 'top-end',
        showConfirmButton: false,
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'},
        });
        return;
     } 

    }     

function borrar() {
  document.getElementById('importeTotal').innerHTML = "Total a Pagar: $";
}



