import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStore = async (name,token) => {
  try {
    await AsyncStorage.setItem(name, token)
  } catch (e) {
    console.log(e)
  }
}