import 'mocha'
import { assert } from 'chai'
import { OcnApp } from '../src/index'
import { testConfig } from './index.setup'

describe('OcnApp', () => {

    it('should start and stop', async () => {
        const app = new OcnApp(testConfig)
        await app.start()
        await app.stop()
    })

})
