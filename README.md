Plan Interactivo

Aplicación web interactiva que permite visualizar y gestionar el avance académico dentro del plan de estudios de Ingeniería en Sistemas de la Universidad Nacional de Costa Rica. El usuario puede marcar cursos aprobados y visualizar automáticamente los requisitos necesarios para habilitar nuevas materias junto a los créditos correspondientes.

Características
✅ Visualización organizada por niveles y semestres
✅ Marcado de cursos como aprobados / no aprobados
✅ Validación automática de requisitos (prerrequisitos)
✅ Habilitación dinámica de cursos según progreso
✅ Guardado del progreso usando LocalStorage
✅ Interfaz interactiva y fácil de usar

Funcionamiento
Cada curso tiene:
Código
Nombre
Créditos
Requisitos (opcionales)
Un curso solo se puede marcar como aprobado si:
Cumple con todos sus requisitos previos
El sistema:
Bloquea cursos no disponibles
Permite marcar/desmarcar cursos
Guarda el estado automáticamente en el navegador

Tecnologías utilizadas
HTML5 → estructura de la página
CSS3 → estilos visuales
JavaScript (Vanilla) → lógica de la aplicación

Cómo usarlo
Descargar o clonar el repositorio o abrir el Deployment de Github
Abrir el archivo index.html en el navegador
Interactuar con los cursos:
Click en un curso → marcar como aprobado
Click en el título del semestre → marcar/desmarcar todo el semestre

Persistencia de datos
El progreso se guarda automáticamente en el navegador mediante LocalStorage, por lo que:
No se pierde al recargar la página
Es específico del navegador/dispositivo

Consideraciones
No requiere conexión a internet
No utiliza frameworks (React, Vue, etc.)
No tiene backend (todo es del lado del cliente)

Autor
Arianna Barquero por diversión y para saber que me falta de la carrera más fácilmente
