# Entrega de La vida pasa frente al Gato

Publicación verificada el 24 de noviembre de 2026.

- Producción pública en [la-vida-pasa-frente-al-gato.vercel.app](https://la-vida-pasa-frente-al-gato.vercel.app/).
- Repositorio público y rama de producción `main` en [ItsSilva/La-Vida-Pasa-Frente-Al-Gato](https://github.com/ItsSilva/La-Vida-Pasa-Frente-Al-Gato).
- Proyecto de Vercel en el equipo `itssilvas-projects` [la-vida-pasa-frente-al-gato](https://vercel.com/itssilvas-projects/la-vida-pasa-frente-al-gato).
- Código publicado y comprobado en el commit [`c6f6b216790979da4c39fc84f05747ccb4888392`](https://github.com/ItsSilva/La-Vida-Pasa-Frente-Al-Gato/commit/c6f6b216790979da4c39fc84f05747ccb4888392).
- Primer despliegue de producción con estado `Ready`. [Despliegue verificado](https://vercel.com/itssilvas-projects/la-vida-pasa-frente-al-gato/dpl_6VMBWb11KR2xiXJjqebpHJz84PUd).

## Fidelidad

El título, la autoría y los 32 párrafos del anexo A del README coinciden literalmente con el Google Doc consultado, incluidas las cursivas de p09, p26 y p31. Se extrajo el JSON directamente del README. El SHA-256 calculado es `7024736cc98dd50c84512e600aae345d8da0ada256dc5438ba6c73b05f44d9a0`. [Fuente editorial](https://docs.google.com/document/d/1elCAREWdZUGKGtZ_vqoU58kEQnI7Oo9hlWi9qYRrGbc/edit).

El verificador del anexo B pasó en la compilación local y en producción a 390 y 1.440 px en Chromium, con JavaScript desactivado. Se comprobó que p20 es un párrafo independiente, que el relato termina en p32 y que los créditos aparecen en el pie.

## Presentación y acceso

| Comprobación | Resultado |
| --- | --- |
| 320, 390 y 768 px | Título y autoría antes de la foto de portada. Las fotos del cuerpo siguen al texto de su bloque. |
| 1.024 y 1.440 px | Portada a la izquierda y panel negro a la derecha. Las cinco escenas alternan izquierda, derecha, izquierda, derecha e izquierda. |
| Lectura y accesibilidad | Sin desbordamiento horizontal en los cinco anchos. Se comprobó el recorrido con teclado, el foco visible, el texto al 200 % y los 32 párrafos en los estilos de impresión. Se probó la fuente de respaldo bloqueando los archivos de fuente a 390 px. |
| Fotografías | Se cargaron los seis encuadres con texto alternativo y variantes WebP. En producción la portada transfirió 30.240 B a 390 px con DPR 1 y 151.908 B con DPR 3. Se utiliza un recorte para obtener el sexto encuadre de las cinco tomas disponibles. |
| Producción | La URL responde HTTP 200 sin iniciar sesión. Chromium cargó los recursos sin errores. Se verificaron el dominio canónico y la carga HTTP 200 de la imagen para compartir. |

Las capturas de revisión se conservaron en `test-results/produccion/`. La construcción usa Astro 7.4.13 con salida estática en `dist` y Node 24. Vercel toma los cambios de producción de `main` mediante la integración de GitHub.

## Repetir las comprobaciones

```sh
npm ci
npx playwright install chromium --only-shell
npm run verify:source
npm run build
npm run verify:content -- https://la-vida-pasa-frente-al-gato.vercel.app/
node scripts/verify-layout.mjs https://la-vida-pasa-frente-al-gato.vercel.app/ test-results/produccion
```

Para comprobar la compilación local, servir `dist` con `npm run preview` y pasar la URL que indique el servidor a ambos verificadores.
