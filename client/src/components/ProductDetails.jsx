import { ChevronRight } from 'lucide-react';

export default function ProductDetails(props) {

    const { selectedProduct } = props

    return (
        <div className="flex flex-col gap-10 py-20">
            <div className="flex gap-1 justify-between font-bold text-secondText text-[12px] xl1440:justify-center xl1440:gap-10">
                <span> Description </span>
                <span> Additional Information </span>
                <span> Reviews
                    <span className="text-success"> ({selectedProduct.sell_count}) </span>
                </span>
            </div>

            <div className="flex flex-col gap-10 xl1440:flex-row xl1440:pt-10">

                <img src="https://images.placeholders.dev/350x400" alt="" className="rounded-md" />

                <div className="flex flex-col gap-5 xl1440:w-120">
                    <h3> the quick fox jumps over </h3>
                    <div className="flex flex-col gap-10">
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-5">
                        <h3> the quick fox jumps over </h3>
                        <ul className="flex flex-col gap-5">
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3> the quick fox jumps over </h3>
                        <ul className="flex flex-col gap-5">
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                            <div className="flex">
                                <ChevronRight></ChevronRight>
                                <li> the quick fox jumps over the lazy dog </li>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}