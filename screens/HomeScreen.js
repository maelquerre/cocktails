import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    fetch('http://192.168.1.76:8000/api/cocktail')
      .then(res => res.json())
      .then(cocktail => {
        setCocktail(cocktail)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>{cocktail ? cocktail.strDrink : 'No cocktail :('}</Text>
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
