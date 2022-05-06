import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'd70nit9p', 
  dataset: 'production', 
  useCdn: false
})