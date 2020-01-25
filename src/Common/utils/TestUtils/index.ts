export function resolveWithTimeout<T>(response: T): Promise<T> {
   const timeOut = isTestEnvironment() ? 0 : 2000
   return new Promise(resolve => {
      setTimeout(() => resolve(response), timeOut)
   })
}

export const isTestEnvironment = () => process.env.IS_JEST
