import React from 'react'
import node from '../../assets/node.webp'
import css from '../../assets/css.png'
import figma from '../../assets/figma.png'
import git from '../../assets/git.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import mongodb from '../../assets/mongodb.png'
import next from '../../assets/next.png'
import python from '../../assets/python2.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import tailwind from '../../assets/tailwind.png'
import ts from '../../assets/ts.png'

const skills = [
    {
        name: "Node",
        image: node
    },
    {
        name: "React",
        image: react
    },
    {
        name: "JS",
        image: js
    },
    {
        name: "Tailwindcss",
        image: tailwind
    },
    {
        name: "MongoDB",
        image: mongodb
    },
    {
        name: "Redux",
        image: redux
    },
    {
        name: "Git",
        image: git
    },
    {
        name: "HTML",
        image: html
    },
    {
        name: "CSS",
        image: css
    },
    {
        name: "Next",
        image: next
    },
    {
        name: "Python",
        image: python
    },
    {
        name: "Typescript",
        image: ts
    },
    {
        name: "Figma",
        image: figma
    },
]

const Programming = () => {
  return (
    <div className='md:py-2 px-4 md:px-8'>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(3rem,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] gap-x-4 gap-y-10'>

            {
                skills.map(skill => (
                    <div className='flex flex-col items-center w-max'>
                        <div className='h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] rounded-full'>
                            <img src={skill.image} alt="node" className='h-full w-full object-contain rounded-full' />
                        </div>
                        <p className='mt-3 text-xs sm:text-sm'>{skill.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programming