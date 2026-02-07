"use client";

/**
 * Dashboard Page Component.
 *
 * This is a protected route that provides:
 * - User authentication check and redirect
 * - Task management interface
 * - Task creation form
 * - Task list display
 * - Logout functionality
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showTaskList, setShowTaskList] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleTaskCreated = () => {
    setShowCreateForm(false);
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleTaskUpdated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50 px-4 py-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex justify-between items-center border border-white/20">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-md hover:scale-105 transform transition-all duration-300 w-full sm:w-auto px-10 py-3"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto space-y-8">
        {/* Create Task Section */}
        <div>
          {!showCreateForm ? (
            <button
              onClick={() => setShowCreateForm(true)}
              className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              + Create New Task
            </button>
          ) : (
            <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Create New Task
                </h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <TaskForm
                userId={user.id}
                onSuccess={handleTaskCreated}
                onCancel={() => setShowCreateForm(false)}
              />
            </div>
          )}
        </div>

        {/* Task List Section */}
        <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
          <div className="p-6 border-b border-white/30 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Tasks
            </h2>
            <button
              onClick={() => setShowTaskList(!showTaskList)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-md hover:scale-105 transform transition-all duration-300"
            >
              {showTaskList ? "Hide Tasks" : "View Tasks"}
            </button>
          </div>
          {showTaskList && (
            <TaskList
              userId={user.id}
              onTaskUpdated={handleTaskUpdated}
              refreshTrigger={refreshTrigger}
            />
          )}
        </div>
      </main>
    </div>
  );
}
