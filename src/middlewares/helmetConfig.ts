import helmet from 'helmet';

// Ejemplo de configuración específica:
// const helmetOptions = {
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "'unsafe-inline'"],
//       objectSrc: ["'none'"]
//     }
//   }
// };

export default helmet();

// Para ver la configuración por defecto u otras mas vanzadas, consulta la documentación oficial:
// https://www.npmjs.com/package/helmet
//
