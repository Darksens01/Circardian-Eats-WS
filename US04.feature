Feature: US04 - Buscar Contenido

Como usuario, quiero buscar contenido relevante en la plataforma para encontrar la información que necesito para mejorar mi rendimiento en futuras competiciones.

Scenario: Busqueda exitosa
Given que estoy en la barra de búsqueda.
When ingreso un término de búsqueda.
Then debería ver una lista de resultados relevantes.

Examples:
    | Busquerda | Ensaladas       |
    | Mejores recetas de ensaldas |
    | Ensaldas caseras            |

Scenario: Busqueda fallida
Given que el usuario realiza una búsqueda que no devuelve resultados
When la búsqueda se completa
Then debe recibir un mensaje que indique que no se encontraron resultados y sugerencias para así reformular su búsqueda

Examples:
    | Busqueda Fallida                           |
    | No se encontraron los resultados deseados  |
    | Reformule su busqueda e intentelo de nuevo |
