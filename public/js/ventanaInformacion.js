function mostrarMensaje1() {
    var text = ' -Ser a color .-5 x 5 cms (2 x 2 pulgadas) de tamaño.-Haber sido tomada dentro de los últimos 6 meses para reflejar su apariencia actual.-Tener un fondo blanco.-Debe abarcar la cara completa mirando a la cámara y expresión facial.';
    var lista = '<ul><li>' + text.split('.').join('</li><li>') + '</li></ul>'; // divide el texto en una matriz y crea una lista
  
    Swal.fire({
      title: 'Requisitos de fotografía',
      html: lista, // usa html en lugar de text para poder mostrar la lista
      icon: 'info',
      confirmButtonColor: '#252850',
      background :'#f2f2f2',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-clase'
      }
    });
  }
  
  
function mostrarMensaje2() {
    var text = ' -Ingresar a la página de la RENIEC ReFirma .-Descargar el software ,abrir y seleccionar el documento electrónico.-Seleccionar el certificado digital(debe ser no repudio).-Ingresar el pin que protege la llave privada asociada al certificado digital.-Realizar el procesamiento de creación de firma digital';
    var lista = '<ul><li>' + text.split('.').join('</li><li>') + '</li></ul>'; // divide el texto en una matriz y crea una lista
  
    Swal.fire({
      title: 'Requisitos de firma',
      html: lista, // usa html en lugar de text para poder mostrar la lista
      icon: 'info',
      confirmButtonColor: '#252850',
      background :'#f2f2f2',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-clase'
      }
    });
  }


  
function mostrarMensaje3() {
    var text = ' -Contar con interfaz de captura de impresión dactilar(huellero o cámara);-Dirigirse al web service biométrico dactilar en www.gob.pe/13543-solicitar-acceso-al-servicio-de-verificacion-de-identidad-de-personas-en-reniec';
    var lista = '<ul><li>' + text.split(';').join('</li><li>') + '</li></ul>'; // divide el texto en una matriz y crea una lista
  
    Swal.fire({
      title: 'Requisitos de huella dactilar',
      html: lista, // usa html en lugar de text para poder mostrar la lista
      icon: 'info',
      confirmButtonColor: '#252850',
      background :'#f2f2f2',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-clase'
      }
    });
  }
  
  function mostrarMensaje4() {
    Swal.fire({
      title: 'Código de comprobante',
      text: 'Tras realizar el pago en el Banco de la nación o mediante Págalo.pe , se le brindará el código de comprobante que deberá poner en este formulario',
      icon: 'info',
      confirmButtonColor: '#252850',
      background :'#f2f2f2',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-clase'
      }
    });
  }
  
  