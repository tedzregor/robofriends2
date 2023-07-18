import React from 'react'

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma4 grow bw2 shadow-5'> 
            <img alt='robots' src={`https://robohash.org/${id}`} style={{height:'300px', width: '300px'}}></img>
            <h1>{ name }</h1>
            <p>{email}</p>

        </div>
    )
}

export default Card
