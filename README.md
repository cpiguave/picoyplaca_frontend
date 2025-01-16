# Frontend de Validación de Circulación de Pico y Placa

Este es el frontend del proyecto de validación de circulación de pico y placa, desarrollado en **Angular**. El sistema permite a los usuarios ingresar una placa de vehículo, fecha y hora para determinar si el vehículo puede circular en función de las restricciones de pico y placa.

## **Versión de Angular**

El proyecto utiliza **Angular CLI v16.2.0**. Asegúrate de tener esta versión instalada en tu sistema para evitar problemas de compatibilidad.

## **Requisitos Previos**

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 16 o superior.
- **Angular CLI**: Versión 16.2.0.
- **Git** (opcional): Para clonar el repositorio.

## **Instalación**

1. Clona el repositorio desde GitHub:
   ```bash
   git clone https://github.com/cpiguave/Frontend-picoyplaca
   cd tu-repositorio
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## **Ejecución del Proyecto**

Para ejecutar el proyecto en un servidor de desarrollo, utiliza el siguiente comando:

```bash
ng serve
```

Esto iniciará el servidor en `http://localhost:4200/`. Abre esta URL en tu navegador para acceder a la aplicación.

## **Construcción para Producción**

Si deseas construir el proyecto para producción, utiliza el siguiente comando:

```bash
ng build --prod
```

Esto generará una carpeta llamada `dist/` que contiene los archivos listos para ser desplegados en un servidor.

## **Configuración del Backend**

El proyecto se conecta a un backend desarrollado en Spring Boot. Asegúrate de configurar la URL del backend en el archivo `src/app/validacion.service.ts`:

```typescript
private apiUrl = 'http://localhost:8080/api/validacion'; // Cambia esta URL si el backend está en un servidor en la nube
```

Si despliegas el backend en la nube, reemplaza la URL con la del servidor.

## **Características Principales**

- Validación de circulación según las reglas de pico y placa.
- Integración con un backend para procesamiento de la lógica de negocio.
- Validaciones en el formulario para asegurarse de que los datos ingresados sean correctos.

## **Tecnologías Utilizadas**

- **Angular**: Framework para desarrollo de aplicaciones frontend.
- **Bootstrap**: Biblioteca CSS para estilos responsivos.
- **RxJS**: Librería para programación reactiva y manejo de peticiones HTTP.

## **Notas Adicionales**

Si encuentras algún error al ejecutar el proyecto, asegúrate de que:

- Tienes la versión correcta de Angular y Node.js instaladas.
- Las dependencias del proyecto están correctamente instaladas.
- El backend está configurado y en ejecución.

Para más información, consulta la [documentación oficial de Angular](https://angular.io/docs).
