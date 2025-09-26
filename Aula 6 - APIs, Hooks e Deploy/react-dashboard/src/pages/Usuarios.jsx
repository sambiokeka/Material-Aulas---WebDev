"use client";
import { Button } from "../components/ui/button";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export default function Usuarios() {
  function handleClick() {
    alert('cliclou')
  }
  const API_URL = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`) 
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      <p className="mt-2 text-gray-600 mb-4">Página de usuários.</p>

      <div className="overflow-hidden rounded-md border bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Botões</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.length > 0 ? (
              users.map((users) => (
                <TableRow key={users.id} className="hover:bg-gray-50">
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>
                    <Button className={'w-22'}>Editar</Button>
                    <Button onClick={handleClick} className={'w-22 ml-10'}>Remover</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-4">
                  Carregando usuários...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
