import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useAccount, WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { configRead, queryClient } from "./utils/RainbowKitConfig";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <div>
                    <WagmiProvider config={configRead}>
                        <QueryClientProvider client={queryClient}>
                            <RainbowKitProvider>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <>
                                                <Header />
                                                <div className=" py-[4rem]">
                                                    <Home />
                                                </div>
                                                <Footer />
                                            </>
                                        }
                                    />
                                    <Route
                                        path="/Dashboard"
                                        element={
                                            <>
                                                <Header />
                                                <div className="container py-[7rem]">
                                                    <Dashboard />
                                                </div>
                                                <Footer />
                                            </>
                                        }
                                    />

                                    <Route path="*" element={<PageNotFound />} />
                                </Routes>
                            </RainbowKitProvider>
                        </QueryClientProvider>
                    </WagmiProvider>
                </div>
            </Router>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        border: "1px solid  #3F2762",
                        padding: "8px 16px",
                        backgroundColor: " #3F2762",
                        color: "white",
                    },
                }}
            />
        </>
    );
}

export default App;
