import "./Header.css";
import { useEffect, useState } from "react";

export default function Header(props) {

    const [scrollPos, setScrollPos] = useState(0);
    const [ini, setIni] = useState(0);
    const [st, setSt] = useState("0");
    const [isSideNavVisible, setIsSideNavVisible] = useState(false);

    useEffect(() => {
        const header = document.getElementById("head");
        const sideNav = document.getElementById("sidenav");
        
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (scrollPos < currentScrollPos) {
                header.style.opacity = "0";
                sideNav.style.position = "fixed";
                sideNav.style.top = "0";
            } else if (scrollPos === ini) {
                header.style.opacity = "1";
                sideNav.style.top = st;
            } else {
                header.style.opacity = "1";
                sideNav.style.top = st;
            }
            setScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        lookCool(); // Initial call
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPos, ini, st]);

    const openSesame = () => {
        setIsSideNavVisible(true);
    };

    const closeSesame = () => {
        setIsSideNavVisible(false);
    };

    const lookCool = () => {
        setIni(window.pageYOffset);
        setSt(document.getElementById("sidenav").style.top);
    };

    return (
        <>
            <div id="sidenav" className={isSideNavVisible ? "visible" : ""}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ position: "relative", width: "100%", padding: "10px", fontSize: "20px" }}>MENU</div>
                    <div id="cross" style={{ position: "relative", width: "100%", textAlign: "right", padding: "10px", transition: "0.5s" }} onClick={closeSesame}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </div>
                    <br />
                </div>
                <br />
                <div className="menucont" style={{ padding: "30px" }}>
                    <a href="/">Home</a><br />
                    <a href="/#serv">Services</a><br />
                    <a href="/contact">Contact Us</a><br />
                    <a href="/about">About Us</a><br />
                    <a href="/cs">Customer Support</a><br />
                    <a href="/tnc">Terms and Conditions</a><br />
                    <a href="/return">Return and Refund Policy</a><br />
                    <a href="/adminproduct">Manage Product</a>
                </div>
            </div>

            <header id="head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
                <div id="menu" onClick={openSesame} style={{ transition: "0.5s" }}><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 15 15">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></span><span> MENU</span></div>
                <div id="quickAccess" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <span className="search" style={{ paddingRight: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                    <span className="cart" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </span>
                    <span className="contact" style={{ paddingLeft: "10px",display: props.buttonvisible || "visible"}} >
                        <a href="/signIn"><button style={{ padding: "5px", backgroundColor: "yellowgreen", border: "1px solid black", borderRadius: "5px" }} id="signInBtnHeader">Sign In</button></a>
                    </span>
                </div>
            </header>
        </>
    );
}
