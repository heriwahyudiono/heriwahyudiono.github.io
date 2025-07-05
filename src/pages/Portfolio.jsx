import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/resume');
  }, [navigate]);

  return null;
};

export default Portfolio;
