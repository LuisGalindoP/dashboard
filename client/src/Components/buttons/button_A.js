import React from 'react';

function Button_A(props) {
    const {amount} = props;
    return (
        <div>
        <button class='font-bold p-4 m-4 rounded-xl drop-shadow-2xl bg-white flex flex-none gap-14 items-center'>
            <div class='text-left'>
                <p class='text-slate-500 text-sm font-light'>Today's money</p>
                <div class='flex flex-none items-baseline gap-2'>
                <p class='font-bold'>{amount}</p>
                <p class='text-green-400 text-xs'>+55%</p>
            </div>
            </div>
            <div class='bg-blue-500 rounded-lg w-12 h-12 drop-shadow-2xl' >
                <div class='w-5 h-5 bg-white mx-auto mt-3 rounded-full'>
                    <p class='text-blue-500 mx-auto align-middle text-sm'>$</p>
                </div>
            </div>
        </button>
        </div>
    )
}

export default Button_A;