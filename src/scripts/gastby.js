const spawnSync = require('child_process').spawnSync
const GatsbyNew = (appName, packageManager) => {
  if (packageManager === 'npm') {
    spawnSync(
      'npm',
      ['i', '-g', 'gatsby-cli'],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Checking if gatsby is installed in your system')
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
        console.log('Gatsby check successful')
      },
    )
  }
  if (packageManager === 'yarn') {
    spawnSync(
      'npm',
      ['i', '-g', 'yarn'],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Checking if yarn is installed in your system')
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
        console.log('Yarn check successful')
      },
    )

    spawnSync(
      'yarn',
      ['glabal', 'add', 'gatsby-cli'],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Checking if gatsby cli is installed in your system')
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
        console.log('Gatsby check successful')
      },
    )
  }
  spawnSync(
    'gatsby',
    ['new', appName],
    {
      shell: true,
      stdio: 'inherit',
    },
    (error, stdout, stderr) => {
      console.log('Creating app - ', appName)
      if (error) {
        console.error('stderr', stderr)
        throw error
      }

      console.log(stdout)
    },
  )
}

module.exports = {
  GatsbyNew,
}