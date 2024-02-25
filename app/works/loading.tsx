import { FiLoader } from 'react-icons/fi';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-50">
      <div className="animate-spin">
        <FiLoader className="text-black text-3xl" />
      </div>
    </div>
  );
  }