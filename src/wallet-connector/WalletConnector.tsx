import {
    TonConnectButton,
    TonConnectUIProvider,
} from "@tonconnect/ui-react";
import {FC} from "react";

import "@hot-wallet/sdk/adapter/ton";

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

export const WalletConnector: FC = () => {
    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <div className="view" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                <TonConnectButton/>
            </div>
        </TonConnectUIProvider>

    );
};
