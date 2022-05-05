import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from './';

interface Props {
  favoritesPokemon: number[];
}

export const FavoritesPokemon = ({favoritesPokemon}:Props) => {
  return (
    <Grid.Container
      gap={2}
      direction='row'
      justify='flex-start'
    >
      { favoritesPokemon.map( id => <FavoritePokemonCard id={id} key={id} />) }
    </Grid.Container>
  )
}
