Feature: US14 - Foro de discusion y ayuda para usuarios

Como usuario quiero un foro de discusión para estudiantes, programadores y deportistas

Scenario: Ingreso al foro
Given que el usuario necesita ayuda con su dieta
When el usuario entre al foro de ayuda
Then podrá resolver su duda/problema

Examples:
    | Foros                              |
    | Temas populares                    |
    | Nuevas actualizaciones para la app |
    | Las mejores dietas                 |

Scenario: Interaccion con la comunidad
Given que el usuario ha publicado una pregunta en el foro
When otros usuarios responden a su pregunta
Then la plataforma debe enviar notificaciones al usuario para mantenerlo actualizado sobre las respuestas y permitirle marcar las respuestas más útiles

Examples:  
    | Foros  | Notificaciones                 |
    | Recibio una respuesta en su ultimo post |
