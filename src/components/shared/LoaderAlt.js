import React from 'react'
import './LoaderAlt.css'

export default function LoaderAlt(props) {
  return (

    <main style={styles.container} className="shadow-sm">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
      <div className="text-center">{props.message || '正在跳转中...'}</div>
    </main>
  )
}
const styles = {
  container: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto auto',
    width: '300px',
    height: '300px'
  }
}
