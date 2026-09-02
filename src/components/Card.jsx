export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`card-pop shadow-card p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
