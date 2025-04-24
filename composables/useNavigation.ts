export const useNavigation = async () => {
  const { data } = await useAsyncData('navigation', () => 
    queryCollection('settings')
      .where({ _path: '/settings/navigation' })
      .findOne()
  )
  
  return data
} 