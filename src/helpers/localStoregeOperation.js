export const LOCAL_STOREGE_KEY = 'favorite'

export const getLocalStorege = key => {
  try {
    const savedMove=JSON.parse(localStorage.getItem(key))??[]

    // const data = localStorage.getItem(key) 
    // const savedMove = JSON.parse(data)?? []
    return savedMove
  } catch (error) {
    console.log(error.massege)
  }
}

export const setLocalStorege = (key, item) => {
  const myMove = getLocalStorege(key)
  let data = null
  let isInFavorite = null
  
 
  if (myMove.some((data ) => data?.id === item.id)) {
    data = myMove.filter((data ) => data.id !== item.id)
    isInFavorite = false
  } else {
    data = [...myMove, item]
    isInFavorite = true
  }
  localStorage.setItem(key,JSON.stringify(data))
  return isInFavorite;
}
