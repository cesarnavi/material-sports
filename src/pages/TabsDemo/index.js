import AppBar from '@material-ui/core/AppBar'
import Page from 'material-ui-shell/lib/containers/Page'
import React, { useState } from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

export default function () {
  const [tab, setTab] = useState('one')

  return (
    <Page
      pageTitle={"Tabs demo"}
      tabs={
        <AppBar position="static">
          <Tabs
            value={tab}
            onChange={(e, t) => setTab(t)}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Item One" value="one" />
            <Tab label="Item Two" value="two" />
            <Tab label="Item Three" value="three" />
          </Tabs>
        </AppBar>
      }
    >
      <div>
        {tab === 'one' && <div>One</div>}
        {tab === 'two' && <div>Two</div>}
        {tab === 'three' && <div>Three</div>}
      </div>
    </Page>
  )
}
