// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {DECENT_NETWORK_WSPATH, IPFS_PORT, IPFS_SERVER, DECENTGO_URL, CHAIN_ID} from './parameters';

export const environment = {
    production: false,
    decent_network_wspath: DECENT_NETWORK_WSPATH,
    decentgo_url: DECENTGO_URL,
    ipfs_server: IPFS_SERVER,
    ipfs_port: IPFS_PORT,
    chain_id: CHAIN_ID
};
