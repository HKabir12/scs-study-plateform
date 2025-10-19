"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface Marquee {
  _id: string;
  text: string;
  isActive: boolean;
}

export default function MarqueeControl() {
  const [marquees, setMarquees] = useState<Marquee[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Marquee | null>(null);
  const [updateText, setUpdateText] = useState("");
  const [newText, setNewText] = useState("");

  // Fetch all marquees
  const fetchMarquees = async () => {
    try {
      const res = await fetch("/api/marquee");
      const data = await res.json();
      setMarquees(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Marquee data fetch failed!", "error");
    }
  };

  useEffect(() => {
    fetchMarquees();
  }, []);

  // Add new marquee
  const addMarquee = async () => {
    if (!newText.trim()) return Swal.fire("Warning", "মার্কি টেক্সট দিন!", "warning");

    setLoading(true);
    try {
      const res = await fetch("/api/marquee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newText, isActive: false }),
      });
      const result = await res.json();
      if (result.success) {
        Swal.fire("Success", "Marquee added successfully!", "success");
        setNewText("");
        fetchMarquees();
      } else {
        Swal.fire("Error", "Failed to add marquee!", "error");
      }
    } catch {
      Swal.fire("Error", "Network error while adding marquee!", "error");
    } finally {
      setLoading(false);
    }
  };

  // Activate marquee
  const activateMarquee = async (id: string) => {
    try {
      const res = await fetch("/api/marquee", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isActive: true }),
      });
      const result = await res.json();
      if (result.success) {
        Swal.fire("Success", "Marquee activated!", "success");
        fetchMarquees();
      } else {
        Swal.fire("Error", "Activation failed!", "error");
      }
    } catch {
      Swal.fire("Error", "Network error!", "error");
    }
  };

  // Delete marquee
  const deleteMarquee = async (id: string) => {
    const confirm = await Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "আপনি কি সত্যিই ডিলিট করতে চান?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch("/api/marquee", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      if (result.success) {
        Swal.fire("Deleted!", "Marquee deleted successfully.", "success");
        fetchMarquees();
      } else {
        Swal.fire("Error", "Delete failed!", "error");
      }
    } catch {
      Swal.fire("Error", "Network error!", "error");
    }
  };

  // Open modal for update
  const openUpdateModal = (marquee: Marquee) => {
    setSelected(marquee);
    setUpdateText(marquee.text);
  };

  // Update marquee
  const updateMarquee = async () => {
    if (!selected) return;
    if (!updateText.trim()) return Swal.fire("Warning", "Text cannot be empty!", "warning");

    setLoading(true);
    try {
      const res = await fetch("/api/marquee", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selected._id, text: updateText }),
      });
      const result = await res.json();
      if (result.success) {
        Swal.fire("Success", "Marquee updated successfully!", "success");
        setSelected(null);
        fetchMarquees();
      } else {
        Swal.fire("Error", "Update failed!", "error");
      }
    } catch {
      Swal.fire("Error", "Network error!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-8xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🎯 Marquee Management</h2>

      {/* Add New Marquee */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <Textarea
          className="flex-1"
          placeholder="নতুন marquee লিখুন..."
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <Button onClick={addMarquee} disabled={loading}>
          {loading ? "Adding..." : "Add Marquee"}
        </Button>
      </div>

      {/* Marquee Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Text</TableHead>
            <TableHead>Active</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marquees.map((m) => (
            <TableRow key={m._id} className={m.isActive ? "bg-green-50" : ""}>
              <TableCell className="max-w-xs truncate">{m.text}</TableCell>
              <TableCell>{m.isActive ? "✅" : "❌"}</TableCell>
              <TableCell className="flex flex-wrap gap-2">
                {!m.isActive && (
                  <Button variant="secondary" size="sm" onClick={() => activateMarquee(m._id)}>
                    Activate
                  </Button>
                )}
                <Button variant="destructive" size="sm" onClick={() => deleteMarquee(m._id)}>
                  Delete
                </Button>

                {/* Update Modal */}
                <Dialog open={!!selected && selected._id === m._id}>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => openUpdateModal(m)}>
                      Update
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Update Marquee Text</DialogTitle>
                    </DialogHeader>
                    <Textarea
                      className="mb-4"
                      value={updateText}
                      onChange={(e) => setUpdateText(e.target.value)}
                    />
                    <DialogFooter className="flex justify-end gap-2">
                      <Button onClick={() => setSelected(null)} variant="outline">
                        Cancel
                      </Button>
                      <Button onClick={updateMarquee} disabled={loading}>
                        {loading ? "Updating..." : "Update"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
          {marquees.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500">
                কোনো marquee নেই
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
