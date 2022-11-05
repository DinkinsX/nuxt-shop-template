module.exports = {
  apps: [
    {
      name: 'sample',
      exec_mode: 'cluster',
      cron_restart: '0 0 * * *',
      port: 3024,
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
