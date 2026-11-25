# Entrega de La vida pasa frente al Gato

Edición revisada el 24 de noviembre de 2026.

- Producción pública en [la-vida-pasa-frente-al-gato.vercel.app](https://la-vida-pasa-frente-al-gato.vercel.app/).
- Repositorio público y rama de producción `main` en [ItsSilva/La-Vida-Pasa-Frente-Al-Gato](https://github.com/ItsSilva/La-Vida-Pasa-Frente-Al-Gato).
- Proyecto de Vercel en el equipo `itssilvas-projects` [la-vida-pasa-frente-al-gato](https://vercel.com/itssilvas-projects/la-vida-pasa-frente-al-gato).
- Historial del código publicado en [la rama `main`](https://github.com/ItsSilva/La-Vida-Pasa-Frente-Al-Gato/commits/main/).

## Fidelidad

El título, la autoría y los 34 párrafos se extrajeron de la pestaña «La vida pasa frente al Gato». El JSON conserva las cursivas de las esculturas en p06 y las intervenciones del Gato en p10, p28 y p33. El SHA-256 calculado es `a8de0d605e2b0f8d4706397037b5b140ddd48eb0cdf15cb6e1c20ecb95444c83`. [Fuente editorial](https://docs.google.com/document/d/1hxwzt6Wm_N4bMjj5j8zetJzm62Uxaa0EX3fNaUgO-ME/edit?tab=t.nmv4g6ld8ams)

El verificador compara el texto y las cursivas carácter por carácter a 390 y 1.440 px con JavaScript desactivado. Comprueba que solo las dos primeras frases se destaquen en letra grande y negrita y que el primer párrafo conserve el resto del texto. El párrafo breve queda en p22 y el relato termina en p34.

## Presentación y acceso

| Comprobación | Resultado |
| --- | --- |
| 320, 390 y 768 px | Título y autoría antes de la foto de portada. Las fotos del cuerpo siguen al texto de su bloque. |
| 1.024 y 1.440 px | Portada a la izquierda y panel negro a la derecha. Las cinco escenas alternan izquierda, derecha, izquierda, derecha e izquierda. |
| Lectura y accesibilidad | El verificador cubre el desbordamiento horizontal en los cinco anchos, el recorrido con teclado, el foco visible, el texto al 200 % y los 34 párrafos en los estilos de impresión. |
| Fotografías | Los seis encuadres tienen texto alternativo y variantes WebP. Se utiliza un recorte para obtener el sexto encuadre de las cinco tomas disponibles. |
| Producción | La integración de GitHub publica la rama `main` en la URL pública del proyecto. |

La construcción usa Astro 7.4.13 con salida estática en `dist` y Node 24.

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
