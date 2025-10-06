import './ApiHome.css';
import { useLocation, useNavigate } from "react-router-dom";

function ApiHome() {
  const navigate = useNavigate();
  const loc = useLocation();

  return (
    <div className="home-container">
      <h1 className="home-title">HOME</h1>

      <div className="home-buttons">
        <button
          onClick={() => navigate('/')}
          className={`home-btn ${loc.pathname === '/' ? 'active' : ''}`}
        >
          Api Home
        </button>

        <button
          onClick={() => navigate('/ApiProducts')}
          className={`home-btn ${loc.pathname === '/ApiProducts' ? 'active' : ''}`}
        >
          Api Products
        </button>
      </div>
    </div>
  );
}

export default ApiHome;
