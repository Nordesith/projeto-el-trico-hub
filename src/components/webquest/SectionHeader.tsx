interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  number?: string;
}

export const SectionHeader = ({ eyebrow, title, description, number }: Props) => {
  return (
    <div className="reveal mb-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        {number && (
          <span className="font-mono-tech text-xs text-primary border border-primary/40 px-2 py-0.5">
            {number}
          </span>
        )}
        <span className="section-eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
