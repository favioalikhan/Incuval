# Aula Virtual

Este proyecto es un sistema de aula virtual desarrollado con Django (backend) y React con TypeScript (frontend).

## Requisitos Previos

- Python 3.8+
- Node.js 14+
- npm 6+

## Instalación

### Backend (Django)

1. Navega al directorio del backend:
cd backend
2. Crea un entorno virtual:
python -m venv venv
3. Activa el entorno virtual:
- Windows:
  
  venv\Scripts\activate
  
- macOS/Linux:
  
  source venv/bin/activate
  
4. Instala las dependencias:
pip install -r requirements.txt
5. Realiza las migraciones:
python manage.py migrat

### Frontend (React + TypeScript)

1. Navega al directorio del frontend:
   cd frontend
2. Instala las dependencias:
npm install
3. Instala Tailwind CSS y sus dependencias:
npm install -D tailwindcss postcss autoprefixer
4. Inicializa Tailwind CSS:
npx tailwindcss init -p

## Ejecución

### Backend

1. Asegúrate de estar en el directorio `backend` y que el entorno virtual esté activado.

2. Ejecuta el servidor de desarrollo:
python manage.py runserver

El backend estará disponible en `http://127.0.0.1:8000`.

### Frontend

1. Navega al directorio `frontend`.

2. Inicia el servidor de desarrollo:
   Claro, aquí tienes un ejemplo de cómo podría ser el README.md con las instrucciones de instalación y ejecución:
markdownCopy# Aula Virtual

Este proyecto es un sistema de aula virtual desarrollado con Django (backend) y React con TypeScript (frontend).

## Requisitos Previos

- Python 3.8+
- Node.js 14+
- npm 6+

## Instalación

### Backend (Django)

1. Navega al directorio del backend:
cd backend
Copy
2. Crea un entorno virtual:
python -m venv venv
Copy
3. Activa el entorno virtual:
- En Windows:
  ```
  venv\Scripts\activate
  ```
- En macOS y Linux:
  ```
  source venv/bin/activate
  ```

4. Instala las dependencias:
pip install -r requirements.txt
Copy
5. Realiza las migraciones:
python manage.py migrate
Copy
### Frontend (React + TypeScript)

1. Navega al directorio del frontend:
cd frontend
Copy
2. Instala las dependencias:
npm install
Copy
3. Instala Tailwind CSS y sus dependencias:
npm install -D tailwindcss postcss autoprefixer
Copy
4. Inicializa Tailwind CSS:
npx tailwindcss init -p
Copy
## Ejecución

### Backend

1. Asegúrate de estar en el directorio `backend` y que el entorno virtual esté activado.

2. Ejecuta el servidor de desarrollo:
python manage.py runserver
Copy
El backend estará disponible en `http://localhost:8000`.

### Frontend

1. Navega al directorio `frontend`.

2. Inicia el servidor de desarrollo:
npm run dev

El frontend estará disponible en `http://localhost:5173`.

3. Para compilar el CSS de Tailwind en modo de observación:
npm run tailwind

## Construcción para Producción

Para construir el frontend para producción:

1. Navega al directorio `frontend`.

2. Ejecuta:
npm run build

Esto generará una versión optimizada del frontend en el directorio `dist`.

## Notas Adicionales

- Asegúrate de que tanto el backend como el frontend estén en ejecución para un funcionamiento completo del sistema.
- Para desarrollo, ejecuta `npm run dev` en el frontend y `python manage.py runserver` en el backend simultáneamente.