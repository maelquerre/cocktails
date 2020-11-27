import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import CocktailCard from '../components/CocktailCard'

export default function HomeScreen() {
  const [cocktail, setCocktail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchCocktail = () => {
    setIsLoading(true)
    return fetch('http://192.168.1.76:8000/api/cocktail')
      .then(res => res.json())
      .then(cocktail => {
        setCocktail(cocktail)
        setIsLoading(false)
      }).catch(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchCocktail()
  }, [])

  return (
    <View style={styles.container}>
      {cocktail
        ? <CocktailCard
          cocktail={cocktail}
          isLoading={isLoading}
          onSkip={fetchCocktail}
        />
        : <Text>No cocktail :(</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
