import React ,{Component} from 'react';

const AppID = "Your app id here!";

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

class Home extends Component {
	constructor() {
		super();

	  this.state = {
			location: 'New York, NY',
			formErrors: {location: 'test'},
			locationValid: true,
			formValid: true, 
			webResponse: {}

	  }

	  this.locationSubmit();

	  this.errorClass = this.errorClass.bind(this);
	  this.locationSubmit = this.locationSubmit.bind(this);
	  this.handleInput = this.handleInput.bind(this);
	}  

	handleInput(e) {
		const name=e.target.name;
		const value=e.target.value;
		this.setState({[name]: value},
									() => {this.validate(name, value)});
	}

	validate(name, value) {
		let formErrors = this.state.formErrors;
		let locationValid = this.state.locationValid;



		locationValid = !!value.match(/^([A-Za-z ]{1,50}),([ ]{0,4})([A-Za-z]{2})$/g);
		formErrors.location = locationValid ? '' : ' is invalid';

		this.setState({formErrors: formErrors,
              locationValid:locationValid,
              
            }, this.validateForm);

	}

	validateForm() {
		this.setState({formValid: this.state.locationValid});
	}

	locationSubmit(e) {

		let urlString = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.location.replace(/[ ]/g, '+') + ",US&appid=" + AppID + "&units=imperial"
		console.log(urlString);
	  fetch(urlString)
      .then(response => response.json())
      .then(data => this.setState({ webResponse: data }));
     
	}	



	errorClass(error) {
	   return(error.length === 0 ? '' : 'has-error');
	}


	getWebResponse(){
		if (!!this.state.webResponse && !!this.state.webResponse.main ){
			// return this.state.webResponse.main.temp;
			let webResponseMain = this.state.webResponse.main;

			let webResponseString = "The current temperature in ";

			webResponseString += this.state.webResponse.name;
			webResponseString += " is "
			webResponseString += webResponseMain.temp;
			webResponseString += " (F), with a feels like of "
			webResponseString += webResponseMain.feels_like;

			webResponseString += " (F)."


			return webResponseString;

		}
		else {
			return "Unable to find city, please try again";

		}

	}
	
	render() {
		return (
			<div>
			<div className="Home">
				
						<div className="col-md-6 my-2">
							<form>
							<table>
								<tr>

									<td className="col-md-6 py-3  ">
										<label htmlFor='location' className={`form-group ${this.errorClass(this.state.formErrors.location)}`}>Location (e.g. "New York, NY"):</label>
										<input
										 className="form-control "

										 name="location"
										 id="location"
										 value={this.state.location}
										 onChange={(e) => this.handleInput(e)}
										 type="text"
										 />
									</td>
									
								</tr>
								<tr>
									<td>
										<button disabled={!this.state.formValid} type="button" onClick={(e) => this.locationSubmit(e)} className="btn btn-primary">Submit</button>
									</td>
								</tr>
						</table>
						</form>
						</div>


			<div className="col-md-6">
				<p>{this.getWebResponse()}</p>
			</div>


			</div>



			</div>
			
		);
	}
}


export default Home;