import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-12">
      <Sidebar />
      <section className="lg:border lg:col-span-7 bg-neutral-900">Home</section>
      <Profile />
    </main>
  );
}
