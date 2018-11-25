class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            toggle_: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                toggle_: !prevState.toggle_
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Visibility Toggle</h2>
                <button onClick={this.handleToggleVisibility}>{ (this.state.toggle_) ? 'Hide Visibility' : 'Show visibility' }</button>
            
                { this.state.toggle_ && (
                    <p>Here is some details for your eyes!</p>
                )}
            </div>
        )
    }
}
ReactDOM.render(<Toggler />, document.getElementById('app'));
// let toggle_ = true;
// const toggler = () => {
//     toggle_ = !toggle_;
//     console.log(toggle_);
//     renderer();
// }

// const renderer = () => {
//     const template = (
//         <div>
//             <h2>Visibility Toggle</h2>
//             <button onClick={toggler}>{ (toggle_) ? 'Hide Visibility' : 'Show visibility' }</button>
//             {/* { (toggle_) ? <p>visibility shown</p> : '' } */}
//             { toggle_ && (
//                 <p>Here is some details for your eyes!</p>
//             )}
//             { console.log('toggler_ is: ', {toggle_}) }
//         </div>
//     );

    // ReactDOM.render(template, document.getElementById('app'));
//}

//renderer();