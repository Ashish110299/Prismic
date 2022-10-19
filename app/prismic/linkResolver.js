function createRoutesWithTags(tags) {
  if (tags.length == 0) return '/'

  var tempRoute = "/"
  tags.forEach(tag => {
    // if (tag == 'Practice Area') return
    tempRoute += tag + "/"
  });

  return tempRoute
}

export default (doc) => {
  
  if (doc.type === 'page') {
    if (doc.uid === 'homepage') {
      return `/`
    }

    const route = createRoutesWithTags(doc.tags) + doc.uid + "/"
    return route
  }
}
