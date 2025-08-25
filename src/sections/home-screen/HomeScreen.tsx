const HomeScreen = () => {
  return (
    <>
      <div className="screen-content full">
        <div id="video-frame">
          <video autoPlay loop muted>
            <source
              src="public/assets/2025-08-25 12-20-55.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div
          id="home-content"
          style={{
            display: "flex",
            padding: "0 40px",
            flexDirection: "column",
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <div id="home-header">
            <div id="logo">
              <img
                src="https://placehold.co/460x200?text=460+x+200\nLogo"
                alt="Logo"
              />
            </div>
            <p className="subtitle">Catch Phrase to draw audience in</p>
          </div>
          <div id="home-footer-list">
            <div>Try on Itch</div>
            <div>Try on Steam</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
