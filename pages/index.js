import React from 'react'

function index() {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Sellers</h2>
        <p>Extra about text</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => product )}
      </div>
      Footer
    </>
  )
}

export default index
