import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function CocktailCard({ cocktail, isLoading, onSkip }) {
  return (
    <View>
      {isLoading
        ? <Text>Loading...</Text>
        : <View>
          <Image
            style={styles.image}
            source={{
              uri: cocktail.strDrinkThumb,
            }}
          />
          <Text style={styles.label}>{cocktail.strDrink}</Text>
        </View>
      }
      <View>
        <Button
          title="SKIP"
          onPress={!isLoading && onSkip}
        />
        <Button
          title="LIKE"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 256,
    height: 256,
    margin: 'auto'
  },

  label: {
    textAlign: 'center'
  }
})
