import React from 'react';
import emailjs from 'emailjs-com';

export default class Form extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		message: { 
			feedback: '', 
			name: '', 
			email: '' 
		}
	} 
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="mailing" id ="contact">
		<hr />
    	<div className ="contactTitle">Contact Me</div>
     	<p>Want to chat?  I'd love to get in touch with you.</p>		
    	<div>
		<div className= "firstInputs">
		<input
			className = "inputFields"
			name="name"
        	onChange={this.handleChange}
        	placeholder="Name"
        	required
        	value={this.state.name}
      	/>     	
		  <input
		  className = "inputFields"
		  name="email"
		  type="email"
		  onChange={this.handleChange}
		  placeholder="Email"
		  required
		  value={this.state.email}
		/>
		</div>
      	<textarea
		  	className="textAreaBox"
        	name="feedback"
        	onChange={this.handleChange}
        	placeholder="Message"
        	required
        	value={this.state.feedback}
        	style={{width: '44vw', height: '150px', resize:'none'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
	// this.setState({feedback: event.target.value})
	this.setState({
        message: {
          ...this.state.message,
          [event.target.name]: event.target.value
        }
      });
  }

  handleSubmit (event) {
	const templateId = 'template_M9Suidoq';
	console.log('message:', this.state.message)
	this.sendFeedback(templateId, {message_html: this.state.message.feedback, from_name: this.state.message.name, reply_to: this.state.message.email})
  }

  sendFeedback (templateId, variables) {
	emailjs.send(
  	'roger_mcconkie', templateId,
  	variables, 'user_Jr7avxa28R12k15mxqAQm'
  	).then(res => {
		window.alert('Your message to Roger has been successfully sent.')
		this.setState({
			feedback: '', 
			name: '', 
			email: '' 
		})
  	})
  	.catch(err => console.error('The message was not properly delivered:', err))
  }
}
