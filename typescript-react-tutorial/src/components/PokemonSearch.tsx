import * as React from "react";

interface User {
  title: string;
}

interface SeachState {
  error: boolean;
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  numberOfAbilites: number;
  baseExperience: number;
  imageUrl: string;
}

export default class PokemonSearch extends React.Component<User, SeachState> {
  pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(props: User) {
    super(props);

    this.state = {
      error: false,
      pokemon: null
    };
    this.pokemonRef = React.createRef();
  }

  onSeachClick = () => {
    const inputValue = this.pokemonRef.current.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }
      res.json().then(data => {
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilites: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          }
        });
      });
    });
  };

  render() {
    const { title } = this.props;
    const { error, pokemon } = this.state;

    let resultMarkup;
    if (error) {
      resultMarkup = <p>Pokemon not found, please try again</p>;
    } else if (this.state.pokemon) {
      resultMarkup = (
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image" />
          <p>
            {pokemon.name} has {pokemon.numberOfAbilites} abilities and{" "}
            {pokemon.baseExperience} base experience points
          </p>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img
          style={{ width: "300px" }}
          src="https://pokeapi.co/static/logo-6221638601ef7fa7c835eae08ef67a16.png"
        ></img>

        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSeachClick}>seach</button>
        {resultMarkup}
      </div>
    );
  }
}
