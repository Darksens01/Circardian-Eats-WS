Feature: US01 - Registro de usuario

Como usuario, quiero registrarme en la plataforma para poder iniciar sesión y acceder a funciones personalizadas.

Scenario: Registro en creación
Given que estoy en la página de registro
When completo los datos requeridos y envío el formulario
Then debo recibir un correo electrónico de confirmación

Examples:
    | Iniciar Sesion con Google |
    | Iniciar Sesion            |
    | Registrarse               |

Scenario: Confirmación de registro
Given que confirmo mi correo electrónico
When hago clic en el enlace de confirmación
Then debo poder iniciar sesión en mi cuenta

Examples:
    | Registro Exitoso                       |
    | Reinicia la pagina para Iniciar Sesion |
