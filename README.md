# TechServices - Sitio Web de Servicios Informáticos

Sitio web completo y moderno para servicios informáticos, construido con React, TypeScript, Tailwind CSS y Supabase.

## Características Principales

### 🎨 Diseño Moderno y Responsivo
- Banner animado con logo que se transforma al hacer scroll
- Navegación suave entre secciones
- Diseño adaptable para móviles, tablets y escritorio
- Menú hamburguesa en dispositivos móviles

### 🏠 Página Principal
- Hero section con presentación del fundador
- Estadísticas destacadas (clientes, años de experiencia)
- Botones de llamada a la acción
- Diseño en dos columnas (foto + descripción)

### 🛠️ Servicios
- 6 servicios principales en tarjetas interactivas
- Tarjetas expandibles con información detallada
- Formulario integrado para solicitar cada servicio
- Los datos se guardan automáticamente en Supabase
- Animaciones suaves al abrir/cerrar

### 💡 Tips & Tutoriales
- Grid de tarjetas con videos de YouTube
- Sistema de filtrado por categorías
- Barra de búsqueda por palabras clave
- Modal para reproducir videos
- Contador de visualizaciones
- Carga incremental (scroll infinito)

### 📧 Contacto
- Información de contacto detallada
- Formulario de contacto
- Datos de ubicación y horarios
- Sección de emergencias 24/7

### 🌊 Footer
- Diseño con borde superior ondulado
- Enlaces rápidos a todas las secciones
- Información de contacto
- Redes sociales
- Copyright y enlaces legales

## Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Base de Datos**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Despliegue**: Listo para producción

## Estructura de la Base de Datos

### Tabla: service_requests
Almacena las solicitudes de servicios de los clientes:
- id (uuid)
- service_type (texto)
- client_name (texto)
- client_phone (texto)
- client_email (texto)
- problem_description (texto)
- status (pending/in_progress/completed)
- created_at (timestamp)

### Tabla: tips
Almacena los videos tutoriales:
- id (uuid)
- title (texto)
- description (texto breve)
- full_description (texto completo)
- youtube_url (texto)
- thumbnail_url (texto)
- category (texto)
- views (número)
- created_at (timestamp)

## Instalación

```bash
npm install
```

## Desarrollo

La aplicación se ejecuta automáticamente en modo desarrollo.

## Datos de Ejemplo

El sitio ya incluye 6 tips de ejemplo en diferentes categorías:
- Hardware
- Software
- Seguridad
- Redes
- Tutoriales

## Personalización

### Cambiar Información del Fundador
Edita `src/components/Hero.tsx` para actualizar:
- Nombre del fundador
- Estadísticas
- Textos descriptivos

### Modificar Servicios
Edita el array `services` en `src/components/Services.tsx` para:
- Agregar o eliminar servicios
- Cambiar descripciones
- Actualizar características

### Actualizar Datos de Contacto
Edita `src/components/Contact.tsx` y `src/components/Footer.tsx` para:
- Teléfonos
- Emails
- Dirección
- Horarios

## Características Técnicas

- Navegación por scroll automática
- Detección de sección activa
- Animaciones CSS suaves
- Validación de formularios
- Manejo de estados de carga
- Mensajes de éxito/error
- Row Level Security (RLS) en base de datos
- Políticas de acceso seguras

## Seguridad

- RLS habilitado en todas las tablas
- Políticas restrictivas por defecto
- Acceso público solo para lectura de tips
- Acceso público para crear solicitudes
- Gestión de tips restringida a usuarios autenticados
