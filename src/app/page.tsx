import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <div className="flex w-full max-w-[1280px] mx-auto h-[600px]">
        <div className="flex-1">
          <Image
            src={"/hero-left.png"}
            alt={""}
            width={537}
            height={797}
            className="h-full w-auto object-cover object-right"
          />
        </div>
        <div className="basis-[600px]">Centre</div>
        <div className="flex-1">
          <Image
            src={"/hero-right.png"}
            alt={""}
            width={537}
            height={797}
            className="h-full w-auto object-cover object-left"
          />
        </div>
      </div>
    </main>
  );
}
