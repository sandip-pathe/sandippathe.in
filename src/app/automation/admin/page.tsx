"use client";

import { useState, useEffect } from "react";
import { getLeads, updateLeadStatus, type Lead } from "./actions";
import { Metadata } from "next";
import { Lock } from "lucide-react";

const ADMIN_PASSWORD = "sandip2025";

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  converted: "bg-purple-100 text-purple-800",
  rejected: "bg-red-100 text-red-800",
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Lead["status"] | "all">("all");

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  // Check for saved auth on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("automation-admin-auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle password submit
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("automation-admin-auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
      setPassword("");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  async function fetchLeads() {
    setLoading(true);
    const result = await getLeads(100);
    if (result.success) {
      setLeads(result.leads);
    } else {
      setError(result.error || "Failed to load leads");
    }
    setLoading(false);
  }

  async function handleStatusUpdate(leadId: string, status: Lead["status"]) {
    const result = await updateLeadStatus(leadId, status);
    if (result.success) {
      // Update local state
      setLeads((prev) =>
        prev.map((lead) => (lead.id === leadId ? { ...lead, status } : lead))
      );
    }
  }

  const filteredLeads =
    filter === "all" ? leads : leads.filter((lead) => lead.status === filter);

  // Show password screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Admin Access
            </h1>
            <p className="text-slate-600 text-center mb-8">
              Enter password to access lead pipeline
            </p>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    authError ? "border-red-500 bg-red-50" : "border-slate-300"
                  }`}
                  autoFocus
                />
                {authError && (
                  <p className="text-red-600 text-sm mt-2">
                    Incorrect password. Please try again.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-xl text-slate-600">Loading leads...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Lead Pipeline - Automation
          </h1>
          <p className="text-slate-600">
            Manage and track your automation consultation leads
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-slate-900">
              {leads.length}
            </div>
            <div className="text-sm text-slate-600">Total Leads</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-900">
              {leads.filter((l) => l.status === "new").length}
            </div>
            <div className="text-sm text-blue-600">New</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-yellow-900">
              {leads.filter((l) => l.status === "contacted").length}
            </div>
            <div className="text-sm text-yellow-600">Contacted</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-900">
              {leads.filter((l) => l.status === "qualified").length}
            </div>
            <div className="text-sm text-green-600">Qualified</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-900">
              {leads.filter((l) => l.status === "converted").length}
            </div>
            <div className="text-sm text-purple-600">Converted</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === "all"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("new")}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === "new"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            New
          </button>
          <button
            onClick={() => setFilter("contacted")}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === "contacted"
                ? "bg-yellow-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            Contacted
          </button>
          <button
            onClick={() => setFilter("qualified")}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === "qualified"
                ? "bg-green-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            Qualified
          </button>
          <button
            onClick={() => setFilter("converted")}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === "converted"
                ? "bg-purple-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            Converted
          </button>
          <button
            onClick={fetchLeads}
            className="ml-auto px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800"
          >
            Refresh
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {lead.createdAt?.toDate
                        ? new Date(lead.createdAt.toDate()).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {lead.company || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-md truncate">
                      {lead.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          statusColors[lead.status]
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleStatusUpdate(
                            lead.id,
                            e.target.value as Lead["status"]
                          )
                        }
                        className="border border-slate-300 rounded px-2 py-1 text-sm"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLeads.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No leads found
            </div>
          )}
        </div>

        {/* Export Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              const csv = [
                ["Date", "Name", "Email", "Company", "Message", "Status"].join(
                  ","
                ),
                ...filteredLeads.map((lead) =>
                  [
                    lead.createdAt?.toDate
                      ? new Date(lead.createdAt.toDate()).toLocaleDateString()
                      : "",
                    lead.name,
                    lead.email,
                    lead.company || "",
                    `"${lead.message.replace(/"/g, '""')}"`,
                    lead.status,
                  ].join(",")
                ),
              ].join("\n");

              const blob = new Blob([csv], { type: "text/csv" });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `leads-${
                new Date().toISOString().split("T")[0]
              }.csv`;
              a.click();
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
          >
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
}
