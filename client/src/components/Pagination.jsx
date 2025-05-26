export default function Pagination(props) {

    const { length, itemsPerPage, setCurrentPage, currentPage } = props;

    const numberOfPages = Math.ceil(length / itemsPerPage);

    let i = 1;
    const buttons = [];
    while (i <= numberOfPages) {
        buttons.push(i);
        i++;
    }

    return (
        <div className="flex items-center justify-between text-[14px] font-bold">

            <button 
                className="bg-[#F3F3F3] border border-[#BDBDBD] rounded-bl-md rounded-tl-md text-[#BDBDBD] px-6 py-4 hover:cursor-pointer"
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
                className="text-primary border border-[#BDBDBD] rounded-tr-md rounded-br-md px-6 py-4 hover:cursor-pointer"
                onClick={()=> setCurrentPage((prev)=>Math.min(prev+1, numberOfPages))}
                disabled={currentPage === numberOfPages}
                > Next </button>

        </div>
    )
}