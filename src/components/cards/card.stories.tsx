import { Meta, StoryObj } from '@storybook/react'
import {CardELement, CardDiv} from './index'

function click(){
    return alert('olha isso aqui')
}

export default{
    title: 'Components/CardElement',
    component: CardELement.cardBorder,
    args:{
        children:[
           <CardELement.cardBorder onClick={()=>click}>
            <div className='w-56 rounded h-[139px] mt-4 border border-error'></div>
            <CardELement.cardText title='Titulo aleatorio para text' price={0.00}/>
           </CardELement.cardBorder>
        ]
    }
} as Meta<CardDiv>

export const Default:StoryObj<CardDiv> = {}