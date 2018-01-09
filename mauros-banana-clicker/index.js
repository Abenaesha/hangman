const style = {
  section: {
    marginBottom: 20
  }
};

class App extends React.Component {
  state = {
    bananas: 30,
    harvesters: {
      num: 0,
      yield: 3,
      cost: 30
    },
    availableBananas: 1e3,
    bananasPerTree: 100,
    treeCost: 5
  };

  componentWillMount() {
    /**
     * componentWillMount is a React Component lifecycle method (https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
     *
     * This method gets called automatically by React right before the component is rendered for the first time.
     * It's particularly useful for setting up stuff as early as possible
     */
    this.intervals = {};
    this.setHarvestersInterval();
  }

  setHarvestersInterval = () => {
    const { harvesters } = this.state;
    if (this.intervals.harvesters) {
      console.log("clearing harvesters interval");
      clearInterval(this.intervals.harvesters);
    }
    console.log("setting harvesters interval");
    this.intervals.harvesters = setInterval(this.harvestBananas, 1000);
  };

  makeBananas = num => {
    const { bananas, availableBananas } = this.state;
    if (availableBananas <= 0) return;
    num = Math.min(availableBananas, num);
    this.setState({
      bananas: bananas + num,
      availableBananas: availableBananas - num
    });
  };

  makeSingleBanana = this.makeBananas.bind(null, 1);

  plantTree = () => {
    const { bananas, bananasPerTree, availableBananas, treeCost } = this.state;

    this.setState({
      bananas: bananas - treeCost,
      availableBananas: availableBananas + bananasPerTree
    });
  };

  harvestBananas = () => {
    const { harvesters } = this.state;
    this.makeBananas(harvesters.num * harvesters.yield);
  };

  buyHarvester = () => {
    const { bananas, harvesters } = this.state;
    this.setState({
      bananas: bananas - harvesters.cost,
      harvesters: Object.assign({}, harvesters, {
        num: harvesters.num + 1
      })
    });
  };

  render() {
    const {
      bananas,
      availableBananas,
      treeCost,
      bananasPerTree,
      harvesters
    } = this.state;
    const bananaTrees = Math.ceil(availableBananas / bananasPerTree);
    return (
      <div>
        <section style={style.section}>
          <h1>Bananas: {bananas}</h1>
          <button
            onClick={this.makeSingleBanana}
            disabled={availableBananas < 1}
          >
            Make Banana
          </button>
          <br />
          <span>Available Bananas: {availableBananas}</span>
        </section>

        <section style={style.section}>
          <button onClick={this.plantTree} disabled={bananas < treeCost}>
            Plant Tree
          </button>
          <br />
          <span>Cost: {treeCost} banana(s)</span>
          <br />
          <span>Bananas per tree: {bananasPerTree}</span>
        </section>

        <section style={style.section}>
          <h2>Harvesting</h2>
          <p>Bananas per second: {harvesters.num * harvesters.yield}</p>
          <button
            onClick={this.buyHarvester}
            disabled={bananas < harvesters.cost}
          >
            Robotic Harvester
          </button>{" "}
          {harvesters.num}
          <br />
          <span>Cost: {harvesters.cost} banana(s)</span>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
