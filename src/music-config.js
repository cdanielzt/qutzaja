// ============================================
// 🎵 CONFIGURACIÓN DE MÚSICA PARA LA BODA
// ============================================

// 👇 CAMBIA ESTA URL POR LA URL DE TU CANCIÓN
export const MUSIC_CONFIG = {
  // URL de tu canción
  songUrl: 'https://res.cloudinary.com/dzsvvhdcv/video/upload/v1760713894/memo_hari/Bruno_Mars_-_Marry_You_Official_Lyric_Video_-_Bruno_Mars_xmp4rf.mp3',
  
  // Título de la canción (opcional)
  songTitle: 'Nuestra canción',
  
  // ¿Quieres que la música empiece automáticamente?
  autoplay: false,
  
  // ¿Quieres que la canción se repita al terminar?
  loop: false,
};

// ============================================
// ⚠️ PROBLEMA CON GOOGLE DRIVE
// ============================================
// Google Drive NO funciona bien para streaming de audio en navegadores.
// Google bloquea el acceso directo para reproducción continua.
//
// 🔧 SOLUCIONES ALTERNATIVAS:
//

// ============================================
// ✅ OPCIÓN 1 - DROPBOX (RECOMENDADO)
// ============================================
// 1. Ve a https://www.dropbox.com
// 2. Sube tu archivo MP3
// 3. Haz clic en "Compartir" → "Crear enlace"
// 4. Copia el enlace (se verá así: https://www.dropbox.com/s/abc123/cancion.mp3?dl=0)
// 5. Cambia "dl=0" por "dl=1" al final
// 6. Ejemplo:
//    songUrl: 'https://www.dropbox.com/s/abc123/cancion.mp3?dl=1'
//

// ============================================
// ✅ OPCIÓN 2 - VOCAROO (GRATIS Y FÁCIL)
// ============================================
// 1. Ve a https://vocaroo.com
// 2. Haz clic en "Upload" y sube tu MP3
// 3. Una vez subido, haz clic derecho en el botón de play → "Copiar dirección de audio"
// 4. Usa esa URL directamente
// 5. Ejemplo:
//    songUrl: 'https://media1.vocaroo.com/mp3/abc123.mp3'
//

// ============================================
// ✅ OPCIÓN 3 - ARCHIVO.HOSTING (GRATIS)
// ============================================
// 1. Ve a https://file.io o https://0x0.st
// 2. Sube tu archivo MP3
// 3. Copia el enlace directo que te dan
//

// ============================================
// ✅ OPCIÓN 4 - SUBIR A TU PROYECTO
// ============================================
// 1. Crea una carpeta "public/music" en tu proyecto
// 2. Coloca tu archivo MP3 ahí (ej: cancion.mp3)
// 3. Usa la ruta relativa:
//    songUrl: '/music/cancion.mp3'
//

// ============================================
// 💡 EJEMPLO COMPLETO CON DROPBOX:
// ============================================
// export const MUSIC_CONFIG = {
//   songUrl: 'https://www.dropbox.com/scl/fi/abc123xyz/Perfect.mp3?rlkey=xyz&dl=1',
//   songTitle: 'Perfect - Ed Sheeran',
//   autoplay: false,
//   loop: false,
// };
//
