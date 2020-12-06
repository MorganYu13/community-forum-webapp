class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password: '', 
            recpassword: '' 
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange=function(event){
        var name=event.target.name;
        var value=event.target.value
        this.setState({
            [name]:value
        })
    }


    handleSubmit=function(event){
        event.preventDefault();
            if(this.state.password==this.state.recpassword){
                alert("Sign up successful")    
                Util.postdata(
                    '/api/signup', {
                        username: this.state.username,
                        password:this.state.password,
                    }
                    ).then(() => {
                        alert("Sign in successful")
                        // Logged in successfully
                    })
                    .catch(() => {
                        alert("Sign in failed")
                        // Couldn't log in
                    });
            } 
            else{
                alert("Reconfirm password again");
            }   
        
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit} inline>
                <label>
                Username:
                </label>
                <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
                <label>
                Password:
                </label>
                <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
                <label>
                Reconfirm Password:
                </label>
                <input name="recpassword" value={this.state.recpassword} onChange={this.handleChange} type="password"/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}