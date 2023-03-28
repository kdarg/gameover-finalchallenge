import React from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function GoogleLogIn(props) {
  const responseGoogle = async (res) => {
    if(res) {
      const logedUser = {
        email: res.email,
        password: res.id,
        from: "google",
      };
      await props.signInUser(logedUser);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      axios.get('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos', {headers: {Authorization: `Bearer ${tokenResponse.access_token}`}})
        .then(userInfoResponse => {
          const userData = {
            email: userInfoResponse.data.emailAddresses[0].value,
            password: userInfoResponse.data.names[0].metadata.source.id,
            from: "google"
          }

          props.signInUser(userData)
        })
    },
    onError: error => console.log(error)
  });

  return (
    <div className="btnGoogleDisplay relative flex justify-center py-1 px-1  text-sm font-medium rounded-md text-black">
      <div class="social-container" onClick={() => googleLogin()}>
        <a className="a-usersForm" href="#" class="social a-usersForm">
          <i class="fab fa-google-plus-g"></i>
        </a>
      </div>
    </div>
    // <LoginSocialGoogle
    //   client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    //   onResolve={({ provider, data }) => {
    //     console.log(data);
    //     responseGoogle(data);
    //   }}
    // >
    //   <div class="social-container">
    //     <a className="a-usersForm" href="#" class="social a-usersForm">
    //       <i class="fab fa-google-plus-g"></i>
    //     </a>
    //   </div>
    // </LoginSocialGoogle>
  );
}

const mapDispatchToProps = {
  signInUser: usersActions.signInUser,
};

export default connect(null, mapDispatchToProps)(GoogleLogIn);
