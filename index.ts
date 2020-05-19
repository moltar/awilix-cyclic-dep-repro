import { createContainer, asClass } from 'awilix'
import { BaseConfig } from '@scaleleap/config'

class Config extends BaseConfig {}

const container = createContainer()

container.register({ config: asClass(Config) })

console.log(container.cradle.config)
