"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";

const DashBordTable = () => {
  const [data , setData] =useState([]);
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setData(res.data)
    })
  } , [])
  if (data.length == 0) {
    return <div className="flex items-center justify-center text-2xl ">Loading...</div>;
  }

  return (
    <div>
      <Table>
        <TableCaption>Fetch JSON Placeholder API using Axios</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%]">#</TableHead>
            <TableHead className="w-[35%]">Title</TableHead>
            <TableHead className="w-[60%]">body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((post: any) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashBordTable;
