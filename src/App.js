import React, { useState, useEffect } from 'react';
import Topbar  from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import Service from './filter/Service';
import Istatistik from './components/Istatistik';


const App = (props) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(null)

  //fetch data
  useEffect(() => {
    const fetchCountries = async () => {
      Service.list().then(res => {
        setCountries({ countries: res.data })
      }).catch(() => { throw new Error("No  No No") })
    }

    fetchCountries()
    return () => {}
  }, [])


  //loading
  useEffect(() => {
    countries && setLoading(false)
  }, [countries, theme])


  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <Topbar theme={theme} toggleTheme={toggleTheme}/>

      {loading &&
        <p>Loading.........</p>
      }
<BrowserRouter>
      <Switch>
        <Route
          exact path='/'
          render={() =>
            <Home
              theme={theme}
              countries={countries}
              {...props}
            />
          }/>

        <Route
          exact path='/alpha/:alpha3Code'
          component={props => 
            <Info countries={countries} {...props} theme={theme}/>
          }
        />
          <Route path='/chart' component={Istatistik} theme={theme}/>
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}

export default App;