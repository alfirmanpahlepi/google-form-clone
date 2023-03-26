function Avatar({ name, imageUrl }: { name?: string; imageUrl?: string }) {
  const getInitials = (name?: string) => {
    if (!name) return '?';

    const words = name.split(' ');
    if (words.length === 1) {
      return `${words[0][0]}`;
    }
    return `${words[0][0]}${words[words.length - 1][0]}`;
  };

  const getRandomColor = () => {
    const colors = [
      'bg-red-500',
      'bg-yellow-400',
      'bg-green-500',
      'bg-blue-500',
      'bg-indigo-500',
      'bg-purple-500',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const avatarStyle = [
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'overflow-hidden',
    'w-10',
    'h-10',
    getRandomColor(),
  ];

  const imageStyle = ['object-cover', 'w-full', 'h-full'];

  const initialsStyle = ['text-white', 'font-bold', 'text-lg'];

  const initials = getInitials(name);

  return (
    <div className={avatarStyle.join(' ')}>
      {imageUrl ? (
        <img alt={name} className={imageStyle.join(' ')} src={imageUrl} />
      ) : (
        <span className={initialsStyle.join(' ')}>{initials}</span>
      )}
    </div>
  );
}

export default Avatar;
