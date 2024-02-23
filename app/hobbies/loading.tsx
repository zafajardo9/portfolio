import { FiLoader } from 'react-icons/fi';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="animate-spin">
        LOADING
        <FiLoader className="text-black text-6xl" />
      </div>
    </div>
  );
  }