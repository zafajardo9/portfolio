import React from 'react';

type Status = 'On Going' | 'Finished' | 'Inactive';

interface BadgeProps {
    children: React.ReactNode;
    status: Status;
}

const Badge: React.FC<BadgeProps> = ({ children, status }) => {
    const colorClasses = {
        'On Going': 'bg-yellow-500 text-black',
        'Finished': 'bg-green-500 text-white',
        'Inactive': 'bg-gray-500 text-white',
    };

    return (
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colorClasses[status]}`}>
            {children}
        </span>
    );
};

export default Badge;