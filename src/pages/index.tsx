import { GetServerSideProps } from "next";
import DynamicComponent from "@/components/DynamicComponent";

interface HomeProps {
  config: any;
}

export default function Home({ config }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Dynamic Dashboard</h1>
      <DynamicComponent config={config} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // In a real application, you'd fetch this from an API
  const res = await fetch("http://localhost:3000/api/get-component-config");
  const config = await res.json();

  return { props: { config } };
};
