import React,{useState} from 'react';
import './collage.css';



function Collage() {

  const [columns, setColumns] = useState(4)

  return (
    <div className='collage-container'>

      <div className='college-columns'>

          {[1,2,3,4].map((item, index) => {
                return(
                    <img src={require(`./image/${item}.jpg`)} alt="" className='collage-img' key={index}/>
                )
            })}

      </div>
      {(columns > 1) && 
        <div className='college-columns'>
        {[2,4,3,1].map((item, index) => {
            return(
                <img src={require(`./image/${item}.jpg`)} alt="" className='collage-img' key={index}/>
            )
        })}
        </div>
      }

    {(columns > 2) && 
            <div className='college-columns'>
            {[4,3,2,1].map((item, index) => {
                return(
                    <img src={require(`./image/${item}.jpg`)} alt="" className='collage-img' key={index}/>
                )
            })}
            </div>
          }

      {(columns > 3) && 
              <div className='college-columns'>
              {[3,1,2,4].map((item, index) => {
                  return(
                      <img src={require(`./image/${item}.jpg`)} alt="" className='collage-img' key={index}/>
                  )
              })}
              </div>
            }
        
        
    </div>
  )
}

export default Collage
