const API_URL = "https://api.spacexdata.com/v5/launches"

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

export async function getLauchById(id){
    try{
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}