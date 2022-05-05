import { NextPage } from 'next'

import { Layout } from '../../components/layout';
import { NoFavorites } from '../../components/ui';
import { FavoritesPokemon } from '../../components/pokemon'
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';


const FavoritesPage: NextPage = () => {
  
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemon())
  }, [])
  
  return (
    <Layout title='Pokemon - Favorites'>
      {
        favoritesPokemon.length === 0
          ? <NoFavorites/>
          : <FavoritesPokemon favoritesPokemon={favoritesPokemon}/>
      }
    </Layout>
  )
}

export default FavoritesPage