import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate()

  return (
    <div className="container d-flex justify-content-center align-items-center p-4">
      <div className="d-flex flex-column justify-content-center">
        <h2 className="p-4 text-light text-center">Bienvenue sur CV Generator</h2>
        <h3 className="p-4 text-light text-center">Crée et partager votre cv au monde entier !! </h3>
        <div className="d-flex flex-row gap-3 justify-content-center">
          <Button variant="contained" onClick={() => navigate("/register")}>
            Créer mon CV
          </Button>
          <Button variant="outlined" onClick={() => navigate("/cv")}>
            Voir les CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Index