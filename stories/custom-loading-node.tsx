import React from "react"

export const CustomLoadingNode = (): JSX.Element => {
  return <div style={{ color: 'orange', backgroundColor: 'black', height: '100%', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          CUSTOM LOADING NODE
        </div>
      </div>
    </div>
  </div>
}