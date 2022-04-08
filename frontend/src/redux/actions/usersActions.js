import axios from 'axios';
const Swal = require("sweetalert2");

const userActions = {

    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signUp', { userData })

        }
    },

    signInUser: (userData) => {
	return async (dispatch, getState) => {

		    try{

			    const user = await axios.post('http://localhost:4000/api/auth/logIn', { userData })

			    
		    const Toast = Swal.mixin({
			toast: true,
			position: "center-end",
			showConfirmButton: false,
			timer: 3000,
			background: "#FFF",
			iconColor: "rgb(238, 76, 103)",
			confirmButtonColor: "rgb(221, 46, 113)",
			timerProgressBar: true,
			
			didOpen: (toast) => {
			    toast.addEventListener("mouseenter", Swal.stopTimer);
			    toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		    });

		    Toast.fire({
			icon: "error",
			title: `${user.data.message}`,
		    });
		    
			//console.log(user)
			
			if(user.data.success){
	    
			    localStorage.setItem('token',user.data.response.token)
	    
			    dispatch({type: 'user', payload: user.data.response.userData });
	    
			    //console.log(user.data.response.userData.firstname)

			    const Toast = Swal.mixin({
				toast: true,
				position: "center-end",
				showConfirmButton: false,
				timer: 3000,
				background: "#FFF",
				iconColor: "rgb(86, 216, 151)",
				confirmButtonColor: "rgb(221, 46, 113)",
				timerProgressBar: true,
				
				didOpen: (toast) => {
				    toast.addEventListener("mouseenter", Swal.stopTimer);
				    toast.addEventListener("mouseleave", Swal.resumeTimer);
				},
			    })
			    Toast.fire({
				icon: "success",
				title: `${user.data.message}`,
			    })

			}

		    }catch (error) {
			console.log(error);
		    }

		}
    },

    signOutUser: (closeuser) => {

        return async (dispatch, getState) => {
            localStorage.removeItem('token')

            dispatch({ type: 'user', payload: null});

        }
    },

    verifyToken: (token) => {

        return async (dispatch, getState) => {

            const user = await axios.get('http://localhost:4000/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });

		return user.data.response

            } else {
                localStorage.removeItem('token')

		return false
            }

        }
    }

}

export default userActions;
