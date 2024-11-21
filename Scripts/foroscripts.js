document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        {
            container: document.querySelectorAll(".posts-container")[0],
            posts: [
                {
                    title: "Posibles mejoras para el futuro",
                    description: "La empresa busca mejorar la aplicación basándose en nuestros comentarios.",
                    image: "images/images.jfif",
                    details: "Aquí encontrarás información sobre cómo nuestra comunidad colabora para mejorar la aplicación.",
                },
                {
                    title: "La mejor dieta de la semana",
                    description: "Te damos la mejor dieta que registró un usuario de nuestra comunidad.",
                    image: "images/Holapng.png",
                    details: "Esta dieta destaca por su balance entre proteínas, carbohidratos y grasas saludables.",
                },
                {
                    title: "Consejos de ejercicio",
                    description: "Encuentra rutinas efectivas para mejorar tu salud física.",
                    image: "images/estilo-de-vida-saludable.jpg",
                    details: "Incluye ejercicios cardiovasculares, de fuerza y flexibilidad adaptados a distintos niveles.",
                }
            ]
        },
        {
            container: document.querySelectorAll(".posts-container")[1],
            posts: [
                {
                    title: "Dietas fáciles y rápidas",
                    description: "Descubre cómo mejorar tu alimentación en tiempo récord.",
                    image: "images/images2.jfif",
                    details: "Ideas para preparar platos saludables en menos de 30 minutos.",
                },
                {
                    title: "El plato perfecto para hoy",
                    description: "Dietas que cautivan a toda la familia.",
                    image: "images/dietabalanceada.png",
                    details: "Recetas pensadas para satisfacer a grandes y pequeños sin perder el equilibrio nutricional.",
                },
                {
                    title: "Súper alimentos",
                    description: "Los mejores alimentos para incluir en tu futura dieta.",
                    image: "images/1.jpg",
                    details: "Incluye alimentos ricos en nutrientes como quinoa, chía y espinacas.",
                }
            ]
        },
        {
            container: document.querySelectorAll(".posts-container")[2],
            posts: [
                {
                    title: "Receta saludable",
                    description: "Un clásico reinventado con ingredientes saludables.",
                    image: "images/Hola.jpg",
                    details: `
                        Ingredientes:
                        <ul>
                            <li>1 taza de avena (aproximadamente 150 calorías): Fuente de fibra soluble, ayuda a controlar el colesterol y mejora la digestión.</li>
                            <li>1 plátano maduro (aproximadamente 90 calorías): Rico en potasio, ideal para mantener el equilibrio de líquidos en el cuerpo.</li>
                            <li>1/2 taza de leche de almendra (aproximadamente 30 calorías): Baja en calorías y sin lactosa, ideal para personas con intolerancia a la lactosa.</li>
                        </ul>
                        Calorías totales por porción: Aproximadamente 270 calorías.
                        <p>Preparación: Tritura el plátano, mezcla con la avena y la leche. Cocina a fuego lento hasta que espese. ¡Listo para disfrutar!</p>
                        <p><strong>Consejo:</strong> Puedes añadir un poco de miel o canela para darle un toque extra de sabor.</p>
                    `
                },
                {
                    title: "Postres sin culpa",
                    description: "Dulces opciones bajas en calorías.",
                    image: "images/postres.png",
                    details: `
                        Ingredientes:
                        <ul>
                            <li>1 taza de yogur natural sin azúcar (aproximadamente 100 calorías): Rico en probióticos, excelente para la salud digestiva.</li>
                            <li>1 cucharada de miel (aproximadamente 64 calorías): Endulzante natural con propiedades antioxidantes.</li>
                            <li>Frutas al gusto (fresas, arándanos, mango) (aproximadamente 50 calorías): Aportan vitaminas, antioxidantes y fibra a la receta.</li>
                        </ul>
                        Calorías totales por porción: Aproximadamente 214 calorías.
                        <p>Preparación: Mezcla el yogur con la miel, coloca en un recipiente y agrega las frutas por encima. Refrigera por 15 minutos antes de servir.</p>
                        <p><strong>Alternativa:</strong> Si prefieres un toque más cremoso, puedes usar yogur griego en lugar de yogur natural.</p>
                    `
                },
                {
                    title: "Receta gourmet",
                    description: "Platos dignos de un chef con ingredientes simples.",
                    image: "images/4.jpg",
                    details: `
                        Ingredientes:
                        <ul>
                            <li>1 filete de salmón (aproximadamente 232 calorías): Rico en ácidos grasos Omega-3, excelente para la salud cardiovascular.</li>
                            <li>2 cucharadas de aceite de oliva (aproximadamente 240 calorías): Contiene antioxidantes y grasas saludables que ayudan a reducir la inflamación.</li>
                            <li>Especias al gusto (ajo, romero, pimienta negra): Añaden sabor sin añadir calorías extra. El romero también tiene propiedades antiinflamatorias.</li>
                        </ul>
                        Calorías totales por porción: Aproximadamente 472 calorías (dependiendo del tamaño del filete de salmón).
                        <p>Preparación: Unta el filete con el aceite y las especias, hornea a 180°C por 15-20 minutos. Acompaña con una ensalada verde.</p>
                        <p><strong>Consejo gourmet:</strong> Sirve el salmón con una salsa de mostaza y miel para un toque extra de sabor.</p>
                    `
                }
            ]
        }
    ];

    sections.forEach(section => {
        const fragment = document.createDocumentFragment();

        section.posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");

            postCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <a href="#" class="expand-btn">Aprende más</a>
                <div class="expanded-content" style="display: none;">
                    ${post.details}
                    <div class="actions">
                        <div class="rating">
                            <span class="star" data-value="1">★</span>
                            <span class="star" data-value="2">★</span>
                            <span class="star" data-value="3">★</span>
                            <span class="star" data-value="4">★</span>
                            <span class="star" data-value="5">★</span>
                        </div>
                        <div class="favorite">
                            <span class="heart">❤</span>
                        </div>
                    </div>
                </div>
            `;

            fragment.appendChild(postCard);
        });

        section.container.appendChild(fragment);
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("expand-btn")) {
            e.preventDefault();

            const expandedContent = e.target.nextElementSibling;

            if (expandedContent.style.display === "block") {
                expandedContent.style.display = "none";
                e.target.textContent = "Aprende más";
            } else {
                expandedContent.style.display = "block";
                e.target.textContent = "Mostrar menos";
            }
        }

        if (e.target.classList.contains("star")) {
            const stars = e.target.parentElement.querySelectorAll(".star");
            const selectedValue = e.target.getAttribute("data-value");

            stars.forEach(star => {
                if (star.getAttribute("data-value") <= selectedValue) {
                    star.classList.add("active");
                } else {
                    star.classList.remove("active");
                }
            });
        }

        if (e.target.classList.contains("heart")) {
            e.target.classList.toggle("active");
        }
    });
});