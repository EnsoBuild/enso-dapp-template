import { ConnectButton } from "@rainbow-me/rainbowkit";
import Providers from "@/components/Providers";
import Essential from "@/components/Essential";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";

import logoUrl from "./logo_black_white.png";

function App() {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Provider>
                <Providers>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "5px",
                        }}
                    >
                        <img src={logoUrl} alt={"Enso"} style={{ height: "50px" }} />

                        <div
                            style={{
                                display: "flex",
                                gap: "5px",
                                alignItems: "center",
                            }}
                        >
                            <ColorModeButton />

                            <ConnectButton />
                        </div>
                    </div>
                    <Essential />
                </Providers>
            </Provider>
        </div>
    );
}

export default App;
