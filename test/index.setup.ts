import { IBridgeConfigurationOptions, DefaultRegistry } from "@shareandcharge/ocn-bridge";
import { ModuleImplementation } from "@shareandcharge/ocn-bridge/dist/models/bridgeConfigurationOptions";

export const testConfig: IBridgeConfigurationOptions = {
    port: 3555,
    publicBridgeURL: 'http://localhost:3555',
    ocnNodeURL: 'http://localhost:8080',
    logger: false,
    dryRun: true, // only runs server / does not connect to OCN
    roles: [{
        country_code: 'DE',
        party_id: 'FLX',
        role: 'OTHER',
        business_details: {
            name: 'Flex'
        }
    }],
    modules: {
        implementation: ModuleImplementation.CUSTOM,
        receiver: [],
        sender: []
    },
    pluggableAPI: {
        // TODO
    },
    pluggableDB: {
        getTokenB: async () => 'token-b',
        setTokenB: async () => {},
        getTokenC: async () => 'token-c',
        setTokenC: async () => {},
        getEndpoint: async () => 'http://localhost:8080/some-endpoint',
        saveEndpoints: async () => {}
    },
    pluggableRegistry: new DefaultRegistry('volta')
}