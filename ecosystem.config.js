module.exports = {
  apps: [
    {
      name: 'apipm2',
      script: './bin/server.js',
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
  deploy: {
    production: {
      user: 'node',
      host: ['localhost'],
      ref: 'origin/master',
      repo: 'git@github.com:lucashpmelo/node-pm2-docker.git',
      path: '/usr/app',
      'post-deploy': 'npm install && npm run deploy',
    },
  },
}
