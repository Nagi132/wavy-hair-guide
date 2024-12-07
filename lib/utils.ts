export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatTags(tags: string[]) {
  return tags.map(tag => (
    tag.charAt(0).toUpperCase() + tag.slice(1)
  ))
}