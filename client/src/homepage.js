class Homepage extends React.Component{
        constructor(props){

            super(props);
            this.state={
                title:'',
                comment: '',
                posts: []
            }
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
            this.refreshPosts=this.refreshPosts.bind(this); 
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
                '/api/homepage', {
                    title: this.state.title,
                    comment:this.state.comment
                }
            ).then(() => {
                alert("Comment successfully logged")
            })
            .catch(() => {
                alert("Comment failed to be logged")
            });
            
        }

        refreshPosts=function(event){
            Util.getdata('/api/homepage').then(posts => {
                this.setState({ posts });
            });
        }

    render(){
        return(
            <div>
                <h1>Forum | Posts </h1> 

                <div id="comment"> 
                    <form onSubmit={this.handleSubmit} inline>
                        <label>
                        Title:
                        </label>
                        <input name="title"  value={this.state.title} onChange={this.handleChange} type="text"/>
                        <label>
                        Comment: 
                        </label> 
                        <textarea name="comment" cols="30" row="10"  value={this.state.comment} onChange={this.handleChange}></textarea>
                        <input type="submit" />
                    </form> 
                </div> 

                <div id="posts">
                    <button type="button" onClick={this.refreshPosts}>Refresh</button>
                    {   this.state.posts.map(post => {
                            return(
                              <div>
                                <h1>{post.title}</h1>
                                <p>{post.comment}</p>
                              </div>    
                            )
                        })
                    }
                </div> 
            </div>  
        );
    }
}