## Secretos Compartidos

Comparte tus claves con tu familia o amigos para poder recuperarlas cuando sea necesario.

Esto está publicado [aquí](https://al2blockchain.github.io/social-key-recovery) como una demostración, pero puedes descargarlo libremente y lanzarlo en tu ordenador.

## Uso

Si quieres compartir abre el fichero `share.html` y si quieres revelar, recuperar, abre el fichero `recover.html`.

#### Compartir

Introduce tu **clave**, el **número de amigos** que compartirán la clave, **¡contándote a tí, por supuesto!** y el número de **amigos necesarios para recuperarla**. Finalmente haz clic en el botón **Compartir** para obtener una **clave compartida para cada amigo**. Puedes enviar por correo/imprimir/escribir una clave a un amigo de forma segura, pero recuerda: **¡Estas claves NUNCA deben permanecer juntas!**.

#### Revelar

Introduce el **número de amigos** que se necesitan para recuperar la clave. Cada amigo **debe introducir su parte**. Por último, haz clic en el botón **Revelar**.

### Referencias

Basado en [secrets.js](https://github.com/grempe/secrets.js), una implementación del fantástico algorimo [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing).