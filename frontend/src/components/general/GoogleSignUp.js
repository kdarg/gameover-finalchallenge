import React from 'react';
import { connect } from 'react-redux';
import usersActions from '../../redux/actions/usersActions';
import '../../styles/usersForm.css'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleLogUp(props) {
  const googleSignUp = useGoogleLogin({
    onSuccess: tokenResponse => {
      axios.get('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos', {headers: {Authorization: `Bearer ${tokenResponse.access_token}`}})
        .then(userInfoResponse => {
          console.log(userInfoResponse)
          const userData = {
            firstname: userInfoResponse.data.names[0].givenName,
            lastname: userInfoResponse.data.names[0].familyName,
            email: userInfoResponse.data.emailAddresses[0].value,
            password: userInfoResponse.data.names[0].metadata.source.id,
            from: "google",
            country: "google",
            urlimage: userInfoResponse.data.photos[0].url
          }
        
          props.signUpUser(userData)
        })
    },
    onError: error => console.log(error)
  });

  return (
      <div className="btnGoogleDisplay relative flex justify-center py-1 px-1  text-sm font-medium rounded-md text-black">
        <div class="social-container" onClick={() => googleSignUp()}>
            <a className="a-usersForm" href="#" class="social a-usersForm">
              <i class="fab fa-google-plus-g"></i>
            </a>
        </div>
      </div>
  );
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleLogUp);
