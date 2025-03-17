const schoolProject = {
  name: "School Project",
  description: "A simple school project.",
  version: "1.0.0",
  scripts: {
    start: "node src/index.js",
    build: "tsc --build",
  },
  main: "./src/index.js",
  dependencies: {
    "@types/express": "^4.17.9",
    express: "^4.17.13",
    "ts-node": "^10.4.0",
  },
  devDependencies: {},
};
