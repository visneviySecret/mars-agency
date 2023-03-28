export const handleLink = (
  e: React.MouseEvent<HTMLAnchorElement>,
  selector?: string,
) => {
  e.preventDefault()
  const anchor = document.querySelector(selector || '#form')
  anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
