export function typewriter(node, { speed = 100 }) {

  const isValid = (
    node.childNodes.length === 1 && 
    node.childNodes[0].nodeType === Node.TEXT_NODE
  )

  if (!isValid) {
    throw new Error('Please provide plain text')
  }

  const text = node.textContent
  const duration = text.length * speed

  return {
    duration,
    tick: (t) => {
      const i = Math.round(text.length * t)
      node.textContent = text.slice(0, i)
    } 
  }
}