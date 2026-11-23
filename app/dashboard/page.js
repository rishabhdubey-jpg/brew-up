
import Dashboard from "@/components/Dashboard";

export const metadata = {
  title: "Dashboard - BrewUp",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#08060e] px-4 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="font-semibold tracking-[4px] text-purple-400">
            YOUR CREATOR SPACE
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Dashboard<span className="text-purple-500">.</span>
          </h1>
          <p className="mt-3 text-gray-400">
            Manage your profile, payments and creator journey.
          </p>
        </div>

        <Dashboard />
      </div>
    </main>
  );
}
