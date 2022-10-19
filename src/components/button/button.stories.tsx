import { Meta, StoryObj } from '@storybook/react'
import {Button, IButton} from './button'

export default{
    title: 'Components/Button',
    component: Button,
    args:{
        children:[
            <Button className='w-[496px] py-5 rounded-sm'>
                Enviar Form 
            </Button>
        ]
    }
} as Meta<IButton>


export const Default:StoryObj<IButton> = {}