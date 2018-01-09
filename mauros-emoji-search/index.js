class App extends React.Component {
  state = { searchTerm: "" };

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  filterEmojis = (emojis, searchTerm) => {
    return emojis.filter(emoji => {
      return (
        emoji.title.includes(searchTerm) || emoji.keywords.includes(searchTerm)
      );
    });
  };

  render() {
    const { emojiList } = this.props;
    const { searchTerm } = this.state;
    const filteredEmojis = this.filterEmojis(emojiList, searchTerm);
    return (
      <div>
        <h1>Emoji Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={this.updateSearchTerm}
        />
        <section>
          <h2>Emojis:</h2>
          {filteredEmojis.map(emoji => {
            return <span key={emoji.title}>{emoji.symbol}</span>;
          })}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App emojiList={emojiList} />, document.getElementById("root"));
