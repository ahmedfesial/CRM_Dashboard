import React from 'react'

export default function Customers() {
  return <>
    <div className='mt-7 ms-24  ps-12 pe-5 md:ms-20 bg-[#FFFFFF] w-[1060px] shadow-md  rounded-2xl'> 
        <div className='pt-2'>
            <h1 className='text-3xl ps-5 font-bold'>All Customers</h1>
            <div className='flex justify-between items-center mt-5'>
              <h1 className='font-semibold ps-5 text-lg text-[#00AC4F]'>Active Members</h1>
              <div class="relative me-8">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50" placeholder="Search..."/>
              </div>
            </div>
            <table className="table-auto w-full border-collapse text-center">
              <thead className="text">
                <tr>
                  <th className="px-6 py-4">Customers Name</th>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Phone Number</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4">Jane Cooper</td>
                  <td className="px-6 py-4">Microsoft</td>
                  <td className="px-6 py-4">(255) 555-0118</td>
                  <td className="px-6 py-4">jane@microsoft.com</td>
                  <td className="px-6 py-4">United States</td>
                  <td className="px-6 py-4">
                      <div className='border-1  px-2 text-[#DF0404] bg-[#FFC5C5] cursor-pointer rounded-md hover:text-[#FFC5C5] hover:bg-[#DF0404]'>
                        <h1>Inactive</h1>
                      </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4">Floyd Miles</td>
                  <td className="px-6 py-4">Yahoo</td>
                  <td className="px-6 py-4">(205) 555-0100</td>
                  <td className="px-6 py-4">floyd@yahoo.com</td>
                  <td className="px-6 py-4">Kiribati</td>
                  <td className="px-6 py-4">
                      <div className='border-1  px-2 text-[#f6f6f6] bg-[#16C098] cursor-pointer rounded-md hover:text-[#16C098] hover:bg-[#f6f6f6]'>
                        <h1>Inactive</h1>
                      </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4">Ronald Richards</td>
                  <td className="px-6 py-4">Adobe</td>
                  <td className="px-6 py-4">(302) 555-0107</td>
                  <td className="px-6 py-4">ronald@adobe.com</td>
                  <td className="px-6 py-4">Iran</td>
                  <td className="px-6 py-4">
                      <div className='border-1  px-2 text-[#DF0404] bg-[#FFC5C5] cursor-pointer rounded-md hover:text-[#FFC5C5] hover:bg-[#DF0404]'>
                        <h1>Inactive</h1>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4">Ronald Richards</td>
                  <td className="px-6 py-4">Adobe</td>
                  <td className="px-6 py-4">(302) 555-0107</td>
                  <td className="px-6 py-4">ronald@adobe.com</td>
                  <td className="px-6 py-4">Brazil</td>
                  <td className="px-6 py-4">
                      <div className='border-1  px-2 text-[#f6f6f6] bg-[#16C098] cursor-pointer rounded-md hover:text-[#16C098] hover:bg-[#f6f6f6]'>
                        <h1>Inactive</h1>
                      </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4">Ronald Richards</td>
                  <td className="px-6 py-4">Adobe</td>
                  <td className="px-6 py-4">(302) 555-0107</td>
                  <td className="px-6 py-4">ronald@adobe.com</td>
                  <td className="px-6 py-4">Åland Islands</td>
                  <td className="px-6 py-4">
                    <div className='border-1  px-2 text-[#DF0404] bg-[#FFC5C5] cursor-pointer rounded-md hover:text-[#FFC5C5] hover:bg-[#DF0404]'>
                      <h1>Inactive</h1>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <h1 className='p-2'>Showing data 1 to 8 of  256K entries</h1>

        </div>
    </div>
  </>
}
