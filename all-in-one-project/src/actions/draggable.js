export function draggable(node, { offset }) {
  // on mount
  let _offset = offset
  let x = 0
  let y = 0
  function handleMousedown(event) {
    x = event.clientX + _offset
    y = event.clientY + _offset
    node.dispatchEvent(new CustomEvent('dragstart', {
      detail: {
        x,
        y,
      }
    }))

    window.addEventListener('mousemove', handleMousemove)
    window.addEventListener('mouseup', handleMouseup)
  }

  function handleMousemove(event) {
    const dx = event.clientX - x
    const dy = event.clientY - y

    x = event.clientX
    y = event.clientY

    node.dispatchEvent(new CustomEvent('dragmove', {
      detail: {
        x,
        y,
        dx,
        dy
      }
    }))
  }

  function handleMouseup(event) {
    x = event.clientX + _offset
    y = event.clientY + _offset
    node.dispatchEvent(new CustomEvent('dragend', {
      detail: {
        x,
        y
      }
    }))

    window.removeEventListener('mousemove', handleMousemove)
    window.removeEventListener('mouseup', handleMouseup)
  }

  node.addEventListener('mousedown', handleMousedown)

  return {
    destroy() {
      // on destroy
      node.removeEventListener('mousedown', handleMousedown)
    }
  }
}