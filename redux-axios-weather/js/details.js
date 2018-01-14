import React  from 'react';

class Details extends React.Component{

  onWeatherBtnClick(e) {
  	//по клику вызови getWeather - функция вывода значения   ajax
    this.props.getWeather(+e.target.innerText)
  }


  render(){ 
    const { weatherMain } = this.props
    const { weatherElements } = this.props
    const { weatherTemp } = this.props
    return	(
            <div >
                  <h2>weather</h2>
                  <button 
                     onClick={this.onWeatherBtnClick.bind(this)}>show Weather</button>
                  <hr/>
                  <h3>{weatherElements.name}</h3>
                {/*weatherMain.map === this.props.weatherMain.map*/}
                  {weatherMain.map((weather)=>{
                      return (
                        <p key = {weather.id}>{weather.main}</p>
                        )
                      }
                    )
                  }

                {weatherMain.map((weather)=>{
                 let url1 = 'https://openweathermap.org/img/w/'
                 let url2 = '.png'
                     return (
                        <img key = {weather.id} src = { url1+weather.icon+url2 } />
                          )
                       }
                     )
                  }

                <p>{weatherTemp.temp}</p>
                <p>{weatherTemp.pressure}</p>
          </div>
          )
      }
  }

export default Details;


