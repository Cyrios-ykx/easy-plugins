/**
 * @Author Cyrios
 * @brief 打点功能
 * @param {String} dom_id 你需要打点的dom的id
 * @returns
 */

function point(dom_id) {
  const point = document.getElementById('point-spin')
  if (point) {
    point.remove()
    const pointInput = document.getElementsByClassName('point-input')

    for (let i = pointInput.length - 1; i >= 0; i--) {
      pointInput[i].remove()
    }
    return
  }

  // 在这个id的dom上面创造一个宽高一样大小的遮罩层
  const dom = document.getElementById(dom_id)
  const position = dom.getBoundingClientRect()
  const spin = document.createElement('div')
  const styleInfo = {
    position: 'absolute',
    'z-index': 9998,
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: `${position.width}px`,
    height: `${position.height}px`,
    'background-color': 'white',
    opacity: 0.1
  }

  const styleString = Object.entries(styleInfo)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')

  spin.setAttribute('style', styleString)
  spin.setAttribute('id', 'point-spin')
  document.body.append(spin)

  // 点击的时候直接在点击的位置生成一个div，可以输入任意的内容
  spin.addEventListener('click', (event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY

    const point = document.createElement('input')
    const styleInfo = {
      position: 'absolute',
      'z-index': 9999,
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      width: '100px',
      height: '18px',
      'background-color': 'white',
      border: '1px solid black',
      opacity: 0.5
    }

    const styleString = Object.entries(styleInfo)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ')

    point.setAttribute('style', styleString)
    point.setAttribute('class', 'point-input')
    document.body.append(point)
  })
}

export { point }
