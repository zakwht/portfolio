export const Frame: React.FC<{ title?: string; src?: string }> = ({
  title,
  src
}) => <iframe src={src} title={title} />;
