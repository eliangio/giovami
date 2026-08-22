const modules = import.meta.glob('../assets/images/*.{jpg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const images: Record<string, string> = {}
for (const path in modules) {
  const key = path.split('/').pop()!.replace(/\.(jpg|png)$/, '')
  images[key] = modules[path] as string
}
