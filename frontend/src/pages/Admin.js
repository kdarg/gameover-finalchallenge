import React from 'react'
import {connect} from 'react-redux'

class Admin extends React.Component{

	render(){
		return(
			<>
			soy el componente admin
			</>
		)
	}
	

}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
	return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin)
