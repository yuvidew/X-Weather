import React from 'react'
import { Card } from './components/ui/card'

export const WeatherCard = ({data}) => {

    const {current , location} = data;

    return (
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-2 w-[90%] m-auto'>
            <Card className=' border p-5'>
                <h3 className=' text-center text-[1.2rem] font-medium'>Temperature</h3>
                <p className=' text-center mt-4'>
                    {current?.humidity}%
                </p>
            </Card>
            <Card className=' border p-5'>
                <h3 className=' text-center text-[1.2rem] font-medium'>Humidity</h3>
                <p className=' text-center mt-4'>
                    {current?.temp_c}°C
                </p>
            </Card>
            <Card className=' border p-5'>
                <h3 className=' text-center text-[1.2rem] font-medium'>Condition</h3>
                <p className=' text-center mt-4'>
                    {current?.condition?.text}
                </p>
            </Card>
            <Card className=' border p-5'>
                <h3 className=' text-center text-[1.2rem] font-medium'>Wind Speed</h3>
                <p className=' text-center mt-4'>
                    {current?.wind_kph}kph
                </p>
            </Card>
        </div>
    )
}
