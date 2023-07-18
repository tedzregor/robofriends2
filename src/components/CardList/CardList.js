import React from 'react';
import Card from '../Card/Card'

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key= {i}
                            name={robot.name}
                            email={robot.email}
                            id={robot.id}
                        />
                    );
                }) 
            }
        </div>
    )
}

export default CardList