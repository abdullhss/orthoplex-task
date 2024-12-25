import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const DashBordTable =  () => {

    return (
    <div>
          <Table>
            <TableCaption>fetch json placeholder API using Axios</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>title</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
            <TableBody>
                {
                    
                }
            </TableBody>
        </Table>

    </div>
  )
}

export default DashBordTable



