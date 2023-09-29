import PropTypes from 'prop-types'; 
import Feature from '../../feature/Feature';

const Priceoption = ({option})=>{
    const {name,location,equipment,price} = option;
    return (
      <div className="">
        <div className="card w-96 bg-teal-400 shadow-xl">
            <figure></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">
                {name}</h2>
                <div className="badge badge-secondary font-bold text-2xl">
                   <span className='py-2.5'>
                   <span>$</span>{price}<span>/month</span>
                   </span>
                </div>
                
                <h4 className='text-8 font-bold'>All Equipment : </h4>
                <div className="card-actions justify-center">
                    <div className="">
                        {
                         equipment.map( (eqm,index) => <Feature key={index} feature={eqm}></Feature>)
                        }
                    </div>
                </div>
                <h4 className='text-8 font-bold'>Location : {location}</h4>
                <button className='mt-12 w-full bg-purple-700 rounded-lg text-white p-2 font-bold'>Buy Now</button>
            </div>
        </div>
      </div>
    )
}
Priceoption.propTypes = {
    option: PropTypes.object
}
export default Priceoption;