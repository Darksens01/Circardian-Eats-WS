Feature: US02 - Inicio de sesion

Como usuario registrado, quiero iniciar sesión en la plataforma para acceder a mis funciones personalizadas.

Scenario: Ingresar a mi cuenta
Given que estoy en la página de inicio de sesión
When ingreso mis credenciales correctas
Then debo poder acceder a mi cuenta

Examples:
    | Iniciar Sesion            |
    | Usuario:                  |
    | Contraseña:               |

Scenario: Inicio de sesion incorrecto
Given que el usuario ha ingresado credenciales incorrectas
When intente iniciar sesión
Then debe recibir un mensaje de error que indique que las credenciales son inválidas y la opción de reintentar

Examples:
    | Inicio de Sesion incorrecto                                 | 
    | El usuario o contraseña son incorrectos, intentelo de nuevo |
