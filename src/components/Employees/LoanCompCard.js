import React from 'react'


const LoanCompCard = ({loans}) => {

    
    return (
        <>
        <div className=''>
            
        </div>
        <button className='px-4 py-2  rounded-md bg-green-500 text-white  '>Home</button>
        <div className='font-mono text-5xl text-center'>Best Loans for You 🎉</div>
        <div className="bg-white shadow-md rounded p-4 m-4 ">
            {loans.map((loan, index) => (
                <div key={index}>
                    <div  className="border-t-2 ">
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>bankName:</p>
                            <p>{loan.bankName}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>loanType:</p>
                            <p>{loan.loanType}</p>
                        </div>
                        <div className='flex capitalize  my-2 gap-x-4'>
                            <p>interestRate:</p>
                            <p>{loan.interestRate}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>loanAmount:</p>
                            <p>{loan.loanAmount}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>tenure:</p>
                            <p>{loan.tenure}</p>
                        </div>
                        

                    </div>
                    <div className='flex flex-row-reverse'>
                    <button className='px-4 py-2 mb-4  bg-green-500 text-white rounded-md'>Select</button>
                    </div>
                </div>

            ))}
        </div>
        </>
    );


}

export default LoanCompCard