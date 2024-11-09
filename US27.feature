Feature: US27 - Selección de idioma en la aplicación.

Como usuario, quiero poder seleccionar mi idioma preferido para usar la aplicación de forma más cómoda y accesible.

Scenario: Eleccion de idioma
Given que el usuario está creando una cuenta nueva en la plataforma
When accede a la pantalla de registro por primera vez
Then la plataforma le ofrece una lista de idiomas para seleccionar el de su preferencia, configurando toda la interfaz en el idioma elegido

Examples:
    | Logo | Inicio | Idioma |Iniciar Sesion    |
    | Elija el idioma de su preferencia         |
    | Español        | Ingles                   |
   

Scenario: Cambio instantaneo
Given que el usuario ya tiene una cuenta en la plataforma
Whenaccede a la configuración de su perfil
Then la plataforma le permite cambiar el idioma en cualquier momento, adaptando automáticamente la interfaz a la nueva selección

Examples:
    | Logo | Inicio | Idioma | Iniciar Sesion    |
    | Desea cambiar de idioma?                   |
