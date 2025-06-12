import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import TableDetail from './TableDetail';

export default function Table(props) {

    const { columns, data } = props
    const [expandedRowIndex, setExpandedRowIndex] = useState(null)

    function handleShowRow(index) {
        setExpandedRowIndex(expandedRowIndex === index ? null : index)
    }



    return (
        <div className="overflow-x-auto text-xs">

            <table className="min-w-full border-collapse border-gray-300">

                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((col) => (
                            <th key={col.accessor} className="border-b px-4 py-3 text-left">
                                {col.label}
                            </th>
                        ))}
                        <th className='border-b px-4 py-3 text-left'></th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <>
                            <tr key={rowIndex} className="hover:bg-gray-50">

                                {columns.map((col) => (
                                    <td key={col.accessor} className="border-b px-4 py-3">
                                        {row[col.accessor]}
                                    </td>
                                ))}

                                <td className='border-b px-4 py-3 gap-5'>
                                    <button
                                        onClick={() => handleShowRow(rowIndex)}
                                        className='flex items-center'>
                                        {expandedRowIndex === rowIndex ? "Hide Details" : "Show Details"}
                                        {expandedRowIndex === rowIndex ?
                                            <ChevronUp className='ml-5' size={24} />
                                            :
                                            <ChevronDown className='ml-3' size={24} />
                                        }
                                    </button>
                                </td>

                            </tr>

                            {expandedRowIndex === rowIndex && (
                                <tr>
                                    <td
                                        colSpan={columns.length + 1}
                                        className='px-4 py-3 border-b'>
                                        <TableDetail data={row} />
                                    </td>
                                </tr>
                            )}

                        </>

                    ))}
                </tbody>

            </table>

        </div>
    );
}