import React from 'react'
import DashBordTable from './DashBordTable'

const DashBord = () => {
  return (
    <div className='min-h-[60vh] md:min-h-[80vh] px-8 py-4 text-white '>
        <h1 className='text-3xl font-semibold py-6'>DashBord : </h1>
        <DashBordTable />
    </div>
  )
}

export default DashBord