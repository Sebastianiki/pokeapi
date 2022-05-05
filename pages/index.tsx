import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layout';
import { pokeApi } from '../api';
import { PokemonListResponse, TinyPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemon: TinyPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  
  return (
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemon.map(poke => (
            <PokemonCard key={poke.id} pokemon={poke}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemon:TinyPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))


  return {
    props: {
      pokemon
    }
  }
}

export default HomePage
