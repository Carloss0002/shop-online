import { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlass } from 'phosphor-react'
import { Input } from '../input/input'
import {Header, IPropsHome} from './header'


export default{
    title: 'Components/Header',
    component: Header,
    args:{
        children:[
            <div className='w-[571px] relative'>
               <Input.InputComponent placeholder='Buscar Produtos'/>
              <div className='absolute h-[58px] bottom-1.5  rounded-r-sm w-14 right-0'>
                <button className='bg-gold-900 w-14 h-full flex items-center justify-center m rounded-r-sm'>
                    <MagnifyingGlass className='text-white font-bold text-sm'/>
                </button>
              </div> 
            </div>
        ]
    }
} as Meta<IPropsHome>


export const Default:StoryObj<IPropsHome> = {}
export const HeaderSm:StoryObj<IPropsHome> = {
    args:{
        children:[
            <Input.Root className='w-full '>
               <Input.InputComponent/>
            </Input.Root>
        ]
    }
}