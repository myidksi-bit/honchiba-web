import Image, { type StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  eyebrow: string;
  title: string;
  lead?: string;
  position?: string;
};

export default function PageHero({ image, eyebrow, title, lead, position }: Props) {
  return (
    <section className="relative flex min-h-[320px] items-end overflow-hidden bg-forest-deep sm:min-h-[400px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position ?? "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/35 to-forest-deep/10" />
      <div className="container-x relative py-10 sm:py-14">
        <p className="eyebrow text-[#e3c891]">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
