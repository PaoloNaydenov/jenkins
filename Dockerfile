FROM node:latest
WORKDIR usr/src/app
RUN npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
RUN npm install --legacy-peer-deps -D postcss autoprefixer
COPY . .
RUN npm install --legacy-peer-deps three
RUN npx tailwindcss init -p
EXPOSE 5173
ENTRYPOINT ["npm", "run", "dev"]