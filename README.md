# DevOps Site

## Running locally
In order to run locally clone the repository and run: `npm run dev` </br>
The site will be available at localhost:5173

## Running on container
In order to run inside container clone the repository and run:
- `docker build -t site .`
- `docker run -d --name devops -p 5173:5173 site`