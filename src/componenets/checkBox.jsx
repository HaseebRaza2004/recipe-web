import React, { useState } from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="inline-flex items-center cursor-pointer mr-3">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
            />
            <span
                className={`w-6 h-6 border-2 rounded-md flex items-center justify-center 
                    ${isChecked ? 'bg-[#974E44] border-[#974E44]' : 'border-[#B55D51]'} 
                    transition-all duration-300`}
            >
                {isChecked && (
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </span>
        </label>
    );
};

export default Checkbox;
