import Priceoption from "./Priceoption";

const Priceoptions = ()=>{
    const priceOptions = [
        {
          "id": "gym_001",
          "name": "FitZone Fitness Center",
          "location": "123 Main Street, Anytown, USA",
          "equipment": ["Treadmills", "Free Weights", "Elliptical Machines", "Yoga Studio"],
          "price": 500
        },
        {
          "id": "gym_002",
          "name": "Iron Gym",
          "location": "456 Elm Avenue, Metropolis, USA",
          "equipment": ["Power Racks", "Dumbbells", "Cable Machines", "Spin Bikes"],
          "price": 500
        },
        {
          "id": "gym_003",
          "name": "HealthHub Fitness Studio",
          "location": "789 Oak Lane, Suburbia, USA",
          "equipment": ["Cardio Machines", "Kettlebells", "Pilates Studio", "Sauna"],
          "price": 500
        },
        {
          "id": "gym_004",
          "name": "Peak Performance Gym",
          "location": "101 Pine Street, Downtown, USA",
          "equipment": ["Smith Machines", "Battle Ropes", "CrossFit Area", "Steam Room"],
          "price": 500
        },
        {
          "id": "gym_005",
          "name": "Active Life Fitness Center",
          "location": "234 Cedar Road, Riverside, USA",
          "equipment": ["Rowing Machines", "TRX Suspension", "Kickboxing Studio", "Pool"],
          "price": 500
        }
      ];
      
    return (
      <div>
        <h1 className='text-4xl font-bold text-center mb-8 mt-8'>Best GYM price in the city</h1>
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {
            priceOptions.map(option => <Priceoption key={option.id} option = {option}></Priceoption>)
        }
        </div>
        
      </div>
    )
}
export default Priceoptions;