import React, { useState } from 'react'
import {
  Card,
  CardHeader,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { WeatherCard } from './WeatherCard'


const App = () => {
  const [isLoading , setIsLoading] = useState(null);
  const [weatherData , setWeatherData] = useState(null);
  const [search , setSearch] = useState('')

  const getSearch = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params : {
          key: "a5a55c53d5794174b7e93927232712",
          q: search,
        }
      });

      setWeatherData(res.data)
    } catch (error) {
      console.log(error.message);
      alert("Failed to fetch weather data");
    }finally{
      setIsLoading(false)
    }
  }

  const onSubmit = () => {
    getSearch()
  }


  return (
    <section className='h-[100vh]'>
      <div className='text-center  h-[40%] flex items-center justify-center'>
        <Card className = "w-[25rem]">
          <CardHeader >
          <div className = "flex items-center gap-4 " >
            <Input
              type = 'text'
              placeholder = "Enter city name" 
              className = " text-[1.2rem] placeholder:text-stone-400"
              value = {search}
              onChange = {(e) => setSearch(e.target.value)}
            />
            <Button 
              variant = "green" 
              onClick = {onSubmit}
            >Search</Button>
          </div>
          </CardHeader>
        </Card>
      </div>
      {isLoading && <p className='text-center mb-5'>Loading data...</p>}
      {!weatherData ? (
        ""
      ) : (
        <WeatherCard data = {weatherData} />
      )}
    </section>
  )
}

export default App