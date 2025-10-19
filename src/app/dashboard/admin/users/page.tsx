"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

interface User {
  _id: string;
  firstName: string;
  email: string;
  role: string;
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const updateRole = async (id: string, role: string) => {
    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    fetchUsers();
  };

  const deleteUser = async (id: string) => {
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Card className="w-full max-w-6xl mx-auto mt-8 ">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          👥 ইউজার ম্যানেজমেন্ট
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-center  py-6">লোড হচ্ছে...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>নাম</TableHead>
                <TableHead>ইমেইল</TableHead>
                <TableHead>ভূমিকা</TableHead>
                <TableHead>অ্যাকশন</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <select
                      className="border rounded p-1"
                      value={user.role}
                      onChange={(e) => updateRole(user._id, e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderator</option>
                      <option value="student">Student</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      <Trash2 className="w-4 h-4" /> মুছুন
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
