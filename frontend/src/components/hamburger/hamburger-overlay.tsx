
function HamburgerOverlay() {
    return (
        <div
        style={{
          position: "fixed",      // fixed to viewport
          top: 0,
          left: 0,
          width: "100vw",         // full width
          height: "100vh",        // full height
          backgroundColor: "rgba(0,0,0,0.95)",
          zIndex: 100,           // above all page content
        }}></div>
    )
}


export default HamburgerOverlay;
