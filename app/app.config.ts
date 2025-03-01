export default defineAppConfig({
  navigation: () => queryCollection('navigation').all()
}) 