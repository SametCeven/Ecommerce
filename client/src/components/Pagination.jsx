export default function Pagination(props) {

    const { length, itemsPerPage, setCurrentPage, currentPage } = props;

    const numberOfPages = Math.ceil(length / itemsPerPage);
    const maxButtonsToShow = 5
    const buttons = [];

    const startPage = Math.max(1,currentPage-2)
    const endPage = Math.min(numberOfPages, currentPage+2)

    if(startPage>1) buttons.push(1)
    if(startPage>2) buttons.push("...")

    for(let i=startPage; i<= endPage; i++){
        buttons.push(i)
    }

    if(endPage<numberOfPages-1) buttons.push("...")
    if(endPage<numberOfPages) buttons.push(numberOfPages) 

    return (
        <div className="flex items-center justify-between text-[14px] font-bold">

            <button 
                className="bg-[#F3F3F3] border border-[#BDBDBD] rounded-bl-md rounded-tl-md text-[#BDBDBD] px-3 py-4 hover:cursor-pointer"
                onClick={()=> setCurrentPage(1)}
                > First </button>

            <div className="flex items-center text-primary">
                {buttons.map((button, index) =>
                    <button 
                        key={index} 
                        className={`border border-[#BDBDBD] px-4 py-4 hover:cursor-pointer ${currentPage===button ? "bg-primary text-white" : ""}`}
                        onClick={()=> setCurrentPage(button)}
                        > {button} </button>
                )}
            </div>

            <button 
                className="text-primary border border-[#BDBDBD] rounded-tr-md rounded-br-md px-3 py-4 hover:cursor-pointer"
                onClick={()=> setCurrentPage((prev)=>Math.min(prev+1, numberOfPages))}
                disabled={currentPage === numberOfPages}
                > Next </button>

        </div>
    )
}