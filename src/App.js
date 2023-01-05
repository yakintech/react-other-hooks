import React, { useId } from 'react'
import Content from './customHooks/Content';
import SiteHeader from './customHooks/SiteHeader';
import Parent from './memo/Parent';
import Header from './otherHooks/Header'
import LeftMenu from './otherHooks/LeftMenu'
function App() {

  let inputId = useId();

  return (<>
      {/* <Header inputId={inputId} />
      <LeftMenu inputId={inputId} /> */}
      {/* <SiteHeader/>
      <Content/> */}
      <Parent/>
  </>
  )

}

export default App