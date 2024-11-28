# alvarosaavedra.es

## Ejecutar el proyecto en local con Docker

### Construir la imagen Docker

```bash
docker build -t alvarosaavedra-es .
```

### Ejecutar la imagen Docker

```bash
docker run --rm -it -p 4000:4000 -v $(pwd):/app -v /app/node_modules alvarosaavedra-es
```

### Ver la aplicación en local

```
http://localhost:4000
```