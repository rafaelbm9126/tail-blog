up:
	docker run -it --rm -p 3000:3000 -v ${PWD}:/app -w /app strapi/strapi:latest yarn dev

bash:
	docker run -it --rm -v ${PWD}:/app -w /app strapi/strapi:latest bash

