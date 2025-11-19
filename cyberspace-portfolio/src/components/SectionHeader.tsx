interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="space-y-1">
      {eyebrow && (
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
        {title}
      </h2>
    </div>
  );
}
