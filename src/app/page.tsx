import Image from "next/image";
import { prisma } from "@/db";

export default async function Home() {
  const collections = await prisma.collection.findMany();

  return <main>Hello</main>;
}
