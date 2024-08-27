function App() {
    const style1 = {color: 'white', backgroundColor: '#23272F', padding: '5px 30px'}
    const style2 = {color: 'white', backgroundColor: '#343A46', borderRadius: '10px', padding: '5px 30px', marginBottom: '15px'}

    return (
        <div style={style1}>
            <h1>Quick Start</h1>
            <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style={style2}>
                    <h3>You will learn</h3>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)