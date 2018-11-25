console.log('app file running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put it on here',
    options: []
}

const nums = [55, 101, 1000];
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log('Form submitted', option);
    renderFunction();
}

const onRemoveAll = () => {
    app.options = [];
    renderFunction();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);  //Math.floor() rounds up the generated number
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const renderFunction = () => {
    const template = (
        <div>
        <h1>Get ready!</h1>
        { app.subtitle && <p>Subtitle: {app.subtitle} </p>}
        { app.options.length > 0 ? <p>Here are your options</p> : <p>Sorry man, no options</p> }
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>remove all</button>
        {
            nums.map(number => {
                return <p key={number*2-3}>Number: {number}</p>
            })
         }
        <ol>

            {app.options ? app.options.map(option => {
                    return <li key={option *2-3}>Option: {option}</li>
                }) : ''
            }
        
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button type="submit">Add option</button>
        </form>
        
    </div>);
    
    
    ReactDOM.render(template, document.getElementById('app'));
}

renderFunction();