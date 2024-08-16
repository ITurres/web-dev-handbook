import '../styles/pages/SplashPage.scss';
import ArthurITurresLogo from '../assets/arthur_iturres-logo.png';

function SplashPage({ handleAccess }: { handleAccess: () => void }) {
  return (
    <div className="card">
      <img
        src={ArthurITurresLogo}
        alt=""
        width="20%"
        className="card-logo"
        aria-hidden
      />

      <h1 className="inner-card">
        Welcome to Arthur&apos;s
        <br />
        <span>Web Dev Handbook</span>
      </h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam
        sed consequuntur consectetur omnis eum voluptatibus excepturi quaerat
        quae earum repellendus alias voluptate rem, dolor minima atque explicabo
        ipsa aspernatur.
      </p>

      <button
        type="button"
        className="btn btn-bg-linear-gradient btn-scale-back-and-forth"
        onClick={handleAccess}
      >
        Access Now
      </button>
    </div>
  );
}

export default SplashPage;
