const generateRandomNumber = max => Math.floor(Math.random() * max);

class App extends React.Component {
  state = {
    index: generateRandomNumber(this.props.quotes.length)
  };

  getNewQuote = () => {
    const newIndex = generateRandomNumber(this.props.quotes.length);
    this.setState({
      index: newIndex
    });
  };

  render() {
    const quote = this.props.quotes[this.state.index];
    return (
      <div>
        <h1>Groucho Marx Quotes</h1>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <button onClick={this.getNewQuote}>Give me another quote!</button>
      </div>
    );
  }
}

ReactDOM.render(<App quotes={quotes} />, document.getElementById("root"));
