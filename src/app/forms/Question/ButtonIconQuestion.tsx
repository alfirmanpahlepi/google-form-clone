export default function ButtonIconQuestion({
  add,
  duplicate,
  remove,
}: {
  add: () => void;
  duplicate: () => void;
  remove: () => void;
}) {
  const icons = [
    { onClick: duplicate, src: '/assets/icons/duplicate.svg', alt: 'duplicate' },
    { onClick: add, src: '/assets/icons/plusCircle.svg', alt: 'plus' },
    { onClick: remove, src: '/assets/icons/trash.svg', alt: 'remove' },
  ];

  return (
    <div className="flex items-center justify-end space-x-3 border-t pt-6">
      {icons.map((el, idx) => (
        <span key={idx}>
          <img alt={el.alt} className="h-6 w-6 cursor-pointer" onClick={el.onClick} src={el.src} />
        </span>
      ))}
    </div>
  );
}
