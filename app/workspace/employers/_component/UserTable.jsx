import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
const UserTable = ({items}) => {
  return (
    <div><Table>
  <TableCaption>A list of your User Table.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>User</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Number of imported Products</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
   {items && items.map((element , index) => (
     <TableRow key={index} >
      <TableCell className="font-medium">{element.username}</TableCell>
      <TableCell>{element.role}</TableCell>
      <TableCell>{element.products.length || 0}</TableCell>
      <TableCell className="text-right"><Button>Promote</Button></TableCell>
    </TableRow>
   ))}
  </TableBody>
</Table></div>
  )
}

export default UserTable