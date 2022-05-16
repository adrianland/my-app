import React from 'react'
import './ThirdContent.css'
import Brain from '../../svg/Ic_brain.svg';
import Hour from '../../svg/Ic_Hour.svg';
import Laptop from '../../svg/Ic_laptop.svg';
import DrinkSnacks from '../../svg/Ic_DrinkSnacks.svg';
import HomeOfice from '../../svg/Ic_HomeOffice.svg';
import Workshops from '../../svg/Ic_Workshops.svg';

export default function ThirdContent() {
    const itemsBenefits = [
        {
            name: 'hora',
            img: Hour
        },
        {
            name: 'HomeOfice',
            img: HomeOfice
        },
        {
            name: 'Workshops',
            img: Workshops
        },
        {
            name: 'DrinkSnacks',
            img: DrinkSnacks
        },
        {
            name: 'Laptop',
            img: Laptop
        },
        {
            name: 'Brain',
            img: Brain
        }

    ]
    return (
        <div className="thirdContent" >
            {
                itemsBenefits.map((item, key) => (

                    <div className='cardBenefits' key={key}>
                        <img src={item.img} />
                        <p>{item.name}</p>
                    </div>
                    
                ))
            }

        </div>
    )
}
