import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '053f68efb0804bcebc15ed856c51fb30'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '09a7df8feba44499888c22f211221442'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'e0db48e7594e47c494897a90d67876c9'
                    }
                }
            }
        }
    }
}
