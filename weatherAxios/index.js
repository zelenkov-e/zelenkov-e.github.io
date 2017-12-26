
const React = require('react')
const ReactDOM = require ('react-dom')
import axios from 'axios';

class Select extends React.Component{
 
  render(){
    return(
      <div className = 'control'>
      <select onChange = {this.props.handler}>
        <option value="id=620127">Vitsyebsk</option>
        <option value="id=625143">Minsk</option>
        <option value="id=627907">Homel</option>
        <option value="id=627904">Hrodna</option>
        <option value="id=629634">Brest</option>
      </select>
      </div>
      )
  }

}



class FetchDemo extends React.Component {

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.axiosCall = this.axiosCall.bind(this)
    this.state = {
      posts: []
    };
  }

axiosCall(res){
      this.setState({ 
        posts:res.data,
        country:res.data.sys.country,
        main:res.data.weather[0].main,
        img:res.data.weather[0].icon,
        temp:res.data.main.temp,
        clouds:res.data.clouds.all,
        pressure:res.data.main.pressure,
        speed:res.data.wind.speed,
      });
      console.log(res.data);
     }


  componentDidMount() {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=620127&units=metric&cnt=5&APPID=1ef962a01bb852fda0e833c7385144ba`)
    .then(this.axiosCall); 
 }

 handleChange(event){
  
    let cityId = event.target.value;
     axios.get(`https://api.openweathermap.org/data/2.5/weather?${cityId}&units=metric&cnt=5&APPID=1ef962a01bb852fda0e833c7385144ba`)
    .then(this.axiosCall);
  }



  render() {
    let st = this.state;
    return (
      <div>
      <Select handler = {this.handleChange}/>
      <h3>{st.posts.name},{st.country}</h3>
      <h4>{st.main}</h4>
      <ul>
      <li><img src = { 'https://openweathermap.org/img/w/'+ st.img +'.png'} /></li>
      <li>{st.temp},C</li>
      <li>clouds : {st.clouds},%</li>
      <li>pressure : {st.pressure},hpa</li>
      <li>wind : {st.speed},m/s</li>
      </ul>
      </div>
      );
  }
}

ReactDOM.render(
  <FetchDemo  />,
  document.getElementById('content')
  )


