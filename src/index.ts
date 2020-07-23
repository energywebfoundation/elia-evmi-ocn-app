import { Server } from 'http'
import { startBridge, stopBridge, IBridgeConfigurationOptions } from '@shareandcharge/ocn-bridge'

export class OcnApp {

    private bridge: Server | undefined

    constructor(private config: IBridgeConfigurationOptions) {}

    public async start() {
        this.bridge = await startBridge(this.config)
    }

    public async stop() {
        if (this.bridge) {
            await stopBridge(this.bridge) 
        }
    }

}
