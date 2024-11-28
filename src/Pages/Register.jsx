import { Link } from "react-router-dom";
import { useRequireOfflineUser } from "../Utils/Security/AuthorizationHelper";
import RegisterForm from '../Components/Authentification/RegisterForm';

function Register() {
  useRequireOfflineUser();

  return (
    <div className="row justify-content-center">
      <div className="col-11 col-xs-11 col-sm-10 col-md-8 col-lg-6 mt-5">
        <div className="card rounded-0">
          <div className="card-header text-center">
            <h4>Inscription</h4>
          </div>
          <div className="card-body">
            <RegisterForm />
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register