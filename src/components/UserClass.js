import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count:0,
            count1:1
        }

        console.log("Children constructor");
    }

    componentDidMount(){
        console.log("Children didmount call");
    }

    render() {
                console.log("Children render");

        const {name,location} = this.props
        const {count,count1} = this.state
        return (
            <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                // this.state.count = this.state.count + 1; we cannot do like this it will give unconsistence when run & give error

                this.setState({
                    count: this.state.count + 1,
                    count1:this.state.count1 + 1
                })
            }}>Click Increment</button>
            <button onClick={() => {
                // this.state.count = this.state.count + 1; we cannot do like this it will give unconsistence when run & give error

                this.setState({
                    count: this.state.count - 1,
                    count1:this.state.count1 - 1
                })
            }}>Click Decrement</button>
            <h1>Count1: {count1}</h1>
            <h1>Hello By ClassComponenets</h1>
            <h2>{name}</h2>
            <h2>{location}</h2>
            </div>
        )
    }
}

export default UserClass