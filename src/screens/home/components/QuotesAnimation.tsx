import React, {useEffect, useState} from 'react'
import {View, Animated, Easing, StyleSheet} from 'react-native'

const QUOTES = [
  `"You miss 100% of the shots you don’t take."`,
  `"The secret of getting ahead is getting started."`,
  `"The best way to predict the future is to create it."`,
  `"It always seems impossible until it's done."`,
]

const QuoteAnimation = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const opacity = useState(new Animated.Value(0))[0]

  const fadeOut = (index: number) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      const nextIndex = index === QUOTES.length - 1 ? 0 : index + 1
      setCurrentQuoteIndex(nextIndex)
      //   fadeIn(nextIndex) // Start fading in the next quote
    })
  }

  const fadeIn = (index: number) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => fadeOut(index), 5000) // Wait for 5 seconds before fading out
    })
  }

  useEffect(() => {
    fadeIn(currentQuoteIndex) // Start the initial fade-in animation
  }, [currentQuoteIndex]) // Run this effect only once when the component mounts

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {opacity}]} numberOfLines={2}>
        {QUOTES[currentQuoteIndex]}
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Adjust padding as needed
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'italic',
  },
})

export default QuoteAnimation
