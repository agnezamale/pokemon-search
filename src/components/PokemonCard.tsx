import { Pokemon } from "../types/pokemon";
import '../App.scss';

interface PokemonCardProps{
    pokemon: Pokemon;
}

function PokemonCard({pokemon}: PokemonCardProps){
    const spriteUrl = pokemon.sprites?.front_default;
    const types = pokemon.types?.map((t) => t.type.name) ?? [];

    return (
        <div className="pokemon-card">
             <span className="pokemon-name">{pokemon.id}. {pokemon.name}</span>
            {spriteUrl ? <img src={spriteUrl} alt={pokemon.name} /> : null}
            <div className="pokemon-types" aria-label="pokemon types">
                {types.map((type) => (
                    <span key={type} className="pokemon-type">
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
};

 export default PokemonCard;