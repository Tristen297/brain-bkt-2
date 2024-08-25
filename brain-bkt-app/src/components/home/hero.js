import "../../styles/home/hero.css";

function Hero() {
    return (
        <div className="hero-content">
            <div className="hero-title">
                <div className="hero-text-transform">
                    <h1>Transform Your Brand with</h1>
                </div>
                <div className="hero-text-cutting">
                    <h1>Cutting-Edge Design</h1>
                </div>
            </div>
            {/* New container for subtext and button */}
            <div className="hero-subtext-button-container">
                <div className="hero-subtext">
                    <p>
                        We are a creative agency specializing in high-impact graphic design and custom vehicle wraps that turn your brand into a mobile billboard. Our designs are crafted to captivate and communicate, ensuring your business stands out on the road and beyond.
                    </p>
                </div>
                <div className="hero-button">
                    <button>SEE OUR CREATIONS ⟶</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
