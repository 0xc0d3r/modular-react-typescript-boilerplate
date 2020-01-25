const envVariables = process.env

const Config: any = {}

Object.keys(envVariables).forEach(variable => {
   if (variable.includes('REACT_APP')) {
      const envKey = variable.replace('REACT_APP_', '')
      Config[envKey] = envVariables[variable]
   }
})

export default Config
