import {
    TonConnectButton,
    TonConnectUIProvider,
} from "@tonconnect/ui-react";
import { FC } from "react";

// // ALL MAGIC THERE!
import "@hot-wallet/sdk/adapter/ton";

// const connector = new TonConnect({
//     walletsListSource: "/wallets-v2.json",
// });

export const WalletConnector: FC = () => {
    return (
        <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
            <div className="view">
                <p>Connect wallet</p>
                <TonConnectButton />
            </div>
        </TonConnectUIProvider>
    );
};
