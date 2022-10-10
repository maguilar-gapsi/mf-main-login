## Directorio Principal
``` bash
mf-login
│   ├── .github (contiene la configuración para los despliegues)
│   ├── config (contiene la configuración del proyecto)
│   |   ├── webpack
│   |   |   └── webpack.common.js
|   |   |   └── webpack.dev.js
|   |   |   └── webpack.prod.js
│   |   ├── .env
│   |   ├── .env.local
│   ├── src (contiene todos los componentes)
│   |   ├── Alert
│   |   |	├── business
│   |   |	|	└── Alert.js
│   |   |	├── views
│   |   |	|	└── Alert.jsx
│   |   ├── App
│   |   |	├── business
│   |   |	|	|── routes
│   |   |	|	|    └── App.routes.js
│   |   |	|	|── App.js
│   |   |	├── models
│   |   |	|	└── App.model.js
│   |   |	├── views
│   |   |	|	└── img
│   |   |	|	|── styles
│   |   |	|	|    └── App.theme.js
│   |   |	|	|── index.html
│   |   |	|	|── manifest.json
│   |   ├── Footer
│   |   |	├── views
│   |   |	|	|── styles
│   |   |	|	|    └── Footer.style.js
│   |   |	|	|── Footer.jsx
│   |   ├── Header
│   |   |	├── views
│   |   |	|	|── styles
│   |   |	|	|    └── styles.js
│   |   |	|	|── Header.jsx
│   |   ├── Login
│   |   |	├── business
│   |   |	|	└── Login.js
│   |   |	├── services
│   |   |	|	└── Login.services.js
│   |   |	├── views
│   |   |	|	|── img
│   |   |	|	|── styles
│   |   |	|	|    └── Login.style.js
│   |   |	|	|── Login.jsx
│   |   ├── index.js
│   ├── .gitignore
│   ├── .Dockerfile
│   ├── .k8s-deployment.yml
│   ├── .k8s-service.yml
│   ├── .kustomization.yml
│   ├── mf-login.iml
│   ├── nginx.conf
│   ├── package-lock.json
│   ├── package.json
```

## Tecnologías utilizadas
- [React Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Material UI](https://mui.com/)
- [Webpack](https://webpack.js.org/)