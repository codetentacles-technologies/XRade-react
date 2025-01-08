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
import About from "./pages/About";
import EditPassportDetails from "./pages/EditPassportDetails";
import PassportDetails from "./pages/PassportDetails";
import Voucher from "./pages/Voucher";

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
                                    <Route
                                        path="/about"
                                        element={
                                            <>
                                                <Header />
                                                <div className="py-[4rem]">
                                                    <About />
                                                </div>
                                                <Footer />
                                            </>
                                        }
                                    />
                                    <Route
                                        path="/EditPassportDetails"
                                        element={
                                            <>
                                                <Header />
                                                <div className="container py-[7rem]">
                                                    <EditPassportDetails />
                                                </div>
                                                <div className="fixed bottom-0 w-full">
                                                <Footer />
                                                </div>
                                            </>
                                        }
                                    />
                                     <Route
                                        path="/PassportDetails"
                                        element={
                                            <>
                                                <Header />
                                                <div className="container py-[7rem]">
                                                    <PassportDetails />
                                                </div>
                                                <div className="fixed bottom-0 w-full">
                                                <Footer />
                                                </div>
                                            </>
                                        }
                                    />
                                     <Route
                                        path="/Voucher"
                                        element={
                                            <>
                                                <Header />
                                                <div className="container py-[7rem]">
                                                    <Voucher />
                                                </div>
                                                <div className=" w-full">
                                                <Footer />
                                                </div>
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
