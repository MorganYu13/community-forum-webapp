
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password: ''
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

        Util.postdata(
            '/api/login', {
                username: this.state.username,
                password:this.state.password
            }
        ).then(() => {
            alert("Log in successful")
            // Logged in successfully
        })
        .catch(() => {
            alert("Log in failed")
            // Couldn't log in
        });
        
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
                <input type="submit" value="submit"/>
            </form>
        )
    }


}