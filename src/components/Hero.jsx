const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
              "Welcome to BusGo Ticketing, your hassle-free solution for all
              your bus travel needs! With BusGo, you can effortlessly plan,
              book, and board your next bus journey with ease. Say goodbye to
              long queues and hello to convenience and simplicity. Let's get you
              moving!"
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
