class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    } 
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    console.log('ComponentDidMount fires when page loads');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate fires after props or state changes');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount fires when a component goes away/removed/unmounted from the screen.');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: []}))
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randPick = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randPick];
    alert(pick);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    else {
      this.setState((prevState) => ({ options: prevState.options.concat([option]) }))            
    }
    
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOptions handlingAddOption={this.handleAddOption} />
      </div>

    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
   
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  ); 
}

Header.defaultProps = {
  title: 'IndecisionApp'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
        >
        What should I do?</button>
    </div>
  );
}

const Options = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options);
    // }

  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    
    {
      props.options.map(option => (
      <Option 
        key={option} 
        OptionText={option}
        handleDeleteOption={props.handleDeleteOption} />)
      )
    }   
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <p> {props.OptionText}</p>
      <button 
        onClick={(e) => {
            props.handleDeleteOption(props.OptionText)
        }}>
        Remove
      </button>
    </div>
  )
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handlingAddOption(option); 
    this.setState(() => ({ error }));

    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
      <p>Add Options</p>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button type="submit">Add option</button>
      </form>
      </div>
    ) 
  }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOptions />
//     </div>
// )

// Stateless functional components. its got no 'this' for the props.
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p> 
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// ReactDOM.render(<User name="Jane" age={23} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));