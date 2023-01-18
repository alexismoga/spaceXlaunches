const API_URL = "https://api.spacexdata.com/v4/launches/"

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        return data
    }catch(error){
        console.error(error)
    }
}

export async function getLauchByFlightNumber(flightnumber){
    try{
        const response = await fetch(`${API_URL}/${flightnumber}`)
        const data = await response.json()
        return data
    }catch(error){
        console.error(error)
    }
}