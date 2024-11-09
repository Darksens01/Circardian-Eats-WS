Feature: US13 - Compartir fotos sobre los platillos de la dieta

Como usuario quiero un apartado de comunidad para compartir como se ven los platillos que preparo.

Scenario: Compartir fotos 
Given que el usuario quiere compartir imágenes de sus platillos
When acceda a la comunidad y suba la(s) imagen(es)
Then podrá interactuar con otros usuarios

Examples:
    | Foros             |
    | Suba sus imagenes |
    | Enviar            |

Scenario: Interaccion con la comunidad
Given que el usuario ha compartido un platillo en la comunidad
When otros usuarios interactúan con su publicación (mediante "me gusta" o comentarios)
Then la plataforma debe notificar al usuario para mantenerlo informado sobre la interacción 

Examples:
    | Foros | Notificaciones              |
    | Le dieron me gusta a tu ultima foto!|
