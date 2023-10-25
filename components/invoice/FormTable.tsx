import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const FormTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tax
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                            <input className='h-7 text-base border-0 p-1 mb-1 placeholder:text-slate-400' type="text" placeholder='Item' name='item' />
                        </th>
                        <td className="px-6 py-4"><textarea
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write item's description..."
                        ></textarea></td>
                        <td className="px-6 py-4">200000</td>
                        <td className="px-6 py-4">2150</td>
                        <td className="px-6 py-4">202150</td>
                        <td className="px-6 py-4 text-right">
                            <button type='button'>
                                <AiOutlineCloseCircle className='text-red-600 text-base' />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormTable
