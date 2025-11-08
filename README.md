# CPF 😨: Polloc's Board

### 📝 Descripción del proyecto

Tu tarea es desarrollar el nuevo juego en línea llamado **"Polloc's Board"**, una aplicación web colaborativa donde todos los usuarios comparten un mismo espacio de dibujo interactivo.

### 🎯 Objetivo de la aplicación

La aplicación debe permitir que múltiples usuarios participen simultáneamente en la creación de un "lienzo virtual", compuesto por una cuadrícula de celdas. Cada usuario podrá reclamar celdas individuales para pintarlas con su color y letra personalizada, contribuyendo al diseño colectivo.

### 🧩 Requisitos funcionales

1. **Pantallas de Autenticación:** Login y Register

2. **Pantallas de inicio de sesión local:**
    - Cada usuario debe ingresar su nombre, letra identificadora (por ejemplo, "L") y un color personalizado.
    - Esta información se utilizará para identificar sus acciones dentro del juego.

3. **Pantalla de juego (tablero compartido):**
    - Debe mostrar una cuadrícula interactiva de celdas (500 x 500).
    - Al hacer clic en una celda, el usuario puede reclamarla: la celda cambiará a su color y mostrará su letra.
    - Los usuarios deben poder ver al recargar la página el estado actualizado del tablero, reflejando las acciones de todos los participantes en tiempo real.

4. Navegación clara entre pantallas (auth → juego).

5. **Persistencia de datos en Supabase:** toda la información del tablero debe almacenarse en Supabase, para garantizar que todos los usuarios vean el mismo estado.

6. **Autenticación:** usar Supabase Authentication

7. La aplicación debe tener una interfaz amigable y atractiva visualmente.

### 🛠️ Aspectos técnicos requeridos

- Usar **TypeScript**
- Uso de **Supabase** como backend
- Arquitectura del estado basada en una única fuente de verdad
- Manejo de estado compartido y sincronización en tiempo real
- Buen diseño visual y experiencia de usuario clara
- No hacer todo en un solo componente sino aplicar el principio de responsabilidad única
- Todo en el contexto de **React** y **React Router** con **Supabase**
